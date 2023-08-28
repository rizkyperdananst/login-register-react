const Label = (props) => {
    const {htmlFor, children } = props;

    return (
    <label htmlFor={htmlFor} className="text-2 font-bold block">
      {children}
    </label>
  );
};

export default Label;
