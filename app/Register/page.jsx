"use client";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { BiError } from "react-icons/bi";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuthentication from "@/hooks/useAuthentication";

const RegisterImg = "/Log_Reg.webp";

const Register = () => {
  const [firebaseError, setFirebaseError] = useState("");
  const { registerUser, updateUserProfile, googleSignIn, logOut } =
    useAuthentication();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    setFirebaseError("");
    data.role = "user";
    // console.log(data);
    registerUser(data.email, data.password)
      .then((result) => {
        // const registeredUser = result.user;
        updateUserProfile(data.name, data.photoUrl).then(async () => {
          await axios
            .post(`https://camp-ninja-server.vercel.app/register-new-user`, {
              name: data.name,
              email: data.email,
              photoUrl: data.photoUrl,
              role: "student",
            })
            .then((response) => {
              console.log(response);
            });

          await Swal.fire({
            position: "top",
            icon: "success",
            title: "Your account has been created successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          //   logOut()
          //     .then()
          //     .catch((error) => {
          //       console.log(error.message);
          //     });

          router.replace("/Destination");
        });
      })
      .catch((error) => {
        // console.log(error.message)
        if (error.message.includes("auth/email-already-in-use")) {
          setFirebaseError(
            "Your account was previously registered. Please login to continue"
          );
        }
      });
  };
  const signUpWithGoogle = () => {
    googleSignIn()
      .then(async (result) => {
        const registeredUser = result.user;
        await axios
          .post(`https://camp-ninja-server.vercel.app/register-new-user`, {
            name: registeredUser.displayName,
            email: registeredUser.email,
            photoUrl: registeredUser.photoURL,
            role: "student",
          })
          .then((response) => {
            console.log(response);
            router.replace("/Destination");
          });
      })
      .catch((error) => {
        console.log("error", error.message);
        if (error.message === "You are already registered") {
          router.replace("/Destination");
        }
      });
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const password = watch("password");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-row-reverse justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-bold mb-3">Welcome!</h1>
            <h1 className="text-2xl xl:text-2xl text-center font-semibold">
              Please enter your details
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="text-center mb-4">
                <span className="text-red-500 font-semibold">
                  {firebaseError}
                </span>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto max-w-xs"
              >
                <input
                  className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="name"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p
                    className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                    role="alert"
                  >
                    <BiError /> Please Enter your Name
                  </p>
                )}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="email"
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
                    name="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required.",
                      //   pattern: {
                      //     value: /^(?=.*[A-Z]).*$/,
                      //     message: "Password must have a capital letter."
                      //   },
                      //   validate: (value) => {
                      //     const hasSpecialCharacter = /^(?=.*[!@#$%^&*()_\-+=|\\[\]{};:'",.<>\/?]).*$/.test(
                      //       value
                      //     );
                      //     return (
                      //       hasSpecialCharacter || {
                      //         value: false,
                      //         message: "Password must have a special character."
                      //       }
                      //     );
                      //   },
                      validate: (value) => {
                        const hasSpecialCharacter =
                          /^(?=.*[!@#$%^&*()_\-+=|\\[\]{};:'",.<>\/?]).*$/.test(
                            value
                          );
                        const hasCapitalLetter = /^(?=.*[A-Z]).*$/.test(value);
                        if (!hasCapitalLetter) {
                          return "Password must have a capital letter.";
                        }
                        if (!hasSpecialCharacter) {
                          return "Password must have a special character.";
                        }
                        return true;
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
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
                  {errors?.password?.type === "required" ||
                  errors?.password?.type === "validate" ||
                  errors?.password?.type === "minLength" ? (
                    <p
                      className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                      role="alert"
                    >
                      <BiError /> {errors?.password?.message}
                    </p>
                  ) : null}

                  {/* {console.log(errors.password)} */}
                </div>

                <div className="relative">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type={showPassConfirm === false ? "password" : "text"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: "Please Confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match.",
                    })}
                  />
                  <div className="cursor-pointer text-2xl absolute right-3 top-8 z-10">
                    {showPassConfirm === false ? (
                      <AiFillEye
                        onClick={() => setShowPassConfirm(!showPassConfirm)}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        onClick={() => setShowPassConfirm(!showPassConfirm)}
                      />
                    )}
                  </div>
                  {errors?.confirmPassword?.type === "required" ||
                  errors?.confirmPassword?.type === "validate" ? (
                    <p
                      className="pl-1 pt-2 flex items-center gap-2 text-base text-red-500"
                      role="alert"
                    >
                      <BiError /> {errors?.confirmPassword?.message}
                    </p>
                  ) : null}
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
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-base text-gray-600 text-center font-semibold">
                  Already have an account?{" "}
                  <Link href="/Login" className=" text-orange-600 font-bold">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-violet-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${RegisterImg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
