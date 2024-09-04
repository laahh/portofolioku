import { Children } from "react";
import FormLogin from "../fragments/Fromlogin";

const AuthLayout = (props) => {
  const { children, titel } = props;
  return (
    <div className="text-5xl justify-center flex min-h-screen items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-5 text-center">{titel}</h5>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
