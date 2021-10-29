import res1 from '../assets/restaurants/res1.webp';
import res2 from '../assets/restaurants/res2.webp';
import res3 from '../assets/restaurants/res3.webp';
import res4 from '../assets/restaurants/res4.webp';
import res5 from '../assets/restaurants/res5.webp';
import res6 from '../assets/restaurants/res6.webp';
import res7 from '../assets/restaurants/res7.webp';
import res8 from '../assets/restaurants/res8.webp';
import res9 from '../assets/restaurants/res9.webp';
import res10 from '../assets/restaurants/res10.webp';
import res11 from '../assets/restaurants/res11.webp';
import res12 from '../assets/restaurants/res12.webp';
//menu items
import vegSoup from '../assets/menu-items/veg-soup.webp';
import nonVegSoup from '../assets/menu-items/nonveg-soup.webp';
import greenSalad from '../assets/menu-items/green-salad.webp';
import fruitSalad from '../assets/menu-items/fruit-salad.webp';
import plainRice from '../assets/menu-items/plain-rice.webp';
import vegBiriyani from '../assets/menu-items/veg-biriyani.webp';
import chickenBiriyani from '../assets/menu-items/chicken-biriyani.webp';
import prawnBiriyani from '../assets/menu-items/prawn-biriyani.webp';
const RestaurantsData = [
  {
    name: 'Keyars',
    images: [res1, res2, res3, res4],
    location: 'Sahid Nagar, Bhubaneshwar',
    startTime: '7.00 am',
    closeTime: '11.00 pm',
    foodType: 'both',
    menu: [
      {
        categoryName: 'Soup',
        items: [
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Salad',
        items: [
          {
            name: 'Green Salad',
            price: 40,
            image: greenSalad,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Fruits Salad',
            image: fruitSalad,
            price: 60,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Rice',
        items: [
          {
            name: 'Plain Rice',
            image: plainRice,
            price: 70,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Veg Biriyani',
            image: vegBiriyani,
            price: 90,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Chicken Biriyani',
            image: chickenBiriyani,
            price: 150,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
          {
            name: 'Prawn Biriyani',
            image: prawnBiriyani,
            price: 170,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
        ],
      },
    ],
  },
  {
    name: 'Marwari Rasoi',
    images: [res5, res6],
    location: 'KIIT Road, Patia, Bhubaneshwar',
    startTime: '12.00 pm',
    closeTime: '10.00 pm',
    foodType: 'both',
    menu: [
      {
        categoryName: 'Soup',
        items: [
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Salad',
        items: [
          {
            name: 'Green Salad',
            price: 40,
            image: greenSalad,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Fruits Salad',
            image: fruitSalad,
            price: 60,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Rice',
        items: [
          {
            name: 'Plain Rice',
            image: plainRice,
            price: 70,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Veg Biriyani',
            image: vegBiriyani,
            price: 90,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Chicken Biriyani',
            image: chickenBiriyani,
            price: 150,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
          {
            name: 'Prawn Biriyani',
            image: prawnBiriyani,
            price: 170,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
        ],
      },
    ],
  },
  {
    name: 'Truptee',
    images: [res7, res8, res9],
    location: 'Lakshmi Sagar, Bhubaneshwar',
    startTime: '7.00 am',
    closeTime: '10.30 pm',
    foodType: 'veg',
    menu: [
      {
        categoryName: 'Soup',
        items: [
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Salad',
        items: [
          {
            name: 'Green Salad',
            price: 40,
            image: greenSalad,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Fruits Salad',
            image: fruitSalad,
            price: 60,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Rice',
        items: [
          {
            name: 'Plain Rice',
            image: plainRice,
            price: 70,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Veg Biriyani',
            image: vegBiriyani,
            price: 90,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Chicken Biriyani',
            image: chickenBiriyani,
            price: 150,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
          {
            name: 'Prawn Biriyani',
            image: prawnBiriyani,
            price: 170,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
        ],
      },
    ],
  },
  {
    name: 'Jugaad Junction',
    images: [res10, res11, res12],
    location: 'KIIT Road, Patia, Bhubaneshwar',
    startTime: '11.30 am',
    closeTime: '10.00 pm',
    foodType: 'non-veg',
    menu: [
      {
        categoryName: 'Soup',
        items: [
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Chicken Soup',
            price: 90,
            image: nonVegSoup,
            foodType: 'non-veg',
            menuType: 'starter',
          },
          {
            name: 'Tomato Soup',
            image: vegSoup,
            price: 70,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Salad',
        items: [
          {
            name: 'Green Salad',
            price: 40,
            image: greenSalad,
            foodType: 'veg',
            menuType: 'starter',
          },
          {
            name: 'Fruits Salad',
            image: fruitSalad,
            price: 60,
            foodType: 'veg',
            menuType: 'starter',
          },
        ],
      },
      {
        categoryName: 'Rice',
        items: [
          {
            name: 'Plain Rice',
            image: plainRice,
            price: 70,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Veg Biriyani',
            image: vegBiriyani,
            price: 90,
            foodType: 'veg',
            menuType: 'main-course',
          },
          {
            name: 'Chicken Biriyani',
            image: chickenBiriyani,
            price: 150,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
          {
            name: 'Prawn Biriyani',
            image: prawnBiriyani,
            price: 170,
            foodType: 'non-veg',
            menuType: 'main-course',
          },
        ],
      },
    ],
  },
];
export default RestaurantsData;
