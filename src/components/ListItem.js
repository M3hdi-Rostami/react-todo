import React from "react";
import { CloseCircle } from "iconsax-react";

const ListItem = ({ item, handleChecked, handleDelete }) => {
  return (
    <li className="item flex items-center justify-between bg-slate-200 my-3 p-3 rounded-lg">
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
      <CloseCircle
        className="cursor-pointer"
        size="25"
        color="#334155"
        variant="Bulk"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default ListItem;
