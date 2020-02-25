import React, { Component } from 'react'
import '../css/clssify-left.css'
import BScroll from 'better-scroll'
import {getNavlist} from '../api'
import {NavLink} from 'react-router-dom'
export default class ClassifyReft extends Component {
  state = {
      LeftNavList:[]
  }
  async  componentDidMount(){
        new BScroll('.leftnav', {
            scrollY: true,   
            click : true
       })

       let result = await getNavlist()
       this.setState({
        LeftNavList: result.categoryL1List    
       })  
      console.log(this.state.LeftNavList) 
    }
    render() {
        const {LeftNavList} = this.state
        return (
          
            <div>
                <div className='leftnav'>
                    <ul>
                        
                            {
                             LeftNavList.map((item,index)=>{
                             return <li  key={index}> <NavLink   to='/classify/classify-right'  activeClassName='demo'>{item.name}</NavLink> </li>  
                             })   
                            }
                        
                    </ul>
                </div>
            </div>
        )
    }
}
