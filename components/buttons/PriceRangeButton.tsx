import { useState } from "react";

interface PriceRangeProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
}

export default function PriceRangeButton({
  min,
  max,
  onChange,
}: PriceRangeProps) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value);
    if (newMin <= maxVal) {
      setMinVal(newMin);
      onChange({ min: newMin, max: maxVal });
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value);
    if (newMax >= minVal) {
      setMaxVal(newMax);
      onChange({ min: minVal, max: newMax });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="range"
        min="0"
        max="1000000"
        value={minVal}
        onChange={handleMinChange}
        className="w-full"
      />
      <input
        type="range"
        min="0"
        max="1000000"
        value={maxVal}
        onChange={handleMaxChange}
        className="w-full"
      />
      <div className="flex justify-between w-full text-sm text-gray-600">
        <span>حداقل: {minVal.toLocaleString()} تومان</span>
        <span>حداکثر: {maxVal.toLocaleString()} تومان</span>
      </div>
    </div>
  );
}
