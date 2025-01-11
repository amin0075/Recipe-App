import { ICategory } from "../types/categories";

export const categories: ICategory[] = [
  {
    id: "1",
    name: "Cakes",
    image: require("@/assets/images/cake.jpg"),
    recipes: [
      {
        id: "1",
        name: "Chocolate Cake",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
        ingredients: [
          {
            id: "1",
            name: "Flour",
            image:
              "https://formnutrition.com/wp-content/uploads/2021/09/AdobeStock_442212782.jpeg",
          },
          {
            id: "2",
            name: "Sugar",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg",
          },
          {
            id: "3",
            name: "Chocolate",
            image:
              "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
          },
        ],
        steps: [
          "Step 1: Mix the flour with sugar",
          "Step 2: Add chocolate and mix it well",
          "Step 3: Bake the cake in the oven",
        ],
      },
      {
        id: "2",
        name: "Cheese Cake",
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df",
        ingredients: [
          {
            id: "4",
            name: "Flour",
            image:
              "https://formnutrition.com/wp-content/uploads/2021/09/AdobeStock_442212782.jpeg",
          },
          {
            id: "5",
            name: "Sugar",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg",
          },
          {
            id: "6",
            name: "Cheese",
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          },
        ],
        steps: [
          "Step 1: Mix the flour with sugar",
          "Step 2: Add cheese and mix it well",
          "Step 3: Bake the cake in the oven",
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Desserts",
    image: require("@/assets/images/dessert.jpg"),
    recipes: [
      {
        id: "3",
        name: "Chocolate Ice Cream",
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
        ingredients: [
          {
            id: "7",
            name: "Milk",
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
          },
          {
            id: "8",
            name: "Sugar",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg",
          },
          {
            id: "9",
            name: "Chocolate",
            image:
              "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
          },
        ],
        steps: [
          "Step 1: Mix the milk with sugar",
          "Step 2: Add chocolate and mix it well",
          "Step 3: Freeze the mixture",
        ],
      },
      {
        id: "4",
        name: "Vanilla Ice Cream",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a",
        ingredients: [
          {
            id: "10",
            name: "Milk",
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
          },
          {
            id: "11",
            name: "Sugar",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sucre_blanc_cassonade_complet_rapadura.jpg",
          },
          {
            id: "12",
            name: "Vanilla",
            image:
              "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12",
          },
        ],
        steps: [
          "Step 1: Mix the milk with sugar",
          "Step 2: Add vanilla and mix it well",
          "Step 3: Freeze the mixture",
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Food",
    image: require("@/assets/images/food.jpg"),
    recipes: [
      {
        id: "5",
        name: "Pasta",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
        ingredients: [
          {
            id: "13",
            name: "Pasta",
            image:
              "https://images.unsplash.com/photo-1611270629569-8b357cb88da9",
          },
          {
            id: "14",
            name: "Tomato Sauce",
            image:
              "https://images.unsplash.com/photo-1606921231181-2101ca9f8a2f",
          },
          {
            id: "15",
            name: "Cheese",
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          },
        ],
        steps: [
          "Step 1: Boil the pasta",
          "Step 2: Add tomato sauce and cheese",
          "Step 3: Mix it well",
        ],
      },
      {
        id: "6",
        name: "Pizza",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94",
        ingredients: [
          {
            id: "16",
            name: "Dough",
            image:
              "https://images.unsplash.com/photo-1627485937980-221c88ac04f9",
          },
          {
            id: "17",
            name: "Tomato Sauce",
            image:
              "https://images.unsplash.com/photo-1606921231181-2101ca9f8a2f",
          },
          {
            id: "18",
            name: "Cheese",
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          },
        ],
        steps: [
          "Step 1: Roll out the dough",
          "Step 2: Add tomato sauce and cheese",
          "Step 3: Bake the pizza in the oven",
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Salad",
    image: require("@/assets/images/salad.jpg"),
    recipes: [
      {
        id: "7",
        name: "Greek Salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        ingredients: [
          {
            id: "19",
            name: "Lettuce",
            image:
              "https://images.unsplash.com/photo-1597362925124-14b1e2c3d3b8",
          },
          {
            id: "20",
            name: "Tomato",
            image:
              "https://images.unsplash.com/photo-1582284540020-8acbe03f4924",
          },
          {
            id: "21",
            name: "Olives",
            image:
              "https://images.unsplash.com/photo-1601059187634-b7debe7caac6",
          },
        ],
        steps: [
          "Step 1: Chop the lettuce",
          "Step 2: Add tomato and olives",
          "Step 3: Mix it well",
        ],
      },
      {
        id: "8",
        name: "Caesar Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        ingredients: [
          {
            id: "22",
            name: "Lettuce",
            image:
              "https://images.unsplash.com/photo-1597362925124-14b1e2c3d3b8",
          },
          {
            id: "23",
            name: "Chicken",
            image:
              "https://images.unsplash.com/photo-1603360946369-dc9bbf814ecf",
          },
          {
            id: "24",
            name: "Cheese",
            image:
              "https://images.unsplash.com/photo-1601050690597-df0568f70950",
          },
        ],
        steps: [
          "Step 1: Chop the lettuce",
          "Step 2: Add chicken and cheese",
          "Step 3: Mix it well",
        ],
      },
    ],
  },
];
