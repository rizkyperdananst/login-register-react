import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm name="name" label="Name" type="text" placeholder="Name" />
      <InputForm name="email" label="Email" type="email" placeholder="Email" />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
      />

      <Button textButton="Register" />
    </form>
  );
};

export default FormRegister;
