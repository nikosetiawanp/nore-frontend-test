import { AddOfficeBody, OfficesResponse, addOffice } from "../mock";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

export default function EditForm(props: {
  office: OfficesResponse["data"][0];
  setOffices: React.Dispatch<
    React.SetStateAction<OfficesResponse["data"] | undefined>
  >;
  setFormIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  showNotification: (message: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddOfficeBody>();

  const onSubmit = async (data: AddOfficeBody) => {
    try {
      const response = await addOffice(data);
      props.showNotification(response.message);
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
      props.setFormIsActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-6 w-full shadow-lg rounded-lg">
      <form
        action="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start"
      >
        <div className="flex justify-between mb-8 w-full">
          <b className="text-[16px] text-primary-darkblue">New Location</b>
          <button onClick={() => props.setFormIsActive(false)}>
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
            defaultValue={props.office.title}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent-red absolute right-2 top-8"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p role="alert" className="text-accent-red text-[12px]">
                Title is a required field
              </p>
            </>
          )}
        </div>
        {/* ADDRESS */}
        <div className="w-full text-left relative mb-6">
          <label htmlFor="address" className="text-[16px]">
            Address <span className="text-primary-grey font-regular">*</span>
          </label>{" "}
          <input
            id="address"
            defaultValue={props.office.address}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent-red absolute right-2 top-8"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
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
            Full Name <span className="text-primary-grey font-regular">*</span>
          </label>{" "}
          <input
            id="fullname"
            defaultValue={props.office.detail.fullname}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent-red absolute right-2 top-8"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
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
            defaultValue={props.office.detail.job}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent-red absolute right-2 top-8"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
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
            defaultValue={props.office.detail.email}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent-red absolute right-2 top-8"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
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
            defaultValue={props.office.detail.phone}
            placeholder="(xxx) xxx-xxxx"
            type="text"
            {...register("phone", { required: true })}
            className={`w-full h-[40px] p-2 rounded-md bg-white shadow-sm border outline-none  transition-all ${
              errors.phone?.type === "required"
                ? "border-accent-red focus:border-accent-red"
                : "border-primary-grey focus:border-accent-blue"
            }`}
          />
          {errors.phone?.type === "required" && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-accent-red absolute right-2 top-8"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
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
  );
}
