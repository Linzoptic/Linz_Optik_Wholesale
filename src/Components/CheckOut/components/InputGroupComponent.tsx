import InputComponnent from "./InputComponnent";

const InputGroupComponent = ({
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
      <InputComponnent
        className="w-full border outline-none mt-2"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </label>
  );
};

export default InputGroupComponent;
