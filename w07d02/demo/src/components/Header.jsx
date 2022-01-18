const Header = (props) => {
  console.log('props', props);

  const myParagraph = <p>This is my paragraph: { props.name }</p>;
  const myName = 'Bob';

  return (
    <div>
      <h2>{ props.message }</h2>
      <h2>Hello there { props.name }</h2>

      { myName }
      { myParagraph }
    </div>
  );

};

export default Header;
