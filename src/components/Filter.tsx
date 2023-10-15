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
    <div className="Filter-container flex flex-row just w-3/4 bg-[#a2a8d3] h-12 rounded-md sm:w-11/12 sm:h-8 ">
      <div className="flex flex-row w-full">
        <input
          className=" rounded-md h-10 mr-2 pl-2 sm:h-6  sm:w-5/12 sm:text-xs"
          type="text"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          placeholder="Search for Name"
        />

        <input
          className="rounded-md h-10 pl-2 sm:h-6 sm:w-5/12 sm:text-xs"
          type={searchType}
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          onFocus={() => setSearchType("date")}
          onBlur={() => setSearchType("text")}
          placeholder="Search for Date"
        />
      </div>
      <div className="container flex justify-end flex-end sm:w-2/12 ">
        <select
          onChange={(e) => {
            setSortedBy(e.target.value);
          }}
          value={sortBy}
          className=" h-10 rounded-md sm:h-6 sm:text-xs"
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;