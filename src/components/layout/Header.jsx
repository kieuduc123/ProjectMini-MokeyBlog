import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../button';
import { useAuth } from '../../contexts/auth-context';

const menuLinks = [
    {
        url: '/#',
        title: "Home",
    },
     {
        url: '/blog',
        title: "Blog",
    },
      {
        url: '/concact',
        title: "Contact",
    },
]
const HeaderPageStyled = styled.header`
   padding:40px 0;
    .header-main {
        display: flex;
        align-items: center;
    }
    .logo{
        display: block;
        max-width: 50px;
    }
    .menu {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: 40px;
        list-style: none;
    }
    .menu-link{
        font-weight: 400;
         color: inherit;
    }
    .search {
        padding: 15px 25px;
        margin-left: auto;
        border : 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        max-width: 320px;
        position: relative;
        margin-right: 20px;
    }
    .search-input{
        flex: 1;
        padding-right : 45px;
    }
    .search-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
    }
    
`;
function getLastName(name) {
    if (!name) return "user";
    const length = name.split("").length;
    return name.split(" ")[length - 1];
}

const Header = () => {
    const { userInfo } = useAuth();

    return (
        <HeaderPageStyled>
            <div className="container">
                <div className="header-main">
                    <NavLink to="/">
                        <img srcSet="logo.png 2x" alt="monkey-blogging" className='logo'/>
                    </NavLink>
                    <ul className="menu">
                        {menuLinks.map((item) => (
                        <li className="menu-item" key={item.title}>
                                <NavLink to={item.url} className='menu-link'>{ item.title}</NavLink>
                        </li>   
                        ))}
                    </ul>
                    
                        <div className="search">
                            <input type="text" className="seach-input" placeholder='Search Post....'/>
                            <span className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>


                            </span>
                    </div>
                    {!userInfo ? (
                        <Button type='button' height="56px" className='header-button' to='/sign-up'> 
                          Sign Up
                          </Button>
                    ) : (
                            <div className='header-auth'>
                                <strong>Welcome Back,</strong>
                             <span className='text-primary'>{getLastName (userInfo?.displayName)}</span>  
                            </div>
                        ) }  
                </div>
            </div>
        </HeaderPageStyled>
    );
};

export default Header;