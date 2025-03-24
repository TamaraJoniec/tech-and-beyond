import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { getAllPosts } from "../utils/markdown";

// Blog post interface for consistency
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
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Load blog posts on component mount
  useEffect(() => {
    async function loadPosts() {
      try {
        const allPosts = await getAllPosts();

        // Format posts for display
        const formattedPosts = allPosts.map((post) => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          imageUrl: post.coverImage,
          date: post.date,
          slug: post.slug,
          source: post.source,
          author: post.author,
        }));

        // Only keep posts by Tamara Joniec
        const tamaraPosts = formattedPosts.filter((post) => post.author === "Tamara Joniec");
        setPosts(tamaraPosts);
        setError(null);
      } catch (err) {
        console.error("Error loading posts:", err);
        setError("Failed to load blog posts");
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  // Filter posts based on search term
  const getFilteredPosts = (): BlogPost[] => {
    if (searchTerm.trim() === "") return posts;

    return posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="home-container">
      <h1>Latest Blog Posts</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Search articles"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm("")} aria-label="Clear search">
            ×
          </button>
        )}
      </div>

      {isLoading && <div className="status-message">Loading posts...</div>}
      {error && <div className="error-message">Error: {error}</div>}

      <div className="blog-grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.imageUrl || blog.coverImage} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h2>{blog.slug ? <Link to={`/blog/${blog.slug}`}>{blog.title}</Link> : blog.title}</h2>
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
