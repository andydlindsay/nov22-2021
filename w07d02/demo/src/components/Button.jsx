const Button = (props) => {
  return (
    <button onClick={props.runMyFunc}>{props.children}</button>
  );
};

export default Button;
