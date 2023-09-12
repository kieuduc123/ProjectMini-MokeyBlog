import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";
const PostNewestLargeStyles = styled.div`
  .post {
    &-image {
      display: block;
      margin-bottom: 16px;
      height: 433px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }
    &-category {
      margin-top: 20px;
      margin-bottom: 20px;
      /* display: inline-block;
      padding: 8px 12px;
      border-radius: 8px;
      color: #6b6b6b;
      font-size: 14px;
      font-weight: 600;
      background-color: #f3edff;
      margin-bottom: 16px; */
    }
    &-info {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 600;
      margin-left: auto;
    }
    &-dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      background-color: currentColor;
      border-radius: 100rem;
    }
    &-title {
      margin-bottom: 10px;
    }
  }
`;

const PostNewestLarge = () => {
  return (
    <PostNewestLargeStyles>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
          alt=""
        />
          </div>
          <PostCategory>Kiến Thức</PostCategory>
          <PostTitle zize="big"> Hướng dẫn setup phòng cực chill dành cho người mới toàn tập</PostTitle>
     <PostMeta></PostMeta>
    </PostNewestLargeStyles>
  );
};

export default PostNewestLarge;