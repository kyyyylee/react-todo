//this will show how many tasks remain
//we will be accepting two props (properties) from the parent component
//props are read-only properties that are shared between components
//parent component can send data to a child component
//<Component key=value />
//need parameter in component (completed & total)
//we 'escape' back to js with curly braces {} to use the props
function TodoHero({ completed, total }) {
  return (
    <div className="flex items-center justify-center gap-12 border-2 border-blue-950 rounded-md px-4 py-6 w-3/5 mb-6">
      <div>
        <p>Tasks Completed:</p>
      </div>
      <div className="text-4xl bg-orange-950 px-3 py-4 rounded-full text-white">{completed}/{total}</div>
    </div>
  );
}

export default TodoHero;
