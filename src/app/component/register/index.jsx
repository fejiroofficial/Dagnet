"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import banner from "@/app/asset/svg/book.svg";
import { createSubscriber, addSubscriberToForm } from "@/app/api";

export default function Register({ formId }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    email_address: "",
    state: "inactive",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterClick = async () => {
    if (!formData.first_name || !formData.email_address) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await createSubscriber(formData);
      if (response?.ok) {
        const formResponse = await addSubscriberToForm(formId, formData.email_address);
        if (formResponse.ok) {
          setIsSuccess(true);
          toast.success("Registration successful! Check your email.");
        } else {
          toast.error("Course registration failed. Please try again.");
        }
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between px-2 lg:px-16">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col gap-4 pb-3">
        <h1 className="text-[#BCBCBC] text-[16px] font-medium text-center lg:text-start max-w-[493px] pb-6 lg:pb-0">
          Join our step-by-step email course and learn how to create a
          high-converting SaaS landing page—delivered straight to your inbox
        </h1>
        {isSuccess ? (
          <div
            className="flex flex-col items-center justify-center w-full h-[90px] rounded-lg bg-[#D3FBEB] text-[#0D905C]"
          >
            <p className="text-[16px] lg:text-[22px] text-center max-w-[420px]">
              Success! Now check your email to confirm you gave us the right
              one.
            </p>
          </div>
        ) : (
          <>
            <form className="flex flex-col gap-6">
              <input
                name="first_name"
                placeholder="Your First name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full max-w-[512px] h-[50px] bg-white text-black rounded-lg px-6 outline-none"
              />
              <input
                name="email_address"
                type="email"
                placeholder="Your Best Email Here..."
                value={formData.email_address}
                onChange={handleChange}
                className="w-full max-w-[512px] h-[50px] bg-white text-black rounded-lg px-6 outline-none"
              />
            </form>
            <button
              type="button"
              className={`flex flex-col p-1 lg:p-2 rounded-lg cursor-pointer transition-all ${
                isSuccess ? "bg-[#D3FBEB]" : "bg-[#319D35]"
              }`}
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              onClick={handleRegisterClick}
              disabled={loading}
            >
              <div
                className="flex flex-col items-center justify-center w-full h-[90px] text-white"
              >
                <div className="flex flex-col items-center">
                  {loading ? (
                    <p className="text-[16px] lg:text-[22px] font-bold">
                      Registering...
                    </p>
                  ) : (
                    <>
                      <p className="text-[16px] lg:text-[22px] font-bold">
                        {loading
                          ? "Registering..."
                          : "YES! I’M IN, REGISTER ME FOR COURSE NOW"}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </button>
          </>
        )}

        <p className="text-[12px] lg:text-sm font-light text-[#BCBCBC] text-center">
          (No spam Emails. Only Value. Unsubscribe at any time)
        </p>
      </div>

      <div className="hidden lg:block">
        <Image src={banner} alt="banner" className="relative w-full" />
      </div>
    </div>
  );
}
