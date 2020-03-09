import React from "react";

function TodoList({ todolist, onChage }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          name="radioGroup"
          onChange={e => onChage(todolist.id)}
        />
        {todolist.todo}
      </label>
    </div>
  );
}

export default TodoList;
