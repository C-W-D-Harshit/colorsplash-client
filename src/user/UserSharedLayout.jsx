import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components/export"
import styles from './user.module.css'



const UserSharedLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserSharedLayout;
