import { ReactElement } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from '../../hooks/hooks';

type Props = {
  children: ReactElement;
};

const RequireAuth = ({ children }: Props) => {
  const location = useLocation();
  const store = useAppSelector((store) => store.person.personList);
  if (!Object.values(store)[0]) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
  return children;
};
export default RequireAuth;
