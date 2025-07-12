import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MapPin, Clock, Phone } from "lucide-react";
import heroCake from "@/assets/hero-cake.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";

const Index = () => {
  const featuredCakes = [
    {
      image: birthdayCake,
      title: "Birthday Cakes",
      description: "Celebrate life's special moments with custom birthday cakes"
    },
    {
      image: weddingCake,
      title: "Wedding Cakes",
      description: "Elegant designs for your perfect day"
    },
    {
      image: cupcakes,
      title: "Cupcakes & More",
      description: "Sweet treats for any occasion"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-pink/40 via-background to-warm-cream/60">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-warm-cream/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                Nik's Sweet
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Creating custom cakes and sweet memories, one celebration at a time. 
                From birthdays to weddings, we bring your sweetest dreams to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-3 text-lg font-medium"
                >
                  <a href="/contact">Order Your Cake</a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium"
                >
                  <a href="/gallery">View Gallery</a>
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Local Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Custom Orders</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={heroCake}
                  alt="Beautiful custom chocolate cake with berries"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-accent fill-current" />
                  <span className="text-sm font-medium text-foreground">Made with Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-20 bg-gradient-to-br from-background to-soft-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Specialties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every cake is crafted with the finest ingredients and attention to detail. 
              Let us create something special for your next celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCakes.map((cake, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {cake.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {cake.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section className="py-20 bg-gradient-to-br from-warm-cream/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Sweet Stories, One Cake at a Time
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Nik's Sweet, we believe every celebration deserves a perfect cake. 
                Our passion for baking and attention to detail ensures that each creation 
                is not just delicious, but a work of art that makes your special moments unforgettable.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We welcome orders in both English and Farsi, serving our diverse community 
                with the same love and dedication in every cake we create.
              </p>
              
              <div className="bg-card p-6 rounded-2xl border border-border">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready to Order?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us for a personalized quote. We'll work with you to create 
                  the perfect cake for your special occasion.
                </p>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground"
                >
                  <a href="/contact">Get Your Quote</a>
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Local Service</h4>
                    <p className="text-muted-foreground">Delivery and pickup available</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Custom Designs</h4>
                    <p className="text-muted-foreground">Tailored to your vision and taste</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Personal Service</h4>
                    <p className="text-muted-foreground">English & Farsi support</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
