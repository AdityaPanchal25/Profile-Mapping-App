import React, { useContext, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

export default function AdminLogin() {
    const context = useContext(myContext);
    const { mode } = context;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Initialize navigate

    // Handler to check credentials
    const handleLogin = (e) => {
        e.preventDefault();
        
        const correctEmail = 'adityapanchal0205@gmail.com';
        const correctPassword = 'Adi@0205';
        
        if (email === correctEmail && password === correctPassword) {
            // Successful login logic here
            alert('Login successful!');
            navigate("/dashboard"); // Navigate to the dashboard
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {/* Card */}
            <Card
                className="w-full max-w-[24rem]"
                style={{
                    background: mode === 'dark'
                        ? 'rgb(30, 41, 59)'
                        : 'rgb(226, 232, 240)'
                }}
            >
                {/* CardHeader */}
                <CardHeader
                    color="blue"
                    floated={false}
                    shadow={false}
                    className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
                    style={{
                        background: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : 'rgb(30, 41, 59)'
                    }}
                >
                    <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-2 text-white">
                        <div className=" flex justify-center">
                            {/* Image */}
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
                                className="h-20 w-20"
                                alt="admin"
                            />
                        </div>
                    </div>

                    {/* Top Heading */}
                    <Typography variant="h4" style={{
                        color: mode === 'dark'
                            ? 'rgb(30, 41, 59)'
                            : 'rgb(226, 232, 240)'
                    }}>
                        Admin Login
                    </Typography>
                </CardHeader>

                {/* CardBody */}
                <CardBody>
                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                        {/* First Input */}
                        <div>
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {/* Second Input */}
                        <div>
                            <Input
                                type="password"
                                label="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/* Login Button */}
                        <Button
                            type="submit"
                            style={{
                                background: mode === 'dark'
                                    ? 'rgb(226, 232, 240)'
                                    : 'rgb(30, 41, 59)',
                                color: mode === 'dark'
                                    ? 'rgb(30, 41, 59)'
                                    : 'rgb(226, 232, 240)'
                            }}>
                            Login
                        </Button>
                        {/* Error Message */}
                        {error && <Typography variant="small" color="red" className="mt-2">{error}</Typography>}
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
