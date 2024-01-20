import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

export function useVerifyToken() {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      AuthService.verifyToken(token).then((response) => {
        setIsValid(!!response);
      });
    } else {
      setIsValid(false);

      navigate("/login");
    }
  }, []);

  return isValid;
}
