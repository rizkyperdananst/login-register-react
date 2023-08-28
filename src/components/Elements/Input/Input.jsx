const Input = (props) => {
    const {type, name, placeholder} = props;
  return (
    <input
      type={type}
      name={name}
      id={name}
      className="block border border-2 border-slate-700 rounded mt-1 p-3 w-full"
      placeholder={placeholder}
    />
  );
};

export default Input;
