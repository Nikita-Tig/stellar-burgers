import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearBurgerConstructor,
  selectBurgerConstructor
} from '../../services/slices/burger-constructor/burger-constructor-slice';
import { OrderBurgerThunk } from '../../services/slices/orders/actions';
import { AppDispatch } from 'src/services/store';
import {
  selectNewOrder,
  selectOrderRequest,
  setNewOrder
} from '../../services/slices/orders/orders-slice';

export const BurgerConstructor: FC = () => {
  /** взять переменные constructorItems, orderRequest и orderModalData из стора */
  const modalsRef = document.getElementById('modals');
  const dispatch = useDispatch<AppDispatch>();
  const constructorItems = useSelector(selectBurgerConstructor);

  const orderRequest = useSelector(selectOrderRequest);

  const orderModalData = useSelector(selectNewOrder).order;

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) {
      return;
    } else {
      const itemsId = [
        constructorItems.bun._id,
        ...constructorItems.ingredients.map((ingredient) => ingredient._id),
        constructorItems.bun._id
      ];
      dispatch(OrderBurgerThunk(itemsId)).then(() =>
        dispatch(clearBurgerConstructor())
      );
    }
  };

  const closeOrderModal = () => {
    dispatch(setNewOrder(false));
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      closeOrderModal={closeOrderModal}
    />
  );
};
