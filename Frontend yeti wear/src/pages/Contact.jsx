import React from "react";
import { useState } from "react";

function Contact() {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message:"",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    
    

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(formData);
    setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  };
//   const [formdata, setFormdata] = useState({
//     name:"",
//     email:"",
//     subject:"",
//     message:"",
// })

// const handleChange=(e)=>{
//   e.preventDeafult();
//   console.log(formdata)
//   localStorage.setItem("Name", name)
// }
  return (
    <>
                                                {/* GET IN TOUCH */}
      <div className="main-container mx-auto flex justify-center gap-10 rounded-2xl bg-(--bg) p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="get-in-touch-container p-5 ">
          <div>
            <h2 className="text-2xl font-bold text-cyan-900 p-3">
              Get In Touch
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mt-4 max-w-md text-slate-500">
              Have a question, project idea, or just want to say hello? Feel
              free to reach out.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <p className="mt-1 text-slate-500">hello@example.com</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Phone</p>
                <p className="mt-1 text-slate-500">+977 98XXXXXXXX</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Location</p>
                <p className="mt-1 text-slate-500">Kathmandu, Nepal</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Response Time
                </p>
                <p className="mt-1 text-slate-500">
                  Within 24 hours <br />
                  For every direct enquiry
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.03188172603!2d-74.10964823279062!3d40.64537482094772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1787041503423!5m2!1sen!2snp"
            width="350"
            height="200"
            
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

                                                 {/* FORM */}


        <div className="form-container p-5 flex justify-center text-center ">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <h2 className="text-2xl font-bold text-cyan-900 p-3">
                Send Us A Message
              </h2>
            </div>
            <div className="flex gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  className="max-w-100 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="max-w-100 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-107 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="Message"
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-107 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <button className="primary-btn " type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
