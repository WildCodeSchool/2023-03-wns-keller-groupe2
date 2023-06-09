import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Filter from "../Filter/Filter";
import "./style.scss";

export default function SideFilter(){
    const [isOpen, setIsOpen] = useState(true);
    return(
    <div className={isOpen?"sideFilter":"sideFilterClose"}>
        <div className="coverButton">
            <button type="button" onClick={()=>{setIsOpen(!isOpen)}}>
                {isOpen?<BiChevronLeft />:<BiChevronRight />}
            </button>
        </div>
        {isOpen? <Filter/>:""}
    </div>
    );
}