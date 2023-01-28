import React from 'react'
import PostList from './PostList';
import styled from "styled-components";

function VMnews() {
  return (
    <VMnewss>
      <h3>VMnews</h3>
      <PostList />
    </VMnewss>
  )
}

export default VMnews;

const VMnewss = styled.div`
  align-items: center;
  justify-content: center;
  align: center;
`