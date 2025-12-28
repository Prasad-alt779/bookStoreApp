import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";


const Signup = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-slate-900">
      <div className="relative w-[360px] border border-gray-300 p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800">

    
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-xl text-center mb-5 text-gray-800 dark:text-white">
          Signup
        </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-800 dark:text-white">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-800 dark:text-white">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block mb-1 font-medium text-gray-800 dark:text-white">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
            Signup
          </button>

          <p className="text-sm text-gray-800 dark:text-white">
            Have an account?{" "}
            <button
              className="text-blue-500 underline"
              onClick={() =>
                document.getElementById("my_modal_3").showModal()
              }
            >
              Login
            </button>
          </p>
        </div>

        {/* Login Modal */}
        <Login />
      </form>
      </div>
    </div>
  );
};

export default Signup;
