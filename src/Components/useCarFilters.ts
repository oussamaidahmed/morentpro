import { useState } from "react";
import { Cars } from "../../api/Cars-Data";

const useCarFilters = (initialLimit: number) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [capacity, setCapacity] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(40);

  const capacityMapping: Record<string, string[]> = {
    "2 Person": ["2"],
    "4 Person": ["4"],
    "6 Person": ["6"],
    "8 or More": ["8", "9", "10"],
  };

  const filteredCars = Cars.slice(0, initialLimit).filter((car) => {
    const matchesType = selectedTypes.length > 0 ? selectedTypes.includes(car.type) : true;
    const matchesCapacity = capacity.length > 0
      ? capacity.some((cap) => capacityMapping[cap]?.includes(car.people))
      : true;
    const matchesPrice = car.price <= priceRange;

    return matchesType && matchesCapacity && matchesPrice;
  });

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityChange = (cap: string) => {
    setCapacity((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  };

  const handlePriceChange = (price: number) => {
    setPriceRange(price);
  };

  return {
    filteredCars,
    selectedTypes,
    capacity,
    priceRange,
    handleTypeChange,
    handleCapacityChange,
    handlePriceChange,
  };
};

export default useCarFilters;
