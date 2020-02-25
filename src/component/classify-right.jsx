import React, { Component } from 'react'
import BScroll from 'better-scroll'
import '../css/classify-right.css'

export default class ClassifyRight extends Component {

   async componentDidMount(){
        new BScroll('.rightNav', {
            scrollY: true,   
            click : true
       })
     

    }
    render() {
        return (
            <div>
                <div className='rightNav'>
                <ul>
                    <li>一个人的夜我的新</li>
                </ul>
                </div>
            </div>
        )
    }
}
