import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio/Index';

const RotasApp: React.FC = () => (
  <BrowserRouter>
    <Route path="/Inicio" component={Inicio} />
  </BrowserRouter>
);

export default RotasApp;