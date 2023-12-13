// import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./products.module.css"
import { BiFilter } from "react-icons/bi"
import useFetch from "../../hooks/useFetch"
import { Pagination } from 'antd';
import { List, Filters } from "../../components/export"
import { useAppContext } from '../../context/Context';

const Products = () => {
  const { id } = useParams();
  const numID = Number(id)
  const { handle_Filter_Modal, sub_category, sortprice, filterprice, pagenum, handle_page_num } = useAppContext()

  const subCatFilters = sub_category?.map(item => `&filters[sub_categories][id][$eq]=${item}`).join('');
  const explore = `/products?populate=*${subCatFilters}&filters[price][$mte]=${filterprice}&sort=price:${sortprice}&pagination[page]=${pagenum}`;
  const cat = `/products?populate=*&filters[categories]%20[id]%20[$eq]=${numID}${subCatFilters}&[filters] [price] [$mte]=${filterprice}&sort=price:${sortprice}&pagination[page]=${pagenum}`;
  const newArivals = `products?populate=*&filters[type][$eq]=New%20Arrivals&${subCatFilters}&[filters] [price] [$mte]=${filterprice}&sort=price:${sortprice}&pagination[page]=${pagenum}`;

  const fetchUrlMap = new Map([
    [0, explore],
    [1, cat],
    [2, cat],
    [3, newArivals],
  ]);

  const fetchUrl = fetchUrlMap.get(numID);
  const { page } = useFetch(fetchUrl);
  // const [current, setCurrent] = useState(1);


  const onPageChange = (page) => {
    handle_page_num(page)
  };


  const showModal = () => {
    handle_Filter_Modal()
  };

  let headingText = "";
  if (numID === 0) {
    headingText = "Explore";
  } else if (numID === 1) {
    headingText = "Men's Clothing";
  } else if (numID === 2) {
    headingText = "Women's Clothing";
  } else {
    headingText = "New Arrivals";
  }



  return (
    <div className='p-4  grid gap-10 relative '>
      <div className='flex items-center justify-between'>
        <h1 className={styles.heading}>{headingText}</h1>
        <button onClick={showModal} className={styles.filterBtn} >Filter <BiFilter /></button>
      </div>
      <Filters id={numID} />
      <div className={styles.lists}>
        {/* <List catId={numID} sort={sort} maxPrice={inputValue} subCat={selectedSubCat}  /> */}
        <List catId={numID} />
      </div>
      <div className='mt-4 mb-4 flex items-center justify-center' >
        {page.pageCount > 1 && <Pagination onChange={onPageChange} defaultCurrent={pagenum} total={page.total} />}
      </div>
    </div>
  )
}

export default Products