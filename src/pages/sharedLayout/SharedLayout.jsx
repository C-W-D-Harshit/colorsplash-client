import { Outlet } from "react-router-dom";
import styles from "./index.module.css"
import { Navbar, Footer} from "../../components/export"

const SharedLayout = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SharedLayout