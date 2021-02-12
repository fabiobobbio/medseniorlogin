import React from 'react';
import { AuthProvider } from './contexts/acesso';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
