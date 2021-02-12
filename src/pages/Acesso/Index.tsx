import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useAuth} from '../../contexts/acesso';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const schema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatório'),
  senha: yup.string().required('Senha é obrigatória'),
});

const Acesso: React.FC = () => { 
  const {signIn} = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ exibeCampo, setExibeCampo ] = useState(false);

  const onClick = () => setExibeCampo(true);
  
  function handleLogin() {
    signIn();
  }

  const handleChange = ((e: React.FocusEvent<HTMLInputElement>): void => {
    if(e.target.name === 'email'){
      setEmail(e.target.value);
    } else if(e.target.name === 'senha'){
      setSenha(e.target.value);
    }
    localStorage.setItem(e.target.name, e.target.value);
  })
  
  const { register } = useForm({
    resolver: yupResolver(schema)
  });
  
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const NovoCadastro = () => (
    <TextField id="txtConfirmaSenha" label="Confirmar senha" variant="filled" autoFocus name="txtConfirmaSenha" type={"password"} style={{alignItems: 'left', width: 350}}/>
  )

  return (
  <div style={{ paddingLeft:'520px', flex: 1, justifyContent: 'center'}}>
    <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
    <Box
      boxShadow={3}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      m={15}
      p={15}
      width={400}
    >
      <Form style={{flex: 1, justifyContent: "center"}}>
        <div style={{textAlign: 'center'}}>
          <img src="/assets/medsenior-logo.png" alt="MedSenior" style={{height: 55}}/><br/><br/><br/>
          <label htmlFor="inputEmail" style={{ fontFamily:'sans-serif', fontWeight:'bold', color: 'green'}}>Entrar</label>
        </div>
        <br/>
        <Form.Group controlId="inputEmail" style={{alignItems: 'left'}}>
          <TextField id="email" label="E-mail" variant="filled" autoFocus onBlur={handleChange} name="email" type="email" ref={register} style={{alignItems: 'left', width: 350}}/>
        </Form.Group>
        <br/>
        <Form.Group controlId="password">
          <TextField id="senha" label="Senha" variant="filled" autoFocus onBlur={handleChange} name="senha" type={passwordShown ? "text" : "password"} ref={register} style={{alignItems: 'left', width: 350}}/>
          <span style={{position: 'absolute'}}>
            <i onClick={togglePasswordVisiblity}>{eye}</i>
          </span>
        </Form.Group>
        <br/>
        { exibeCampo ? <NovoCadastro /> : null }
        <br/>
        <div style={{alignSelf:'center'}}>
          <label style={{fontFamily:'sans-serif', fontSize: 12}}>Não possui conta ainda?</label>
          <a href="#" onClick={onClick} style={{fontFamily:'sans-serif', fontSize: 12, fontStyle: 'bold'}}> Registre-se aqui</a><br/><br/>
          <Button variant="contained" onClick={handleLogin} style={{fontFamily:'sans-serif', fontSize: 12, backgroundColor: 'green', color:'white', width: 200, paddingTop: 10, paddingBottom: 5, fontWeight: 'bold'}}>
            { exibeCampo ? 'Cadastrar' : 'Entrar' }
          </Button>
        </div>
      </Form>
    </Box>
  </div>
)}

export default Acesso;