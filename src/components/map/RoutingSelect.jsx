import { MapPin } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const RoutingSelect = ({ id, point, changePoint }) => {
  return (
    <label className="border border-dubraSecondary p-2 rounded-xl flex items-center transition-all duration-200 has-[input:checked]:scale-110 ">
      <div className="pe-2 gap-2">
        <div className="flex">
          <MapPin className="pe-1" />
          <p>{point.name}</p>
        </div>
      </div>
      <div>
        <Input className={'checked:scale-150 transition-all duration-300 accent-dubraSecondary peer'} type="radio" name={'radioRouting'}
         id={id} value={point} onChange={() => changePoint(point)}/>
      </div>
    </label>
  );
};

export default RoutingSelect;
