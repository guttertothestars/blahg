# GutterToTheStars: operating instructions

Note to future me. Eleventy blog, hosted at https://guttertothestars.neocities.org.
The repo is `github.com/guttertothestars/blahg`. Run every command from `~/projects/blahg`.

## Write a post

```bash
cd ~/projects/blahg
git pull                                                      # in case I edited from somewhere else
npm run new -- "Post title"                                   # one-off, shows up under Notes
npm run new -- "Bandit Level 9 → 10" --series over-the-wire   # series post
npm run new -- "Post with pictures" --folder                  # gets its own folder; put images next to the .md
npm start                                                     # preview at http://localhost:8080 (drafts show here)
```

The command prints the path of the new file. Open it, fill in `description:` and `tags:`, and write.
New posts start as `draft: true`. Drafts show in `npm start` but never get published.

- **Tags:** lowercase, e.g. `tags: [linux, networking]`. Don't add `over-the-wire`, the series folder adds it.
- **Images:** use the `--folder` version, drop the image beside the `.md`, and reference it with
  `<img src="./thing.png" alt="describe it">`. Always write alt text.
- **Code:** put it in fenced blocks with a language, e.g. ```` ```bash ````.

## Publish

1. Delete the `draft: true` line.
2. Then:

```bash
npm run deploy:check      # dry run: lists what would upload or delete, changes nothing
npm run deploy            # does it for real
git add -A && git commit -m "Post: <title>" && git push
```

3. Hard-refresh the site with Ctrl+Shift+R.

## Where things live

| Thing | File |
|---|---|
| Site name, description, footer contact info | `_data/metadata.js` |
| List of series (name, blurb) | `_data/seriesList.js` |
| Posts | `content/blog/` (one-offs) and `content/blog/<series>/` |
| Colors, fonts, the look | `css/index.css` (colors are variables at the top) |
| Page frame, header, footer | `_includes/layouts/base.njk` |
| Post page layout | `_includes/layouts/post.njk` |
| About page | `content/about.md` |

## Start a new series

1. `mkdir content/blog/<key>`. The key is lowercase-with-dashes, e.g. `homelab`.
2. Copy `content/blog/over-the-wire/over-the-wire.11tydata.js` to `content/blog/<key>/<key>.11tydata.js`,
   then change `tags`, `series` (display name) and `seriesKey` to match the new series.
3. Add an entry to `_data/seriesList.js` with the same `key`.
4. `npm run new -- "First post" --series <key>`

## When it breaks

- **`DuplicatePermalinkOutputError`:** two tags differ only in case (`Linux` vs `linux`).
  Find them with `grep -rn '^tags:' content/blog`.
- **"Identifier ... has already been declared":** a line got pasted twice in `eleventy.config.js`.
- **`neocities: command not found`:** run `gem install --user-install neocities` and check that
  Ruby's gem bin folder is on PATH (see `~/.bashrc`).
- **Neocities asks for an API key:** get one at neocities.org/settings. It's saved in `~/.config/neocities/config.json`.
- **`sitemap.xml` refused:** expected. Neocities makes its own sitemap, so don't add one back.
- **Deploy wants to delete something I care about:** stop, don't run `npm run deploy`.
  `--prune` deletes anything on Neocities that isn't in the fresh build.
- **Weird old pages hanging around locally:** `rm -rf _site` and run it again. `npm run build` already does this.
- **Upstream template updates:** the original 11ty starter is the `upstream` remote. You don't need it to blog. Ignore it.
