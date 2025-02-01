'use client';

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string | StaticImageData;
  author: string;
  category: string;
  slug: string;
}

const recentPosts: BlogPost[] = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/mainlaptop.png",
    author: "Admin",
    category: "Design",
    slug: "millennial-design",
  },
  {
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/blog1.png",
    author: "Admin",
    category: "Interior",
    slug: "exploring-decorating",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/blog2.png",
    author: "Admin",
    category: "Handmade",
    slug: "handmade-pieces",
  },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

export default function BlogPostPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <Image src={"/shopheader.png"} alt="Shop Header" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="mb-4">
            <svg
              className="h-8 w-8 text-yellow-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3L2 12h3v8h14v-8h3L12 3z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-black">Blog</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="underline underline-offset-2 hover:underline">
              Home
            </Link>
            <span>›</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 lg:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <main className="lg:col-span-8">
            <div className="space-y-8">
              {recentPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.category}</span>
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold tracking-tight">{post.title}</h2>
                    <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                    <Link
                      href={`/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read more
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <section className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search posts..."
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              </div>

              <div>
                <h2 className="mb-4 text-xl font-semibold">Categories</h2>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between rounded-lg px-4 py-2 hover:bg-muted"
                    >
                      <span className="text-muted-foreground">{category.name}</span>
                      <span className="text-sm text-muted-foreground">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-xl font-semibold">Recent Posts</h2>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={`/${post.slug}`}
                      className="group flex gap-4"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium leading-snug group-hover:underline">
                          {post.title}
                        </h3>
                        <time className="text-sm text-muted-foreground">{post.date}</time>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
