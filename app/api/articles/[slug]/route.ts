import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'data/articles', `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return NextResponse.json({
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      content,
    });
  } catch {
    return NextResponse.json(
      { error: 'Article not found' },
      { status: 404 }
    );
  }
}
