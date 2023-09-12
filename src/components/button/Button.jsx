import React from 'react';
import styled  from 'styled-components';
import { LoadingSpinner } from '../loading';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

const ButtonStyled = styled.button`
   max-width: 350px;
   margin: 0 auto;
    cursor: pointer;
    padding: 0 25px;
    line-height: 1;
    color: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => props.height  || "66px"};;
    background-image: linear-gradient(to right bottom,
   #2EBAC1 , #A4D96C
    );
    &:disabled{
        opacity: 0.5;
        pointer-events: none;
    }
`
    //**   
//     * @require
//  * @param {string} type Type of button "button" | " submit"
//      * @returns
//  */
const Button = ({ type = "button", children, onClick = () => {}, ...props }) => {
    const { isLoading ,to } = props;
    const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
    if (to !== "" && typeof to === 'string') {
        return (
         <NavLink to={to}>
                 <ButtonStyled typeof={type}  {...props}>
                {child}
             </ButtonStyled> 
            </NavLink>
        )
    }
    return (
        <ButtonStyled typeof={type} onClick={onClick} {...props}>
          {child}
        </ButtonStyled> 
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]).isRequired,
    isLoading: PropTypes.bool,
};
export default Button;