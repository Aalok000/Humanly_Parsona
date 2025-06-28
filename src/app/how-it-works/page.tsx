import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { howItWorksSteps } from '@/lib/constants';

export default function HowItWorksPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
            Our Simple Path to Your Authentic Brand
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We follow a straightforward, collaborative process to ensure we understand your vision and deliver results.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            {/* Dashed line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            
            <div className="relative grid gap-12 lg:grid-cols-4">
              {howItWorksSteps.map((step, index) => (
                <Card key={step.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground mb-6 border-4 border-background">
                      <span className="text-4xl font-bold">{index + 1}</span>
                    </div>
                    <CardTitle className="text-2xl font-bold font-headline">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Build Your Brand?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl my-4">
              Your journey towards a powerful online brand begins with a simple, free conversation.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
