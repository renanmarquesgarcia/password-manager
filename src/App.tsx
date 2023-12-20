import { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Title from './components/Title';
import './App.css';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      <header><Title /></header>
      { isFormVisible
        ? <Form onClickCancel={ handleToggleForm } />
        : <Button text="Cadastrar nova senha" onClickShowForm={ handleToggleForm } /> }
    </>
  );
}

export default App;
