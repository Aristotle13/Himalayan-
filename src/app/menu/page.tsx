import MenuCategory from '@/components/menu/menu-category';
import type { MenuCategoryData } from '@/types';
import { CakeSlice, Cookie, Coffee } from 'lucide-react';

import barfiImage from './images/sweets/Barfi.jpg';
import breadImage from './images/sweets/bread.jpg';
import brownieImage from './images/sweets/brownie.jpg';
import croissantImage from './images/sweets/croissant.jpg';
import gulabImage from './images/sweets/gulab jamun.jpg';
import jalebiImage from './images/sweets/jalebi.jpg';
import ladduImage from './images/sweets/laddu.png';
import pieImage from './images/sweets/pie.jpg';
import rasmalaiImage from './images/sweets/rasmalai.jpg';

import momoImage from './images/foods/momo.jpg';
import dhalImage from './images/foods/dhalbhat.jpg';
import naanImage from './images/foods/naan.jpg';
import thukpaImage from './images/foods/thukpa.jpg';
import paneerImage from './images/foods/paneer.jpg';

import chaiImage from './images/beverages/chai.jpg';
import coffeeImage from './images/beverages/coffee.jpg';
import herbalImage from './images/beverages/herbal.jpg';
import lassiImage from './images/beverages/lassi.jpg';



const menuData: MenuCategoryData[] = [
  {
    title: "Our Famous Sweets and Baked Goods",
    icon: CakeSlice,
    items: [
      { name: "Gulab Jamun", description: "Soft, spongy milk-solid balls soaked in rose-flavored sugar syrup. A classic Indian dessert.", price: "$9.99", imageSrc: gulabImage, dataAiHint: "indian sweets" },
      { name: "Jalebi", description: "Crispy, sweet spirals made from fermented batter, deep-fried and soaked in saffron syrup.", price: "$6.99", imageSrc: jalebiImage, dataAiHint: "indian dessert" },
      { name: "Rasmalai", description: "Creamy and rich, these are cottage cheese dumplings soaked in sweetened, thickened milk flavored with cardamom and saffron.", price: "$7.49", imageSrc:rasmalaiImage, dataAiHint: "milk dessert" },
      { name: "Barfi", description: "A dense milk-based sweet, often flavored with nuts and spices. Comes in various flavors.", price: "$4.99", imageSrc:barfiImage, dataAiHint: "fudge sweets" },
      { name: "Himalayan Herb Bread", description: "Artisanal bread baked with a unique blend of Himalayan herbs and spices. Perfect with soups or as a side.", price: "$8.99", imageSrc:breadImage, dataAiHint: "artisan bread" },
      { name: "Spiced Apple Pie", description: "A comforting classic with a Himalayan twist, featuring locally sourced apples and warm spices.", price: "$6.49", imageSrc:pieImage, dataAiHint: "apple pie" },
      { name: "Butter Croissants", description: "Flaky, buttery croissants, baked fresh daily. A delightful start to your day.", price: "$12.50", imageSrc:croissantImage, dataAiHint: "bakery pastry" },
      { name: "Chocolate Walnut Brownies", description: "Rich, fudgy brownies packed with walnuts and a hint of Himalayan salt.", price: "$7.50", imageSrc:brownieImage, dataAiHint: "chocolate brownie" },
      { name: "Laddu", description: "Sweet gram flour or coconut balls", price: "$5.50", imageSrc:ladduImage, dataAiHint: "chocolate brownie" }

    ],
  },
  {
    title: "Food from the Himalayan",
    icon: Cookie,
    items: [
      { name: "Himalayan Momos (Vegetarian Dumplings)", description: "Steamed or fried with spicy tomato chutney", price: "$10.00", imageSrc: momoImage , dataAiHint: "chocolate brownie" },
      { name: "Himalayan Thukpa", description: "Mixed vegetable soup along with noodles", price: "$15.50", imageSrc: thukpaImage, dataAiHint: "chocolate brownie" },
      { name: "Dal Bhat Set (Nepali Thali)", description: "Rice, dal, vegetable curry, pickle, salad", price: "$30.50", imageSrc: dhalImage, dataAiHint: "chocolate brownie" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy", price: "$23.50", imageSrc: paneerImage, dataAiHint: "chocolate brownie" },
      { name: "Naan", description: "Indian bread made with flour", price: "$5.50", imageSrc: naanImage, dataAiHint: "Naan" },


    ],
  },
  {
    title: "Beverages",
    icon: Coffee,
    items: [
      { name: "Masala Chai", description: "Traditional Indian spiced tea, brewed with aromatic spices and milk. A warm and invigorating drink.", price: "$3.99", imageSrc: chaiImage, dataAiHint: "indian tea" },
      { name: "Himalayan Herbal Tea", description: "A soothing blend of handpicked Himalayan herbs, known for its refreshing and calming properties.", price: "$4.49", imageSrc:herbalImage, dataAiHint: "herbal tea" },
      { name: "Fresh Mango Lassi", description: "A creamy and refreshing yogurt-based drink blended with sweet mango pulp.", price: "$5.99", imageSrc: lassiImage, dataAiHint: "yogurt drink" },
      { name: "Artisan Coffee", description: "Locally roasted coffee beans, expertly brewed to perfection. Various styles available.", price: "$4.50", imageSrc: coffeeImage, dataAiHint: "specialty coffee" },
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
