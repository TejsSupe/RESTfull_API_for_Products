import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";

export const Addproduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    ProductType: "",
    ProductCategory: "",
    Discount:"",
    GST:"",
    DeliveyCharge:"",
    Price: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/products", product)
      .then((res) => {
        console.log("Product Added Sucessfully");
        setMsg("Product Added Sucessfully");
        setProduct({
            productName: "",
            ProductType: "",
            ProductCategory: "",
            Discount:"",
            GST:"",
            DeliveyCharge:"",
            Price: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <Navbar/>
      <h1> Add Product </h1>
      {msg && <p>{msg}</p>}

      <form action="" onSubmit={(e) => ProductRegsiter(e)} className="formcss">
        <div>
          <label>Enter Product Name</label>
          <br/>
          <input
            type="text"
            name="productName"
            onChange={(e) => handleChange(e)}
            value={product.productName}
          />
        </div>

        <div>
          <label>Product Type</label>
          <br/>
          <input
            type="text"
            name="ProductType"
            onChange={(e) => handleChange(e)}
            value={product.ProductType}
          />
        </div>

        <div>
          <label>Product Category</label>
          <br/>
          <input
            type="text"
            name="ProductCategory"
            onChange={(e) => handleChange(e)}
            value={product.ProductCategory}
          />
        </div>

        <div>
          <label>Discount</label>
          <br/>
          <input
            type="text"
            name="Discount"
            onChange={(e) => handleChange(e)}
            value={product.Discount}
          />
        </div>

        <div>
          <label>GST</label>
          <br/>
          <input
            type="text"
            name="GST"
            onChange={(e) => handleChange(e)}
            value={product.GST}
          />
        </div>


        <div>
          <label>Delivey Charge</label>
          <br/>
          <input
            type="text"
            name="DeliveyCharge"
            onChange={(e) => handleChange(e)}
            value={product.DeliveyCharge}
          />
        </div>
        
        <div>
          <label>Price</label>
          <br/>
          <input
            type="text"
            name="Price"
            onChange={(e) => handleChange(e)}
            value={product.Price}
          />
        </div>

        <div>
          <button className="submitbtn">Submit</button>
        </div>
      </form>
    </div>
  );
};
