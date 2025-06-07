import ContactForm from '@/components/forms/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2">We'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-secondary/30 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>123 Himalaya Street, Mountain View, CA 94043</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>info@himalayansweets.com</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Opening Hours</h3>
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 9:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 shadow-lg p-6 md:p-8">
             <CardHeader className="p-0 mb-6">
                <CardTitle className="font-headline text-2xl text-primary text-center md:text-left">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                 <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
