import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "./style.scss";
import Filter from "../Filter/Filter";

export default function SideFilter(){
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
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