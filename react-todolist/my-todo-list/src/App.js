import React from "react";
import { createGlobalStyle } from "styled-components";
import Today from "./Today.js";
import TodoList from "./components/TodoList.js";
import TodoTemplateplate from "./components/TodoTemplate.js";
import TodoHead from "./components/TodoHead.js";
import TodoCreate from "./components/TodoCreate.js";
import { TodoProvider } from "./components/TodoContext.js";

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;
function App() {
  const todolist = [
    {
      id: 1,
      todo: "아침산책",
      isdone: false
    },
    {
      id: 2,
      todo: "아침운동",
      isdone: false
    }
  ];

  return (
    <TodoProvider>
      <GlobalStyle></GlobalStyle>
      <TodoTemplateplate>
        <TodoHead></TodoHead>
        {/* <b>
          할 일 {todolist.filter(todolist => todolist.isdone == false).length}개
          남음
        </b> */}
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplateplate>
    </TodoProvider>
  );
}

export default App;
