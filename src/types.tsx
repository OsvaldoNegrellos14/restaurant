export type Ingredient = {
  name: string
  quantity: number
}

export type IngredientHistory = {
  name: string
  quantity: number
  createdAt: string
}

export type Recipe = {
  recipeId: number
  name: string
  ingredients: Ingredient[]
}

export type Dish = {
  dishId: string
  recipeId?: string
  name?: string
  ingredients?: Ingredient[]
  status: DISH_STATUS
  createdAt: string
  updatedAt: string
}

export enum DISH_STATUS {
  COOKING = 'Cocinando',
  SERVED = 'Servido',
  ERROR = 'Error',
}