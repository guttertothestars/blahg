#!/usr/bin/env node
// Scaffold a new post with front matter filled in.
//
// Usage:
//   npm run new -- "OpenBSD in virt-manager"                     # one-off -> content/blog/
//   npm run new -- "Bandit Level 8 → 9" --series over-the-wire  # -> content/blog/over-the-wire/
//   npm run new -- "Some post" --folder                          # own folder, for posts with images
//
// New posts start as draft: true. They show up under `npm start` but are
// skipped by `npm run build`, so you can't publish a half-written post by accident.

import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const title = args.find(a => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--series");
const seriesIdx = args.indexOf("--series");
const series = seriesIdx >= 0 ? args[seriesIdx + 1] : null;
const ownFolder = args.includes("--folder");

if (!title) {
	console.error('Usage: npm run new -- "Post title" [--series <folder>] [--folder]');
	process.exit(1);
}

const slug = title
	.toLowerCase()
	.normalize("NFKD")
	.replace(/[^a-z0-9]+/g, "-")
	.replace(/^-+|-+$/g, "");

let dir = path.join("content", "blog");
if (series) {
	dir = path.join(dir, series);
	if (!fs.existsSync(dir)) {
		console.error(`Series folder ${dir} doesn't exist. Existing series:`);
		for (const d of fs.readdirSync(path.join("content", "blog"), { withFileTypes: true })) {
			if (d.isDirectory() && fs.existsSync(path.join("content", "blog", d.name, `${d.name}.11tydata.js`))) {
				console.error(`  ${d.name}`);
			}
		}
		process.exit(1);
	}
}
if (ownFolder) dir = path.join(dir, slug);

const file = path.join(dir, `${slug}.md`);
if (fs.existsSync(file)) {
	console.error(`${file} already exists, not overwriting.`);
	process.exit(1);
}

const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD in local time
const body = `---
title: "${title.replace(/"/g, '\\"')}"
description: ""
date: ${today}
tags: []
draft: true
---

`;

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(file, body);
console.log(`Created ${file}`);
console.log(`Preview: npm start  ->  http://localhost:8080/blog/${slug}/`);
