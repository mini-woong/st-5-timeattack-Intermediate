import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({
        id: new Date().getTime(),
        title,
        content,
      })
    );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button>추가</button>
    </form>
  );
}
