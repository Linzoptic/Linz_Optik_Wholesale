const InputComponnent = ({
  value,
  onChange,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input value={value} onChange={onChange} {...rest} />;
};

export default InputComponnent;
