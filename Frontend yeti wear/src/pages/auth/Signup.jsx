import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupbg from "../../assets/logo/signupbg.png";
import axios from "axios";
import API_URL from "../../api/api";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    terms: false,
    password: "",
    confirmPassword: "",
  });

  // Handles both text inputs and checkbox
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormdata({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check terms
    if (!formData.terms) {
      alert("Please accept the terms!");
      return;
    }

    try {
      console.log("Sending data:", formData);

      // Axios automatically sends JSON
      const response = await axios.post(`${API_URL}/auth/register`, formData);

      console.log("Response:", response.data);

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);

      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_12%_10%,rgba(136,189,242,0.36),transparent_26rem),radial-gradient(circle_at_88%_92%,rgba(189,221,252,0.65),transparent_25rem)] p-4">
      <div className="flex w-full max-w-300 flex-col md:flex-row overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
        {/* Welcome Section */}
        <div className="relative w-full md:w-1/2 min-h-50 md:min-h-125 flex items-center text-center justify-center overflow-hidden">
          <img
            src={signupbg}
            alt="Signup background"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />

          <p className="relative text-[1.8rem] md:text-[4.3rem] font-extrabold tracking-wider text-[#184a7c]">
            JOIN US
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <p className="text-center mb-5 text-[2rem] md:text-[2.3rem] font-extrabold text-[#184a7c]">
            Sign Up
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Full name:
                </label>

                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

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
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="mt-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Phone number:
                </label>

                <input
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="mt-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Address */}
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
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your address"
                  className="mt-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
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
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="mt-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-[0.9rem] font-bold text-[#384959]"
                >
                  Confirm password:
                </label>

                <input
                  required
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="mt-1 min-h-12.5 w-full rounded-[10px] border border-[#c9dceb] bg-white px-3.5 text-[#384959] outline-none transition focus:border-[#88bdf2] focus:shadow-[0_0_0_4px_rgba(136,189,242,0.2)]"
                />
              </div>

              {/* Terms */}
              <div className="col-span-1 md:col-span-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />

                <label htmlFor="terms" className="text-sm text-[#384959]">
                  I agree to the terms and conditions.
                </label>
              </div>

              {/* Sign Up Button */}
              <div className="text-center mt-2 col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="w-full text-[1rem] p-3 rounded-4xl tracking-wider text-amber-50 bg-[#184a7c] hover:bg-[#12395f] transition"
                >
                  Sign Up
                </button>
              </div>

              {/* Login */}
              <div className="text-center pt-2 col-span-1 md:col-span-2">
                <span>
                  Already have an account?{" "}
                  <a href="/login" className="text-[#4e91d4] hover:underline">
                    Login
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
