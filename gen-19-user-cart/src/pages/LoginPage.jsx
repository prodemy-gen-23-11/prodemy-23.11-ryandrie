import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken, setUser } from "../store/reducers/authSlice";
import FormInput from "../components/FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // watch,
        // setValue,
        // formState: { errors },
    } = useForm({
        // resolver: yupResolver(schema),
        // mode: "onChange",
    });
    const handleLogin = (data) => {
        const payload = {
            email: data.email,
            password: data.password,
        };
        console.log(payload);
        axios
            .post("http://localhost:3000/login", payload)
            .then((res) => {
                const { accessToken, user } = res.data;
                dispatch(setToken(accessToken));
                dispatch(setUser(user));

                if (user.role === "ADMIN") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/");
                }
            })
            .catch((err) => {
                alert("Terjadi kesalahan");
                console.error(err);
                console.error(err.response);
            });
    };

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className='bg-white m-5 p-10 rounded-2xl flex flex-col justify-center w-1/3'>
                <h1 className='mx-2 font-impact text-3xl text-center'>
                    Ustora
                </h1>
                <hr className='my-2 border-gainsboro' />
                <div>
                    <div className='flex justify-center items-center gap-2 my-2'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-10 h-10 stroke-[1px]'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            />
                        </svg>

                        <h2 className='font-semibold font-poppins'>Login</h2>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className='flex flex-col gap-2'
                    >
                        <FormInput
                            name='email'
                            label='Email'
                            register={register}
                        />
                        <FormInput
                            name='password'
                            label='Password'
                            register={register}
                            type='password'
                        />
                        <button
                            className='self-end mt-4 w-1/4 text-blue-700 hover:text-white border border-blue-700 hover:cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center '
                            type='submit'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
