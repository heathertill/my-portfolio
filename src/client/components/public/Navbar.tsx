import * as React from 'react';
import { useState, useReducer } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { handleAnimation } from '../../utils/formService';
import { fallDown as Menu } from 'react-burger-menu'

export interface NavbarProps { }

const Navbar: React.SFC<NavbarProps> = () => {

    const homeId = location.pathname === "/" ? "active-item" : "";
    const aboutId = location.pathname === "/about" ? "active-item" : "";
    const contactId = location.pathname === "/contact" ? "active-item" : "";
    const workId = location.pathname === "/work" ? "active-item" : "";


    const [open, setOpen] = useState(false);

   

 


    return (
        <section className="nav-section sticky-top" >
            <Menu
                // isOpen={open}
                disableAutoFocus
                noOverlay
                customCrossIcon={false}
            >
                <a id={homeId} href="/" className="menu-item" >Home</a>
                <a id={aboutId} href="/about" className="menu-item" >About</a>
                <a id={workId} href="/work" className="menu-item">Work</a>
                <a id={contactId} href="/contact" className="menu-item">Contact</a>
                
            </Menu>



            {/* <div className="hamburger-menu">
                <div className="nav-icon p-3">
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={handleClick}
                        strokeWidth={6}
                        width={40}
                        height={30}
                        rotate={0}
                        color='#ff3b3f'
                        animationDuration={.5}
                    />

                </div>
                {open ?
                    <div >
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#sec2" className="nav-link"
                                // onClick={handleClick}
                                >Section 2</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Another Section</a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link">Page</a>
                            </li>
                        </ul>
                    </div>
                    : null}
            </div> */}
        </section>
    );
}

export default Navbar;