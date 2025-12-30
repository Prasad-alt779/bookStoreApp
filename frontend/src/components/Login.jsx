import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      
          email: data.email,
          password: data.password,
        };
    
        try {
          const res = await axios.post(
            "http://localhost:4001/user/Login",
            userInfo
          );
    
          toast.success('Successfully toasted!')

          console.log(res.data);
          localStorage.setItem("users",JSON.stringify(res.data.user));
        } catch (err) {
      toast.error('This is an error!'+err.message);

      
        };
    
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg">Login</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          
          {/* Email */}
          <div>
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          
          </div>

          {/* Password */}
          <div>
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300"
            >
              Login
            </button>

            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
