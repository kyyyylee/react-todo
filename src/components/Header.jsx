import { Icon } from "@iconify/react";
//component for header. Just display app title
//no need to accept props
function Header() {
  //no functionality, so go straight to return
  //js would go here
  return (
    //jsx can only return one element, so wrap in div or empty carrots
    //if we need js in jsx/html we escape back with {}
    <div className="flex flex-col items-center gap-4 text-2xl">
      <div className="flex gap-4 items-center">
        <Icon icon="mdi:react" className="text-4xl text-blue-950" />
        <Icon icon="devicon:nextjs" className="text-4xl" />
      </div>
      <h1 className="text-blue-950">React Todo App built with Next.js</h1>
    </div>
  );
}

//export the app so that we can use it throughout the project
//we use 'default' for the main component in the file
//you can have multiple components in a file to use within the main component that you will export
export default Header;
