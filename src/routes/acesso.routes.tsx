import React from 'react';
import Acesso from '../pages/Acesso/Index';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio/Index';

const RotasAcesso: React.FC = () => (
    <BrowserRouter>
      <Route path="/" component={Acesso} />
      <Route path="/cadastrar" component={Acesso} />
      <Route path="/logado" component={Inicio} />
    </BrowserRouter>
  );

export default RotasAcesso;