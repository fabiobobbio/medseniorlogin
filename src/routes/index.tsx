import React from 'react';
import { useAuth } from '../contexts/acesso';

import RotasAcesso from '../routes/acesso.routes';
import RotasApp from '../routes/app.routes';
import Loading from './loading';

const Routes: React.FC = () => {
  const { logado, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ flex: 1, justifyContent: "center", paddingTop:400, paddingLeft: 800 }}>
        <Loading />
      </div>
    );
  }
  
  return logado ? <RotasApp /> : <RotasAcesso />;
}

export default Routes;