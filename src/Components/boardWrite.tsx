import React from 'react';
import { useState } from 'react';

const BoardWrite = ({ handleInput, handlePostUpload }) => {
  return (
    <>
      <div>게시글 쓰기</div>
      <input className="title" placeholder="제목을 입력해주세요." name="title" onChange={handleInput}></input>
      <input className="contents" placeholder="내용을 입력해주세요." name="contents" onChange={handleInput}></input>
      <button onClick={handlePostUpload}>게시글 등록</button>
    </>
  );
};

export default BoardWrite;
