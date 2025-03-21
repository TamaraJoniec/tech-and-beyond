---
title: HTML5 Page Structure
slug: html5-page-structure
date: 01/03/2024
excerpt: Learn how to structure HTML5 pages for better organization and SEO.
coverImage: https://picsum.photos/800/400?random=8
author: Tamara Joniec
---

# HTML5 Page Structure: Making Your Site Smarter, One Tag at a Time

Let's face it—getting your page structure right in HTML5 isn't exactly the most exciting part of web development. But trust us, it's essential! A solid structure will make your site more accessible, SEO-friendly, and easier to maintain. Let's dive in and learn how to make your web pages smarter, without losing your sanity.

---

## The Bare Essentials: Basic HTML5 Template

First thing's first: every HTML5 page needs to start with a clean slate. Here's the basic structure you should always use:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A simple, effective HTML5 page" />
    <title>Your Page Title</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Content goes here -->
    <script src="script.js"></script>
  </body>
</html>
```

That's the backbone of every modern web page. It's clean, it's tidy, and it sets you up for success.

---

## Semantic Elements: The Magic Tags You Should Be Using

### Header: Kick Things Off Right

The `<header>` element should be used for your intro stuff: the page title, logo, and possibly some navigation. Keep it at the top!

```html
<header>
  <h1>Welcome to My Site</h1>
  <nav>
    <!-- Navigation links here -->
  </nav>
</header>
```

### Navigation: Keep Users Moving

This one's a no-brainer. The `<nav>` element wraps your site's navigation links. It helps browsers and screen readers understand where to find the site's menu.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### Main Content: Where the Action Happens

Your main content should go inside the `<main>` element. It's the star of the show and tells browsers and users, "Hey, this is the real deal."

```html
<main>
  <article>
    <h2>Article Title</h2>
    <p>Content of your article...</p>
  </article>
</main>
```

### Article: For Self-Contained Content

Each piece of content that stands alone (like blog posts, news articles, or product pages) should go inside an `<article>` tag. It helps keep things organized and clear.

```html
<article>
  <header>
    <h2>Article Title</h2>
    <p>Published on <time datetime="2023-04-15">April 15, 2023</time></p>
  </header>
  <p>Content here...</p>
  <footer>
    <p>Author: John Doe</p>
  </footer>
</article>
```

### Section: For Organized Grouping

Need to break up your content into logical sections? Use the `<section>` tag. It's perfect for grouping related content and adding structure.

```html
<section>
  <h2>Section Heading</h2>
  <p>Content specific to this section...</p>
</section>
```

### Aside: For Extra Stuff

Got some side notes, related articles, or maybe an advertisement? The `<aside>` tag is your go-to for anything tangentially related to the main content.

```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="#">Related Link 1</a></li>
    <li><a href="#">Related Link 2</a></li>
  </ul>
</aside>
```

### Footer: Closing the Deal

Your footer isn't just for legal links. It can include anything from contact info to social media buttons.

```html
<footer>
  <p>&copy; 2024 Your Company. All rights reserved.</p>
  <nav>
    <ul>
      <li><a href="/privacy">Privacy Policy</a></li>
      <li><a href="/terms">Terms of Service</a></li>
    </ul>
  </nav>
</footer>
```

---

## Other Helpful Semantic Elements

### Figure and Figcaption: Show Off Your Images Right

Using images? Use the `<figure>` and `<figcaption>` elements to wrap your images and provide context.

```html
<figure>
  <img src="image.jpg" alt="Description of image" />
  <figcaption>Image caption here</figcaption>
</figure>
```

### Time: Mark Important Dates

For any date or time info, the `<time>` element is your best friend. It gives your data meaning and makes it machine-readable.

```html
<p>The event starts at <time datetime="2024-04-20T19:00">7 PM on April 20</time>.</p>
```

### Mark: Highlight Important Info

Need to highlight something in the text? Use the `<mark>` element. It's like highlighting in a textbook, but for your website.

```html
<p>The most <mark>important</mark> part of this article is...</p>
```

### Details and Summary: Make It Interactive

Want to hide some content until the user asks for it? Use the `<details>` and `<summary>` elements to create collapsible sections.

```html
<details>
  <summary>Click to learn more</summary>
  <p>Here's the hidden content.</p>
</details>
```

---

## Putting It All Together: A Complete Page Example

Now, let's see how these elements come together in a real HTML5 page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Example of HTML5 structure" />
    <title>HTML5 Page Structure</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>My Awesome Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <header>
          <h2>Article Title</h2>
          <p>Published on <time datetime="2024-03-01">March 1, 2024</time></p>
        </header>

        <section>
          <h3>First Section</h3>
          <p>Content of the first section...</p>
          <figure>
            <img src="image1.jpg" alt="Image description" />
            <figcaption>Caption for the image</figcaption>
          </figure>
        </section>

        <section>
          <h3>Second Section</h3>
          <p>Content of the second section...</p>
        </section>

        <footer>
          <p>Author: Jane Smith</p>
        </footer>
      </article>

      <aside>
        <h3>Related Articles</h3>
        <ul>
          <li><a href="#">Related Article 1</a></li>
          <li><a href="#">Related Article 2</a></li>
        </ul>

        <details>
          <summary>Click for More Info</summary>
          <p>Here's some extra info.</p>
        </details>
      </aside>
    </main>

    <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

---

## Why You Should Care About Semantic HTML5

By using semantic HTML5 elements, you're not just making your website look nice—you're making it easier for search engines, screen readers, and even future developers to understand what's going on. Plus, the page is more accessible, more SEO-friendly, and just easier to maintain.

So go ahead, use the right elements in the right place, and make your web pages smarter. Trust us, your users—and your future self—will thank you.
