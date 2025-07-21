import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useDispatch } from 'react-redux';
import { logoutUserThunk } from '../../services/slices/user/actions';
import { AppDispatch } from 'src/services/store';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    <Navigate replace to={'/login'} />;
    dispatch(logoutUserThunk());
  };

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
