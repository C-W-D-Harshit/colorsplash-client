import styles from "./index.module.css"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
import { Card } from "../export"


const SimilarProductsCard = ({ title }) => {
    const { data, error, loading } = useFetch(`/products?populate=*&filters[sub_categories] [title] [$eq]=${title && title}`)

    return (
        <div className="container grid gap-4">
            <div className={styles.headingContainer} >
                <h1 className={styles.heading}>Similar Products</h1>
            </div>
            <div className={styles.cards}>
                {loading ? "loading...!" : data.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`}>
                        <Card item={item} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SimilarProductsCard