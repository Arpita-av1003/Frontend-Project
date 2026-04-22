import {useState} from "react";

const App = () => {
    
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Form submitted");
        
    }
    
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form  onSubmit={(e)=>{
           submitHandler(e)
      }} className="flex gap-4 p-10  flex-col items-start">
        <h1 className="text-3xl font-bold">Add Notes</h1>
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="w-full px-5 font-medium py-2 border-2 rounded outline-none"
          />
          <textarea
            type="text"
            placeholder="Enter notes Here"
            className="w-full font-medium px-5 h-32 py-2 flex items-start flex-row border-2 rounded outline-none"
          />
          <button className="px-5 py-2 w-full border-2 outline-none rounded bg-white text-black">
            Add Notes
          </button>
    
      </form>
      <div className="flex lg:w-1/2  p-10 lg:border-l-2">
      <h1 className="text-3xl font-bold">Recent Notes</h1>
      <div className=" flex gap-5 flex-wrap mt-5 h-full overflow-auto">
        <div className="h-52 w-40 rounded-2xl bg-white"></div>
         <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          
      </div>
      </div>
    </div>
  );
};

export default App;
