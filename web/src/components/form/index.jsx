import "./input.css";

const Input = ({
  type,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) => {
  return (
    <input
      className="form-control label"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
      {...(multiple ? { multiple } : "")}
    />
  );
};

export default Input;
