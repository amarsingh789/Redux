import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const sumbitHandler = (e) => {
    e.preventDefault();

    dispatch(setQuery(text))
    // console.log(text);
    setText('')
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
        className="flex gap-5 bg-(--c1) p-10"
      >
        <input
          type="text"
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
          required
          value={text}
          onChange={(e)=>{
            setText(e.target.value)
          }}
          placeholder="Search...."
        />
        <button className="bg-blue-500 text-white active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded-full outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
