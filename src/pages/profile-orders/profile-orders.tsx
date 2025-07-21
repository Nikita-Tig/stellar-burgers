import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrders } from '../../services/slices/orders/orders-slice';
import { getFeedsThunk } from '../../services/slices/orders/actions';
import { AppDispatch } from 'src/services/store';
import { getIngredientsThunck } from '../../services/slices/ingredients/actions';

export const ProfileOrders: FC = () => {
  /** взять переменную из стора */
  const dispatch = useDispatch<AppDispatch>();

  const value = localStorage.getItem('userOrders');

  const userOrders: TOrder[] =
    typeof value === 'string' ? JSON.parse(value) : [];

  const userOrdersId: string[] = userOrders.map((ing) => ing._id);

  const orders: TOrder[] = useSelector(selectOrders).filter((order) =>
    userOrdersId.includes(order._id)
  );

  useEffect(() => {
    dispatch(getFeedsThunk());
    dispatch(getIngredientsThunck());
  }, [dispatch]);

  return <ProfileOrdersUI orders={orders} />;
};
