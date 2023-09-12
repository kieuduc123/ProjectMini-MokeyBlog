import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
const PostTitlePost = styled.h3`
     font-weight: 600;
     line-height: 1.6;
     a{

         display: block;
     }
     ${(props) => props.size === "normal" && 
     css`
        font-size: 18px;
     `};
     ${(props) => props.size === "big" &&
    css`
     font-size:22px`};
`;

const PostTitle = ({ children, className = " ",size="normal" ,to= "/"}) => {
    return (
        <PostTitlePost className={`post-title ${className}`}>
            <NavLink to={to}></NavLink>
            {children}
        </PostTitlePost>
    );
};

export default PostTitle;