import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (FormData) => console.log(FormData);
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {" "}
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Just what you need{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk!</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>PhoneNumber</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>Adress</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>Email</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
              required
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button className="bg-[#F7AB0A] font-bold w-full py-5 px-10 rounded-md hover:bg-[#F7AB0A]/50 hover:text-white transition duration-300 ease-in-out mx-auto">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
