import { useState } from "react";

interface EditProps {
  onEdit: (showNewtext: string, showNewdate: string) => void;
}

function Edit({ onEdit }: EditProps) {
  const [showNewtext, setNewText] = useState("");
  const [showEditType, seteditType] = useState("");
  const [showNewdate, setNewDate] = useState("");

  const handleEdit = () => {
    onEdit(showNewtext, showNewdate); 
  };

  return (
    <div className="edit-container container h-20 border-l  border-r border-t border-b  mb-4 rounded-md shadow-xl backdrop-blur-sm bg-[#f0e4c5] items-center flex sm:h-14">
      <div className="w-7/12">
        <input
          className="bg-[#e7eaf6]  rounded-md h-12 w-4/5 ml-2 pl-2 font-medium sm:text-xs sm:h-10"
          type="text"
          placeholder="Enter new Name"
          value={showNewtext}
          onChange={(e) => setNewText(e.target.value)}
        ></input>
      </div>

      <div className="w-3/12">
        <input
          className="bg-[#e7eaf6]  rounded-md h-12 w-full pl-2 font-medium sm:text-xs sm:h-10"
          type={showEditType}
          placeholder="New date"
          value={showNewdate}
          onFocus={() => seteditType("date")}
          onBlur={() => seteditType("text")}
          onChange={(e) => setNewDate(e.target.value)}
        ></input>
      </div>
      <div className="w-2/12 flex justify-end pr-2">
        <button
          className=" Change-button ml-10 bg-[#b8e089] h-10 w-10 rounded-md sm:ml-0 sm:h-8 sm:w-8"
          onClick={handleEdit}
        >
          &#x2714;
        </button>
      </div>
    </div>
  );
}

export default Edit;
