import React from 'react'; 

class Header extends React.Component {
    render(){
        return (
            <div> 
                <ul className="menu menu-hover-lines">
                    <li className="active"><a href="html">Home</a></li>
                    <li><a href="me.html">About Us</a></li>
                    <li><a href="html">Blog</a></li>
                    <li><a href="html">Services</a></li>
                    <li><a href="html">Products</a></li>
                    <li><a href="html">Contact</a></li>
                </ul>
            </div>
        ); 
    }
}

export default Header; 