type ButtonProps = {
  text: string,
  onClickShowForm?: () => void
};

function Button({ text, onClickShowForm = () => '' }: ButtonProps) {
  return (<button onClick={ onClickShowForm }>{ text }</button>);
}

export default Button;
