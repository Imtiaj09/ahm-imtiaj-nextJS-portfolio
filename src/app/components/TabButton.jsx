import React from 'react'

function TabButton({ active, selectTab, children}) {
const buttoClasses = active ? 'text-white border-b border-blue-400' : 'text-[#ADB7BC]'
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttoClasses}`}>         
      {children}
        </p>
    </button>
  );
}

export default TabButton;