import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BtnFeature from "../../../components/BtnFeature";

export default function CustomersList() {
  const [customerList, setCustomerList] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  let url = "https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/Users";
  async function fetchData() {
    try {
      setIsLoad(true);
      let response = await axios.get(url, {
        params: {
          page: 1,
          limit: 10,
        },
      });
      let temp = await response.data;
      setIsLoad(false);
      setCustomerList(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, []);

  const deleteData = (id) => {
    axios
      .delete("https://62d16e83d4eb6c69e7dd4ff6.mockapi.io/Users/" + id)
      .then(function (response) {
        toast.success("Successfully deleted!");
        fetchData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            STT
          </th>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            Name
          </th>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            Email
          </th>
          <th style={{ backgroundColor: "#F0E68C" }} scope="col">
            Address
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
        {customerList.map((customer, index) => {
          return (
            <tr key={`customer-${customer?.id}`}>
              <th scope="row">{index + 1}</th>
              <td>{customer?.name}</td>
              <td>{customer?.email}</td>
              <td>{customer?.address}</td>
              <td style={{ textAlign: "center" }}>
                <BtnFeature
                  itemId={customer?.id}
                  name="customer"
                  onDelete={(e) => deleteData(customer?.id, e)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
