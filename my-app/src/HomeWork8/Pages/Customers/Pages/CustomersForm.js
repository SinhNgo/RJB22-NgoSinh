import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./style.css";
import axios from "axios";

const ERROR_EMAIL = {
  required: "Email Address is required",
  pattern: "Please include an '@' in the email address ",
};
export default function CustomersForm() {
  let { id } = useParams();
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  let url = "https://provinces.open-api.vn/api/?depth=3";
  async function fetchData() {
    try {
      let response = await axios(url);
      let temp = await response.data;
      setCities(temp);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const cityWatch = watch("city");
  const districtWatch = watch("district");
  return (
    <>
      <form
        className=""
        style={{ padding: 10 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label style={{ width: 80 }} htmlFor="inputEmail">
            Email
          </label>
          <input
            style={{ width: 400 }}
            class="form-control"
            placeholder="Email ..."
            id="inputEmail"
            ref={() => register({ name: "email" })}
            {...register("email", {
              required: ERROR_EMAIL?.required,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
            })}
          />
          <p>{errors.email?.message}</p>
          <p>{errors.email?.type === "pattern" ? ERROR_EMAIL?.pattern : ""}</p>
        </div>
        <div>
          {!id && (
            <>
              <label style={{ width: 80 }} htmlFor="inputPassword4">
                Password
              </label>
              <input
                style={{ width: 400 }}
                type="password"
                className={`form-control`}
                id="inputPassword4"
                {...register("password", { required: true })}
              ></input>
            </>
          )}
        </div>
        <div className="">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            style={{ width: 400 }}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="address 123"
            {...register("address1", { required: true })}
          />
        </div>
        <div className="">
          <div className=" ">
            <label htmlFor="inputState" className="form-label">
              City
            </label>
            <select
              id="inputState"
              defaultValue=""
              className="form-select m-2 pb-2"
              {...register("city", { required: true })}
            >
              <option value="">Choose...</option>
              {cities.map((item) => {
                return <option key={`city-${item?.code}`}>{item?.name}</option>;
              })}
            </select>
          </div>
          <div className="">
            <label htmlFor="inputDistrict">District</label>
            <select
              id="inputDistrict"
              className="form-select m-2 pb-2"
              {...register("district", { required: true })}
            >
              <option value="">Choose</option>
              {cities.map((item) => {
                return item?.name === cityWatch
                  ? item?.districts.map((district) => {
                      return (
                        <option key={`districts-${district?.code}`}>
                          {district?.name}
                        </option>
                      );
                    })
                  : null;
              })}
            </select>
          </div>
          <div className="">
            <label htmlFor="inputCommune" className="form-label">
              Commune
            </label>
            <select
              id="inputCommune"
              defaultValue=""
              className="form-select m-2 pb-2"
              {...register("commune", { required: true })}
            >
              <option value="">Choose...</option>
              {cities.map((item) => {
                return item?.name === cityWatch
                  ? item?.districts.map((district) => {
                      return district?.name === districtWatch
                        ? district?.wards.map((ward) => {
                            return (
                              <option key={`ward-${ward?.code}`}>
                                {ward?.name}
                              </option>
                            );
                          })
                        : null;
                    })
                  : null;
              })}
            </select>
          </div>
        </div>
        <div>
          <label className="gender" style={{ width: 80 }}>
            Gender
          </label>
          <div className="form-chec">
            <input type="radio"></input>
            <label className="text">Nam</label>
          </div>
          <div className="form-chec">
            <input type="radio"></input>
            <label className="text">Nu</label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </>
  );
}
