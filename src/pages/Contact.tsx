import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    cakeType: "",
    servings: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Request Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours to discuss your custom cake.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      cakeType: "",
      servings: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-soft-pink/30 to-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Create Something Sweet
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to order your custom cake? Fill out the form below and we'll get back to you 
            with a personalized quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Available by appointment</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Contact via form</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Local delivery & pickup</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-foreground">Custom orders welcome</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-warm-cream to-soft-pink/50">
              <div className="flex items-center space-x-2 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-primary">Language Note</h4>
              </div>
              <p className="text-foreground">
                We welcome orders in both English and Farsi (Persian). 
                سفارشات به زبان فارسی نیز پذیرفته می‌شود.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-primary mb-3">What We Offer</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom birthday cakes</li>
                <li>• Wedding cakes</li>
                <li>• Anniversary celebrations</li>
                <li>• Corporate events</li>
                <li>• Cupcakes & desserts</li>
                <li>• Special dietary needs</li>
              </ul>
            </Card>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Order Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Date
                    </label>
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Type of Cake
                    </label>
                    <select
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select cake type</option>
                      <option value="birthday">Birthday Cake</option>
                      <option value="wedding">Wedding Cake</option>
                      <option value="anniversary">Anniversary Cake</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="cupcakes">Cupcakes</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Servings
                    </label>
                    <Input
                      type="number"
                      name="servings"
                      value={formData.servings}
                      onChange={handleChange}
                      min="1"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your vision *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your dream cake - flavors, colors, design, themes, allergies, or any special requests..."
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground py-3 text-lg font-medium"
                >
                  Send Order Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;