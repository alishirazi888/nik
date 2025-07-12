import birthdayCake from "@/assets/birthday-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import heroCake from "@/assets/hero-cake.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: heroCake,
      title: "Chocolate Ganache Cake",
      description: "Rich chocolate layers with fresh berries and gold accents"
    },
    {
      id: 2,
      image: birthdayCake,
      title: "Birthday Celebration Cake",
      description: "Vanilla cake with buttercream roses"
    },
    {
      id: 3,
      image: weddingCake,
      title: "Wedding Cake",
      description: "Three-tier elegance with sugar flowers"
    },
    {
      id: 4,
      image: cupcakes,
      title: "Artisanal Cupcakes",
      description: "Various flavors with colorful decorations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-soft-pink/30 to-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Sweet Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every cake tells a story. Browse through our collection of custom creations 
            made with love and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Ready to Create Something Sweet?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's bring your cake vision to life. Contact us for custom orders and quotes.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Your Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;