import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import boardListData from "./boardListData.json";
import { BoardList, BoardWrite } from 'page';
import { List, Board } from './type';
import axios from 'axios';

const Board = (props) => {
  const history = useHistory();
  const params = useParams();
  // const json = JSON.stringify(boardListData, null);
  const [board, setBoard] = useState([]);
  const [boardInfo, setBoardInfo] = useState<Board>({
    title: '',
    contents: '',
  });

  useEffect(() => {
    (async () => {
      const result = await axios.get(`http://192.168.0.243:8888/board`);
      setBoard(result.data.data.data);
      // console.log(result.data.data.data[0].id);
    })();
  }, []);

  const handlePostUpload = async () => {
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();
    const uploadResult = await axios
      .post(`http://192.168.0.243:8888/board`, {
        title: setTitle,
        contents: setContents,
      })
      .catch((err) => {
        throw err;
      });
    setBoard(uploadResult.data.data.data);
  };

  const handlePostUpdate = async (id: number) => {
    history.push(`/board/modify/${id}`);
    // await axios
    //   .put(`http://192.168.0.243:8888/board/25`, { title: "타입스크립트", contents: "어렵다" })
    //   .catch((err) => {
    //     throw err;
    //   });
  };

  const handlePostDelete = async () => {
    const [id, setId] = useState();
    const deleteResult = await axios.delete(`http://192.168.0.243:8888/board/:${setId}`).catch((err) => {
      throw err;
    });
  };

  const handleAdd = () => {
    const boards = [...board, { id: board.length + 1, title: boardInfo.title, contents: boardInfo.contents }];
    setBoard(boards);
    setBoardInfo({ title: '', contents: '' });
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardInfo({
      ...boardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleModify = (e) => {
    console.log(board[0].id);
  };

  return (
    <table className="table__normal table__fixable table">
      <thead>
        <th>아이디</th>
        <th>제목</th>
        <th>수정날짜</th>
        <th>작성날짜</th>
        <th>수정/삭제</th>
      </thead>
      {board.map((list: List, idx: number) => (
        <BoardList key={idx} list={list} handlePostUpdate={handlePostUpdate} />
      ))}
      {/* <button onClick={() => history.push("/BoardWrite")}>게시글 쓰기</button> */}
    </table>
  );
};
export default Board;
