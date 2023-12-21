import Swal from 'sweetalert2';
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

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function Form({ onClickCancel, onClickRegister }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !(
    serviceName.length > 0 && login.length > 0 && passwordRegex.test(password)
  );

  const handleClickRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClickRegister({ serviceName, login, password, url });

    Toast.fire({
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
    });
    onClickCancel();
  };

  const handleClickShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
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
          type={ showPassword ? 'text' : 'password' }
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          data-testid="show-hide-form-password"
          onClick={ (e) => handleClickShowPassword(e) }
        >
          mostrar/esconder senha
        </button>
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
