import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Authentication = styled.div`
  min-height:100vh ;
        padding: 40px;
        .logo{
            margin: 0 auto 20px;
        }
        .heading {
            text-align: center;
            color: ${(props) => props.theme.primary};
            font-weight: bold;
        }
         .form{
            max-width: 600px;
            margin: 0 auto;
        }
        .haver-account{
            margin-bottom: 20px;
        }`;
const AuthentiocationPage = ({children}) => {
    return (
        <Authentication>
            <div className="container">
                <NavLink to='/'>
                <img srcSet="/logo.png 2x" className='logo' alt="monkey-blog" />
                </NavLink>  
                <h1 className="heading">Monkey Blogging</h1>
                {children}
                </div>
        </Authentication>
    );
};

export default AuthentiocationPage;