import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';

export interface OrderState {
  constructor: {
    bun: TIngredient | null;
    ingredients: TConstructorIngredient[];
  };

  isLoading: boolean;
  error: string | undefined;
}

const initialState: OrderState = {
  constructor: {
    bun: null,
    ingredients: []
  },

  isLoading: false,
  error: undefined
};
export const userOrdersSlice = createSlice({
  name: 'burgerConstructor',
  initialState,
  reducers: {
    setBurgerConstructor: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.constructor.bun = action.payload;
        } else {
          state.constructor.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TIngredient) => {
        const id = nanoid();
        return { payload: { ...ingredient, id } };
      }
    },
    clearBurgerConstructor: (state) => {
      state.constructor.bun = null;
      state.constructor.ingredients = [];
    },
    removeIngredient: (state, action) => {
      state.constructor.ingredients = state.constructor.ingredients.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    moveIngredient: (state, action) => {
      state.constructor.ingredients.splice(
        action.payload.to,
        0,
        state.constructor.ingredients.splice(action.payload.from, 1)[0]
      );
    }
  },
  selectors: {
    selectBurgerConstructor: (state) => state.constructor
  }
});

export const { selectBurgerConstructor } = userOrdersSlice.selectors;
export const {
  setBurgerConstructor,
  clearBurgerConstructor,
  removeIngredient,
  moveIngredient
} = userOrdersSlice.actions;

export const ordersReducer = userOrdersSlice.reducer;
