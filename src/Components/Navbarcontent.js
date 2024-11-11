import React, { useState, useRef, useEffect } from 'react';
import { NavLink,Link} from 'react-router-dom';
import Logo from "../Assets/HuBuzz.png";
import { Horcontent } from './Horcontent';
import { Vertcontent } from './Vertcontent';
import "../Styles/Navbarcontent.css";
import HamburgerMenu from "../Assets/HamburgerMenu.png";

const Navbarcontent = () => {
    const Dropdown = useRef();
    const [showVertContent, setShowVertContent] = useState(false);
    const [showHorizontalMenu, setShowHorizontalMenu] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", handleDisappearing);
        return () => {
            document.removeEventListener("mousedown", handleDisappearing);
        };
    }, []);

    const handleDisappearing = (e) => {
        if (Dropdown.current && !Dropdown.current.contains(e.target)) {
            setShowVertContent(false);
        }
    };

    const handleClick = (item) => {
        if (item.name === "Products") {
            setShowVertContent(!showVertContent);
        } else {
            setShowVertContent(false);
        }
    };

    const toggleMenu = () => {
        setShowHorizontalMenu(!showHorizontalMenu);
    };

    const evenBackground = (idx) => {
        return idx % 2 === 0 ? { backgroundColor: '#000000' } : { backgroundColor: "#fcf6f6" };
    };

    return (
        <div>
           <div className='navigation'>
    <img src={Logo} alt="HuBuzz Logo" className='logo' />
    <div className={`navigations-horizontal ${showHorizontalMenu ? 'show' : ''}`}>
        {Horcontent.map((item, index) => (
            <NavLink 
                key={index}
                to={item.to}
                onClick={() => handleClick(item)}
                className='nav-menu'
                activeClassName="active"
            >
                <span>{item.name}</span>
                {item.icon && React.cloneElement(item.icon, { style: { color: "#220555" } })}
            </NavLink>
        ))}
    </div>
</div>


            {showVertContent && (
                <div className='product-popup' ref={Dropdown}>
                    {Vertcontent.map((val, idx) => (
                        <Link to={val.to} key={idx} style={{ display: 'flex', flexDirection: 'column', color: 'green', textDecoration: 'none' }}>
                            <span style={evenBackground(idx)} className='product-categories'>{val.title}</span>
                        </Link>
                    ))}
                </div>
            )}

            <img
                src={HamburgerMenu}
                alt="Hamburger menu"
                className='hamburger-menu'
                onClick={toggleMenu}
            />
        </div>
    );
};

export default Navbarcontent;
