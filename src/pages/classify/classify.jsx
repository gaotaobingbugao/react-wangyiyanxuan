import React, { Component } from 'react'
import '../../css/classify.css'
//import BScroll from 'better-scroll'
import {Route} from 'react-router-dom'
import {getNavlist} from '../../api'

import ClassifyRight from '../../component/classify-right'
import Classifyleft from '../../component/classify-left'
export default class Classify extends Component {
    
  state={
      leftNavlist:[]
  }
    
  async  componentDidMount(){
        
       

        let result = await getNavlist()
        this.setState({
            leftNavlist:result
        })
    }
    render() {
        return (
           <div className='Classcontoner'>
               <div className='headetop'>
                   <input type="text"  placeholder='搜索商品, 共22428款好物'/>
               </div>
               <div className='contoner'>
                   <div className='left'>
                       <Classifyleft/>
                      
                   </div>
                   <div className='right'>
                   {/* <ClassifyRight/> */}
                   <Route path='/classify/classify-right'  component={ClassifyRight}></Route> 
                   </div>
               </div>
           </div>
                 
        )
    }
}