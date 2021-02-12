import React from 'react';
import { useAuth } from '../contexts/acesso';

import RotasAcesso from '../routes/acesso.routes';
import RotasApp from '../routes/app.routes';
import Loading from './loading';

const Routes: React.FC = () => {
  const { logado, loading } = useAuth();

  if(loading){
    <Loading />
  }
  
  return logado ? <RotasApp /> : <RotasAcesso />;
}

export default Routes;