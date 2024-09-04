import FormLogin from "../assets/components/fragments/Fromlogin";
import AuthLayout from "../assets/components/layouts/Auth";
import FromRegister from "../assets/components/fragments/FormRegister";

const LoginPage = (props) => {
  return (
    <AuthLayout titel="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
