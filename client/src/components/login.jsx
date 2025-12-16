import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Login() {

    const [inputData, setInputData] = useState({})


    const count = useSelector((state) => state.User.value)
    const dispatch = useDispatch()

    const formSubmit = async () => {
        try {
            
        } catch (error) {
            
        }
    }



    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setInputData((pre) => ({ ...pre, [name]: value }))
    }


    return (
        <div className="loginpage flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 px-4">
            <form
                onSubmit={formSubmit}    
                className="form flex flex-col gap-6 text-white shadow-lg rounded-2xl max-w-md w-full px-10 py-8 bg-black/40 backdrop-blur-md"
            >
                <h1 className="text-5xl font-bold text-center mb-6">Sign Up</h1>


                {/* Username */}
                <div className="flex flex-col">
                    <input
                        className={`border-b-2 px-3 py-2 rounded-md outline-none w-full transition-colors `}
                        type="text"
                        name='userName'
                        placeholder="User Name"
                        value={inputData.userName}
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                {/* Email */}
                <div className="flex flex-col">
                    <input
                        className={`border-b-2 px-3 py-2 rounded-md outline-none w-full transition-colors `}
                        type="email"
                        placeholder="Email Address"
                        value={inputData.email}
                        onChange={inputChangeHandler}
                        required
                        name='email'
                    />
                </div>
                {/* password */}
                <div className="flex flex-col">
                    <input
                        className={`border-b-2 px-3 py-2 rounded-md outline-none w-full transition-colors `}
                        type="password"
                        placeholder="Password"
                        value={inputData.password}
                        onChange={inputChangeHandler}
                        required
                        name='password'
                    />

                </div>




                <Link to="/login" className="text-center">
                    Allready Have an Account{" "}
                    <span className="text-red-500 capitalize font-bold">Login</span>
                </Link>
            </form>
        </div>

    )
}
