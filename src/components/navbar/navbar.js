import React, {Component} from 'react'
import {menuItems} from './menuItems'


class Navbar extends Component {
    

    handleClick = () => {
       
    }
    render() {
        return(
            <nav>
                
                <div className='menu-icon'>

                </div>
                <ul className='navBarItems'>
                    {menuItems.map((item,index) => {
                        return (
                        <li key ={index}><a href={this.handleClick} className={item.cName}>{item.title}</a></li>

                        )
                    })}
                
                </ul>

            </nav>
        )
    }
}

export default Navbar