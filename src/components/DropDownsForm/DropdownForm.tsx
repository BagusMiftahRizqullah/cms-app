import React, { useState } from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai';

function DropdownForm({
    label,
    data
}) {
    const [dropDown, setDropDown] = useState(false);
    const [selected, setSelected] = useState("");


    // Function to handle item click
  const handleItemClick = (item:any) => {
    setSelected(item); // Update the state with the clicked item's value
    setDropDown(false);
    console.log("Selected Item:", item); // Log the selected item
  };
  return (
    <div className="mb-4">
    <label className=" mb-2.5 block font-medium text-black dark:text-white">
      Role
    </label>
    <div className="relative">
    <button onClick={() => setDropDown(!dropDown)} type="button"  className="flex justify-between w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-4 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary" id="menu-button" aria-expanded="true" aria-haspopup="true">
           <div className="flex items-center gap-3">
                <svg className="size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
                
                <p className=''>
                    {selected ? selected : "select role"}    
                </p>
           </div>
           
            <span className="">
                <AiOutlineUserAdd className="fill-current w-6 h-6"/>
            </span>
      </button>


      {
           dropDown &&(
            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                <div className="py-1" role="none">
                    <a  onClick={() => handleItemClick("Admin")}   href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" id="menu-item-0">Admin</a>
                    <a   onClick={() => handleItemClick("Customer")}  href="#" className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100" role="menuitem"  id="menu-item-1">Customer</a>
                    <a  onClick={() => handleItemClick("Driver")}  href="#" className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100" role="menuitem"  id="menu-item-2">Driver</a>
                </div>
            </div>
           )
      }
     
    </div>
  </div>
  )
}

export default DropdownForm