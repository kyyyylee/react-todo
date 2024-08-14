import { Icon } from '@iconify/react';
//simple form with a text input and button to submit
//if we want to add a class to an element for css styling use className='' as 'class' is a reserved word in React
function Form({ setTodos }) {
  //we put js functions that we will use within our component before the return statement!
  //the handle submit function takes an event as parameter
  const handleSubmit = (event) => {
    //prevent default form submission
    event.preventDefault();
    const value = event.target.todo.value;
    if (value == '') {
      return;
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { title: value, id: self.crypto.randomUUID(), complete: false },
      ]);
      //resent the form field
      event.target.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} className='flex items-center'>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="next task"
        className='px-4 py-2 border-2 mr-4 border-blue-950 rounded-xl'
      />
      <button className='bg-violet-300 p-3 rounded-full border-2 border-blue-950'>
        <Icon icon="tabler:plus"/>
      </button>
    </form>
  );
}

export default Form;
