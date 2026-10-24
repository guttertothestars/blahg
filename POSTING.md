# Posting checklist

Step by step, from idea to live. Every command runs from the top of the repo.

## 1. Start

```bash
cd ~/projects/blahg
git pull
```

## 2. Make the post

Pick one. Note the `--` after `new`, with a space on both sides. It's not `--new`.

```bash
npm run new -- "My Post Title"                               # plain post (Notes)
npm run new -- "My Post Title" --folder                      # post with images
npm run new -- "Bandit Level 9 → 10" --series over-the-wire  # series post
```

It prints the file path. Open it:

```bash
code content/blog/my-post-title/my-post-title.md
```

## 3. Fill in the top block

```yaml
---
title: "My Post Title"
description: "One sentence about the post."
date: 2026-10-24
tags: [linux, openbsd]      # lowercase
draft: true                 # leave this until it's done
---
```

Write the post below the closing `---`. Don't add a `# Title` line, the title comes from up top.

## 4. Preview while writing

```bash
npm start
```

Open the URL it printed, http://localhost:8080/blog/my-post-title/
Every save refreshes the page. Ctrl+C stops it.

## 5. Markdown cheat sheet

| Want | Type |
|---|---|
| New paragraph | blank line between |
| Line break | end the line with `\` |
| Heading | `## Heading` |
| Link | `[text](https://example.com)` |
| Link to my own post | `[text](/blog/post-name/)` |
| Image (in the post's folder) | `![describe it](./picture.png)` |
| Inline code | `` `command` `` |
| Code block | ```` ```bash ```` then the code, then ```` ``` ```` |
| Embed (GIF, video) | wrap it in `<div class="embed">` ... `</div>`, no blank lines inside |

Code block inside a numbered list: indent the fence lines and the code 3 spaces,
same as the list text.

Images: copy them into the post's folder, lowercase names with dashes, no spaces.

```bash
cp ~/Pictures/Screenshot.png content/blog/my-post-title/vm-screen.png
```

## 6. Publish

1. Delete the `draft: true` line (or change it to `draft: false`).
2. Dry run, then the real thing:

```bash
npm run deploy:check     # read the list; stop if it wants to delete something I care about
npm run deploy
```

3. Check the live site with a hard refresh (Ctrl+Shift+R):
   https://guttertothestars.neocities.org

## 7. Save to GitHub

```bash
git add -A
git status               # look it over
git commit -m "Post: My Post Title"
git push
```

Done. Anything weirder than this, see README.md ("When it breaks").
