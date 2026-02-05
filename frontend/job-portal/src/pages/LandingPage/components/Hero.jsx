import { motion } from 'react'
import { Search, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {

    const isAuthenticated = true;
    const user = { fullName: "Alex", role: "employer" }
    const navigate = useNavigate();
    const stats = [
        { icon: Users, label: 'Active Users', value: '2.4M+' },
        { icon: Building2, label: 'Companies', value: '50K+' },
        { icon: TrendingUp, label: 'Job Posted', value: '150K+' },
    ];

    return (
        <section className=''>
            <div className=''>
                <div className="">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className=''
                    >
                        Find Your Dream Job or
                        <span className=''>Perfect Hire</span>
                    </motion.h1>

                    {/* SubHeading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className=''
                    >
                        Connect talented professionals with innovative Companies.
                        Your next career move or perfect candidate is just one click away.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ opacity: 0.4, duration: 0.8 }}
                        className=''
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className=''
                            onClick={() => navigate("find-jobs")}
                        >
                            <Search className='' />
                            <span>find Jobs</span>
                            <ArrowRight className='' />
                        </motion.button>

                        <motion.button ></motion.button>

                    </motion.div>


                </div>
            </div>
        </section >
    )
}

export default Hero
