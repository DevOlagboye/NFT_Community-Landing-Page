import React from 'react'
import {Tabs} from "antd"
import "./SuperDrops.css"

const SuperDrops = () => {
    const onChange = (key) => {
        console.log(key)
    }
    const items = [{
        key: "1",
        label: "Item 1",
        children: "Children"

    }]
  return (
    <div className='superdrops-container'>
        <h5>Super Hot Drop</h5>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange}/>
    </div>
  )
}

export default SuperDrops