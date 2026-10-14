// var imgdiv =document.getElementsByClassName("meal-img")[0];
var image = document.querySelector(".meal-img img");
var rating = document.querySelector(".reviews span:nth-of-type(1)");
var reviews = document.querySelector(".reviews span:nth-of-type(2)");
var prepTime = document.querySelector(
  ".cooking-info div:nth-of-type(1) div:nth-of-type(2)",
);
var cookTime = document.querySelector(
  ".cooking-info div:nth-of-type(2) div:nth-of-type(2)",
);
var servings = document.querySelector(
  ".cooking-info div:nth-of-type(3) div:nth-of-type(2)",
);
var mealDifficulty = document.querySelector(".meal-type span:nth-of-type(1)");
var meallocation = document.querySelector(".meal-type span:nth-of-type(2)");
var mealName = document.querySelector("header h2");
var mealDesc = document.querySelector("header p");
var alertDiv = document.getElementsByClassName("alert")[0];
var ingredients = document.querySelector(".ingredients div");
var instructions = document.querySelector(".instructions");
var calories = document.querySelector(".macros>span");
var protein = document.querySelector(".macros:nth-child(2) > span");
var carbs = document.querySelector(".macros:nth-child(3) > span");
var fat = document.querySelector(".macros:nth-child(4) > span");
var fiber = document.querySelector(".macros:nth-child(5) > span");
var sodium = document.querySelector(".macros:nth-child(6) > span");
var chefTips = document.querySelector(".chefs");
var mealsButton = document.getElementsByClassName("meals-button")[0];
var meals = [
  {
    id: 1,
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    image: "imgs/burger.jpg",
    difficulty: "Easy",
    cuisine: "American",
    rating: 4.6,
    reviews: "(421 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "1 peaple",

    ingredients: [
      "500g ground beef",
      "4 burger buns",
      "4 slices cheddar cheese",
      "1 large tomato, sliced",
      "1 red onion, sliced",
      "4 lettuce leaves",
      "4 tbsp mayonnaise",
      "2 tbsp ketchup",
      "1 tbsp mustard",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "2 tbsp vegetable oil",
    ],

    instructions: [
      "Divide ground beef into 4 equal portions and shape into patties.",
      "Season both sides of the patties with salt and black pepper.",
      "Heat vegetable oil in a skillet over medium-high heat.",
      "Cook burger patties for 4-5 minutes on each side.",
      "Place cheddar cheese on each patty during the last minute of cooking.",
      "Toast burger buns until golden brown.",
      "Mix mayonnaise, ketchup, and mustard to make burger sauce.",
      "Spread sauce on buns, then add lettuce, tomato, burger patties, and onion.",
      "Close the burgers and serve immediately.",
    ],

    nutrition: {
      calories: 650,
      protein: 38,
      carbs: 42,
      fat: 35,
      fiber: 3,
      sugar: 8,
      sodium: 920,
    },

    tips: [
      "Don't press down on burgers while cooking - keeps them juicy.",
      "Make indent in center to prevent burger from puffing up.",
      "Let patties rest for 2-3 minutes before serving.",
      "Toast buns for better texture and flavor.",
    ],
  },

  {
    id: 2,
    name: "Creamy Chicken Alfredo",
    description: "Rich and creamy pasta with tender chicken",
    image: "imgs/chicken-alfredo.jpg",
    difficulty: "Medium",
    cuisine: "Italian",
    rating: 4.8,
    reviews: "(356 reviews)",
    prepTime: "25 min",
    cookTime: "25 min",
    servings: "2 peaple",

    ingredients: [
      "400g fettuccine pasta",
      "500g chicken breast",
      "2 cups heavy cream",
      "1 cup grated parmesan cheese",
      "3 cloves garlic, minced",
      "3 tbsp butter",
      "2 tbsp olive oil",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 tsp Italian seasoning",
      "2 tbsp fresh parsley",
    ],

    instructions: [
      "Bring a large pot of salted water to a boil.",
      "Cook fettuccine according to package instructions.",
      "Season chicken breasts with salt, pepper, and Italian seasoning.",
      "Heat olive oil in a skillet and cook chicken for 6-7 minutes per side until fully cooked.",
      "Remove chicken and slice into strips.",
      "Melt butter in the same skillet and sauté garlic for 1 minute.",
      "Pour in heavy cream and simmer for 3-4 minutes.",
      "Add parmesan cheese and stir until the sauce becomes creamy.",
      "Add cooked pasta and toss until coated.",
      "Top with sliced chicken and fresh parsley before serving.",
    ],

    nutrition: {
      calories: 720,
      protein: 45,
      carbs: 58,
      fat: 34,
      fiber: 3,
      sugar: 4,
      sodium: 780,
    },

    tips: [
      "Reserve some pasta water to adjust sauce consistency.",
      "Use freshly grated parmesan for a smoother sauce.",
      "Avoid boiling the cream over high heat.",
      "Let chicken rest before slicing to retain moisture.",
    ],
  },

  {
    id: 3,
    name: "Vegetable Coconut Curry",
    description: "Hearty vegetarian curry with coconut milk",
    image: "imgs/coconut curry.jpg",
    difficulty: "Medium",
    cuisine: "Asian",
    rating: 4.6,
    reviews: "(289 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "1 peaple",

    ingredients: [
      "2 medium potatoes, cubed",
      "2 carrots, sliced",
      "1 cup cauliflower florets",
      "1 cup chickpeas",
      "2 cups fresh spinach",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "400ml coconut milk",
      "2 tbsp curry powder",
      "2 tbsp vegetable oil",
      "1 cup water",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "Fresh cilantro for garnish",
    ],

    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Season with salt and pepper.",
      "Garnish with fresh cilantro and serve with rice.",
    ],

    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 42,
      fat: 19,
      fiber: 9,
      sugar: 8,
      sodium: 620,
    },

    tips: [
      "Use full-fat coconut milk for a richer curry.",
      "Cut vegetables into similar sizes for even cooking.",
      "Add spinach at the end to preserve its color.",
      "Serve with basmati rice or warm naan bread.",
    ],
  },

  {
    id: 4,
    name: "Grilled Salmon",
    description: "Tender grilled salmon with lemon and herbs",
    image: "imgs/grilled salmon.jpg",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    rating: 4.9,
    reviews: "(512 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "1 peaple",

    ingredients: [
      "2 salmon fillets (180g each)",
      "2 tbsp olive oil",
      "1 lemon",
      "2 cloves garlic, minced",
      "1 tsp dried oregano",
      "1 tsp paprika",
      "1/2 tsp salt",
      "1/2 tsp black pepper",
      "2 tbsp fresh parsley",
      "1 tbsp butter",
    ],

    instructions: [
      "Pat salmon fillets dry with paper towels.",
      "Mix olive oil, lemon juice, garlic, oregano, paprika, salt, and pepper.",
      "Brush the marinade over both sides of the salmon.",
      "Preheat a grill or grill pan over medium-high heat.",
      "Place salmon skin-side down and cook for 5-6 minutes.",
      "Flip carefully and cook for another 3-5 minutes until cooked through.",
      "Add butter and allow it to melt over the salmon.",
      "Garnish with fresh parsley and lemon slices.",
      "Serve with roasted vegetables or rice.",
    ],

    nutrition: {
      calories: 420,
      protein: 40,
      carbs: 4,
      fat: 27,
      fiber: 1,
      sugar: 1,
      sodium: 480,
    },

    tips: [
      "Pat salmon dry before grilling for a better crust.",
      "Avoid flipping salmon multiple times.",
      "Cook until the thickest part reaches 63°C.",
      "Add lemon juice just before serving for freshness.",
    ],
  },

  {
    id: 5,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    image: "imgs/Margherita Pizza.webp",
    difficulty: "Medium",
    cuisine: "Italian",
    rating: 4.7,
    reviews: "(638 reviews)",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: "3 peaple",

    ingredients: [
      "500g pizza dough",
      "200g mozzarella cheese",
      "1 cup tomato sauce",
      "2 tbsp olive oil",
      "10 fresh basil leaves",
      "2 cloves garlic, minced",
      "1/2 tsp salt",
      "1/2 tsp black pepper",
      "1 tsp dried oregano",
      "2 tbsp flour for dusting",
    ],

    instructions: [
      "Preheat oven to 250°C.",
      "Lightly flour a clean surface and roll out pizza dough.",
      "Transfer dough to a pizza tray.",
      "Spread tomato sauce evenly over the dough.",
      "Sprinkle minced garlic and oregano over the sauce.",
      "Arrange mozzarella slices evenly across the pizza.",
      "Drizzle olive oil over the toppings.",
      "Bake for 12-15 minutes until the crust is golden and cheese is melted.",
      "Remove from oven and add fresh basil leaves.",
      "Slice and serve immediately.",
    ],

    nutrition: {
      calories: 580,
      protein: 24,
      carbs: 68,
      fat: 23,
      fiber: 4,
      sugar: 6,
      sodium: 850,
    },

    tips: [
      "Preheat the oven thoroughly before baking.",
      "Use fresh mozzarella for authentic flavor.",
      "Avoid adding too much tomato sauce.",
      "Add fresh basil after baking to preserve its aroma.",
    ],
  },

  {
    id: 6,
    name: "Chicken Caesar Salad",
    description:
      "Fresh romaine lettuce with grilled chicken and Caesar dressing",
    image: "imgs/Chicken Caesar Salad.webp",
    difficulty: "Easy",
    cuisine: "American",
    rating: 4.5,
    reviews: "(274 reviews)",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "3 peaple",

    ingredients: [
      "300g chicken breast",
      "1 large romaine lettuce",
      "1 cup croutons",
      "1/3 cup grated parmesan cheese",
      "4 tbsp Caesar dressing",
      "1 tbsp olive oil",
      "1 tsp garlic powder",
      "1/2 tsp salt",
      "1/2 tsp black pepper",
      "1 tbsp lemon juice",
    ],

    instructions: [
      "Season chicken breast with salt, pepper, and garlic powder.",
      "Heat olive oil in a skillet over medium heat.",
      "Cook chicken for 6-7 minutes on each side until fully cooked.",
      "Remove chicken from heat and let it rest for 5 minutes.",
      "Wash and chop romaine lettuce into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Slice grilled chicken into thin strips.",
      "Add chicken, croutons, and parmesan cheese to the lettuce.",
      "Drizzle Caesar dressing and lemon juice over the salad.",
      "Toss gently and serve immediately.",
    ],

    nutrition: {
      calories: 450,
      protein: 42,
      carbs: 18,
      fat: 24,
      fiber: 4,
      sugar: 3,
      sodium: 760,
    },

    tips: [
      "Dry lettuce thoroughly to prevent a watery salad.",
      "Add dressing just before serving.",
      "Use freshly grated parmesan cheese.",
      "Let chicken rest before slicing.",
    ],
  },

  {
    id: 7,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a rich molten center",
    image: "imgs/Chocolate Lava Cake.webp",
    difficulty: "Medium",
    cuisine: "French",
    rating: 4.9,
    reviews: "(743 reviews)",
    prepTime: "25 min",
    cookTime: "20 min",
    servings: "2 peaple",

    ingredients: [
      "170g dark chocolate",
      "115g unsalted butter",
      "2 whole eggs",
      "2 egg yolks",
      "1/4 cup granulated sugar",
      "2 tbsp all-purpose flour",
      "1 tsp vanilla extract",
      "1 pinch salt",
      "1 tbsp cocoa powder",
      "Vanilla ice cream for serving",
    ],

    instructions: [
      "Preheat oven to 220°C.",
      "Grease four ramekins with butter and dust with cocoa powder.",
      "Melt dark chocolate and butter together using a double boiler.",
      "Whisk eggs, egg yolks, and sugar until light and fluffy.",
      "Slowly fold melted chocolate into the egg mixture.",
      "Add flour, vanilla extract, and salt.",
      "Mix gently until combined.",
      "Divide batter evenly among prepared ramekins.",
      "Bake for 10-12 minutes until edges are firm but centers remain soft.",
      "Let cakes rest for 1 minute before carefully turning onto plates.",
      "Serve immediately with vanilla ice cream.",
    ],

    nutrition: {
      calories: 520,
      protein: 8,
      carbs: 42,
      fat: 36,
      fiber: 3,
      sodium: 180,
    },

    tips: [
      "Use high-quality dark chocolate for the best flavor.",
      "Do not overbake or the molten center will disappear.",
      "Grease ramekins thoroughly for easy removal.",
      "Serve immediately while the center is still warm.",
    ],
  },
];

