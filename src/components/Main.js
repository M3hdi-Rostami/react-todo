import React from "react";
import { useState } from "react";
import List from "./List";
import AddItem from "./AddItem";
import Alert from "./Alert";
import CountArea from "./CountArea";

const Main = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
  };
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const setAndSaveItems = (newItems) => {
    console.log(JSON.stringify(newItems));
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };
  const addItem = (title) => {
    const item = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      title,
    };
    const listItems = [...items, item];
    setAndSaveItems(listItems);
    setShowAlert(true);
  };
  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  return (
    <>
      {showAlert ? (
        <Alert
          setShowAlert={setShowAlert}
          color="green"
          label="Success"
          text="Add new item to items."
        />
      ) : (
        ""
      )}
      <main className="p-20 bg-slate-300">
        <CountArea items={items} />

        <div className="bg-gray-400 p-10 rounded-lg">
          <AddItem
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
          />
          {items.length ? (
            <List
              items={items}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          ) : (
            <div className="bg-rose-300 text-rose-700 p-3 rounded-lg text-center font-bold mt-3">
              Your list is empty.
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
