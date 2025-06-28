import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ContactForm';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
            Get in Touch
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            We're excited to hear from you. Fill out the form below for a free consultation, or reach out via email or WhatsApp.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                Find us here. We're ready to help you shine online.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:hello@humanlypersona.com" className="text-muted-foreground hover:text-primary">
                      hello@humanlypersona.com
                    </a>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                      Chat with us
                    </a>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 9876543210 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Request a Free Consultation</h2>
            <p className="text-muted-foreground mb-6">
              Tell us a bit about yourself and your goals, and we'll get back to you to schedule your free brand potential scan.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
