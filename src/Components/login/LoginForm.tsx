import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import Photo from "../../images/Rectangle.svg";
import { LOCAL_STORAGE_KEYS, LOGIN_URL, PAGES } from "../../utils/constants/constants";
import { CatchError } from "../../utils/interface";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [userpassword, setUserpassword] = useState<string>("");
  const [showpassword, setShowpassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<CatchError>();

  const formHendler = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username);
    console.log(userpassword);
    
    try {
      const resoult = await axios.post(
        `${LOGIN_URL}`,
        JSON.stringify({
          username: username,
          password: userpassword,
        })
      );
      if (resoult) {
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.JWT_TOKEN,
          JSON.stringify(resoult.data.jwt_token)
        );
        localStorage.setItem(
          LOCAL_STORAGE_KEYS.USERNAME,
          JSON.stringify(username)
        );
        navigate(`/${PAGES.HOME}`);
      }
    } catch (error: any) {
      setLoginError(error);
    }
    setUsername("");
    setUserpassword("");
  };

  const changeIcon = () => {
    setShowpassword(!showpassword);
  };

  return (
    <div className="block text-center md:flex items-center justify-around p-3 border mt-5 rounded-md px-4">
      <div>
        <img
          src={Photo}
          alt="Photo_Logo"
          className="w-full h-auto md:h-[500px] px-2 object-cover"
        />
      </div>
      <div className="flex md:block justify-center">
        <form
          className="flex flex-col max-w-[500px] text-center md:text-left mt-5 md:w-full"
          onSubmit={formHendler}
        >
          <label>
            <span className="text-sky-700 font-[600] text-[14px] xs:text-[16px]">
              USERNAME
            </span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              value={username}
              type="text"
              name="text"
              className="w-full border border-sky-900 mt-2 mb-3 p-1 outline-none rounded-md"
            />
          </label>
          <label className="relative">
            <span className="text-sky-700 font-[600] text-[14px] xs:text-[16px]">
              PASSWORD
            </span>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserpassword(e.target.value)
              }
              value={userpassword}
              type={!showpassword ? "password" : "text"}
              name="password"
              className="w-full border border-sky-900 mt-2 p-1 outline-none rounded-md"
            />
            {!showpassword ? (
              <AiOutlineEye
                className="absolute right-2 top-10 text-teal-900"
                onClick={changeIcon}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="absolute right-2 top-10 text-teal-900"
                onClick={changeIcon}
              />
            )}
          </label>
          <p className="text-[15px] font-[600] text-sky-900 mt-1 underline hover:no-underline">
            <Link to="/emailPass">Forgot your Password?</Link>
          </p>
          <input
            type="submit"
            className="uppercase bg-sky-900 text-sky-100 font-bold text-[18px] px-4 py-[8px] mt-3 rounded-md hover:bg-sky-300 hover:text-sky-900 duration-300 cursor-pointer"
            value={"login"}
          />
        {typeof loginError?.response.data.message === "string" && loginError?.response.data.message && (
          <div className="text-red-700 font-[600]" dangerouslySetInnerHTML={{__html:loginError?.response.data.message}}/>
        )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
