import AuthLayout from "../assets/components/layouts/Auth";
import FromRegister from "../assets/components/fragments/FormRegister";
const RegisterPage = (props) => {
  return (
    <AuthLayout titel="Register">
      <FromRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
