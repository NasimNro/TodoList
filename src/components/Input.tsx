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
    <div className="space-x-4 flex justify-between input-container w-3/4 sm:w-11/12  mb-16 sm:mb-6">
      <input
        className="bg-[#e7eaf6] required: rounded-md h-16 w-8/12 pl-2 font-medium sm:h-8 sm:w-6/12 sm:text-sm"
        onChange={handleInput}
        type="text"
        value={inputValue}
        placeholder="Name of the Todo"
      ></input>
      <div className="bg-[#e7eaf6]  w-3/12 h-16 rounded-md flex items-center flex-col sm:h-8 sm:text-sm">
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
      <div className="container flex justify-end add-cotainer w-1/12 sm:h-8 ">
        <button
          className="bg-[#38598b]  rounded-md sm:h-8 w-16 sm:text-sm sm:w-20"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
