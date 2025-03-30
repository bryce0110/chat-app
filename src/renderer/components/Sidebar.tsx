import React from 'react';
import icon from '../../../assets/icon.svg';

function Sidebar() {
  return (
    <div className="static bg-dark-gray h-full flex flex-col items-center">
      <button
        type="button"
        className="block p-3 aspect-square sidebar-icon border-t-2 border-t-gray-300"
        aria-label="Sidebar Icon"
      >
        <img className="size-[50px] rounded-icon" src={icon} alt="icon" />
      </button>
    </div>
  );
}

export default Sidebar;
