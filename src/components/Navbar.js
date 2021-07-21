import React, {useState} from 'react';
import '../css/Navbar.css';

const Navbar= () => {

    const [isMenuOpen, openMenu]= useState(false);

    const menuBtnClick= () => openMenu(true);
    const menuCloseBtnClick= () => openMenu(false);
    

    return(
        <div className= 'navbar'>
            <span className= {'logo ' + (isMenuOpen ? 'menu_open_hide ' : "")} >Logo</span>

            <div className= {'routes ' + (isMenuOpen ? 'routes_rollout ' : 'menu_close_hide ')}>
                <div className= 'menu_close_btn' onClick= {menuCloseBtnClick} >*</div>
                <span className= 'single_route'>Home</span>
                <span className= 'single_route'>About</span>
                <span className= 'single_route'>Services</span>
                <span className= 'single_route btn'>Sign Up</span>
            </div>

            <div className= {'menu_btn ' + (isMenuOpen ? 'menu_open_hide ' : "")} onClick= {menuBtnClick} >=</div>
        </div>
    );
}

export default Navbar;