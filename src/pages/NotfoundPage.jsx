import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const NotFoundPage = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .logo{
        display: inline-block;
        margin-bottom: 40px ;
    }
    .heading{
        margin-bottom: 20px
    }
    .back{
    display: inline-block;
    padding: 15px 30px;
    color : white;
    background-color: ${props => props.theme.primary};
    border-radius: 4px;
    font-weight: 500;
    }
`
const NotfoundPage = () => {
    return (
        <NotFoundPage>
            <NavLink to="/" className={"logo"}>
                <img srcSet="/logo.png 2x" alt="MonKeyBlogg" />
            </NavLink>
            <h1 className='heading'>Oops ! Page Not Found</h1>
            <NavLink to='/' className={"back"}>
                Back to home
            </NavLink>
        </NotFoundPage>
    );
};

export default NotfoundPage;