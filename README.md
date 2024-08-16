# PageMask

This bookmarklet should drop black boxes that are movable and resizable onto the page anchored by the main page for scrolling.

You can use this to mask of stupid things while you're watching streams or reading text.

Frames make the anchoring not work great.

# Installation

Open the raw version of pagemask.js https://raw.githubusercontent.com/hachi/pagemask/master/pagemask.js and copy the whole content into your clipboard.

Go to http://chriszarate.github.io/bookmarkleter/ and paste it in the upper box.

None of the presented options are needed, but specifically:
- **URL encoding** might improve browser compatibility
- **Wrap in an IIFE** or **Anonymize code** may improve compatibility with web pages, no evidence found yet
- **Mangle** or **Minify** options will reduce the length of the code
- **Transpile** is not needed, this code is written for browsers
- **jQuery** is not needed

Drag the "My Bookmarklet" into your bookmarks (bar) or add it manually as the destination to a bookmark.

**See also my browser extension version of this for an alternative**
