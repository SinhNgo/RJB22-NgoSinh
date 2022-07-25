import React from "react";
import { useForm } from "react-hook-form";

export default function FormHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log("Submit");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name"></input>
        <button></button>
      </form>
    </>
  );
}
