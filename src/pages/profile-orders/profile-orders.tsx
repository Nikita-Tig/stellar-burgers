import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { selectUserOrders } from '../../services/slices/orders/orders-slice';
import { getOrdersThunk } from '../../services/slices/orders/actions';
import { getIngredientsThunck } from '../../services/slices/ingredients/actions';

export const ProfileOrders: FC = () => {
  /** взять переменную из стора */
  const dispatch = useDispatch();

  const orders: TOrder[] = useSelector(selectUserOrders);

  useEffect(() => {
    dispatch(getOrdersThunk());
    dispatch(getIngredientsThunck());
  }, [dispatch]);

  return <ProfileOrdersUI orders={orders} />;
};
