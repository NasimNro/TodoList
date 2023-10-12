import { useRef, useState } from "react";

interface props {
  handleInput: any;
  inputValue: string;
  showDate: string;
  handleDateInput: any;
  handleAdd: any;
}

const Input = ({
  handleInput,
  showDate,
  handleDateInput,
  handleAdd,
  inputValue
}: props) => {
  const dateInputRef = useRef(null);
  const [inputType, setInputType] = useState(""); 


  return (
    <div className="space-x-4 flex justify-between input-container w-3/4  mb-16">
      <input
        className="bg-[#e7eaf6] required: rounded-md h-16 w-8/12 pl-2 font-medium"
        onChange={handleInput}
        type="text"
        value={inputValue}
        placeholder="Enter name of the Todo"
      ></input>
      <div className="bg-[#e7eaf6]  w-3/12 h-16 rounded-md flex items-center flex-col">
        <input
          className="pl-2 bg-[#e7eaf6] h-full rounded-md w-full"
          type={inputType}
          placeholder="Due to"
          value={showDate}
          onChange={handleDateInput}
          onFocus={() => {setInputType("date");}}
          onBlur={() => setInputType("text")}
          ref={dateInputRef}
          
        ></input>
      </div>
      <div className="container flex justify-end add-cotainer w-1/12 ">
        <button
          className="bg-[#38598b]  rounded-md h-16 w-16"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
