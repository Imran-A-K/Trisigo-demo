"use client";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuthentication from "@/hooks/useAuthentication";

const loginImg = "/Log_Reg.webp";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const router = useRouter();
  const { signIn } = useAuthentication();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    setFirebaseError("");
    // console.log(data)
    signIn(data.email, data.password)
      .then(async (result) => {
        // const user = result.user;
        // console.log(user)
        await Swal.fire({
          position: "top",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        router.replace("/Destination");
      })
      .catch((error) => {
        // console.log(error.message)
        if (error.message.includes("user-not-found")) {
          setFirebaseError(
            "We couldn't locate your account! Please double-check the accuracy of your email address. If this is your first time here, please register."
          );
        } else if (error.message.includes("wrong-password")) {
          setFirebaseError(
            "Incorrect Password! Please Enter your password correctly"
          );
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-row-reverse justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center flex-grow h-full">
            <div className="w-full flex-1 flex-grow flex flex-col items-center h-full">
              <h1 className="text-2xl xl:text-3xl font-bold mb-3">
                Welcome back!
              </h1>
              <h1 className="text-2xl xl:text-2xl text-center font-semibold">
                Please enter your details to login
              </h1>
              <div className="text-center mt-5 mb-4">
                <span className="text-red-500 font-semibold">
                  {firebaseError}
                </span>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-xs"
              >
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address.",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors?.email && (
                  <p
                    className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                    role="alert"
                  >
                    <BiError /> {errors.email.message}
                  </p>
                )}
                <div className="relative">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type={showPassword === false ? "password" : "text"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Please Enter your password.",
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  <div className="cursor-pointer text-2xl absolute right-3 top-8 z-10">
                    {showPassword === false ? (
                      <AiFillEye
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                  {errors?.password && (
                    <p
                      className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                      role="alert"
                    >
                      <BiError /> {errors.password.message}
                    </p>
                  )}
                </div>
                <button className="mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 active:scale-[.98] ease-in-out transform active:duration-100 transition-all hover:scale-[1.01] flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="mt-6 text-base text-gray-600 text-center font-semibold">
                  Don&apos;t have an account?{" "}
                  <Link href="/Register" className=" text-orange-600 font-bold">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-violet-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${loginImg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div>
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            className="w-32 mx-auto"
          />
        </div> */
}
