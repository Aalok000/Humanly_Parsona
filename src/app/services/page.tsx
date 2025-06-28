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
import { CheckCircle } from 'lucide-react';
import { services } from '@/lib/constants';

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
            Our Services
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            Branding that feels like you.
          </p>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <service.icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold mb-2">What's included:</h4>
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
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Don't See What You Need?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl my-4">
                We can create a custom package tailored to your specific goals. Reach out to discuss your needs.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Request a Custom Quote</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
