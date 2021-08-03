import React from 'react';
import styled from 'styled-components';
import { useState, ChangeEvent } from 'react';

const BoardList = ({ list, handlePostUpdate }) => {
  return (
    <tbody>
      <tr>
        <td className="sticky">{list.id}</td>
        <td className="sticky">{list.title}</td>
        <td className="sticky">{list.mod_date}</td>
        <td className="sticky">{list.reg_date}</td>
        <ListButtonWrap>
          <ListButton onClick={() => handlePostUpdate(list.id)}>수정</ListButton>
          <ListButton>삭제</ListButton>
        </ListButtonWrap>
      </tr>
    </tbody>
  );
};

export default BoardList;

const ListButton = styled.button`
  width: 80px;
  margin: 10px;
  padding: 5px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 13px;
`;

const ListButtonWrap = styled.div`
  padding: 10px;
  text-align: center;
`;
