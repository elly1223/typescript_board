import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const BoardModify = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div>게시글 쓰기</div>
      <input className="title" name="title" value={''}></input>
      <input className="contents" value={''} name="contents"></input>
      <button>게시글 등록</button>
    </>
  );
};

export default BoardModify;
