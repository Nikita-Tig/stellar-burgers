import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useDispatch, useSelector } from '../../services/store';
import { selectIngredients } from '../../services/slices/ingredients/ingredients-slice';
import { useParams } from 'react-router-dom';
import { getIngredientsThunck } from '../../services/slices/ingredients/actions';

export const IngredientDetails: FC = () => {
  /** взять переменную из стора */
  const dispatch = useDispatch();
  const id = String(Object.values(useParams()));

  const ingredientData = useSelector(selectIngredients).find(
    (ingredient) => ingredient._id === id
  );

  if (!ingredientData) {
    dispatch(getIngredientsThunck());
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
