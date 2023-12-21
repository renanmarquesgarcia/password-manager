type ButtonProps = {
  text: string,
  onClickShowForm: () => void
};

function Button({ text, onClickShowForm }: ButtonProps) {
  return (
    <button
      className="register-btn"
      onClick={ onClickShowForm }
    >
      { text }
    </button>
  );
}

export default Button;
