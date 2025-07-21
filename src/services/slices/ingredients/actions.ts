import { getIngredientsApi } from '@api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getIngredientsThunck = createAsyncThunk(
  'ingredients/fetchIngredients',
  async () => getIngredientsApi()
);
