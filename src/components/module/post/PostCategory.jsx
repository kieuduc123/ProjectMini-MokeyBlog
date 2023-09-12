import React from 'react';
import { NavLink } from 'react-router-dom';
import styled,{css} from "styled-components";

const PostCategoryPost = styled.div`
     display: inline-block;
      padding: 4px 10px;
      border-radius: 8px;
      color: ${(props) => props.theme.gray6B};
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
      background-color: #f3f3f3;
      text-overflow: ellipsis;
      a{ display: block}
      ${(props) => props.type === "primary" && css`
        background-color: ${(props) => props.theme.grayF3}
      `};
      
`;

const PostCategory = ({children,type ="primary",className="", to="/"}) => {
    return (
        <PostCategoryPost type={type} className ={`post-category ${className}`} >
            <NavLink to={to}>
                  {children}
            </NavLink>
        </PostCategoryPost>
    );
};

export default PostCategory;