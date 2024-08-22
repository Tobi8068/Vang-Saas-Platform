import React from 'react';

const LeftBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-full py-4 space-y-4 mt-4 ml-4" style={{ height: '35%' }}>
      <button className="p-3 rounded-full bg-black hover:bg-gray-800">
        <img src="/pictures/stacks.png" alt="Stacks" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-100">
        <img src="/pictures/command.png" alt="Command" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-100">
        <img src="/pictures/box.png" alt="Cube" />
      </button>
      <button className="p-3 rounded-full bg-lime-300 hover:bg-lime-400">
        <img src="/pictures/Plus.png" alt="Add" />
      </button>
    </div>
  );
};

export default LeftBar;
