import { useState } from "react";
import styles from "./index.module.css"
import { useAppContext } from "../../context/Context"
import { Checkbox, Col, InputNumber, Row, Slider, Modal, Radio } from 'antd';
import useFetch from "../../hooks/useFetch"

const Filters = ({ id }) => {
  const explore = '/sub-categories';
  const cat = `/sub-categories?[filters] [categories] [id] [$eq]=${id}`;
  const newArivals = `/sub-categories?filters [type] [$eq]=New%20Arrivals`;
  
  const { handle_Sub_Categories, handle_Sort_Price, handle_Filter_price, handle_Filter_Modal,   filterModal } = useAppContext()
  const fetchUrlMap = new Map([
    [0, explore],
    [1, cat],
    [2, cat],
    [3, newArivals],
  ]);

  const fetchUrl = fetchUrlMap.get(id);
  const { data } = useFetch(fetchUrl);
  const [selectedSubCat, setSelectedSubCat] = useState([])
  const [inputValue, setInputValue] = useState(0);
  const [sort, setSort] = useState('asc')

  const onChange = (e) => {
    const isChecked = e.target.checked
    const value = e.target.defaultValue
    setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter(item => item !== value))
    handle_Sub_Categories(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter(item => item !== value))
  }

  const onChangeSlider = (newValue) => {
    setInputValue(newValue);
    handle_Filter_price(newValue)
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    handle_Sort_Price(e.target.value);
  };

  const handleOk = () => {
    handle_Filter_Modal()
  };

  const handleCancel = () => {
    handle_Filter_Modal()
  };

  return (
    <Modal okButtonProps={{ ghost: true }} title="Filter" open={filterModal} onOk={handleOk} onCancel={handleCancel}>

      <div className={styles.filterList}>
        <h1 className=' text-base mb-2 border-gray-900 '>Filter by Sub categories</h1>
        {data.map((item) => (
          <Checkbox key={item.id} defaultValue={item.id} onChange={onChange}>{item.attributes.title}</Checkbox>
        ))}
      </div>

      <div className=' mt-3 '>
        <h1 className=' text-base mb-2 border-gray-900 ' >Filter by price</h1>
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={1000000}
              onChange={onChangeSlider}
              value={typeof inputValue === 'number' ? inputValue : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={1000000}
              style={{
                margin: '0 16px',
              }}
              value={inputValue}
              onChange={onChangeSlider}
            />
          </Col>
        </Row>
      </div>

      <div className=' mt-3 '>
        <h1 className=' text-base mb-2 border-gray-900 ' >Sort by price</h1>
        <Radio.Group value={sort} onChange={handleSortChange}>
          <Radio.Button value="asc" >Price {"(Lowest First)"}</Radio.Button>
          <Radio.Button value="desc">Price {"(Highest First)"}</Radio.Button>
        </Radio.Group>
      </div>

    </Modal>
  )
}

export default Filters