const Button = (props) => {
  const textButton = props;
  return (
    <div className="p-5">
      <button className="w-full bg-sky-500 transation duration-150 ease-in hover:bg-sky-600 rounded p-2 text-white">
        {props.textButton}
      </button>
    </div>
  );
};

export default Button;
