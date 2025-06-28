import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Target, Vision } from 'lucide-react';
import { Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
            About Humanly Persona
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Branding that feels like you.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-4">Our Founder's Story</h2>
            <p className="text-muted-foreground mb-4">
              Jane Doe, founder of Humanly Persona, started her career feeling invisible in the crowded digital world. After years of trial and error, she cracked the code to building a powerful personal brand that opened doors to incredible opportunities.
            </p>
            <p className="text-muted-foreground mb-4">
              She realized that many talented individuals were struggling with the same problem. They had the skills and passion but lacked the knowledge to translate their value online. Humanly Persona was born from a desire to share this knowledge and provide a clear, supportive path for others to follow.
            </p>
            <p className="text-muted-foreground">
              "I believe everyone deserves to be seen and heard for their unique talents. My goal is to give you the tools and confidence to build a brand that feels like you and achieves your goals," says Jane.
            </p>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x600.png"
              alt="Founder of Humanly Persona"
              width={600}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide personalized, expert guidance that helps individuals confidently navigate the digital landscape and build a personal brand that reflects their true potential and aspirations.
                </p>
              </div>
            </div>
          </div>
           <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Eye className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
                    <p className="text-muted-foreground">
                    A world where every individual, regardless of their background or industry, can leverage the power of the internet to create opportunities, build communities, and make a meaningful impact.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Build Your Brand?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl my-4">
            Let's start this journey together. Your powerful online presence is just a conversation away.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book Your Free Consultation</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
