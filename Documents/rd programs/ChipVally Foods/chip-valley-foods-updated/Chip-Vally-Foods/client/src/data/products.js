export const products = [
  // American Pancake Co
  {
    id: 1,
    name: "Blueberry Pancake Mix",
    brand: "American Pancake Co",
    category: "Breakfast",
    price: 299,
    images: [
      "https://postimg.cc/8J9Dk58r][img]https://i.postimg.cc/8J9Dk58r/491695461-1.jpg",
      "https://ibb.co/BHgMGrk6",
      "https://ibb.co/0yfGx1LQ",
      "https://ibb.co/W4F5ksQs",
      "https://ibb.co/84Tzw1Gn",
      "https://ibb.co/wx6MJvM",
      "https://ibb.co/bjNHjQTY"
    ],
    description: "Fluffy blueberry pancakes made easy",
    featured: true,
    weight: "500g",
    ingredients: "Wheat flour, blueberries, sugar, baking powder, salt",
    nutritionalInfo: {
      calories: "350 kcal per 100g",
      protein: "8g",
      carbs: "65g",
      fat: "5g"
    },
    shopLinks: {
      amazon: "https://www.amazon.in/your-product-link",
      bigbasket: "",
      blinkit: "",
      instamart: "",
      zepto: ""
    }
  },
  {
    id: 2,
    name: "Original Pancake Mix",
    brand: "American Pancake Co",
    category: "Breakfast",
    price: 249,
    images: [
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500",
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
      "https://images.unsplash.com/photo-1590137876181-8034bddbda7d?w=500",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500"
    ],
    description: "Classic pancake mix for perfect breakfast",
    featured: false,
    weight: "500g",
    ingredients: "Wheat flour, sugar, baking powder, salt",
    nutritionalInfo: {
      calories: "340 kcal per 100g",
      protein: "7g",
      carbs: "68g",
      fat: "4g"
    },
    shopLinks: {
      amazon: "",
      bigbasket: "",
      blinkit: "",
      instamart: "",
      zepto: ""
    }
  },
  {
    id: 3,
    name: "Chocolate Chip Pancake Mix",
    brand: "American Pancake Co",
    category: "Breakfast",
    price: 329,
    images: [
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500",
      "https://images.unsplash.com/photo-1590137876181-8034bddbda7d?w=500",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500"
    ],
    description: "Indulgent chocolate chip pancakes",
    featured: true,
    weight: "500g",
    ingredients: "Wheat flour, chocolate chips, sugar, baking powder, salt",
    nutritionalInfo: {
      calories: "380 kcal per 100g",
      protein: "8g",
      carbs: "70g",
      fat: "8g"
    },
    shopLinks: {
      amazon: "",
      bigbasket: "",
      blinkit: "",
      instamart: "",
      zepto: ""
    }
  },

  // Add the same pattern for all other products...
  // I'll show a few more examples:

  {
    id: 4,
    name: "Desita Cookies Original",
    brand: "Desita",
    category: "Snacks",
    price: 149,
    images: [
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500",
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500",
      "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=500",
      "https://images.unsplash.com/photo-1590080876343-e0a797b6de30?w=500",
      "https://images.unsplash.com/photo-1606312619070-d48b4ade4c7d?w=500"
    ],
    description: "Crispy and delicious cookies",
    featured: false,
    weight: "200g",
    ingredients: "Wheat flour, sugar, butter, eggs, vanilla",
    nutritionalInfo: {
      calories: "450 kcal per 100g",
      protein: "6g",
      carbs: "60g",
      fat: "20g"
    },
    shopLinks: {
      amazon: "",
      bigbasket: "",
      blinkit: "",
      instamart: "",
      zepto: ""
    }
  },

  {
    id: 10,
    name: "KOKA Instant Noodles - Chicken",
    brand: "KOKA",
    category: "Instant Food",
    price: 89,
    images: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500",
      "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=500",
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500",
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500"
    ],
    description: "Quick and tasty chicken flavored noodles",
    featured: true,
    weight: "85g",
    ingredients: "Wheat flour, palm oil, chicken seasoning, salt, spices",
    nutritionalInfo: {
      calories: "380 kcal per pack",
      protein: "9g",
      carbs: "55g",
      fat: "14g"
    },
    shopLinks: {
      amazon: "",
      bigbasket: "",
      blinkit: "",
      instamart: "",
      zepto: ""
    }
  }
  // Continue this pattern for all 24 products...
];

export const brands = ["American Pancake Co", "Desita", "Gurmé", "KOKA", "Mojo Bar", "Peacock"];