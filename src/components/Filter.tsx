import { useState } from "react";

interface props {
  filterText: string;
  searchType: string;
  setFilterText: any;
  filterDate: string;
  setFilterDate: any;
  setSearchType: any;
}

function Filter({searchType, filterText, setFilterText, filterDate, setFilterDate, setSearchType }:props) {

  

  const [sortBy, setSortedBy] = useState("Newest");
  
  
  return (
    <div className="Filter-container flex flex-row container w-3/4 bg-[#a2a8d3] h-12 rounded-md">
      <input
        className=" rounded-md h-10 mr-2 pl-2"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search for Name"
      />

      <input
        className="rounded-md h-10 pl-2"
        type={searchType}
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        onFocus={() => setSearchType("date")}
        onBlur={() => setSearchType("text")}
        placeholder="Search for Date"
      />
      <div className="container flex justify-end w-full">
        <select onChange={(e)=> {setSortedBy(e.target.value)}} value={sortBy} className=" h-10 rounded-md">
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;