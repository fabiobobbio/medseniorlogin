import { Button } from '@material-ui/core';
import React from 'react';
import {useAuth} from '../../contexts/acesso';

const Inicio: React.FC = () => {
  const { signOut } = useAuth();
  
  function handleSignOut(){
    signOut();
  }

  return (
    <div>
      Bem Vindo! <br/><br/>
      Agora você é um filiado!<br/>
      <p>dhsajhdjkah dkjhaskjdhkjash dkjashkjd akjdhsjkah dkjahDKJHA DKJhaSJKDHS AKJHKJA HDkjhaKJ HSAKJSAHKJHK JDhsaKJ LDHSAKJ</p>
      <br/><br/><br/>
      <Button title="Sair" onClick={handleSignOut}/>
    </div>
  );
  
};

export default Inicio;