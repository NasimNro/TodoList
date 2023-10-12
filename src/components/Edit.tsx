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
    <div className="edit-container container h-20 border-l  border-r border-t border-b w-full mb-4 rounded-md shadow-xl backdrop-blur-sm bg-[#f0e4c5] items-center flex">
      <div className="w-1/2">
        <input
          className="bg-[#e7eaf6]  rounded-md h-12 w-4/5 ml-2 pl-2 font-medium"
          type="text"
          placeholder="Enter new Name"
          value={showNewtext}
          onChange={(e) => setNewText(e.target.value)}
        ></input>
      </div>

      <div className="w-1/4">
        <input
          className="bg-[#e7eaf6]  rounded-md h-12 w-full pl-2 font-medium"
          type={showEditType}
          placeholder="Enter new date"
          value={showNewdate}
          onFocus={() => seteditType("date")}
          onBlur={() => seteditType("text")}
          onChange={(e) => setNewDate(e.target.value)}
        ></input>
      </div>
      <div className="w-1/4 flex justify-end pr-2">
        <button
          className=" Change-button ml-10 bg-[#b8e089] h-10 w-10 rounded-md"
          onClick={handleEdit}
        >
          &#x2714;
        </button>
      </div>
    </div>
  );
}

export default Edit;
