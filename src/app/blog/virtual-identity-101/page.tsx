import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/constants';

export default function BlogPostPage() {
  const post = blogPosts.find(p => p.slug === 'virtual-identity-101');

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-headline">{post.title}</h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://placehold.co/100x100.png" alt={post.author} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{post.author}</span>
            </div>
            <span>&bull;</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </header>
        
        <Image 
          src={post.image}
          alt={post.title}
          width={1200}
          height={675}
          className="rounded-lg mb-8 w-full object-cover aspect-video"
        />

        <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
          <p className="lead text-xl text-muted-foreground">{post.description}</p>
          <p>In today's hyper-connected world, your online presence isn't just a part of your life; in many ways, it is your life's public-facing chapter. It’s your resume, your portfolio, your first impression, and your ongoing reputation all rolled into one. Whether you're a freelancer looking for clients, a professional seeking a new role, or a creator building a community, a well-crafted virtual identity is no longer a nice-to-have—it's an absolute necessity.</p>
          
          <h2>What is a Virtual Identity?</h2>
          <p>Your virtual identity is the sum of all your online activities. It includes your social media profiles, the content you share, the comments you make, the websites you're tagged in, and even the data you unknowingly leave behind. It's the digital footprint that pieces together a story about who you are, what you value, and what you're an expert in.</p>
          
          <h2>Step 1: The Audit - Know Thyself (Online)</h2>
          <p>Before you can build, you must understand what already exists. Start by Googling yourself. What comes up? Look at the images, news, and social media results. Is this the story you want to tell? This audit is your baseline. It shows you where you're starting from and what you need to clean up, curate, or create.</p>
          
          <ul>
            <li><strong>Consistency is Key:</strong> Ensure your profile picture and bio are consistent across all major platforms (LinkedIn, Twitter, personal website). This builds recognition.</li>
            <li><strong>Privacy Check-up:</strong> Review the privacy settings on your accounts. What's public? What's private? Make intentional choices.</li>
            <li><strong>Clean Up Crew:</strong> Remove or untag yourself from any old, unprofessional photos or posts that don't align with your current brand.</li>
          </ul>

          <h2>Step 2: Define Your Brand - What's Your Story?</h2>
          <p>A strong personal brand is authentic and focused. Ask yourself some fundamental questions:</p>
          
          <blockquote>
            <p>What are the 3-5 keywords you want to be known for? What is your unique value proposition? Who is your target audience?</p>
          </blockquote>
          
          <p>Your answers will become the pillars of your content strategy. Every piece of content you create should align with these core ideas. This focus makes your brand memorable and attracts the right kind of attention.</p>
          
          <h2>Step 3: Create and Curate - The Content Game</h2>
          <p>Content is the currency of the digital world. You need to both create original content and share (curate) valuable content from others. This positions you as not just an expert, but also a helpful hub of information in your field.</p>
          
          <p>Don't just broadcast; engage. Respond to comments, participate in discussions, and ask questions. Community and conversation are what turn a passive audience into loyal followers. Your virtual identity isn't just what you say—it's how you interact.</p>
          
          <p>Crafting your virtual identity is an ongoing process of refinement. It's a marathon, not a sprint. By being intentional, consistent, and authentic, you can build a powerful online presence that opens doors you never knew existed.</p>
        </div>
        
        <div className="mt-12 text-center">
            <Button asChild>
                <Link href="/blog">Back to Blog</Link>
            </Button>
        </div>
      </article>
    </div>
  );
}
