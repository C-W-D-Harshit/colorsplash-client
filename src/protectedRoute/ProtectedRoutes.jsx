import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../context/Context";
import styles from "./index.module.css"
// import loading from "../assets/loading.svg"
const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      {userLoading ? (
        <p>Loading...</p>
      ) : (
        (user === null || (typeof user === 'object' && Object.keys(user).length === 0)) ? (
          navigate("/"), null 
        ) : (
          <>
            {children}
          </>
        )
      )}
    </>
  )

};

export default ProtectedRoute;
