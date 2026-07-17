# Articles

This repository is a minimal data store containing MDX articles for the tech blog.

## Directory Structure

```text
articles/
├── posts/
│   └── [uuid]/
│       ├── ja/index.mdx
│       └── en/index.mdx
└── scripts/
    └── create-post.mjs
```

## How to Write a New Post
⚠️ Important: You must run this command from the root directory of this repository.

Run the following script to generate a new post skeleton (both ja and en folders will be created automatically with a shared 8-digit UUID):
```bash
node scripts/create-post.mjs
```
```
```
```
