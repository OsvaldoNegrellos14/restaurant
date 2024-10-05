// import axios from 'axios'
import { Dish, Ingredient, IngredientHistory, Recipe } from "../types"
import { RECIPES, INGREDIENTS, DISHES, INGREDIENTS_HISTORY } from "./mock"

// const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

export const getIngredients = async (): Promise<Ingredient[]> => {
  // const { data } = await axios.get(`${BASE_URL}/ingredients`)
  // if (!data) {
  //   throw new Error('No data')
  // }
  // return data.ingredients
  return INGREDIENTS
}

export const getRecipes = async (): Promise<Recipe[]> => {
  // const { data } = await axios.get(`${BASE_URL}/recipes`)
  // if (!data) {
  //   throw new Error('No data')
  // }
  // return data.recipes
  return RECIPES
}

export const getDishes = async (): Promise<Dish[]> => {
  // const { data } = await axios.get(`${BASE_URL}/dishes`)
  // if (!data) {
  //   throw new Error('No data')
  // }
  // return data.dishes
  // return DISHES
  return []
}

export const getIngredientsHistory = async (): Promise<IngredientHistory[]> => {
  // const { data } = await axios.get(`${BASE_URL}/ingredients-history`)
  // if (!data) {
  //   throw new Error('No data')
  // }
  // return data.ingredients
  // return INGREDIENTS_HISTORY
  return INGREDIENTS_HISTORY
}

export const saveADish = async (): Promise<Dish> => {
  // const { data } = await axios.post(`${BASE_URL}/dishes`)
  // if (!data) {
  //   throw new Error('No data')
  // }
  // return data.dishes
  return DISHES[Math.floor(Math.random() * DISHES.length)]
}