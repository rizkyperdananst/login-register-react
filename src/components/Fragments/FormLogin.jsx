import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form>
      <InputForm name="email" label="Email" type="email" placeholder="Email" />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="Password"
      />

      <Button textButton="Login" />
    </form>
  );
};

export default FormLogin;
