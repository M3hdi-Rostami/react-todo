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
      </div>
      <span className="cursor-pointer" onClick={() => handleDelete(item.id)}>
        <Trash size="25" color="#697689" variant="Bold" />
      </span>
    </li>
  );
};

export default ListItem;
