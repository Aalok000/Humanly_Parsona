import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/constants';

export default function TestimonialsPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
            Success Stories
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Hear from freelancers, professionals, and creators who have transformed their online presence with our help.
          </p>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 flex-grow">
                  <p className="text-muted-foreground mb-4 text-lg">"{testimonial.quote}"</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Build Your Brand?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl my-4">
                Your transformation is just one conversation away. Let's explore how we can help you achieve your goals.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
