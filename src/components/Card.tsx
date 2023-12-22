import { PasswordManagerType } from '../types/PasswordManagerType';
import lockerICon from '../images/locker-img.svg';
import trashIcon from '../images/trash-img.svg';

type CardProps = PasswordManagerType & {
  onClickRemove: (service: string) => void,
  hidePassword: boolean,
};

function Card({
  serviceName, login, password, url, onClickRemove, hidePassword }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-service">
        <img src={ lockerICon } alt="ícone de cadeado" />
        <a href={ url }>{ serviceName }</a>
      </div>
      <div className="card-login">
        <p><span>Login</span></p>
        <p>{ login }</p>
      </div>
      <hr />
      <div className="card-password">
        <p><span>Senha</span></p>
        <p>{ hidePassword ? '******' : password }</p>
      </div>
      <hr />
      <div className="remove-btn-container">
        <button
          onClick={ () => onClickRemove(serviceName) }
          data-testid="remove-btn"
          className="remove-btn"
        >
          <img src={ trashIcon } alt="ícone de lixeira" />
        </button>
      </div>
    </div>
  );
}

export default Card;
