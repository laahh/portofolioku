import { Link } from "react-router-dom";
import InputForm from "../elements/Input/Index";
import Input from "../elements/Input/Input";
import Button from "../elements/button/index";

const FromRegister = () => {
  return (
    <form className="space-y-6" action="#">
      <div>
        <InputForm text="Name" name="text" type="text" placeholder="Full Name" />
      </div>
      <div>
        <InputForm text="Email" name="email" type="email" placeholder="email@mail.com" />
      </div>
      <div>
        <InputForm text="Password" name="password" type="password" placeholder="******" />
      </div>
      <div>
        <InputForm text="Konfirm Password" name="password" type="password" placeholder="******" />
      </div>
      <div className="flex items-start">
        <div className="flex items-start"></div>
      </div>
      <Button>Register</Button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Do You Have Account?{" "}
        <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">
          Login
        </Link>
      </div>
    </form>
  );
};

export default FromRegister;
