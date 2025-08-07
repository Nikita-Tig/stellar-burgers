import { createSlice } from '@reduxjs/toolkit';
import { TIngredient } from '@utils-types';
import { getIngredientsThunck } from './actions';

export interface IngredientsState {
  ingredients: TIngredient[];
  isLoading: boolean;
  error: string | undefined;
}

export const initialState: IngredientsState = {
  ingredients: [],
  isLoading: false,
  error: undefined
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  selectors: {
    selectIngredients: (state) => state.ingredients,
    selectIngredientsLoading: (state) => state.isLoading,
    selectIngredientsError: (state) => state.error
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsThunck.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getIngredientsThunck.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(getIngredientsThunck.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  }
});

export const {
  selectIngredients,
  selectIngredientsLoading,
  selectIngredientsError
} = ingredientsSlice.selectors;

export const ingredientsReducer = ingredientsSlice.reducer;
