"use client";

import { useState } from "react";
import CreatableSelect from "react-select/creatable";

type OptionType = {
  label: string;
  value: string;
};

const CategorySelect = () => {
  const [categories, setCategories] = useState<OptionType[]>([
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "health", label: "Health" },
  ]);

  const [selectedCategories, setSelectedCategories] = useState<OptionType[]>(
    []
  );

  const handleChange = (newValue: readonly OptionType[]) => {
    setSelectedCategories([...newValue]);
  };

  const handleCreate = (inputValue: string) => {
    const newCategory = { label: inputValue, value: inputValue.toLowerCase() };
    setCategories((prev) => [...prev, newCategory]);
    setSelectedCategories((prev) => [...prev, newCategory]);
  };

  return (
    <CreatableSelect
      isMulti
      options={categories}
      value={selectedCategories}
      onChange={handleChange}
      onCreateOption={handleCreate}
      className="w-full"
    />
  );
};

export default CategorySelect;
