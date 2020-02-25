import React, { Component } from 'react'
import {Route,Switch,NavLink} from 'react-router-dom'
import Home from './pages/Home/Home'
import Buying from './pages/buying/buying'
import Classify from './pages/classify/classify'
import Person from './pages/person/person'
import Shoplist from './pages/shoplist/shoplist'
import './css/app.css'
export default class App extends Component {
  render() {
    return (
      <div>
               <div className='footer'>
                <NavLink className='item'  to='/home'      activeClassName='demo'>首页</NavLink>
                <NavLink className='item'  to='/classify'  activeClassName='demo'>分类</NavLink>
                <NavLink className='item'  to='/buying'    activeClassName='demo'>值得买</NavLink>
                <NavLink className='item'  to='/shoplist'    activeClassName='demo'>购物车</NavLink>
                <NavLink className='item'  to='/person'    activeClassName='demo'>个人</NavLink>
               
               </div>
            <Switch>
               <Route path='/home'  component={Home} Upstate={this.Upstate}></Route>
               <Route path='/classify'  component={Classify}></Route> 
               <Route path='/buying'  component={Buying}></Route> 
               <Route path='/person'  component={Person}></Route>
               <Route path='/shoplist'  component={Shoplist}></Route>    
            </Switch>
        </div>
    )
  }
}

