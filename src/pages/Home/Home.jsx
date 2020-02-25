import React, { Component } from 'react'

import Swiper from 'swiper'
import {getDeom,getShopdata} from '../../api'
import 'swiper/css/swiper.min.css'
import '../../css/home.css'
export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            navList : [],
            shopList:[]
      }
    }
       
  async  componentDidMount(){
        new Swiper('.swiper-container', {
            
        })
        let result = await getDeom()
         this.setState({
             navList:result
         })

         let shopList = await getShopdata()
         
          this.setState({
            shopList: shopList.kingKongModule.kingKongList
          })
          console.log(this.state.shopList)
    
        
    }
    render() {
        const {navList,shopList} = this.state
     
        return (
            <div className='homeconter'>
                <div className='header'>
                <h2>网易严选</h2>
                <input type="text" placeholder='搜索商品，共22038款好物'/>
                <span>登录</span>
                </div>
                {/* 导航 */}
                <div className='navList'>
                    <ul>
                        {
                            navList.map((List,index)=>{
                            return <li key={index}>{List.name}</li>
                            })
                        }
                        
                    </ul>
                </div>
                {/* 轮播图 */}
                <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""/></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0c068cc1c7b8bee3ac33795cd00f2d22.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""/></div>
               </div>
              </div>
               {/* 三个链接  */}
               <div className='navs'>
                  <ul>
                      <li>网易自营品牌</li>
                      <li>30天无忧退货</li>
                      <li>48小时快速退款</li>
                  </ul>
              </div> 
             {/* 商品列表 */}
             <div className='shopList'>
                 <ul>
                     {
                        
                            shopList.map((List,index)=>{
                                   
                            return <li key={index}><img src={List.picUrl} alt=""/><span>{List.text}</span></li>
                            })
                        
                     }
                 </ul>
             </div>
             <div className='logoTop'>
                 <img src="https://yanxuan.nosdn.127.net/0b3485a20e21d26f419147d0b6341528.gif?imageView&quality=75" alt=""/>
             </div>
             <div className='logoMid'>
                   <div className='top'>
                       <div className='item'>
                           <img src="https://yanxuan.nosdn.127.net/0052ade75d710bff45322e9b2e590d14.gif?imageView&quality=75" alt=""/>
                       </div>
                   </div>
                    <div className='mid'>
                       <ul>
                           <li>
                                <span>超值特卖</span>
                                <span className='two'>低质二折</span>
                               <img src="https://yanxuan-item.nosdn.127.net/bec1e03e049656c524b35ffb3d1553f6.png?quality=75&type=webp&imageView&thumbnail=160x160" alt=""/>
                           </li>
                           <li>
                                <span>超值特卖</span>
                                <span className='two'>低质二折</span>
                               <img src="https://yanxuan-item.nosdn.127.net/46339e1d612f2961b3f3e73396018603.png?quality=75&type=webp&imageView&thumbnail=160x160" alt=""/>
                           </li>
                           <li>
                                 <span>超值特卖</span>
                                <span className='two'>低质二折</span> 
                               <img src="https://yanxuan-item.nosdn.127.net/2a4ca2f8fda9276d9347acd05e10b23f.png?quality=75&type=webp&imageView&thumbnail=160x160" alt=""/>
                           </li>
                       </ul>
                   </div>
                   <div className='bottom'>
                       <div className='item'>
                           <img src="https://yanxuan.nosdn.127.net/ba0ae82c90f533c74535cd65c043be34.png?quality=75&type=webp&imageView&thumbnail=750x0" alt=""/>
                       </div>
                   </div> 
             </div>
             <div className='newPer'>
                 <span> —— 新人专享礼包 ——</span>
             </div>
             <div className='newPerson'>
                 <div className='left'>
                     <span>新人专享礼包</span>
                     <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""/>
                 </div>
                 <div className='mid'></div>
                 <div className='right'>
                     <div className='top'>
                         <span>福利社</span>
                         <span>今日特价</span>
                         <img src="https://yanxuan-item.nosdn.127.net/93a20b799b978c1b3e800ce3f0e16842.png?quality=75&type=webp&imageView&thumbnail=200x200" alt=""/>
                     </div>
                     <div className='bottom'></div>
                 </div>
             </div>
             <div className='henggang'></div>
            </div>
           
       )
    }
}
