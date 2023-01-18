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
        <h5 className='drops-text'>Super Hot Drop</h5>
        <Tabs className='tabs-ant'  items={
        ourTabs.map(ourTab =>(
            {   
                key: ourTab.key,
                label: ourTab.Tab,
                children: ourTab.children,
                activeKey: ourTab.key
            }
        ))
        }  onChange={onChange}/>
    </div>
  )
}

export default SuperDrops