import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = (props) => {
  const { children } = props;

  return (
    <div className="flex justify-center min-h-screen items-center bg-sky-500">
      <div className="w-full max-w-md rounded-md border bg-white">
        <h2 className="text-center text-3xl mb-3 mt-5">Form Login</h2>
        <p className="text-center text-lg mb-6">
          Welcome, please enter your credentials
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
