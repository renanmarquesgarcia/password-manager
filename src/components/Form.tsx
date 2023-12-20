import { useState } from 'react';
import { PasswordManagerType } from '../types/PasswordManagerType';

type FormProps = {
  onClickCancel: () => void,
  onClickRegister: (content: PasswordManagerType) => void,
};

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/;
const passwordValidation = {
  valid: 'valid-password-check',
  invalid: 'invalid-password-check',
};

function Form({ onClickCancel, onClickRegister }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const isDisabled = !(
    serviceName.length > 0 && login.length > 0 && passwordRegex.test(password)
  );

  const handleClickRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClickRegister({ serviceName, login, password, url });
    onClickCancel();
  };

  return (
    <section>
      <form>
        <label htmlFor="service-name">Nome do serviço</label>
        <input
          id="service-name"
          type="text"
          value={ serviceName }
          onChange={ ({ target }) => setServiceName(target.value) }
        />
        <label htmlFor="login">Login</label>
        <input
          id="login"
          type="text"
          value={ login }
          onChange={ ({ target }) => setLogin(target.value) }
        />
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <label htmlFor="url">URL</label>
        <input
          id="url"
          type="text"
          value={ url }
          onChange={ ({ target }) => setUrl(target.value) }
        />
        <button
          disabled={ isDisabled }
          onClick={ (e) => handleClickRegister(e) }
        >
          Cadastrar
        </button>
        <button onClick={ onClickCancel }>Cancelar</button>
      </form>
      <section>
        <p
          className={
            password.length >= 8 ? 'valid-password-check' : 'invalid-password-check'
          }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={
            password.length <= 16
              ? passwordValidation.valid
              : passwordValidation.invalid
          }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={
            /^(?=.*[A-Za-z])(?=.*[0-9])/.test(password)
              ? passwordValidation.valid
              : passwordValidation.invalid
          }
        >
          Possuir letras e números
        </p>
        <p
          className={
            /(?=.*[@$!%*?&#])/.test(password)
              ? passwordValidation.valid
              : passwordValidation.invalid
          }
        >
          Possuir algum caractere especial
        </p>
      </section>
    </section>
  );
}

export default Form;
