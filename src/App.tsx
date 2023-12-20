import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Form from './components/Form';
import Title from './components/Title';
import { PasswordManagerType } from './types/PasswordManagerType';
import './App.css';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [passwordManagerList, setPasswordManagerList] = useState<
  PasswordManagerType[]>([]);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const addNewContent = (content: PasswordManagerType) => {
    setPasswordManagerList([...passwordManagerList, content]);
  };

  return (
    <>
      <header><Title /></header>
      { isFormVisible
        ? <Form
            onClickCancel={ handleToggleForm }
            onClickRegister={ addNewContent }
        />
        : <Button text="Cadastrar nova senha" onClickShowForm={ handleToggleForm } /> }
      <section>
        {
          passwordManagerList.length > 0
            ? passwordManagerList
              .map((element) => (<Card key={ element.serviceName } { ...element } />
              ))
            : <p>Nenhuma senha cadastrada</p>
        }
      </section>
    </>
  );
}

export default App;
