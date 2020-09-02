import * as React from 'react';

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <section className="nav-section bg-mySoftblue">
            <div className="bk-transp text-myDkgrey">Navbar</div>
        </section>
    );
}

export default Navbar;