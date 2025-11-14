"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

const ContactPage = () => {
  const [division, setDivision] = useState("studio");
  const [serviceOptions, setServiceOptions] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [submited,setSubmited]=useState(true)

  useEffect(() => {
    if (division === "studio") {
      setServiceOptions([
        "Research & Validation",
        "MVP / Product Development (Web, App, SaaS)",
        "Product Strategy & Roadmap",
        "Growth & Go-To-Market",
      ]);
    } else {
      setServiceOptions(["Venturemond Workspace"]);
    }
    setSelectedService("");
  }, [division]);

  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-16">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="heading font-extrabold mb-4">
          Let’s Build Something{" "}
          <span className="text-[#0BA57F]">Extraordinary.</span>
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto para leading-relaxed">
          Whether you’re launching a new product, exploring collaboration, or
          looking to scale your idea — Venturemond is ready to partner with you.
        </p>
      </motion.div>


      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg md:text-xl font-semibold mb-3">
            Tell us what you’d like to build.
          </h2>
          <p className="text-gray-400 para mb-8">
            Choose whether you want to work with our Studio team to build your
            next venture, or explore our SaaS products for your organization.
          </p>

          {submited?<form
            onSubmit={(e) =>{ e.preventDefault() 
                setSubmited(prev=>!prev)
            }}
            className="space-y-4 text-gray-300 "
          >
            <div>
              <label className="block mb-2 font-medium">Name*</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email*</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company / Startup Name (optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Alpha Tech Pvt. Ltd."
                className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                What are you interested in?*
              </label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              >
                <option value="studio">
                  Venturemond Studio — Build a product or startup with us
                </option>
                <option value="saas">
                  Venturemond SaaS — Explore our software solutions
                </option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Choose a Service*</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
              >
                <option value="">Select Service</option>
                {serviceOptions.map((service, i) => (
                  <option key={i} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Brief About Your Project*
              </label>
              <textarea
                placeholder="Tell us about your idea, goals, or what you’re trying to build..."
                rows={4}
                className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Budget Range</label>
                <select className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]">
                  <option>Under ₹2 Lakhs / $2,500</option>
                  <option>₹2–5 Lakhs / $2,500–$6,000</option>
                  <option>₹5–10 Lakhs / $6,000–$12,000</option>
                  <option>Above ₹10 Lakhs / $12,000+</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  How Soon Do You Want to Start?
                </label>
                <select className="w-full bg-[#111111] border border-[#0BA57F]/20 rounded-lg p-3 focus:outline-none focus:border-[#0BA57F]">
                  <option>Immediately</option>
                  <option>Within 1 month</option>
                  <option>In 2–3 months</option>
                  <option>Exploring for now</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn1"
            >
              Submit Inquiry
            </button>
          </form>:<p className="text-[#0BA57F]">"Form Submitted Successfully We will reach out you with in 48 Hours"</p>}
       
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="heading font-semibold mb-4">Get in touch</h2>
          <p className="para  text-gray-400 mb-6">
            We’re here to help you build what’s next. Select your division, share
            your idea, and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-4 para text-gray-300">
            <p className="flex items-center gap-3">
              <EmailIcon className="text-[#0BA57F]" /> hello@venturemond.com
            </p>
            <p className="flex items-center gap-3">
              <LocationOnIcon className="text-[#0BA57F]" /> 4th Floor, Bizness
              Square, Hitec City, Hyderabad – 500084
            </p>
            <p className="flex items-center gap-3">
              <LinkedInIcon className="text-[#0BA57F]" />{" "}
              <Link
                href="https://www.linkedin.com/company/venturemond"
                target="_blank"
                className="hover:text-[#09c08f]"
              >
                LinkedIn / Venturemond
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      
      <div className="text-center mt-24 space-y-3 ">
        <h3 className="text-xl font-bold text-[#0BA57F]">
          Want to talk directly?
        </h3>
        <p className="text-gray-300 para">Reach out to our Team</p>
        <div className="flex justify-center gap-4 para items-center text-gray-200 mt-3">
          <CallIcon className="text-[#0BA57F]" /> +91 9666480317
          <EmailIcon className="text-[#0BA57F]" /> hello@venturemond.com
        </div>
        <Link
          href="https://wa.me/919666480317"
          target="_blank"
          className="inline-flex text-lg items-center gap-2 mt-6 text-[#0BA57F] hover:text-[#09c08f] font-medium transition"
        >
          <WhatsAppIcon /> Chat on WhatsApp
        </Link>
      </div>
    </section>
  );
};

export default ContactPage;
