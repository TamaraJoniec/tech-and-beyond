---
title: DOM Manipulation with JavaScript
slug: dom-manipulation-javascript
date: 03/03/2024
excerpt: Learn how to manipulate the DOM effectively with JavaScript.
coverImage: https://picsum.photos/800/400?random=6
author: Tamara Joniec
---

# DOM Manipulation with JavaScript: A Developer's Guide

Alright, buckle up, because today we're going to wrangle the DOM like a pro. DOM manipulation is a key skill for anyone who wants to make a website feel like it's actually alive and not some static page from 2001. So, let's dive in – no frills, no jargon. Just straight-up practical tips from someone who's been typing out JavaScript for way too long.

---

## Selecting Elements

Before you can change anything, you've gotta _find_ it. Thankfully, JavaScript makes this easy. Here's how you do it:

### By ID

```javascript
const element = document.getElementById("myElement");
```

This one's pretty obvious. You've got an ID, you select it. Simple.

### By Class

```javascript
const elements = document.getElementsByClassName("myClass");
```

Grab all elements with the same class. It's like picking up all your mates in the pub who are wearing the same T-shirt.

### By Tag Name

```javascript
const paragraphs = document.getElementsByTagName("p");
```

All the `<p>` tags in the place. Because why not grab a whole bunch at once?

### Using CSS Selectors

```javascript
const element = document.querySelector(".myClass"); // Selects the first matching element
const elements = document.querySelectorAll("div.note, div.alert"); // Selects all matching elements
```

This is the elegant solution. Think of it as your _go-to_ tool when you're feeling fancy. Like using a sledgehammer to crack a nut – but in a stylish way.

---

## Creating and Adding Elements

### Creating New Elements

```javascript
const div = document.createElement("div");
div.textContent = "Hello World";
```

You can literally _create_ new elements. It's like having a magic wand but with more brackets.

### Appending Elements to the DOM

```javascript
parentElement.appendChild(newElement); // Adds element at the end
parentElement.insertBefore(newElement, referenceElement); // Inserts before a specific element
```

So you've made something cool, now you need to stick it in the right place. This is how you do it.

### Modern Methods

```javascript
parentElement.append(element1, element2, "text node");
parentElement.prepend(element);
referenceElement.before(element);
referenceElement.after(element);
```

And if you're feeling particularly hip and with the times, use these snazzy new methods. _Prepend_ sounds like something from a sci-fi movie, doesn't it?

---

## Modifying Elements

### Changing Content

```javascript
element.innerHTML = "<span>New content</span>"; // Caution: Potential security risk
element.textContent = "New content"; // Safer option
element.innerText = "New content";
```

You can change the content like you change your socks. Just _please_ don't overdo it with `innerHTML` unless you want to invite some security risks to your party.

### Modifying Attributes

```javascript
const value = element.getAttribute("src");
element.setAttribute("class", "new-class");
element.removeAttribute("disabled");
const hasAttribute = element.hasAttribute("id");
```

Need to change the `src` or `class`? Here's how you do it, no drama.

### Working with Classes

```javascript
element.classList.add("active");
element.classList.remove("disabled");
element.classList.toggle("expanded");
element.classList.replace("old-class", "new-class");
```

Classes are the bread and butter of styling. Add, remove, toggle, replace – it's like a fitness routine for your elements.

### Modifying Styles

```javascript
element.style.color = "red";
const computedStyle = window.getComputedStyle(element);
const color = computedStyle.getPropertyValue("color");
```

Want to make something pop? Change its style. It's like giving it a new outfit. You wouldn't wear the same outfit every day, right?

---

## Removing Elements

```javascript
element.parentNode.removeChild(element); // Traditional method
element.remove(); // Modern method
```

When you're done with something, just kick it out. Don't even feel bad about it. Bye-bye, element!

---

## Event Handling

### Adding Event Listeners

```javascript
element.addEventListener("click", function (event) {
  console.log("Element clicked!");
  event.preventDefault();
});
```

Now we're talking. Events are what make your page interactive. Click a button, do something. It's as simple as that.

### Removing Event Listeners

```javascript
function handleClick(event) {
  console.log("Clicked!");
}
element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick);
```

Had enough of that event listener? Just yank it off like you're deleting an embarrassing social media post.

---

## Traversing the DOM

### Parent, Children, and Siblings

```javascript
const parent = element.parentNode;
const children = element.childNodes;
const firstChild = element.firstChild;
const lastChild = element.lastChild;
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;
```

If you're doing family tree research for your elements, this is how you figure out who's who. It's like ancestry.com for the DOM.

---

## Performance Considerations

### Using Document Fragments

```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
document.getElementById("myList").appendChild(fragment);
```

Lots of elements to add? Use a `DocumentFragment` – it's faster, less taxing, and will make your page feel like it's running on a rocket instead of a tricycle.

### Cloning Elements

```javascript
const shallowClone = element.cloneNode(false);
const deepClone = element.cloneNode(true);
```

Need a copy of your element? Clone it. Shallow or deep, you're the boss here.

---

## Conclusion

And there you have it, folks. DOM manipulation in a nutshell. Once you get the hang of selecting, creating, modifying, and removing elements, you'll be able to make any web page feel snappy, interactive, and just a little bit magical.

Now, get out there and make the web your playground. (And maybe don't forget to grab a cuppa while you're at it.)
