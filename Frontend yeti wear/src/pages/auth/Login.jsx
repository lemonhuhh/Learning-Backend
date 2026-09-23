import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signupbg from "../../assets/logo/signupbg.png";
import API_URL from "../../api/api.js";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message || "Login Successful.");

      localStorage.setItem("isLoggedIn", "true");

      setFormdata({
        email: "",
        password: "",
      });

      // Role based navigation
      if (response.data.user.role === "USER") {
        navigate("/user");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Login error:", error);

      alert(error.response?.data?.message || "Incorrect email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_12%_10%,rgba(136,189,242,0.36),transparent_26rem),radial-gradient(circle_at_88%_92%,rgba(189,221,252,0.65),transparent_25rem)] p-4">
      <div className="flex w-full max-w-300 h-full max-h-300 flex-col md:flex-row overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
        {/* Welcome Back */}
        <div className="relative w-full md:w-1/2 min-h-5 md:min-h-125 flex items-center text-center justify-center overflow-hidden">
          <img
            src={signupbg}
            alt="Login background"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />

          <p className="relative text-[1.9rem] md:text-[3rem] font-extrabold tracking-wider text-[#184a7c]">
            WELCOME BACK
          </p>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 min-h-125 flex flex-col justify-center p-6 md:p-10">
          <p className="text-center mb-5 text-[2rem] md:text-[2.3rem] font-extrabold text-[#184a7c]">
            Login
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-[0.9rem] font-bold text-[#384959]"
              >
                Email:
              </label>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="text-[0.9rem] font-bold text-[#384959]"
              >
                Password:
              </label>

              <input
                required
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <a
                className="text-[0.86rem] font-bold text-[#4e91d4] hover:underline"
                href="/dashboard"
              >
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <div className="text-center mt-3">
              <button
                type="submit"
                className="min-w-full text-[1rem] p-2 rounded-4xl tracking-wider text-amber-50 bg-[#184a7c]"
              >
                Login
              </button>
            </div>

            {/* Sign up */}
            <div className="text-center pt-5">
              <span>
                Don't have an account?{" "}
                <a href="/signup" className="text-[#4e91d4] hover:underline">
                  Create an account
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
