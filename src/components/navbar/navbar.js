import React, {Component} from 'react'
import {menuItems} from './menuItems'


class Navbar extends Component {
    

    handleClick = () => {
       
    }
    render() {
        return(
            <nav className='navBarItems'>
                
                <div className='menu-icon'>

                </div>
                <ul>
                    {menuItems.map((item,index) => {
                        return (
                        <li key ={index}><a className={item.cName}>{item.title}</a></li>

                        )
                    })}
                
                </ul>

            </nav>
        )
    }
}

export default Navbar