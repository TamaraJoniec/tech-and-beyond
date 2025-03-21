import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { fetchDrupalArticles, getCachedDrupalArticles } from "../services/api";
import { getAllPosts, BlogPost as MarkdownBlogPost } from "../utils/markdown";

// Combined blog post type that can come from markdown or API
interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  imageUrl?: string;
  coverImage?: string;
  date: string;
  slug?: string;
  source: string;
  author?: string;
}

const Home: React.FC = () => {
  const [markdownPosts, setMarkdownPosts] = useState<BlogPost[]>([]);
  const [markdownLoading, setMarkdownLoading] = useState<boolean>(true);
  const [markdownError, setMarkdownError] = useState<string | null>(null);
  const [drupalArticles, setDrupalArticles] = useState<BlogPost[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pollCount, setPollCount] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Load markdown posts
  useEffect(() => {
    async function loadMarkdownPosts() {
      setMarkdownLoading(true);
      try {
        // Get all posts from markdown data
        const posts = await getAllPosts();
        const formattedPosts = posts.map((post) => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          imageUrl: post.coverImage,
          date: post.date,
          slug: post.slug,
          source: post.source,
          author: post.author,
        }));

        setMarkdownPosts(formattedPosts);
        setMarkdownError(null);
      } catch (error) {
        console.error("Error loading markdown posts:", error);
        setMarkdownError("Failed to load markdown posts");
      } finally {
        setMarkdownLoading(false);
      }
    }

    loadMarkdownPosts();
  }, []);

  // Function to load all blog posts
  const getAllBlogPosts = (): BlogPost[] => {
    const allPosts = [...markdownPosts];
    // Filter to only include posts by Tamara Joniec
    const tamaraPosts = allPosts.filter((post) => post.author === "Tamara Joniec");

    // If there's a search term, filter the posts
    if (searchTerm.trim() !== "") {
      return tamaraPosts.filter(
        (post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return tamaraPosts;
  };

  // Function to fetch articles from Drupal API
  const loadDrupalArticles = async () => {
    setIsLoading(true);
    try {
      const result = await fetchDrupalArticles();

      if (result.error) {
        setFetchError(result.error);
      } else {
        setFetchError(null);
        // Convert API blog posts to our unified format
        const apiPosts: BlogPost[] = result.articles.map((post) => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          imageUrl: post.imageUrl,
          date: post.date,
          source: post.source || "drupal",
          author: post.author || "Unknown",
        }));
        setDrupalArticles(apiPosts);
        setLastUpdated(result.timestamp.toLocaleTimeString());
        // Increment poll count to track how many times we've successfully fetched
        setPollCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Unexpected error during article loading:", error);
      setFetchError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // Try to load cached articles first
    const cachedData = getCachedDrupalArticles();

    if (cachedData) {
      // Convert cached articles to our unified format
      const cachedPosts: BlogPost[] = cachedData.articles.map((post) => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        imageUrl: post.imageUrl,
        date: post.date,
        source: post.source || "drupal",
        author: post.author,
      }));
      setDrupalArticles(cachedPosts);
      setLastUpdated(cachedData.timestamp.toLocaleTimeString());
    }

    // Fetch fresh articles immediately
    loadDrupalArticles();

    // Set up polling every minute
    const intervalId = setInterval(() => {
      console.log("Polling for new articles...");
      loadDrupalArticles();
    }, 60000); // 60000 ms = 1 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Get the filtered blog posts
  const filteredPosts = getAllBlogPosts();

  return (
    <div className="home-container">
      <h1>Latest Blog Posts</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
          aria-label="Search articles"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm("")} aria-label="Clear search">
            ×
          </button>
        )}
      </div>
      <div className="blog-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.imageUrl || blog.coverImage} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h2>
                  {blog.slug ? (
                    <Link to={`/blog/${blog.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                      {blog.title}
                    </Link>
                  ) : (
                    blog.title
                  )}
                </h2>
                <p>{blog.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  {blog.author && <span className="blog-author">By: {blog.author}</span>}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-posts-message">
            {searchTerm ? (
              <>
                <h2>No matching articles found</h2>
                <p>Try different search terms or clear the search to see all articles.</p>
              </>
            ) : (
              <>
                <h2>No articles found</h2>
                <p>There are currently no blog posts to display. Please check back later!</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
