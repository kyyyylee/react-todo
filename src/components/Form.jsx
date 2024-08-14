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
    <form onSubmit={handleSubmit} className='flex items-center w-4/5'>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="next task"
        className='w-full px-2 py-4 mr-2 rounded-md'
      />
      <button className='bg-orange-950 p-2 text-4xl rounded-md border-2 text-white'>
        <Icon icon="tabler:plus"/>
      </button>
    </form>
  );
}

export default Form;
