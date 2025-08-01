interface IInputErrorMessageProps {
msg?: string;
}

const InputErrorMessage = ({msg}: IInputErrorMessageProps) => {
  return msg ? <span className="block text-red-700 font-semibold text-sm">{msg}</span> : null;

};

export default InputErrorMessage;