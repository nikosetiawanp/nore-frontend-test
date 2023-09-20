import { Disclosure } from "@headlessui/react";
import IconChevronDown from "../assets/icon-chevron-down.svg";
import { useState } from "react";

import IconPencil from "../assets/icon-pencil.svg";
import IconTrash from "../assets/icon-trash.svg";
import EditForm from "./EditForm";

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [formIsActive, setFormIsActive] = useState(false);

  return (
    <div className="shadow-lg w-full rounded-lg overflow-hidden bg-white">
      <Disclosure>
        {formIsActive ? (
          <EditForm setFormIsActive={setFormIsActive} />
        ) : (
          <>
            <Disclosure.Button
              onClick={() => setIsOpen((current) => !current)}
              className={`${
                isOpen ? "bg-primary-grey" : "bg-white"
              } w-full flex justify-between items-center p-6 shadow-xl transition-all duration-500 z-20`}
            >
              <div className="text-left">
                <h4
                  className={`text-[24px] font-bold ${
                    isOpen ? "text-white" : "text-primary-darkblue"
                  }`}
                >
                  Headquarters
                </h4>
                <p className={`${isOpen ? "text-white" : "text-primary-grey"}`}>
                  3763 W. Dallas St.
                </p>
              </div>
              <img
                src={IconChevronDown}
                alt="icon-chevron-down"
                className={`${
                  isOpen && "rotate-180"
                } transition-all duration-300`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col gap-3 items-start p-6 bg-white">
              <h5 className="text-primary-darkblue font-bold text-[20px]">
                Hellena John
              </h5>
              <p className="text-primary-darkblue text-[16px]">
                Software Tester
              </p>
              <p className="text-accent-blue text-[16px]">
                georgia.young@example.com
              </p>
              <p className="text-primary-darkblue text-[16px]">
                (808) 555-0111
              </p>
              <hr className="border-primary-lightgrey w-full" />
              <div className="flex w-full justify-between items-center mt-2">
                <button
                  onClick={() => setFormIsActive(true)}
                  className="text-[12px] text-primary-grey flex justify-between items-center gap-2"
                >
                  <img src={IconPencil} alt="icon-pencil" /> EDIT
                </button>
                <button className="text-[12px] text-accent-red flex justify-between items-center gap-2">
                  <img src={IconTrash} alt="icon-trash" /> DELETE
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
