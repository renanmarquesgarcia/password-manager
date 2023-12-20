import { PasswordManagerType } from '../types/PasswordManagerType';

type CardProps = PasswordManagerType & { onClickRemove: (service: string) => void };

function Card({ serviceName, login, password, url, onClickRemove }: CardProps) {
  return (
    <div>
      <a href={ url }>{ serviceName }</a>
      <p>{ login }</p>
      <p>{ password }</p>
      <button
        onClick={ () => onClickRemove(serviceName) }
        data-testid="remove-btn"
      >
        Remover
      </button>
    </div>
  );
}

export default Card;
