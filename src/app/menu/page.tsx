import MenuCategory from '@/components/menu/menu-category';
import type { MenuCategoryData } from '@/types';
import { CakeSlice, Cookie, Coffee } from 'lucide-react';

const menuData: MenuCategoryData[] = [
  {
    title: "Our Famous Sweets",
    icon: CakeSlice,
    items: [
      { name: "Gulab Jamun", description: "Soft, spongy milk-solid balls soaked in rose-flavored sugar syrup. A classic Indian dessert.", price: "$5.99", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "indian sweets" },
      { name: "Jalebi", description: "Crispy, sweet spirals made from fermented batter, deep-fried and soaked in saffron syrup.", price: "$6.99", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "indian dessert" },
      { name: "Rasmalai", description: "Creamy and rich, these are cottage cheese dumplings soaked in sweetened, thickened milk flavored with cardamom and saffron.", price: "$7.49", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "milk dessert" },
      { name: "Barfi", description: "A dense milk-based sweet, often flavored with nuts and spices. Comes in various flavors.", price: "$4.99", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "fudge sweets" },
    ],
  },
  {
    title: "Freshly Baked Goods",
    icon: Cookie,
    items: [
      { name: "Himalayan Herb Bread", description: "Artisanal bread baked with a unique blend of Himalayan herbs and spices. Perfect with soups or as a side.", price: "$8.99", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "artisan bread" },
      { name: "Spiced Apple Pie", description: "A comforting classic with a Himalayan twist, featuring locally sourced apples and warm spices.", price: "$6.49/slice", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "apple pie" },
      { name: "Butter Croissants", description: "Flaky, buttery croissants, baked fresh daily. A delightful start to your day.", price: "$4.50", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "bakery pastry" },
      { name: "Chocolate Walnut Brownies", description: "Rich, fudgy brownies packed with walnuts and a hint of Himalayan salt.", price: "$5.00", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "chocolate brownie" },
    ],
  },
  {
    title: "Beverages",
    icon: Coffee,
    items: [
      { name: "Masala Chai", description: "Traditional Indian spiced tea, brewed with aromatic spices and milk. A warm and invigorating drink.", price: "$3.99", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "indian tea" },
      { name: "Himalayan Herbal Tea", description: "A soothing blend of handpicked Himalayan herbs, known for its refreshing and calming properties.", price: "$4.49", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "herbal tea" },
      { name: "Fresh Mango Lassi", description: "A creamy and refreshing yogurt-based drink blended with sweet mango pulp.", price: "$5.99", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "yogurt drink" },
      { name: "Artisan Coffee", description: "Locally roasted coffee beans, expertly brewed to perfection. Various styles available.", price: "$4.00 - $5.50", imageSrc: "https://placehold.co/300x200.png", dataAiHint: "specialty coffee" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-3">Explore our delicious offerings, crafted with passion.</p>
      </div>

      {menuData.map((category) => (
        <MenuCategory key={category.title} category={category} />
      ))}
    </div>
  );
}
