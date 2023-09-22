import { useState } from "react";
import { useForm } from "react-hook-form";
import IconExclamation from "../assets/icon-exclamation.svg";
import { AddOfficeBody } from "../mock";
import { addOffice, OfficesResponse } from "../mock";
import { v4 as uuid } from "uuid";

export default function NewForm(props: {
  setOffices: React.Dispatch<
    React.SetStateAction<OfficesResponse["data"] | undefined>
  >;
  showNotification: (message: string, code: number) => void;
}) {
  const [formIsActive, setFormIsActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddOfficeBody>();

  const onSubmit = async (data: AddOfficeBody) => {
    try {
      const response = await addOffice(data);
      props.showNotification(response.message, 200);
      props.setOffices((current: OfficesResponse["data"] | undefined) => [
        ...current,
        {
          id: uuid(),
          title: data.title,
          address: data.address,
          detail: {
            fullname: data.fullname,
            job: data.job,
            email: data.email,
            phone: data.phone,
          },
        },
      ]);
      setFormIsActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!formIsActive ? (
        <button
          onClick={() => setFormIsActive(true)}
          className="flex justify-between items-center bg-accent-blue text-white font-light w-full px-6 py-4 rounded-lg shadow-md"
        >
          Add New Location
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      ) : (
        <div className="bg-white p-6 w-full shadow-lg rounded-lg">
          <form
            action="submit"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start"
          >
            <div className="flex justify-between mb-8 w-full">
              <b className="text-[16px] text-primary-darkblue">New Location</b>
              <button onClick={() => setFormIsActive(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary-grey"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* TITLE */}
            <div className="w-full text-left relative mb-6">
              <label htmlFor="title" className="text-[16px]">
                Title <span className="text-primary-grey font-regular">*</span>
              </label>{" "}
              <input
                id="title"
                defaultValue=""
                placeholder="Headquarters"
                {...register("title", { required: true })}
                className={`w-full h-[40px] p-2 rounded-md bg-white shadow-sm border outline-none  transition-all ${
                  errors.title?.type === "required"
                    ? "border-accent-red focus:border-accent-red"
                    : "border-primary-grey focus:border-accent-blue"
                }`}
              />
              {errors.title?.type === "required" && (
                <>
                  <img
                    src={IconExclamation}
                    alt="icon-exclamation"
                    className="absolute right-3 top-9"
                  />
                  <p role="alert" className="text-accent-red text-[12px]">
                    Title is a required field
                  </p>
                </>
              )}
            </div>
            {/* ADDRESS */}
            <div className="w-full text-left relative mb-6">
              <label htmlFor="address" className="text-[16px]">
                Address{" "}
                <span className="text-primary-grey font-regular">*</span>
              </label>{" "}
              <input
                id="address"
                defaultValue=""
                placeholder="3763 W. Dallas St."
                {...register("address", { required: true })}
                className={`w-full h-[40px] p-2 rounded-md bg-white shadow-sm border outline-none  transition-all ${
                  errors.address?.type === "required"
                    ? "border-accent-red focus:border-accent-red"
                    : "border-primary-grey focus:border-accent-blue"
                }`}
              />
              {errors.address?.type === "required" && (
                <>
                  <img
                    src={IconExclamation}
                    alt="icon-exclamation"
                    className="absolute right-3 top-9"
                  />
                  <p role="alert" className="text-accent-red text-[12px]">
                    Address is a required field
                  </p>
                </>
              )}
            </div>
            {/* CONTACT INFORMATION */}
            <span className="text-accent-blue text-[12px] mb-4">
              CONTACT INFORMATION
            </span>
            <hr className="border-primary-lightgrey w-full mb-4" />
            {/* FULL NAME */}
            <div className="w-full text-left relative mb-6">
              <label htmlFor="fullname" className="text-[16px]">
                Full Name{" "}
                <span className="text-primary-grey font-regular">*</span>
              </label>{" "}
              <input
                id="fullname"
                defaultValue=""
                placeholder="John Michael"
                {...register("fullname", { required: true })}
                className={`w-full h-[40px] p-2 rounded-md bg-white shadow-sm border outline-none  transition-all ${
                  errors.fullname?.type === "required"
                    ? "border-accent-red focus:border-accent-red"
                    : "border-primary-grey focus:border-accent-blue"
                }`}
              />
              {errors.fullname?.type === "required" && (
                <>
                  <img
                    src={IconExclamation}
                    alt="icon-exclamation"
                    className="absolute right-3 top-9"
                  />
                  <p role="alert" className="text-accent-red text-[12px]">
                    Full Name is a required field
                  </p>
                </>
              )}
            </div>
            {/* JOB POSITION */}
            <div className="w-full text-left relative mb-6">
              <label htmlFor="job" className="text-[16px]">
                Job Position{" "}
                <span className="text-primary-grey font-regular">*</span>
              </label>{" "}
              <input
                id="job"
                defaultValue=""
                placeholder="Software Tester"
                {...register("job", { required: true })}
                className={`w-full h-[40px] p-2 rounded-md bg-white shadow-sm border outline-none  transition-all ${
                  errors.job?.type === "required"
                    ? "border-accent-red focus:border-accent-red"
                    : "border-primary-grey focus:border-accent-blue"
                }`}
              />
              {errors.job?.type === "required" && (
                <>
                  <img
                    src={IconExclamation}
                    alt="icon-exclamation"
                    className="absolute right-3 top-9"
                  />
                  <p role="alert" className="text-accent-red text-[12px]">
                    Job Position is a required field
                  </p>
                </>
              )}
            </div>
            {/* EMAIL */}
            <div className="w-full text-left relative mb-6">
              <label htmlFor="email" className="text-[16px]">
                Email <span className="text-primary-grey font-regular">*</span>
              </label>{" "}
              <input
                id="email"
                defaultValue=""
                placeholder="name@example.com"
                type="email"
                {...register("email", { required: true })}
                className={`w-full h-[40px] p-2 rounded-md bg-white shadow-sm border outline-none  transition-all ${
                  errors.email?.type === "required"
                    ? "border-accent-red focus:border-accent-red"
                    : "border-primary-grey focus:border-accent-blue"
                }`}
              />
              {errors.email?.type === "required" && (
                <>
                  <img
                    src={IconExclamation}
                    alt="icon-exclamation"
                    className="absolute right-3 top-9"
                  />
                  <p role="alert" className="text-accent-red text-[12px]">
                    Email is a required field
                  </p>
                </>
              )}
            </div>
            {/* PHONE */}
            <div className="w-full text-left relative mb-6">
              <label htmlFor="phone" className="text-[16px]">
                Phone <span className="text-primary-grey font-regular">*</span>
              </label>{" "}
              <input
                id="phone"
                defaultValue=""
                placeholder="(xxx) xxx-xxxx"
                type="number"
                {...register("phone", { required: true })}
                className={`w-full h-[40px] p-2 rounded-md bg-white shadow-sm border outline-none  transition-all ${
                  errors.phone?.type === "required"
                    ? "border-accent-red focus:border-accent-red"
                    : "border-primary-grey focus:border-accent-blue"
                }`}
              />
              {errors.phone?.type === "required" && (
                <>
                  <img
                    src={IconExclamation}
                    alt="icon-exclamation"
                    className="absolute right-3 top-9"
                  />
                  <p role="alert" className="text-accent-red text-[12px]">
                    Phone is a required field
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-start">
              <button
                type="button"
                className="bg-accent-blue px-6 py-2 rounded-md text-white disabled:bg-primary-grey"
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
