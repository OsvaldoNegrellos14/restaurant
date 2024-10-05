/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Card, CircularProgress } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Recipe, Ingredient, Dish, IngredientHistory } from './types'
import {
  getRecipes,
  getIngredients,
  getDishes,
  getIngredientsHistory,
  saveADish,
} from './services/api'
import { HistoryTable } from './components/HistoryTable'
import { BuysTable } from './components/BuysTable'
import { COLORS } from './theme'
import { mergeData } from './utils'

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [dishes, setDishes] = useState<Dish[]>([])
  const [ingredientsHistory, setIngredientsHistory] = useState<IngredientHistory[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPushADish, setIsPushADish] = useState<boolean>(false)
  const [newDish, setNewDish] = useState<Dish | null>(null)

  const initData = async (newDishProp?: Dish) => {
    try {
      if (!newDishProp) setIsLoading(true)
      const ingredients = await getIngredients()
      const recipes = await getRecipes()
      const updatedDishes = await getDishes()
      const ingredientsHistory = await getIngredientsHistory()
      setIngredients(ingredients)
      setRecipes(recipes)
      if (newDishProp) {
        const mergedDishes = mergeData({
          updatedData: updatedDishes,
          dataStored: dishes,
          newData: newDishProp,
        })
        setDishes(mergedDishes) 
        setNewDish(null)
      } else {
        setDishes(updatedDishes)
      }
      setIngredientsHistory(ingredientsHistory)
      setTimeout(() => {
        if (!newDishProp) setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.error(error)
    } finally {
      // if (!newDish) setIsLoading(false)
    }
  }

  const handlePushADish = async () => {
    try {
      setIsPushADish(true)
      setTimeout(async () => {
        const newDish = await saveADish()
        setNewDish(newDish)
        setIsPushADish(false)
      }, 2000)
    } catch (error) {
      console.error(error)
    } finally {
      // setIsPushADish(false)
    }
  }

  useEffect(() => {
    if (newDish) initData(newDish)
  }, [newDish])

  useEffect(() => {
    initData()
  }, [])

  return (
    <div className="bg-white flex flex-col align-center py-4 gap-4">
      <div className="flex justify-center">
        <h1
          className="text-4xl font-bold"
          style={{ color: COLORS.text.secondary }}
        >
          Jornada de almuerzo
        </h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="container max-w-2xl mx-auto self-center">
            <Card
              sx={{
                backgroundColor: COLORS.text.white_green,
                boxShadow: 'none',
                padding: '1rem',
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                borderRadius: '1rem',
              }}
            >
              <div className="flex justify-center">
                <LoadingButton
                  loadingIndicator={
                    <CircularProgress
                      sx={{ color: COLORS.background.default }}
                      size={18}
                    />
                  }
                  loading={isPushADish}
                  sx={{
                    color: COLORS.text.white,
                    backgroundColor: COLORS.primary,
                    fontWeight: 'bold',
                  }}
                  onClick={handlePushADish}
                >
                  Ordenar ya!
                </LoadingButton>
              </div>
              <div className="flex flex-col sm:flex-row sm:grid-cols-1">
                <div className="flex-1 overflow-y-auto px-4 py-2">
                  <h5
                    className="text-2xl font-bold"
                    style={{ color: COLORS.text.primary }}
                  >
                    Recetas
                  </h5>
                  <ul
                    className="pt-2 flex flex-col gap-6"
                    style={{ overflowY: 'scroll', maxHeight: '300px' }}
                  >
                    {recipes.map((dish) => (
                      <li
                        key={dish.name}
                        style={{
                          color: COLORS.text.primary,
                          fontSize: '18px',
                        }}
                      >
                        <span>{dish.name}</span>
                        <div>
                          {dish.ingredients.map((ingredient) => (
                            <span
                              key={ingredient.name}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '14px',
                              }}
                            >
                              {ingredient.name}
                              <span
                                style={{
                                  fontWeight: 'bold',
                                  marginRight: '10px',
                                }}
                              >
                                {ingredient.quantity}
                              </span>
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="flex-1 px-4 py-2 rounded-lg"
                  style={{ backgroundColor: COLORS.green }}
                >
                  <h5
                    className="text-2xl font-bold"
                    style={{ color: COLORS.text.white }}
                  >
                    Ingredientes
                  </h5>
                  <ul className="pt-2">
                    {ingredients.map((ingredient) => (
                      <li
                        key={ingredient.name}
                        style={{
                          color: COLORS.text.white,
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '18px',
                        }}
                      >
                        <span>{ingredient.name}</span>
                        <span>{ingredient.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          <div className="container max-w-6xl mx-auto self-center">
            <Card
              sx={{
                backgroundColor: COLORS.common.white,
                boxShadow: 'none',
                padding: '1rem',
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                borderRadius: '1rem',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:grid-cols-1">
                <div className="flex-1 overflow-y-auto px-4 py-2">
                  <h5
                    className="text-2xl font-bold"
                    style={{ color: COLORS.text.primary }}
                  >
                    Historial de platillos
                  </h5>
                  <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
                    <HistoryTable rows={dishes} />
                  </div>
                </div>
                <div
                  className="flex-1 overflow-y-auto px-4 py-2 rounded-lg"
                  style={{ backgroundColor: COLORS.green }}
                >
                  <h5
                    className="text-2xl font-bold"
                    style={{ color: COLORS.text.white }}
                  >
                    Compras en bodega
                  </h5>
                  <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
                    <BuysTable rows={ingredientsHistory} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}

export default App
