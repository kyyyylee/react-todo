import React from "react";
import { Icon } from '@iconify/react'
//where all the todos live
function TodoList({ todos, setTodos }) {
  return (
    <ol className=" w-4/5 min-h-64">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p className="text-center">Add some todos!</p>
      )}
    </ol>
  );
}
//creating a separate list item component in this file
function Item({ item, setTodos }) {
  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };
  const [editing, setEditing] = React.useState(false);
  const inputRef = React.useRef(null);
  const handleEdit = () => {
    setEditing(true);
  };
  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);
  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  const handleInputBlur = () => {
    setEditing(false);
  };
  const handleInputChange = (e) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };
  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };
  return (
    <li id={item?.id} className="border-orange-950 border-2 rounded-md px-8 py-4 text-xl">
      {editing ? (
        <form onSubmit={handleInputSubmit}>
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
        </form>
      ) : (
        <div className="flex items-center justify-between">
          <button onClick={completeTodo}>
            <p style={item.complete ? { textDecoration: "line-through" } : {}}>
              {item?.title}
            </p>
          </button>
          <div className="flex gap-2">
            <button onClick={handleEdit}>
            <Icon icon="ic:round-edit" />
            </button>
            <button onClick={handleDelete}>
            <Icon icon="tabler:trash" />
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoList;
