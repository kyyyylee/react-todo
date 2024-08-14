//this is the main file where we will import all of our smaller components we created (header,hero,list)
//first we need to import react, then all the components
//need a method to store our todo data - react uses 'state' - a JavaScript object that holds info. react provides a hook called useState() but in Next.js we need to specify that the component is a client component w/ "use client";
"use client";
import React from "react";
import Header from "@/components/Header";
import TodoHero from "@/components/TodoHero";
import Form from "@/components/Form";
import TodoList from "@/components/TodoList";
import './globals.css';

//components are capitalized, this is how we distinguish that it is a react component <Component />
//we send the props to component here, when we put the component in our main component (App) <TodoHero  completed={0} total={0}/>
function App() {
  //react useState to store data
  //'todos' holds the current value of the state
  //'setTodos' is a function to update the state
  const [todos, setTodos] = React.useState([]);
  const completed = todos.filter((todo) => todo.complete === true).length;
  const total = todos.length
  return (
    <div className="flex flex-col items-center gap-8 max-w-lg mx-auto text-blue-950 mt-16">
      <Header />
      <TodoHero completed={completed} total={total} />
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
//In React, there's a concept called state sharing, which allows children components to access the state of their parent components- i passed todos to TodoList
//can also be passed down to grandchildren aka the listitem component within the todolist component!
export default App;
