import React, { useState } from "react";
import Navbar from "../Components/Navbar";

// CSV Download Helper
const downloadCSV = (data) => {
  const header = ["ID", "Name", "Customer", "Quantity", "Description"];
  const rows = data.map(item => [
    item.product_id,
    item.name,
    item.customer,
    item.quantity,
    item.description,
  ]);

  const csvContent = [
    header.join(","),
    ...rows.map(row => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "report.csv");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function TitleCardRims() {
  const [products, setProducts] = useState([
    {
      product_id: 1,
      category: "Paper Rims",
      name: "Premier",
      customer: "Rafay",
      quantity: 500,
      description: "High-quality paper rim for office use.",
    },
    {
      product_id: 2,
      category: "Paper Rims",
      name: "Imported",
      customer: "John",
      quantity: 600,
      description: "Durable imported paper rim, suitable for heavy printing.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    category: "Paper Rims",
    name: "",
    customer: "",
    quantity: "",
    description: "",
  });

  const openModal = (index = null) => {
    if (index !== null) {
      setForm(products[index]);
      setEditingIndex(index);
    } else {
      setForm({
        category: "Paper Rims",
        name: "",
        customer: "",
        quantity: "",
        description: "",
      });
      setEditingIndex(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm({
      category: "Paper Rims",
      name: "",
      customer: "",
      quantity: "",
      description: "",
    });
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const quantity = parseInt(form.quantity);

    const newProduct = {
      ...form,
      product_id: editingIndex !== null ? products[editingIndex].product_id : products.length + 1,
      quantity,
    };

    if (editingIndex !== null) {
      const updated = [...products];
      updated[editingIndex] = newProduct;
      setProducts(updated);
    } else {
      setProducts([...products, newProduct]);
    }

    closeModal();
  };

  const deleteProduct = (product_id) => {
    const updated = products.filter(item => item.product_id !== product_id);
    setProducts(updated);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <Navbar label="Packed Paper Rims" />
      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-4 lg:px-6 font-poppins">

        {/* Header */}
        <div className="my-7 p-6 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Final Goods</h2>
            <p className="text-sm">Manage your product inventory here.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-[#2563EB] font-semibold px-4 py-2 rounded-full mt-4 sm:mt-0 hover:bg-blue-50" onClick={() => openModal()}>
              + Add Product
            </button>
            <button className="bg-white text-[#2563EB] font-semibold px-4 py-2 rounded-full mt-4 sm:mt-0 hover:bg-blue-50" onClick={() => downloadCSV(products)}>
              Download Report
            </button>
          </div>
        </div>

        {/* Enhanced Table */}
        <div className="overflow-auto rounded-xl shadow-lg bg-white border border-gray-200">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="sticky top-0 bg-[#e2effc] text-[#1a4c78] font-semibold shadow-sm z-10">
              <tr>
                <th className="p-4 border-b border-gray-200">ID</th>
                <th className="p-4 border-b border-gray-200">Product</th>
                <th className="p-4 border-b border-gray-200">Customer</th>
                <th className="p-4 border-b border-gray-200">Quantity</th>
                <th className="p-4 border-b border-gray-200 w-64">Description</th>
                <th className="p-4 border-b border-gray-200 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr
                  key={item.product_id}
                  className={`border-b border-gray-100 transition-all duration-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50`}
                >
                  <td className="p-4">{item.product_id}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.customer}</td>
                  <td className="p-4">{item.quantity}</td>
                  <td className="p-4 max-w-xs whitespace-pre-wrap break-words">{item.description}</td>
                  <td className="p-4 align-top text-right whitespace-nowrap">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openModal(index)} className="text-blue-600 hover:underline text-sm">
                        Edit
                      </button>
                      <button onClick={() => deleteProduct(item.product_id)} className="text-red-600 hover:underline text-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-4">
                {editingIndex !== null ? "Edit Product" : "Add Product"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border px-3 py-2 rounded" />
                <input type="text" name="customer" placeholder="Customer" value={form.customer} onChange={handleChange} className="border px-3 py-2 rounded" />
                <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border px-3 py-2 rounded" />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border px-3 py-2 rounded col-span-1 sm:col-span-2 min-h-[100px]" />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button onClick={closeModal} className="text-gray-600 px-4 py-2 rounded hover:bg-gray-100">
                  Cancel
                </button>
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600">
                  {editingIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
