import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { Post } from '@/models';

const BLOG_FOLDER = path.join(process.cwd(), 'blog');

export async function readMarkdownToJsObject(): Promise<Post[]> {
  //read all markdown files
  const fileNameList = fs.readdirSync(BLOG_FOLDER);
  const postList: Post[] = [];
  for (const fname of fileNameList) {
    const f = path.join(BLOG_FOLDER, fname);
    const fcontent = fs.readFileSync(f, 'utf8');

    const { data, excerpt, content } = matter(fcontent, { excerpt_separator: '<!-- truncate-->' });
    postList.push({
      id: fname,
      slug: data.slug,
      title: data.title,
      thumbnailUrl: data.image || null,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: new Date().getTime().toString(),
      description: excerpt || '',
      mdContent: content,
    });
  }
  return postList;
}
