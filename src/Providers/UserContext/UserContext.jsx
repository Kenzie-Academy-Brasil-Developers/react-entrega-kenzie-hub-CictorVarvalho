import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Apihub } from "../../service/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navToDashboard = useNavigate();
  const navToLogin = useNavigate();

  const registerNewUser = async (registerData) => {
    try {
      setIsLoading(true);
      await Apihub.post("/users", registerData);
      toast.success("Conta criada com sucesso!", { theme: "dark" });
      setTimeout(goToLogin, 4000);
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado", { theme: "dark" });
    } finally {
      setIsLoading(false);
    }
  };

  const logUser = async (userData) => {
    try {
      const res = await Apihub.post("/sessions", userData);
      localStorage.setItem("@USERID", JSON.stringify(res.data.user.id));
      localStorage.setItem("@TOKEN", JSON.stringify(res.data.token));
      goToDashboard(res.data.user.id)
    } catch (error) {
      console.log(error);
    }
  };

  const goToDashboard = (id) => {
    window.location.reload(false)
    navToDashboard(`/dashboard/${id}`)
  };

  const goToLogin = () => {
    navToLogin("/");
  };

  return (
    <UserContext.Provider
      value={{ logUser, registerNewUser, isLoading, goToLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};