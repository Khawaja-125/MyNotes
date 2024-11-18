/* eslint-disable no-unused-vars */
import React from "react";
import { FaMagnifyingGlass} from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

// eslint-disable-next-line react/prop-types
const SearchBar = ({ value, onChange, handleSearch, clearSearch }) => {
  return (
    <>

    <div className="flex w-80 items-center bg-slate-100 px-4 rounded-md ">
      <input 
      type="text"
      placeholder="Search Notes"
      className="text-sm bg-transparent w-full py-[11px] outline-none"
      value={value}
      onChange={onChange} />

    {value && (<IoMdClose onClick={clearSearch} className="text-slate-400 mr-2 cursor-pointer text-xl  hover:text-black"/>)}
    <FaMagnifyingGlass onClick={handleSearch} className="text-slate-400 cursor-pointer hover:text-black"/>
    </div>
    </>
  );
};

export default SearchBar;
