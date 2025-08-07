import {
  initialState,
  moveIngredient,
  ordersReducer,
  removeIngredient,
  userOrdersSlice
} from './burger-constructor-slice';

const testBun = {
  _id: '643d69a5c3f7b9001cfa093c',
  name: 'Краторная булка N-200i',
  type: 'bun',
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: 'https://code.s3.yandex.net/react/code/bun-02.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
  __v: 0
};

const testIngredient = {
  _id: '643d69a5c3f7b9001cfa0941',
  name: 'Биокотлета из марсианской Магнолии',
  type: 'main',
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: 'https://code.s3.yandex.net/react/code/meat-01.png',
  image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
  image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
  __v: 0
};

const testInitialState = {
  ...initialState,
  constructor: {
    bun: testBun,
    ingredients: [
      { ...testIngredient, id: '1-ingredient-fixed-id' },
      { ...testIngredient, id: '2-ingredient-fixed-id' },
      { ...testIngredient, id: '3-ingredient-fixed-id' }
    ]
  }
};

describe('burgerConstructor', () => {
  test('adding bun action', () => {
    const action = {
      type: userOrdersSlice.actions.setBurgerConstructor.type,
      payload: {
        ...testBun,
        id: 'bun-fixed-id'
      }
    };

    const nextState = ordersReducer(undefined, action);

    expect(nextState).toEqual({
      ...initialState,
      constructor: {
        bun: {
          ...testBun,
          id: 'bun-fixed-id'
        },
        ingredients: []
      }
    });
  });
  test('adding ingredient action', () => {
    const action = {
      type: userOrdersSlice.actions.setBurgerConstructor.type,
      payload: {
        ...testIngredient,
        id: 'ingredient-fixed-id'
      }
    };

    const nextState = ordersReducer(undefined, action);

    expect(nextState).toEqual({
      ...initialState,
      constructor: {
        bun: null,
        ingredients: [{ ...testIngredient, id: 'ingredient-fixed-id' }]
      }
    });
  });
  test('clear action', () => {
    const action = {
      type: userOrdersSlice.actions.clearBurgerConstructor.type
    };

    const nextState = ordersReducer(undefined, action);

    expect(nextState).toEqual({
      ...initialState,
      constructor: {
        bun: null,
        ingredients: []
      }
    });
  });
  test('delete ingredient action', () => {
    const nextState = ordersReducer(
      testInitialState,
      removeIngredient('2-ingredient-fixed-id')
    );

    expect(nextState).toEqual({
      ...initialState,
      constructor: {
        bun: testBun,
        ingredients: [
          { ...testIngredient, id: '1-ingredient-fixed-id' },
          { ...testIngredient, id: '3-ingredient-fixed-id' }
        ]
      }
    });
  });
  test('move ingredient action', () => {
    let index = 0;
    const nextState = ordersReducer(
      testInitialState,
      moveIngredient({ from: index, to: (index += 1) })
    );

    expect(nextState).toEqual({
      ...initialState,
      constructor: {
        bun: testBun,
        ingredients: [
          { ...testIngredient, id: '2-ingredient-fixed-id' },
          { ...testIngredient, id: '1-ingredient-fixed-id' },
          { ...testIngredient, id: '3-ingredient-fixed-id' }
        ]
      }
    });
  });
});
