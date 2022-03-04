import React, { useState, useEffect } from "react";
import List from "./List";
import AddItem from "./AddItem";
import Alert from "./Alert";
import CountArea from "./CountArea";
import Search from "./Search";
import { Danger, CloseCircle, NotificationCircle } from "iconsax-react";
import apiRequest from "../services/apiRequest";

const Main = () => {
  const API_URL = "http://localhost:8000/items";
  const [showAlert, setShowAlert] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const listItems = await apiRequest(API_URL);
        setItems(listItems);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
  };
  const addItem = async (title) => {
    const item = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      title,
    };
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      };
      const savedItem = await apiRequest(API_URL, options);
      const listItems = [...items, savedItem];
      setItems(listItems);
      setShowAlert(true);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  const filteredItems = () => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <>
      {showAlert && (
        <Alert
          setShowAlert={setShowAlert}
          color="green"
          label="Success"
          text="Add new item to items."
        />
      )}
      <main className="md:px-56 md:py-10 sm:p-20 bg-slate-300">
        <div className="bg-white text-slate-200 font-bold mx-auto p-5 rounded-lg">
          {error && (
            <div className="p-2 rounded-lg bg-red-100 text-red-700 text-center mb-3 text-sm flex items-center justify-between">
              <div className="flex items-center">
                <Danger size="25" color="#f47373" variant="Bulk" />
                <strong className="ml-2">Error:</strong>
                <span className="font-light ml-1">{error}</span>
              </div>
              <span className="cursor-pointer" onClick={() => setError(null)}>
                <CloseCircle size="25" color="#f47373" variant="Bulk" />
              </span>
            </div>
          )}
          {!search && (
            <AddItem
              newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}
            />
          )}
          <CountArea items={items} />
          {items.length > 0 && <Search search={search} setSearch={setSearch} />}
          {loading && (
            <div className="p-2 rounded-lg bg-blue-100 text-sky-500 flex items-center justify-center">
              <NotificationCircle
                size="25"
                color="#0CA5E9"
                variant="Bulk"
                className="animate-spin"
              />
              <strong className="ml-2">getting data</strong>
            </div>
          )}
          {!loading && items.length > 0 && (
            <List
              items={filteredItems()}
              handleChecked={handleChecked}
              handleDelete={handleDelete}
            />
          )}
          {!loading && !items.length && (
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
