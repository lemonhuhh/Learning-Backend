import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signupbg from "../../assets/logo/signupbg.png";
import API_URL from "../../api/api.js";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormdata({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.terms) {
      alert("Please accept the terms!");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/auth/signup`, formData);
      console.log(response.data);
      alert("Registration successful!");

      setFormdata({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });

      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);

      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_12%_10%,rgba(136,189,242,0.36),transparent_26rem),radial-gradient(circle_at_88%_92%,rgba(189,221,252,0.65),transparent_25rem)] p-4">
      <div className="flex w-full max-w-300 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 min-h-125 flex items-center justify-center overflow-hidden">
          <img
            src={signupbg}
            alt="Signup background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <p className="relative text-[1.9rem] md:text-[3rem] font-extrabold tracking-wider text-[#184a7c]">
            CREATE ACCOUNT
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <p className="text-center mb-5 text-[2rem] md:text-[2.3rem] font-extrabold text-[#184a7c]">
            Sign Up
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="text-[0.9rem] font-bold text-[#384959]"
              >
                Name:
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
              />
            </div>

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

            <div>
              <label
                htmlFor="phone"
                className="text-[0.9rem] font-bold text-[#384959]"
              >
                Phone:
              </label>

              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="98XXXXXXXX"
                className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="text-[0.9rem] font-bold text-[#384959]"
              >
                Address:
              </label>

              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your address"
                className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
              />
            </div>

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
                placeholder="Create a password"
                className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="text-[0.9rem] font-bold text-[#384959]"
              >
                Confirm Password:
              </label>

              <input
                required
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="m-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
              />
            </div>

            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <label className="text-sm text-[#384959]">
                I agree to the terms and conditions.
              </label>
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="min-w-full text-[1rem] p-2 rounded-4xl tracking-wider text-amber-50 bg-[#184a7c]"
              >
                Create Account
              </button>
            </div>

            <div className="text-center pt-5">
              <span>
                Already have an account?{" "}
                <a href="/login" className="text-[#4e91d4] hover:underline">
                  Login
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
