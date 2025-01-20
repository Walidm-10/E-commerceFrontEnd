"use client";
import { createContext, useState } from "react";

export const formContext = createContext();

export default function FormContext({ children }) {
  const [form, setForm] = useState({
    productName: "",
    brandName: "",
    category: "",
    description: "",
    price: "",
    sellingPrice: "",
  });
  return (
    <formContext.Provider value={{ form, setForm }}>
      {children}
    </formContext.Provider>
  );
}
