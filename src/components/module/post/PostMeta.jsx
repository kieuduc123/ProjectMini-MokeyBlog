import React from 'react';
import styled from "styled-components"

const PostMetaPost = styled.div`
     display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      color: inherit;
      margin-left: auto;
      .post{
        &-dot{
            display: inline-block;
           width: 4px;
           height: 4px;
           background-color: currentColor;
           border-radius: 100rem;
        }

      }
    
`;
const PostMeta = ({date= 'Mar 23', authName= "Andiez Le",className=''}) => {
    return (
        <PostMetaPost className={className}>
            <span className="post-time">{date}</span>
            <span className="post-dot"></span>
            <span className="post-author">{authName}</span>
        </PostMetaPost>
    );
};

export default PostMeta;