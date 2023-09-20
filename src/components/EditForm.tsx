import IconPlus from "../assets/icon-plus.svg";

export default function EditForm(props: {
  setFormIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-white p-6">
      <form action="submit">
        {/* EDIT LOCATION & CLOSE */}
        <div className="flex justify-between mb-8">
          <b className="text-[16px] text-primary-darkblue">Edit Location</b>
          <button onClick={() => props.setFormIsActive(false)}>
            <img className="rotate-45" src={IconPlus} alt="icon-plus" />
          </button>
        </div>

        <div className="flex flex-col items-start text-primary-darkblue">
          {/* TITLE */}
          <label htmlFor="title" className="text-[16px]">
            Title <span className="text-primary-grey font-regular">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full h-[40px] p-2 rounded-md bg-white shadow-sm border border-primary-grey focus:border-accent-blue outline-none mb-6 transition-all"
          />
          {/* ADDRESS */}
          <label htmlFor="address" className="text-[16px]">
            Enter the Address{" "}
            <span className="text-primary-grey font-regular">*</span>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full h-[40px] p-2 rounded-md bg-white shadow-sm border border-primary-grey focus:border-accent-blue outline-none mb-6 transition-all"
          />
          <span className="text-accent-blue text-[12px] mb-4">
            CONTACT INFORMATION
          </span>
          <hr className="border-primary-lightgrey w-full mb-4" />
          {/* FULL NAME */}
          <label htmlFor="address" className="text-[16px]">
            Full Name <span className="text-primary-grey font-regular">*</span>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full h-[40px] p-2 rounded-md bg-white shadow-sm border border-primary-grey focus:border-accent-blue outline-none mb-6 transition-all"
          />
          {/* JOB POSITION */}
          <label htmlFor="address" className="text-[16px]">
            Job Position{" "}
            <span className="text-primary-grey font-regular">*</span>
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full h-[40px] p-2 rounded-md bg-white shadow-sm border border-primary-grey focus:border-accent-blue outline-none mb-6 transition-all"
          />
          {/* EMAIL */}
          <label htmlFor="address" className="text-[16px]">
            Email <span className="text-primary-grey font-regular">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full h-[40px] p-2 rounded-md bg-white shadow-sm border border-primary-grey focus:border-accent-blue outline-none mb-6 transition-all"
          />
          {/* PHONE */}
          <label htmlFor="address" className="text-[16px]">
            Phone <span className="text-primary-grey font-regular">*</span>
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="w-full h-[40px] p-2 rounded-md bg-white shadow-sm border border-primary-grey focus:border-accent-blue outline-none mb-6 transition-all"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>
        <div className="flex justify-start">
          <button
            type="button"
            className="bg-accent-blue px-6 py-2 rounded-md text-white disabled:bg-primary-grey"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
