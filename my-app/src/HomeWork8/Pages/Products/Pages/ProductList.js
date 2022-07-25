import React, { useState, useEffect } from "react";
import axios from "axios";
import BtnFeature from "../../../components/BtnFeature";

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  let url = "https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/product";
  async function fetchData() {
    try {
      let response = await axios.get(url, {
        params: {
          page: 1,
          limit: 10,
        },
      });

      let temp = await response.data;
      setProductList(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  const deleteData = (id) => {
    axios
      .delete("https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/product/" + id)
      .then(function (response) {
        console.log("delete", id, response);
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            ID
          </th>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            Name
          </th>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            Price
          </th>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            Color
          </th>
          <th
            style={{
              width: 250,
              backgroundColor: "#F0E68C",
              textAlign: "center",
            }}
            scope="col"
          >
            Feature
          </th>
        </tr>
      </thead>
      <tbody>
        {productList.map((product, index) => {
          return (
            <tr key={`product-${product?.id}`}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.color}</td>
              <td>
                <BtnFeature
                  itemId={product?.id}
                  name="product"
                  onDelete={(e) => deleteData(product?.id, e)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
