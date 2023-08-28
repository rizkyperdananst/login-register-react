import InputForm from "../Elements/Input"

const FormLogin = () => {
    return (
        <form>
            <InputForm name="email" label="Email" type="email" placeholder="Email" />
            <InputForm name="password" label="Password" type="password" placeholder="Password" />
        </form>
    )
};

export default FormLogin;