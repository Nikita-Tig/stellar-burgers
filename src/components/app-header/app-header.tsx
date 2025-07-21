import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from 'react-redux';
import { userSelector } from '../../services/slices/user/user-slice';

export const AppHeader: FC = () => {
  const userName = useSelector(userSelector)?.name;

  return <AppHeaderUI userName={userName ? userName : ''} />;
};
