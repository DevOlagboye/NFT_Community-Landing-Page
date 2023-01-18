import React from 'react'
import {Tabs} from "antd"
import "./SuperDrops.css"
import { ourTabs } from './data'

const SuperDrops = () => {
    const onChange = (key) => {
        console.log(key)
    }
  return (
    <div className='superdrops-container'>
        <h5>Super Hot Drop</h5>
        <Tabs defaultActiveKey='1' items={
        ourTabs.map(ourTab =>(
            {   
                key: ourTab.key,
                label: ourTab.Tab,
                children: ourTab.children
            }
        ))
        }  onChange={onChange}/>
    </div>
  )
}

export default SuperDrops