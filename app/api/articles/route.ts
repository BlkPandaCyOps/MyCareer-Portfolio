import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const articlesDirectory = path.join(process.cwd(), 'data/articles');
  
  try {
    const filenames = fs.readdirSync(articlesDirectory);
    
    const articles = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          slug: filename.replace('.md', ''),
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: data.tags || [],
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json([]);
  }
}
