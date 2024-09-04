import Label from "./Label";
import Input from "./Input";
const InputForm = (props) => {
  const { text, name, type, placeholder } = props;

  return (
    <div>
      <Label htmlFor={name} text={text}></Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
