"use client";

import { useState } from "react";

type Item = {
  id: number;
  title: string;
  description: string;
};

export default function AdminDashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", description: "" });

  const resetForm = () => {
    setForm({ title: "", description: "" });
    setEditingId(null);
  };

  const handleSubmit = () => {
    if (!form.title.trim()) return;

    if (editingId !== null) {
      setItems(items.map(item =>
        item.id === editingId ? { ...item, ...form } : item
      ));
    } else {
      setItems([
        ...items,
        { id: Date.now(), ...form },
      ]);
    }

    resetForm();
  };

  const handleEdit = (item: Item) => {
    setForm({ title: item.title, description: item.description });
    setEditingId(item.id);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };


  const handleLogout = () => {
  localStorage.removeItem("admin-auth");
  window.location.href = "/";
};



  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-zinc-100">
      <h1 className="mb-6 text-2xl font-semibold">
        Admin Dashboard
      </h1>

      {/* Form */}
      <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900 p-4">
        <h2 className="mb-3 text-lg">
          {editingId ? "Edit Item" : "Add Item"}
        </h2>

        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="mb-3 w-full rounded bg-zinc-800 p-2 text-sm outline-none ring-1 ring-zinc-700 focus:ring-indigo-500"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e =>
            setForm({ ...form, description: e.target.value })
          }
          className="mb-3 w-full rounded bg-zinc-800 p-2 text-sm outline-none ring-1 ring-zinc-700 focus:ring-indigo-500"
        />

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="rounded bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-500"
          >
            {editingId ? "Update" : "Add"}
          </button>

          {editingId && (
            <button
              onClick={resetForm}
              className="rounded bg-zinc-700 px-4 py-2 text-sm hover:bg-zinc-600"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {items.length === 0 ? (
          <p className="text-sm text-zinc-400">
            No items added yet.
          </p>
        ) : (
          items.map(item => (
            <div
              key={item.id}
              className="flex items-start justify-between rounded border border-zinc-800 bg-zinc-900 p-4"
            >
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-zinc-400">
                  {item.description}
                </p>
              </div>

              <div className="flex gap-3 text-sm">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* LOGOUT BUTTON  */}
      <button
        onClick={() => handleLogout()}
        className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-500"
      >
        Logout
      </button>
      
    </div>
  );
}
