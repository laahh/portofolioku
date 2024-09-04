import InputForm from "../elements/Input/Index";
import Input from "../elements/Input/Input";
import Button from "../elements/button/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormLogin = (props) => {
  const Navigate = useNavigate();
  const HandleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log("login");
    Navigate("/product");
  };
  return (
    <form className="space-y-6" onSubmit={HandleLogin}>
      <div>
        <InputForm text="Email" name="email" type="email" placeholder="email@mail.com" />
      </div>
      <div>
        <InputForm text="Password" name="password" type="password" placeholder="******" />
      </div>
      <div className="flex items-start">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <Input
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
          Lost Password?
        </a>
      </div>
      <Button type="submit">Login</Button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?{" "}
        <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500">
          Create account
        </Link>
      </div>
    </form>
  );
};

export default FormLogin;
