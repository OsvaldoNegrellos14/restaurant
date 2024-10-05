import { DISH_STATUS } from "../types"

export const INGREDIENTS = [
  {
    name: 'Tomate',
    quantity: 5,
  },
  {
    name: 'Limon',
    quantity: 5,
  },
  {
    name: 'Papa',
    quantity: 5,
  },
  {
    name: 'Arroz',
    quantity: 5,
  },
  {
    name: 'Ketchup',
    quantity: 5,
  },
  {
    name: 'Lechuga',
    quantity: 5,
  },
  {
    name: 'Cebolla',
    quantity: 5,
  },
  {
    name: 'Queso',
    quantity: 5,
  },
  {
    name: 'Carne',
    quantity: 5,
  },
  {
    name: 'Pollo',
    quantity: 5,
  },
]

export const RECIPES = [
  {
    recipeId: 1,
    name: 'Hamburguesa',
    ingredients: [
      {
        name: 'Carne',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
  },
  {
    recipeId: 2,
    name: 'Pollo',
    ingredients: [
      {
        name: 'Pollo',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
  },
  {
    recipeId: 3,
    name: 'Milanesa',
    ingredients: [
      {
        name: 'Pollo',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
  },
  {
    recipeId: 4,
    name: 'Ceviche',
    ingredients: [
      {
        name: 'Pollo',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
  },
  {
    recipeId: 5,
    name: 'Sopa',
    ingredients: [
      {
        name: 'Pollo',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
  },
  {
    recipeId: 6,
    name: 'Ensalada',
    ingredients: [
      {
        name: 'Pollo',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
  },
]

export const DISHES = [
  {
    dishId: crypto.randomUUID(),
    // recipeId: crypto.randomUUID(),
    // name: 'Hamburguesa',
    // ingredients: [
    //   {
    //     name: 'Carne',
    //     quantity: 5,
    //   },
    //   {
    //     name: 'Lechuga',
    //     quantity: 5,
    //   },
    //   {
    //     name: 'Cebolla',
    //     quantity: 5,
    //   },
    // ],
    status: DISH_STATUS.COOKING,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    dishId: crypto.randomUUID(),
    recipeId: crypto.randomUUID(),
    name: 'Pollo',
    ingredients: [
      {
        name: 'Carne',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
    status: DISH_STATUS.SERVED,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    dishId: crypto.randomUUID(),
    // recipeId: crypto.randomUUID(),
    // name: 'Hamburguesa',
    // ingredients: [
    //   {
    //     name: 'Carne',
    //     quantity: 5,
    //   },
    //   {
    //     name: 'Lechuga',
    //     quantity: 5,
    //   },
    //   {
    //     name: 'Cebolla',
    //     quantity: 5,
    //   },
    // ],
    status: DISH_STATUS.COOKING,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    dishId: crypto.randomUUID(),
    recipeId: crypto.randomUUID(),
    name: 'Hamburguesa',
    ingredients: [
      {
        name: 'Carne',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
    status: DISH_STATUS.ERROR,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    dishId: crypto.randomUUID(),
    recipeId: crypto.randomUUID(),
    name: 'Hamburguesa',
    ingredients: [
      {
        name: 'Carne',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
    status: DISH_STATUS.SERVED,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    dishId: crypto.randomUUID(),
    // recipeId: crypto.randomUUID(),
    // name: 'Hamburguesa',
    // ingredients: [
    //   {
    //     name: 'Carne',
    //     quantity: 5,
    //   },
    //   {
    //     name: 'Lechuga',
    //     quantity: 5,
    //   },
    //   {
    //     name: 'Cebolla',
    //     quantity: 5,
    //   },
    // ],
    status: DISH_STATUS.COOKING,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    dishId: crypto.randomUUID(),
    recipeId: crypto.randomUUID(),
    name: 'Hamburguesa',
    ingredients: [
      {
        name: 'Carne',
        quantity: 5,
      },
      {
        name: 'Lechuga',
        quantity: 5,
      },
      {
        name: 'Cebolla',
        quantity: 5,
      },
    ],
    status: DISH_STATUS.ERROR,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export const INGREDIENTS_HISTORY = [
  {
    name: 'Tomate',
    quantity: 5,
    createdAt: new Date().toISOString(),
  },
  {
    name: 'Limon',
    quantity: 5,
    createdAt: new Date().toISOString(),
  },
  {
    name: 'Papa',
    quantity: 5,
    createdAt: new Date().toISOString(),
  },
  {
    name: 'Arroz',
    quantity: 5,
    createdAt: new Date().toISOString(),
  },
  {
    name: 'Ketchup',
    quantity: 5,
    createdAt: new Date().toISOString(),
  }
]