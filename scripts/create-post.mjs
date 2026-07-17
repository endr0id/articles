import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ディレクトリ名の共通UUIDを生成
const fullUuid = crypto.randomUUID();
const id = fullUuid.split('-')[0];

const languages = ['ja', 'en'];

// Frontmatter template
const createTemplate = (lang) => `---
title: ""
description: ""
date: "${new Date().toISOString().split('T')[0]}"
tags: []
author: ""
published: false
heroImage: ""
---

# New Post (${lang.toUpperCase()})

Write your content here.
`;

console.log(`\n\x1b[35mGenerating folders for ID: ${id}...\x1b[0m`);

// ja / en のフォルダとファイル作成
languages.forEach((lang) => {
  const dirPath = path.join(__dirname, "..", "posts", id, lang);
  fs.mkdirSync(dirPath, { recursive: true });

  const template = createTemplate(lang);
  fs.writeFileSync(path.join(dirPath, 'index.mdx'), template);

  console.log(`\x1b[32m✔ Created:\x1b[0m ${id}/${lang}/index.mdx`);
});

console.log(`\n\x1b[32mSuccess! Both language skeletons are ready.\x1b[0m\n`);
