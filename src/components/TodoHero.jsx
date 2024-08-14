//this will show how many tasks remain
//we will be accepting two props (properties) from the parent component
//props are read-only properties that are shared between components
//parent component can send data to a child component
//<Component key=value />
//need parameter in component (completed & total)
//we 'escape' back to js with curly braces {} to use the props
function TodoHero({ completed, total }) {
  return (
    <div className="flex items-center justify-center gap-12 border-2 border-blue-950 bg-lime-300 px-4 py-2 rounded-full">
      <div>
        <p>Tasks Completed:</p>
      </div>
      <div className="text-4xl">{completed}/{total}</div>
    </div>
  );
}

export default TodoHero;
