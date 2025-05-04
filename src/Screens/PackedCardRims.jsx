import React, { useState } from "react";
import Navbar from "../Components/Navbar";

// Function to download the CSV report
const downloadCSV = (data) => {
  const header = ["ID", "Name", "Customer", "Quantity", "In Use", "Remaining", "Date Added", "Date Updated"];
  const rows = data.map(item => [
    item.product_id,
    item.name,
    item.customer,
    item.quantity,
    item.in_use,
    item.remaining,
    item.date_added,
    item.date_updated,
  ]);
  
  // Create CSV string
  const csvContent = [
    header.join(","),
    ...rows.map(row => row.join(","))
  ].join("\n");
  
  // Create a downloadable blob
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) { // Feature detection
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "report.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default function PackedCardsRims() {
  const [products, setProducts] = useState([
    {
      product_id: 1,
      category: "Paper Rims",
      name: "Premier", // Changed from subcategory to name
      customer: "Rafay", // Changed from type to customer
      quantity: 500, // Changed from total_qty to quantity
      in_use: 100,
      remaining: 400,
      date_added: "2025-05-01 10:00:00",
      date_updated: "2025-05-01 12:00:00",
    },
    {
      product_id: 2,
      category: "Paper Rims",
      name: "Imported", // Changed from subcategory to name
      customer: "John", // Changed from type to customer
      quantity: 600, // Changed from total_qty to quantity
      in_use: 150,
      remaining: 450,
      date_added: "2025-05-01 10:05:00",
      date_updated: "2025-05-01 12:05:00",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    category: "",
    name: "", // Changed from subcategory to name
    customer: "", // Changed from type to customer
    quantity: "", // Changed from total_qty to quantity
    in_use: "",
  });

  const openModal = (index = null) => {
    if (index !== null) {
      setForm(products[index]);
      setEditingIndex(index);
    } else {
      setForm({
        category: "Paper Rims",
        name: "", // Changed from subcategory to name
        customer: "", // Changed from type to customer
        quantity: "", // Changed from total_qty to quantity
        in_use: "",
      });
      setEditingIndex(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm({
      category: "Paper Rims",
      name: "", // Changed from subcategory to name
      customer: "", // Changed from type to customer
      quantity: "", // Changed from total_qty to quantity
      in_use: "",
    });
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");
    const quantity = parseInt(form.quantity); // Changed from total_qty to quantity
    const used = parseInt(form.in_use);
    const remaining = quantity - used;

    const updatedProduct = {
      ...form,
      product_id: editingIndex !== null ? products[editingIndex].product_id : products.length + 1,
      quantity: quantity, // Changed from total_qty to quantity
      in_use: used,
      remaining,
      date_added: editingIndex !== null ? products[editingIndex].date_added : now,
      date_updated: now,
    };

    if (editingIndex !== null) {
      const newData = [...products];
      newData[editingIndex] = updatedProduct;
      setProducts(newData);
    } else {
      setProducts([...products, updatedProduct]);
    }

    closeModal();
  };

  // Function to delete a product row
  const deleteProduct = (product_id) => {
    const updatedProducts = products.filter(item => item.product_id !== product_id);
    setProducts(updatedProducts);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <Navbar label="Packed Paper Rims" />
      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-4 lg:px-6 font-poppins">
        
        {/* Header */}
        <div className="my-7 p-6 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Packed Cards Rims</h2>
            <p className="text-sm">Manage your product inventory here.</p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-white text-[#2563EB] font-semibold px-4 py-2 rounded-full mt-4 sm:mt-0 hover:bg-blue-50"
              onClick={() => openModal()}
            >
              + Add Product
            </button>
            <button
              className="bg-white text-[#2563EB] font-semibold px-4 py-2 rounded-full mt-4 sm:mt-0 hover:bg-blue-50"
              onClick={() => downloadCSV(products)}
            >
              Download Report
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto rounded-xl shadow-lg bg-white">
          <table className="min-w-full table-auto text-sm text-left">
            <thead className="bg-[#e2effc] text-[#1a4c78] font-semibold">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th> {/* Changed from subcategory to name */}
                <th className="p-3">Customer</th> {/* Changed from type to customer */}
                <th className="p-3">Quantity</th> {/* Changed from total_qty to quantity */}
                <th className="p-3">In Use</th>
                <th className="p-3">Remaining</th>
                <th className="p-3">Date Added</th>
                <th className="p-3">Date Updated</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={item.product_id} className="border-t hover:bg-blue-50 transition">
                  <td className="p-3">{item.product_id}</td>
                  <td className="p-3">{item.name}</td> {/* Changed from subcategory to name */}
                  <td className="p-3">{item.customer}</td> {/* Changed from type to customer */}
                  <td className="p-3">{item.quantity}</td> {/* Changed from total_qty to quantity */}
                  <td className="p-3">{item.in_use}</td>
                  <td className="p-3">{item.remaining}</td>
                  <td className="p-3">{item.date_added}</td>
                  <td className="p-3">{item.date_updated}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => openModal(index)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(item.product_id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
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
                <input
                  type="text"
                  name="name" // Changed from subcategory to name
                  placeholder="Name"
                  value={form.name} // Changed from subcategory to name
                  onChange={handleChange}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="text"
                  name="customer" // Changed from type to customer
                  placeholder="Customer"
                  value={form.customer} // Changed from type to customer
                  onChange={handleChange}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="number"
                  name="quantity" // Changed from total_qty to quantity
                  placeholder="Quantity"
                  value={form.quantity} // Changed from total_qty to quantity
                  onChange={handleChange}
                  className="border px-3 py-2 rounded"
                />
                <input
                  type="number"
                  name="in_use"
                  placeholder="In Use"
                  value={form.in_use}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded"
                />
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button onClick={closeModal} className="text-gray-600 px-4 py-2 rounded hover:bg-gray-100">
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
                >
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
