/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const EditNotes = ({onClose, noteData, type}) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null)
  
  const addNewNote = async() => {}
  const editNote   = async() => {}

  const handleAddNote = () => {
    if(!title){
      setError("Title is required")
      return;
    }
    if(!content){
      setError("Content is required")
      return;
    }
    setError(" ")
    if(type === 'edit'){
      editNote()
    }
    else{
      addNewNote()
    }
  }
  return (
    <div className="relative">
     <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-500 hover:text-black" onClick={onClose}>
      <MdClose className="text-xl text-slate-400 hover:text-black"/>
     </button>

      <div className="flex flex-col gap-2">
        <label className="text-2xl text-slate-950 outline-none">TITLE</label>
        <input
          type="text"
          className="outline-none border-2  border-blue-300 p-2 focus:border-2 focus:border-rose-900"
          placeholder="GO to GYM at 5"
          value={title}
          onChange={({target}) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col mt-4 gap-2">
        <label className="text-sm rounded p-2 bg-slate-50 text-slate-950 outline-none">
          CONTENT
        </label>
        <textarea
          className="outline-none border-2 border-blue-300 p-2 focus:border-2 focus:border-rose-900"
          placeholder="I did 20 push-ups and 10 crunches"
          rows={10}
          value={content}
          onChange={({target}) => setContent(target.value)}

        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags}/>
      </div>

      {error && <p className="text-sm pt-4 text-red-600 font-semibold">{error}</p>}
      
      <button className="btn-primary font-mediuym p-3 mt-5" onClick={handleAddNote}>
        ADD
      </button>
    </div>
  );
};

export default EditNotes;