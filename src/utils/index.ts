import { Dish } from '../types'

type MergeData = {
  updatedData: Dish[]
  dataStored: Dish[]
  newData: Dish
}
export const mergeData = ({ updatedData, dataStored, newData }: MergeData) => {
  const mergedArray = dataStored.filter(
    (dish) =>
      !updatedData.some((updatedDish) => updatedDish.dishId === dish.dishId)
  )

  if (!updatedData.some((dish) => dish.dishId === newData.dishId)) {
    mergedArray.push(newData)
  }

  return [...updatedData, ...mergedArray]
}
