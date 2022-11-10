import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";


export const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");


  useEffect(() => {
    init();
  }, []);

  const init = () => {
    axios
      .get("http://localhost:8080/products", productList)
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
   axios.delete(`http://localhost:8080/products/${id}`,productList)
      .then((res) => {
        setMsg("Delete Sucessfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar/>

      <h1>Home Page</h1>
      <h3>Product List</h3>
      {msg}
      <table style={{margin:"auto",border:"1px solid black",padding:"10px"}}>
        <thead>
          <tr>
            <th scope="col" style={{border:"1px solid black"}}>id</th>
            <th scope="col" style={{border:"1px solid black"}}>Product Name</th>
            <th scope="col" style={{border:"1px solid black"}}>Product Type</th>
            <th scope="col" style={{border:"1px solid black"}}>Product Category</th>
            <th scope="col" style={{border:"1px solid black"}}>Discount</th>
            <th scope="col" style={{border:"1px solid black"}}>GST</th>
            <th scope="col" style={{border:"1px solid black"}}>DeliveyCharge</th>
            <th scope="col" style={{border:"1px solid black"}}>Price</th>
          </tr>
        </thead>

        <tbody>
          {productList.map((p, num) => (
            <tr key={p.id}>
              <td style={{border:"1px solid black"}}>{num + 1}</td>
              <td style={{border:"1px solid black"}}>{p.productName}</td>
              <td style={{border:"1px solid black"}}>{p.ProductType}</td>
              <td style={{border:"1px solid black"}}>{p.ProductCategory}</td>
              <td style={{border:"1px solid black"}}>{p.Discount}</td>
              <td style={{border:"1px solid black"}}>{p.GST}</td>
              <td style={{border:"1px solid black"}}>{p.DeliveyCharge}</td>
              <td style={{border:"1px solid black"}}>{p.Price}</td>
              <td>
                <button
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
