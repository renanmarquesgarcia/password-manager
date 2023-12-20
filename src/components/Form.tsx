type FormProps = {
  onClickCancel: () => void;
};

function Form({ onClickCancel }: FormProps) {
  return (
    <form>
      <label htmlFor="service-name">Nome do serviço</label>
      <input id="service-name" type="text" />
      <label htmlFor="login">Login</label>
      <input id="login" type="text" />
      <label htmlFor="password">Senha</label>
      <input id="password" type="password" />
      <label htmlFor="url">URL</label>
      <input id="url" type="text" />
      <button>Cadastrar</button>
      <button onClick={ onClickCancel }>Cancelar</button>
    </form>

  );
}

export default Form;
