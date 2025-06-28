import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MessageSquare, PieChart, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { services, testimonials, howItWorksSteps } from '@/lib/constants';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
              Branding That Feels Like You
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-8">
              Humanly Persona helps you craft a compelling online presence. We offer expert 1-on-1 consultancy to build your personal brand and make your virtual personality shine.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </section>

        {/* Services Preview Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Offer</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tailored packages to boost your online identity, from profile makeovers to complete content strategies.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              {services.slice(0,3).map((service) => (
                <Card key={service.title} className="h-full flex flex-col">
                  <CardHeader>
                    <service.icon className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                       <Link href="/services">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild>
                  <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
               <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Process</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Your Journey to a Stronger Brand</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple, transparent process to elevate your online presence effectively.
              </p>
            </div>
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
               {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                        <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real stories from individuals who transformed their online presence with us.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => (
                <Card key={testimonial.name}>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
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
            <div className="text-center mt-12">
                <Button asChild>
                  <Link href="/testimonials">Read More Success Stories <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Build Your Brand?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl my-4">
              Your journey to a powerful personal brand starts with a single step. Let's explore your potential together.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get Your Free Analysis</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
