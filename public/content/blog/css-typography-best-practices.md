---
title: CSS Typography Best Practices
slug: css-typography-best-practices
date: 04/03/2024
excerpt: Master CSS typography with these essential best practices.
coverImage: https://picsum.photos/800/400?random=5
author: Tamara Joniec
---

# CSS Typography Best Practices

Typography is a big deal in web design. Get it right, and your site looks sleek and professional. Get it wrong, and people will click away faster than I do when I see a 'Low Battery' warning. Here's how to nail it with CSS, from someone who's been wrangling fonts longer than she cares to admit.

## Font Selection

### Use Web-Safe Fonts or Web Fonts

```css
/* Web-safe font stack */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* Google Fonts because we like variety */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
```

### Limit Font Families

- No need to go mad – 2-3 font families max.
- Usually, one for headings, one for body text, and maybe one for that 'quirky' section you insist on keeping.

## Font Size and Responsiveness

### Use Relative Units Like a Sensible Person

```css
html {
  font-size: 16px; /* Base font size */
}

h1 {
  font-size: 2.5rem; /* 40px at base size */
}

p {
  font-size: 1rem; /* 16px at base size */
}

/* Because nobody likes zooming in on tiny text */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}
```

## Line Height

### Give Your Text Some Breathing Room

```css
body {
  line-height: 1.5; /* Comfy for reading */
}

h1,
h2,
h3 {
  line-height: 1.2; /* A little tighter for headings, like your jeans after Christmas */
}
```

## Text Spacing

### Don't Cram Everything Together

```css
p {
  margin-bottom: 1.5em; /* Space between paragraphs because eyes need a break */
}

h2 {
  margin-top: 2em;
  margin-bottom: 0.5em;
}

.content {
  max-width: 70ch; /* Prevents lines from stretching to eternity */
}
```

## Text Color and Contrast

### Keep It Readable, Not an Eye-Straining Nightmare

```css
body {
  color: #333; /* Dark grey is the way */
  background-color: #fff;
}

/* If you're fancy and support dark mode */
@media (prefers-color-scheme: dark) {
  body {
    color: #f0f0f0;
    background-color: #121212;
  }
}
```

## Font Weight and Style

### Use Weight Wisely – Not Everything Needs to Be Bold

```css
h1,
h2,
h3 {
  font-weight: 700; /* Bold where it matters */
}

p {
  font-weight: 400; /* Normal weight for normal text */
}

.highlight {
  font-weight: 600; /* Slightly heavier for a bit of pop */
}
```

## Text Alignment

### Left Alignment – Because We Read That Way

```css
body {
  text-align: left;
}

.center-text {
  text-align: center; /* For special occasions, like birthdays and hero sections */
}
```

## Letter Spacing

### Don't Squash or Stretch Your Letters Too Much

```css
h1,
h2 {
  letter-spacing: -0.02em; /* Just a smidge tighter for big text */
}

.all-caps {
  text-transform: uppercase;
  letter-spacing: 0.05em; /* Because uppercase text needs breathing room */
}
```

## Text Decoration

### Make Links Look Clickable but Not Obnoxious

```css
a {
  text-decoration: none;
  border-bottom: 1px solid currentColor; /* Looks good, trust me */
}

a:hover {
  border-bottom-width: 2px; /* Thicker underline on hover = nice feedback */
}
```

## Accessibility

### Don't Be That Person Who Ignores Accessibility

```css
p {
  font-size: 1rem;
  margin-bottom: 1.5em;
  line-height: 1.5;
}
```

### Respect User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## Mobile Typography

### Make Sure It Looks Good on Tiny Screens

```css
h1 {
  font-size: 2.5rem;
}

@media (max-width: 480px) {
  h1 {
    font-size: 2rem; /* Because nobody wants to scroll just to read a heading */
  }
}
```

## Conclusion

Typography isn't just about picking a nice font and calling it a day. Get the sizing, spacing, and contrast right, and your users will thank you (or at least not complain). Test it across different screens, and remember: Comic Sans is never an option.

Now, off you go—make the internet a more readable place!
