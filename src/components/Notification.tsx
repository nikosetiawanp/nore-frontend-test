import { useEffect } from "react";
import IconCheck from "../assets/icon-check.svg";
import IconCross from "../assets/icon-cross.svg";
import IconExclamation from "../assets/icon-exclamation.svg";

interface Notification {
  message: string;
  code: number;
}

export default function (props: {
  notification: Notification;
  setNotification: React.Dispatch<React.SetStateAction<Notification>>;
}) {
  return (
    <div className="fixed top-0 left-0 w-screen h-[80px] flex justify-center items-center bg-white gap-2 z-50 transition-all border-b border-primary-lightgrey">
      {props.notification.code === 404 ? (
        <img
          className="w-[24px] h-[24px]"
          src={IconExclamation}
          alt="icon-exclamation"
        />
      ) : (
        <img className="w-[24px] h-[24px]" src={IconCheck} alt="icon-check" />
      )}

      <p className="uppercase text-[12px]">{props.notification.message}</p>
      <button
        onClick={() => props.setNotification({ message: "", code: 0 })}
        className="fixed right-4"
      >
        <img className="w-[20px] h-[20px]" src={IconCross} alt="icon-cross" />{" "}
      </button>
    </div>
  );
}
