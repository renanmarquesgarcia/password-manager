import { PasswordManagerType } from '../types/PasswordManagerType';

function Card({ serviceName, login, password, url }: PasswordManagerType) {
  return (
    <div>
      <a href={ url }>{ serviceName }</a>
      <p>{ login }</p>
      <p>{ password }</p>
    </div>
  );
}

export default Card;
