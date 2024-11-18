/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NotesCard from "../../components/Cards/NotesCard";
import { MdAdd } from "react-icons/md";
import EditNotes from "./EditNotes";
import Modal from "react-modal";
const Home = () => {
  const [openEditModal, setOpenEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 cursor-pointer gap-4 mt-8">
          <NotesCard
            title="Meeting at 7am "
            date="17th Nov, 2024"
            tags="#meeting #urgent"
            content="Meeting at 7am on Monday Coffee Shop"
            isPinned={true}
            onDelete={() => {}}
            onEdit={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10">
        <MdAdd
          className="text-[32px] text-white"
          onClick={() =>
            setOpenEditModal({ isShown: true, type: "add", data: null })
          }
        />
      </button>
      <Modal
        isOpen={openEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
        contentLabel="Edit Notes"
        className="w-[40%] h-3/4 overflow-scroll mx-auto mt-14 bg-white p-5"
      >
        <EditNotes
         type={openEditModal.type}
         noteData={openEditModal.data}
          onClose={() => {
            setOpenEditModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
