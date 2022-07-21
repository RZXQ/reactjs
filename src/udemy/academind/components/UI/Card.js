const Card = props => {
  const classname = "rounded-lg shadow-xl" + props.className;

  // props.children:
  // 1. value: the value of children will always be the content between the opening and closing tags of your custom component.
  // 2. why would we do that? we were able to reduce some code duplication and keep your other components clean.
  return <div className={classname}>{props.children}</div>;
};

export default Card;
