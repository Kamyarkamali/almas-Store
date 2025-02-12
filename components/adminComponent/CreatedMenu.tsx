"use client";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

interface MenuItem {
  id: string;
  label: string;
  url: string;
  children: MenuItem[];
}

export default function MenuBuilder() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");

  const sensors = useSensors(useSensor(PointerSensor));

  const addMenuItem = () => {
    if (label && url) {
      const newItem: MenuItem = {
        id: String(Date.now()),
        label,
        url,
        children: [],
      };
      setMenu([...menu, newItem]);
      setLabel("");
      setUrl("");
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    if (activeId === overId) return;

    // پیدا کردن آیتم فعال و مقصد
    const findItem = (items: MenuItem[], id: string): MenuItem | null => {
      for (const item of items) {
        if (item.id === id) return item;
        if (item.children.length > 0) {
          const found = findItem(item.children, id);
          if (found) return found;
        }
      }
      return null;
    };

    // حذف آیتم از جای قبلی
    const removeItem = (items: MenuItem[], id: string): MenuItem | null => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) return items.splice(i, 1)[0];
        if (items[i].children.length > 0) {
          const found = removeItem(items[i].children, id);
          if (found) return found;
        }
      }
      return null;
    };

    setMenu((prevMenu) => {
      const newMenu = [...prevMenu];

      const activeItem = removeItem(newMenu, activeId);
      const overItem = findItem(newMenu, overId);

      if (activeItem && overItem) {
        overItem.children.push(activeItem);
      }

      return newMenu;
    });
  };

  const saveMenu = async () => {
    const response = await fetch("/api/saveMenu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(menu),
    });

    if (response.ok) {
      alert("منو ذخیره شد!");
    } else {
      alert("خطا در ذخیره منو");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 shadow rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">افزودن آیتم جدید</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="عنوان منو"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="آدرس URL"
            className="w-full p-2 border rounded-lg"
          />
          <button
            onClick={addMenuItem}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            افزودن به منو
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">منوی شما</h2>
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
          <SortableContext
            items={menu.map((item) => item.id)}
            strategy={verticalListSortingStrategy}
          >
            {menu.map((item) => (
              <MenuItemComponent key={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>

      <button
        onClick={saveMenu}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        ذخیره منو
      </button>
    </div>
  );
}

function MenuItemComponent({ item }: { item: MenuItem }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-3 bg-gray-50 border rounded-lg mb-2 cursor-move hover:bg-gray-100"
    >
      <span className="font-semibold">{item.label}</span> -
      <span className="text-gray-600">{item.url}</span>
      {item.children.length > 0 && (
        <div className="pl-4 mt-2 border-l border-gray-300">
          <SortableContext
            items={item.children.map((subItem) => subItem.id)}
            strategy={verticalListSortingStrategy}
          >
            {item.children.map((subItem) => (
              <MenuItemComponent key={subItem.id} item={subItem} />
            ))}
          </SortableContext>
        </div>
      )}
    </div>
  );
}
