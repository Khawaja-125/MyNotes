/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-100 font-semibold">
          {getInitials("Webdev Khawaja")}
        </div>
      </div>
      <p>Khawaja</p>
      <button className="text-sm text-slate-700 underline" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

export default ProfileInfo;
