import styles from "./list.module.css"
import { Card } from "../export"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom"
import { PageLoading } from "../../components/export"
import { useAppContext } from "../../context/Context"

// const List = ({ catId, sort, maxPrice, subCat, page }) => {
const List = ({ catId }) => {

const { sub_category, sortprice, filterprice, pagenum } = useAppContext()
  const subCatFilters = sub_category?.map(item => `&filters[sub_categories][id][$eq]=${item}`).join('');
  const explore = `/products?populate=*${subCatFilters}&filters[price][$mte]=${filterprice}&sort=price:${sortprice}&pagination[page]=${pagenum}&pagination[pageSize]=10`;



  // const cat = `/products?populate=*&filters[categories]%20[id]%20[$eq]=${catId}${subCat.map(item => `&[filters] [sub_categories] [id] [$eq]=${item}`)}&[filters] [price] [$mte]=${maxPrice}&sort=price:${sort}`;
  const cat = `/products?populate=*&filters[categories]%20[id]%20[$eq]=${catId}${subCatFilters}&[filters] [price] [$mte]=${filterprice}&sort=price:${sortprice}&pagination[page]=${pagenum}&pagination[pageSize]=10`;
  // const newArivals = `products?populate=*&filters[type][$eq]=New%20Arrivals&${subCat.map(item => `[filters] [sub_categories] [id] [$eq]=${item}`)}&[filters] [price] [$mte]=${maxPrice}&sort=price:${sort}`;
  const newArivals = `products?populate=*&filters[type][$eq]=New%20Arrivals&${subCatFilters}&[filters] [price] [$mte]=${filterprice}&sort=price:${sortprice}&pagination[page]=${pagenum}&pagination[pageSize]=10`;

  const fetchUrlMap = new Map([
    [0, explore],
    [1, cat],
    [2, cat],
    [3, newArivals],
  ]);

  const fetchUrl = fetchUrlMap.get(catId)
  const { data, error, loading } = useFetch(fetchUrl);


  if (loading) {
    return <PageLoading />
  }

  return (
    <div className={styles.cards}>
      {data.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`}>  <Card item={item} /></Link>
      ))}
    </div>
  )
}

export default List