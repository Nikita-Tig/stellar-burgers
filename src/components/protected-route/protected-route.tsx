import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {
  isAuthCheckedSelector,
  userSelector
} from '../../services/slices/user/user-slice';
import { Preloader } from '@ui';

type props = {
  children: React.ReactElement;
  OnlyUnAuth?: boolean;
};

export const ProtectedRoute = ({ children, OnlyUnAuth }: props) => {
  const location = useLocation();
  const isAuthChecked = useSelector(isAuthCheckedSelector);
  const user = useSelector(userSelector);

  if (!isAuthChecked) {
    return <Preloader />;
  }

  if (OnlyUnAuth && user) {
    const from = location.state?.from || { pathname: '/' };
    const backgroundLocation = location.state?.from?.background || null;
    return (
      <Navigate replace to={from} state={{ background: backgroundLocation }} />
    );
  }

  if (!OnlyUnAuth && !user) {
    return (
      <Navigate
        replace
        to='/login'
        state={{
          from: {
            ...location,
            background: location.state?.background,
            state: null
          }
        }}
      />
    );
  }

  return children;
};
