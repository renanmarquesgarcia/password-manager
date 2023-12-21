import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Form from './components/Form';
import Title from './components/Title';
import { PasswordManagerType } from './types/PasswordManagerType';
import lockerIcon from './images/locker-img.svg';
import './App.css';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [passwordManagerList, setPasswordManagerList] = useState<
  PasswordManagerType[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const addNewContent = (content: PasswordManagerType) => {
    setPasswordManagerList([...passwordManagerList, content]);
  };

  const removeCard = (service: string) => {
    const newList = passwordManagerList
      .filter(({ serviceName }) => serviceName !== service);
    setPasswordManagerList(newList);
  };

  const handleClickHidePassword = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <header><Title /></header>
      { isFormVisible
        ? <Form
            onClickCancel={ handleToggleForm }
            onClickRegister={ addNewContent }
        />
        : <Button
            text="Cadastrar nova senha"
            onClickShowForm={ handleToggleForm }
        /> }
      <hr className="line" />
      <section>
        {
          passwordManagerList.length > 0
            ? (
              <>
                <label htmlFor="hide-passwords">Esconder senhas</label>
                <input
                  type="checkbox"
                  id="hide-passwords"
                  checked={ isChecked }
                  onClick={ handleClickHidePassword }
                />
                {
                  passwordManagerList
                    .map((element) => (
                      <Card
                        key={ element.serviceName }
                        { ...element }
                        onClickRemove={ removeCard }
                        hidePassword={ isChecked }
                      />
                    ))
                }
              </>
            )
            : (
              <section>
                <p className="no-registed-password">Nenhuma senha cadastrada</p>
                <img className="locker-img" src={ lockerIcon } alt="icone de cadeado" />
              </section>
            )
        }
      </section>
    </>
  );
}

export default App;
