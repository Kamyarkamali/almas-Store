"use client";
import { useState } from "react";

export default function CreateSliderHero() {
  const [slides, setSlides] = useState<any[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addSlide = () => {
    if (image && category && url) {
      setSlides([...slides, { image, category, url }]);
      // Reset fields after adding a slide
      setImage(null);
      setCategory("");
      setUrl("");
    }
  };

  const removeSlide = (index: number) => {
    setSlides(slides.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        مدیریت اسلایدر هیرو
      </h2>

      {/* اضافه کردن فرم جدید */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() =>
            setSlides([...slides, { image: "", category: "", url: "" }])
          }
          className="w-12 h-12 rounded-full bg-green-500 text-white flex justify-center items-center text-2xl shadow-lg hover:bg-green-600"
        >
          +
        </button>
      </div>

      {/* فرم اضافه کردن تصویر */}
      <div className="space-y-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="space-y-4 p-4 border rounded-lg shadow-sm bg-white"
          >
            <input
              type="file"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded-md"
            />
            {image && (
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-32 h-32 object-cover rounded-md mx-auto my-2"
              />
            )}
            <input
              type="text"
              placeholder="نام دسته‌بندی"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="لینک تصویر"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={addSlide}
              className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600"
            >
              افزودن تصویر
            </button>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex-1">
                <p className="font-semibold">{slide.category}</p>
                <a href={slide.url} className="text-blue-500 text-sm">
                  {slide.url}
                </a>
              </div>
              <button
                onClick={() => removeSlide(index)}
                className="text-red-500 text-sm hover:text-red-600"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
