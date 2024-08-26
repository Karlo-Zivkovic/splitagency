"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  message: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  console.log(errors);

  const sendMail = async (data: Inputs) => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const response = await axios.post("/api/email", data);
        setIsLoading(false);
        if (response.status === 200) {
          setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
            reset();
            setTimeout(() => {
              setIsSent(false);
            }, 4000);
          }, 100);
        } else {
          reset();
          console.error("error");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=West%20Gate,%20Ul.%20Domovinskog%20rata%2061,%2021000,%20Split+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        ></iframe>
      </div>
      {isSent ? (
        <div className="md:flex toast toast-top toast-center">
          <div className="flex mx-auto alert slide-enter-active">
            <span className="font-mono text-lg font-light">
              🚀 Message sent !
            </span>
          </div>
        </div>
      ) : null}
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            We’d love to hear from you! Whether you have a question about our
            tours, need assistance with booking, or want to share your travel
            experience, our team is here to help. Please fill out the form below
            and we’ll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit(sendMail)}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>

              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50"
              disabled={isSent}
            >
              {isLoading ? <p>Loading...</p> : "Send Message"}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      </div>
    </section>
  );
}
