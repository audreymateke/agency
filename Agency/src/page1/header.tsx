import React from 'react'
import logo from '../assets/Icon mark 1.png'
import menu_icon from '../assets/menu-icon.png'

function header(){

    const time = new Date()
    const hrs = time.getHours();
    const min = time.getMinutes();

    return(
        <header>
        <div id='lgcn'>
            <span><img src={logo} alt='logo'  id='logo'/></span>
            <text>Evo Creatives</text>
        </div>
        <div><p>Calgary, Canada {hrs + ' : ' + min} PM</p></div>
        <div id='menu'>
            <text>Menu</text>
            <span><img src={menu_icon} alt='menu' id='menu_icon'/></span>
        </div>
    </header>
    )
}

export default header;