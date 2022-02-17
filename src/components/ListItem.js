import React from "react";
import { Trash } from "iconsax-react";

const ListItem = ({ item, handleChecked, handleDelete }) => {
  return (
    <li className="item flex items-center justify-between bg-slate-200 my-3 p-3 rounded-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChecked(item.id)}
        />
        <strong
          onDoubleClick={() => handleChecked(item.id)}
          className={`ml-2 text-slate-600 cursor-pointer ${
            item.checked ? "line-through decoration-2 decoration-red-400" : ""
          }`}
        >
          {item.title}
        </strong>
        {item.checked && (
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg ml-2 font-normal text-xs">
            done
          </span>
        )}
      </div>
      <span
        className="cursor-pointer bg-red-200 p-2 rounded-lg hover:bg-red-300"
        onClick={() => handleDelete(item.id)}
      >
        <Trash size="22" color="#697689" variant="Bold" />
      </span>
    </li>
  );
};

export default ListItem;
