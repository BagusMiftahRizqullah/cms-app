import { useState, useRef } from "react";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
import { AiOutlineFullscreen } from 'react-icons/ai';
import { useFullscreen } from "@/hooks/useFullscreen";

const DropdownFullscreen = () => {
  const elementRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isFullscreen, enterFullscreen, exitFullscreen } = useFullscreen();



  return (
    <div   ref={elementRef}>
      <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
        <li>
      
          <button
            onClick={() =>
          isFullscreen ? exitFullscreen() : enterFullscreen(elementRef.current)
        }
            className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
          >
            <AiOutlineFullscreen className="fill-current duration-300 ease-in-out" />
          </button>
        </li>
      </ClickOutside>
    </div>
  );
};

export default DropdownFullscreen;
