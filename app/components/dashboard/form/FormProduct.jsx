"use client";
import { useContext, useState } from "react";
import BasicBtn from "../../btn/BasicBtn";
import BasicInput from "../../input/BasicInput";
import Cookie from "cookie-universal";
import axios from "axios";
import { formContext } from "@/app/context/formContext";

export default function FormProduct() {
  const [img, setImg] = useState([]);
  let cookie;
  let token;
  if (typeof window !== "undefined") {
    cookie = Cookie();
    token = cookie.get("Bearer");
  }

  const { form } = useContext(formContext);
  //HandleSubmit
  async function handleSubmit(e) {
    e.preventDefault();
    const formProduct = new FormData();
    formProduct.append("productName", form.productName);
    formProduct.append("brandName", form.brandName);
    formProduct.append("category", form.category);
    formProduct.append("description", form.description);
    formProduct.append("price", form.price);
    formProduct.append("sellingPrice", form.sellingPrice);
    for (let i = 0; i < img.length; i++) {
      formProduct.append("productImage", img[i]);
    }
    try {
      let res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}upload-product`,
        formProduct,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <BasicInput
          Label="Product Name: "
          id="productName"
          name="productName"
          value="productName"
          type="text"
          placeholder="ProductName..."
        />
        <BasicInput
          Label="Brand Name: "
          id="brandName"
          name="brandName"
          value="brandName"
          type="text"
          placeholder="BrandName..."
        />
        <BasicInput
          Label="Category: "
          id="category"
          name="category"
          value="category"
          type="text"
          placeholder="Category..."
        />
        <BasicInput
          Label="Description: "
          id="description"
          name="description"
          value="description"
          type="text"
          placeholder="Description..."
        />
        <BasicInput
          Label="Price: "
          id="price"
          name="price"
          value="price"
          type="number"
          placeholder="price..."
        />
        <BasicInput
          Label="Selling Price: "
          id="sellingPrice"
          name="sellingPrice"
          value="sellingPrice"
          type="number"
          placeholder="SellingPrice..."
        />
        <div>
          <label htmlFor="img">Images</label>
          <input
            id="img"
            type="file"
            onChange={(e) => setImg(e.target.files)}
            multiple
            required
          />
        </div>
        <BasicBtn />
      </form>
    </div>
  );
}