function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * meals.length);
  return randomNumber;
}

function alertRule(index) {
  var ptime = Number(meals[index].prepTime.split(" ")[0]);
  var ctime = Number(meals[index].cookTime.split(" ")[0]);
  if (ptime + ctime > 45) {
    alertDiv.classList.replace("d-none", "d-block");
    // imgdiv.classList.replace("default-height","lg-height");
} else {
    alertDiv.classList.replace("d-block", "d-none");
    // imgdiv.classList.replace("lg-height","default-height");
  }
}
function ingredientsContent(index) {
  var row = " ";
  for (var i = 0; i < meals[index].ingredients.length; i++) {
    row += `<div class="num d-flex column-gap-3 mb-2">
                      <div
                        class="rounded-circle text-white d-flex justify-content-center align-items-center"
                      >
                        ${i + 1}
                      </div>
                      <p>${meals[index].ingredients[i]}</p>
                    </div>`;
  }
  return row;
}
function instructionsContent(index) {
  var row = " ";
  for (var i = 0; i < meals[index].instructions.length; i++) {
    row += `<div class="d-flex column-gap-3 mb-4">
                    <div
                      class="num flex-shrink-0 rounded-4 d-flex justify-content-center align-items-center text-white"
                    >
                      ${i + 1}
                    </div>
                    <div class="">
                      ${meals[index].instructions[i]}
                    </div>
                  </div>`;
  }
  return row;
}
function chefsContent(index) {
  var row = " ";
  for (var i = 0; i < meals[index].tips.length; i++) {
    row += `<div
                    class="rounded-4 p-3 d-flex align-items-center column-gap-3 mb-3"
                  >
                    <div
                      class="icon rounded-circle d-flex justify-content-center align-items-center text-white"
                    >
                      <i class="fa-solid fa-check"></i>
                    </div>
                    <p class="m-1">
                      ${meals[index].tips[i]}
                    </p>
                  </div>`;
  }
  return row;
}
function setValues() {
  var index = getRandomNumber();
  image.src = meals[index].image;
  rating.innerHTML = meals[index].rating;
  reviews.innerHTML = meals[index].reviews;
  prepTime.innerHTML = meals[index].prepTime;
  cookTime.innerHTML = meals[index].cookTime;
  servings.innerHTML = meals[index].servings;
  mealDifficulty.innerHTML = meals[index].difficulty;
  meallocation.innerHTML = meals[index].cuisine;
  mealName.innerHTML = meals[index].name;
  mealDesc.innerHTML = meals[index].description;
  alertRule(index);
  ingredients.innerHTML = ingredientsContent(index);
  instructions.innerHTML = instructionsContent(index);
  calories.innerHTML = meals[index].nutrition.calories + "kcal";
  protein.innerHTML = meals[index].nutrition.protein + "g";
  carbs.innerHTML = meals[index].nutrition.carbs + "g";
  fat.innerHTML = meals[index].nutrition.fat + "g";
  fiber.innerHTML = meals[index].nutrition.fiber + " g";
  sodium.innerHTML = meals[index].nutrition.sodium + " mg";
  chefTips.innerHTML = chefsContent(index);
}

(function () {
  setValues();
})();

mealsButton.addEventListener("click", function () {
  setValues();
});
