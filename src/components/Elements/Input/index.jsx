import Input from '../Input/Input.jsx';
import Label from '../Input/Label.jsx';

const InputForm = (props) => {
    const { name, label, type, placeholder } = props;
  return (
    <div className="p-5">
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  )
};

export default InputForm;
