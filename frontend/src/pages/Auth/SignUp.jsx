import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Upload, Eye, EyeOff, UserCheck, Building2, CheckCircle, AlertCircle, Loader, } from "lucide-react";


const SignUp = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        role: '',
        avatar: null,
    });

    const [formState, setFormState] = useState({
        loading: false,
        errors: {},
        showpassword: false,
        avatarPreview: null,
        success: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // clear error when user typing
        if (formState.errors[name]) {
            setFormState(prev => ({
                ...prev,
                errors: { ...prev.errors, [name]: '' }
            }));
        }
    };

    const handleRoleChange = (role) => { };

    const handleAvatarChange = (e) => { };

    const validateForm = () => { };

    const handleSubmit = async (e) => { };

    if (formState.success) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center'
                >
                    <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
                    <p className="text-gray-600 mb-4">Welcome to JobPortal! Your account has been successfully created.</p>
                    <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto "></div>
                    <p className="text-sm text-gray-500 mt-2">Redirecting to your dashboard.</p>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='bg-white p-8 rounded-xl shadow-lg max-w-md w-full'
            >
                <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Create Account</h2>
                    <p className="text-sm text-gray-600">Join thousands of professionals finding their dream jobs</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <div className="relative">
                            <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                            <input
                                type="text"
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-4 py-3 rounded-lg border 
                                    ${formState.errors.fullName ? "border-red-500" : "border-gray-300"} 
                                    focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                placeholder='Enter your Full Name'
                            />
                        </div>
                        {formState.errors.fullName && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className='w-4 h-4 mr-1' />
                                {formState.errors.fullName}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input type="email"
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full pl-10 pr-4 py-3 rounded-lg border 
                                ${formState.errors.email ? "border-red-500" : "border-gray-300"}
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                                placeholder='Enter your email'
                            />
                        </div>
                        {formState.errors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className='w-4 h-4 mr-1' />
                                {formState.errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                        <div className="relative" >
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type={formState.showpassword ? 'text' : "password"}
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full pl-20 pr-12 py-3 rounded-lg border 
                                ${formState.errors.password ? 'border-red-500' : 'border-gray-300'}
                                focus:ring-2 focus:ring-blue-500 focus:border-trasparent transition-colors`}
                                placeholder='Create a strong Password'
                            />
                            <button
                                type='button'
                                onClick={() =>
                                    setFormState((prev) => ({
                                        ...prev,
                                        showpassword: !prev.showpassword,
                                    }))
                                }
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                            >
                                {formState.showpassword ? (
                                    <EyeOff className='w-5 h-5' />
                                ) : (
                                    <Eye className='w-5 h-5' />
                                )}
                            </button>
                        </div>
                        {formState.errors.password && (
                            <p className="text-red-500 text-sm mt-1 flex items-center">
                                <AlertCircle className='w-4 h-4 mr-1' />
                                {formState.errors.password}
                            </p>
                        )}
                    </div>

                    {/* Avatar Upload */}
                    <div>
                        <label className="">Profile Picture (Optional)</label>
                        <div className="">
                            <div className="">
                                {formState.avatarPreview ? (
                                    <img
                                        src={formState.avatarPreview}
                                        alt="Avetar Preview"
                                        className=""
                                    />
                                ) : (
                                    <User className='' />
                                )}
                            </div>
                            <div className="">
                                <input
                                    type="file"
                                    id='avatar'
                                    accept='.jpg,.jpeg,.png'
                                    onClick={handleInputChange}
                                    className=""
                                />
                                <label htmlFor="avatar" className="">
                                    <Upload className='' />
                                    <span>Upload Photo</span>
                                </label>
                                <p className="">JPG, PNG up to 5MB</p>
                            </div>
                        </div>
                        {formState.errors.avatar && (
                            <p className="">
                                <AlertCircle className='' />
                                {formState.errors.avatar}
                            </p>
                        )}
                    </div>

                    {/* Role Selection */}
                    <div>
                        <label className="">I am a *</label>
                        <div className="">
                            <button
                                type="button"
                                onClick={() => handleRoleChange('jobseeker')}
                                className={`p-4 rounded-lg border-2 transition-all 
                                ${formData.role === "jobseeker" ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                                <UserCheck className='' />
                                <div className="">Job Seeker</div>
                                <div className="">Looking for opportunities</div>
                            </button>
                            <button
                                type="button"
                                onClick={() => handleRoleChange('employer')}
                                className={`p-4 rounded-lg border-2 transition-all 
                                ${formData.role === 'employer' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300'}`}
                            >
                                <Building2 className='' />
                                <div className="">Employer</div>
                                <div className="">Hiring Talent</div>
                            </button>
                        </div>
                        {formState.errors.role && (
                            <p className="">
                                <AlertCircle className='' />
                                {formState.errors.role}
                            </p>
                        )}
                    </div>

                    {/* Submit Error */}
                    {formState.errors.submit && (
                        <div className="">
                            <p className="">
                                <AlertCircle className='' />
                                {formState.errors.submit}
                            </p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={formState.loading}
                        className=''
                    >
                        {formState.loading ? (
                            <>
                                <Loader className='' />
                                <span>Creating Account...</span>
                            </>
                        ) : (
                            <span>Create Account</span>
                        )}
                    </button>

                    {/* Login Link */}

                </form>
            </motion.div>
        </div >
    )
}

export default SignUp
