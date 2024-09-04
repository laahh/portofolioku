//compomen react menggunakan class

import React from "react";
import Button from "./assets/components/elements/button/index.jsx";
import FormLogin from "./assets/components/fragments/Fromlogin.jsx";
import AuthLayout from "./assets/components/layouts/Auth.jsx";
import LoginPage from "./pages/login.jsx";
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         type="button"
//         class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//       >
//         Componen Class
//       </button>
//     );
//   }
// }

//compomen react menggunakan function
// function Tombol() {
//   return (
//     <button
//       type="button"
//       class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//     >
//       Component Function
//     </button>
//   );
// }

//compomen react menggunakan arrow function
// const Tombolarrow = () => {
//   return (
//     <button
//       type="button"
//       class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//     >
//       Componen Arrow fnction
//     </button>
//   );
// };

//contoh componen menggunakan props atau properti
// const Tombolprops = (props) => {
//   return (
//     <button
//       className={`focus:outline-none text-white ${props.variant} hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
//     >
//       Tombol pake props
//     </button>
//   );
// };

//contoh componen props untuk text
// const Tomboltext = (props) => {
//   return (
//     <button
//       className={`focus:outline-none text-white ${props.color} hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
//     >
//       {props.text}
//     </button>
//   );
// };

// contoh props dari childer
// const Tombolchild = (props) => {
//   return (
//     <button
//       className={`focus:outline-none text-white ${props.color} hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}
//     >
//       {props.children}
//     </button>
//   );
// };

// destructuring pada props
// const Tomboldestruc = (props) => {
//   const { color = "bg-green-500", text = "ini default" } = props;
//   return (
//     <button className={`focus:outline-none text-white ${color} hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900`}>
//       {text}
//     </button>
//   );
// };

//ini contoh pemanggilan props
{
  /* <Button></Button>
        <Tombol></Tombol>
        <Tombolarrow></Tombolarrow>
        <Tombolprops variant="bg-yellow-500"></Tombolprops>
        <Tomboltext color="bg-purple-500" text="Ini text dari props"></Tomboltext>
        <Tombolchild color="bg-lime-500">ini text dari childern</Tombolchild>
        <Tomboldestruc></Tomboldestruc> */
}
{
  /* <Button>INI BUTTON</Button> */
}

function App() {
  return <LoginPage></LoginPage>;
}

export default App;
