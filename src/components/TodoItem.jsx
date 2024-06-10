import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({isDone}) {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const onToggleHandler = (id) => {
    dispatch(toggleTodo({ id }));
  };

   // todoList, doneList
   const todoList = [];
   const doneList = [];
   todos.forEach((todo) => {
     if (todo.isDone) {
       doneList.push(todo);
     } else {
       todoList.push(todo);
     }
   });

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: 이거슨제목</p>
        <p>내용: 이거슨내용</p>
      </section>
      <section>
        <button onClick={() => onToggleHandler(todo.id)}>{isDone ? '취소' : '완료'}</button>
        <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
      </section>
    </li>
  );
}
