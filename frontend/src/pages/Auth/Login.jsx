import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Loader, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [formState, setFormState] = useState({
        loading: false,
        errors: {},
        showPassword: false,
        success: false
    });

    // Validation Functions
    const validateEmail = (email) => { };

    const validatePassword = (password) => { };

    // Handle input Changes
    const handleInputChange = (e) => { };
    const validateForm = () => { };
    const handleSubmit = async (e) => { };

    return (
        <div className="">
            <motion.div
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=''>
                <div className="">
                    <h2 className="">Welcome Back</h2>
                    <p className="">Sign in to your JobPortal account</p>
                </div>

                <form action="" className="">
                    <div>
                        <label className="">Email Address</label>
                        <div className="">
                            <Mail className='' />
                            <input type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-4 py-3 rounded-lg border 
                                    ${formState.errors.email ? 'border-red-500' : 'border-gray-300'}  
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                placeholder='Enter your email'
                            />
                        </div>
                        {/* Password */}
                        <div>
                            <label className="">Password</label>
                            <div className="">
                                <Lock className='' />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-3 rounded-lg border 
                                    ${formState.errors.password ? 'border-red-500' : 'border-gray-300'}  
                                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                    placeholder='Enter your password'
                                />
                                <button
                                    type="button"

                                />
                            </div>
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Login
