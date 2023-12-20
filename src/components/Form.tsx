import { useState } from 'react';

type FormProps = {
  onClickCancel: () => void;
};

// /^
//   (?=.*\d)              // deve conter ao menos um dígito
//   (?=.*[a-z])           // deve conter ao menos uma letra minúscula
//   (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
//   (?=.*[$*&@#])         // deve conter ao menos um caractere especial
//   [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
// $/

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

function Form({ onClickCancel }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const isDisabled = !(
    serviceName.length > 0 && login.length > 0 && passwordRegex.test(password)
  );

  return (
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
      <button disabled={ isDisabled }>Cadastrar</button>
      <button onClick={ onClickCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
