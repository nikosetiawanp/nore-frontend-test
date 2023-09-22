import { Disclosure, Transition } from "@headlessui/react";
import IconChevronDown from "../assets/icon-chevron-down.svg";
import { useState } from "react";

import IconPencil from "../assets/icon-pencil.svg";
import IconTrash from "../assets/icon-trash.svg";
import EditForm from "./EditForm";

import { OfficesResponse, deleteOffice } from "../mock";
import { useMutation, useQueryClient, useQuery } from "react-query";

export default function Card(props: {
  office: OfficesResponse["data"][0];
  setOffices: React.Dispatch<
    React.SetStateAction<OfficesResponse["data"] | undefined>
  >;
  showNotification: (message: string, code: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formIsActive, setFormIsActive] = useState(false);

  const removeOffice = async (id: string) => {
    try {
      const response = await deleteOffice(id);
      props.showNotification(response.message, 200);
      props.setOffices((current) =>
        current?.filter((office) => office.id !== props.office.id)
      );
    } catch (error: any | unknown) {
      props.showNotification(error.message, 404);
    }
  };

  return (
    <div className="shadow-lg w-full rounded-lg overflow-hidden bg-white h-fit">
      <Disclosure>
        {formIsActive ? (
          <EditForm setFormIsActive={setFormIsActive} office={props.office} />
        ) : (
          <>
            <Disclosure.Button
              onClick={() => setIsOpen((current) => !current)}
              className={`${
                isOpen ? "bg-primary-grey" : "bg-white"
              } w-full flex justify-between items-center p-6 shadow-xl transition-all duration-500 z-50`}
            >
              <div className="text-left">
                <h4
                  className={`text-[24px] font-bold ${
                    isOpen ? "text-white" : "text-primary-darkblue"
                  }`}
                >
                  {props.office.title}
                </h4>
                <p className={`${isOpen ? "text-white" : "text-primary-grey"}`}>
                  {props.office.address}
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

            <Transition
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Disclosure.Panel className="flex flex-col gap-3 items-start p-6 bg-white">
                <h5 className="text-primary-darkblue font-bold text-[20px]">
                  {props.office.detail.fullname}
                </h5>
                <p className="text-primary-darkblue text-[16px]">
                  {props.office.detail.job}
                </p>
                <p className="text-accent-blue text-[16px]">
                  {props.office.detail.email}
                </p>
                <p className="text-primary-darkblue text-[16px]">
                  {props.office.detail.phone}
                </p>
                <hr className="border-primary-lightgrey w-full" />
                <div className="flex w-full justify-between items-center mt-2">
                  <button
                    onClick={() => setFormIsActive(true)}
                    className="text-[12px] text-primary-grey flex justify-between items-center gap-2"
                  >
                    <img src={IconPencil} alt="icon-pencil" /> EDIT
                  </button>
                  {/* DELETE */}
                  <button
                    onClick={() => removeOffice(`${props.office.id}`)}
                    className="text-[12px] text-accent-red flex justify-between items-center gap-2"
                  >
                    <img src={IconTrash} alt="icon-trash" /> DELETE
                  </button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
