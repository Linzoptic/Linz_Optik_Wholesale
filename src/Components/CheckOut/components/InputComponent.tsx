const InputComponent = ({
  name,
  imgSrc,
  placeholder,
  inputValue,
  setInputValue,
}: {
  name: string;
  imgSrc: string;
  placeholder: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <label className="flex mt-[20px] flex-col">
      <div className="flex">
        {name}
        <img src={imgSrc} alt="mandatory" className="w-[8px] h-[8px]" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        name="firstName"
        value={inputValue}
        className="w-full border outline-none mt-2"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </label>
  );
};

export default InputComponent;
