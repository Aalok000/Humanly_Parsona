import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
            The Humanly Persona Blog
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Tips, insights, and strategies for building a brand that feels like you.
          </p>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                        />
                    </CardHeader>
                    <CardContent className="p-6">
                        <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        <CardDescription>{post.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="flex items-center">Read More <ArrowRight className="ml-1 h-4 w-4" /></span>
                    </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
