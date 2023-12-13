import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// этот компонент может использоваться для ограничения доступа к определенным маршрутам в зависимости от условия isAllowed,
// и при необходимости перенаправлять пользователя на другой путь.

type PrivateRouterProps = {
  children?: JSX.Element;
  isAllowed: boolean;
  redirectPath?: string;
};

export default function PrivateRouter({
  children,
  isAllowed,
  redirectPath = '/',
}: PrivateRouterProps): JSX.Element {
  if (isAllowed) return <Navigate to={redirectPath} />;
  return children || <Outlet />;
}
