import React from "react";

interface SidebarProps {
  carTypes: string[];
  capacities: string[];
  priceRange: number;
  onTypeChange: (type: string) => void;
  onCapacityChange: (capacity: string) => void;
  onPriceChange: (price: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  carTypes,
  capacities,
  priceRange,
  onTypeChange,
  onCapacityChange,
  onPriceChange,
}) => {
  return (
    <div className="  bg-base-200 h-screen w-80 p-5 pt-10 space-y-5">
      <div>
        <span className="font-semibold text-sm text-[#90A3BF]">T Y P E</span>
        <ul className="space-y-3 mt-2">
          {carTypes.map((type) => (
            <li key={type} className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                onChange={() => onTypeChange(type)}
              />
              <p>{type}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-semibold text-sm text-[#90A3BF]">C A P A C I T Y</span>
        <ul className="space-y-3 mt-2">
          {capacities.map((capacity) => (
            <li key={capacity} className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
                onChange={() => onCapacityChange(capacity)}
              />
              <p>{capacity}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-semibold text-sm text-[#90A3BF]">P R I C E</span>
        <div className="mt-2">
          <input
            type="range"
            step={1}
            min={0}
            max={100}
            value={priceRange}
            onChange={(e) => onPriceChange(parseInt(e.target.value, 10))}
            className="range range-xs"
          />
          <p>Selected Price: ${priceRange}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
