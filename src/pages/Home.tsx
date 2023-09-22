import NewForm from "../components/NewForm";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { OfficesResponse, fetchOffices } from "../mock";
import Spinner from "../assets/spinner.svg";
import Notification from "../components/Notification";
import { useEffect, useState } from "react";

export default function Home() {
  // NOTIFICATIONS
  const [offices, setOffices] = useState<OfficesResponse["data"] | undefined>(
    []
  );
  const [notification, setNotification] = useState({ message: "", code: 0 });
  const showNotification = (message: string, code: number) => {
    setNotification({ message: "", code: 0 });
    setNotification({ message: message, code: code });
    setTimeout(() => {
      setNotification({ message: "", code: 0 });
    }, 5000);
  };

  const { data: data, isLoading } = useQuery({
    queryKey: ["offices"],
    queryFn: fetchOffices,
  });

  useEffect(() => {
    setOffices(data?.data);
  }, [data]);

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-primary-lightgrey overflow-y-scroll py-20">
        <div className="flex flex-col gap-4 items-center w-full max-w-[350px]">
          <img className="w-[50px] h-[50px]" src={Spinner} alt="spinner" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-start items-center bg-primary-lightgrey overflow-y-scroll py-20">
      <Notification
        notification={notification}
        setNotification={setNotification}
      />

      <div className="flex flex-col gap-4 items-center w-full max-w-[350px]">
        {/* TITLE */}
        <h1 className="text-accent-blue text-[64px] font-light">Offices</h1>
        {/* ADD NEW LOCATION BUTTON */}
        <NewForm setOffices={setOffices} showNotification={showNotification} />
        {offices?.map((office) => (
          <Card
            key={office.id}
            office={office}
            offices={offices}
            setOffices={setOffices}
            showNotification={showNotification}
          />
        ))}
        {/* <Card /> */}
      </div>
      {/* FOOTER */}
      <footer className="mt-10">
        <p className="text-[16px] text-primary-grey">
          This project is for test purpose only.
        </p>
        <p className="text-[12px] text-accent-blue uppercase">
          www.dogandponystudios.com
        </p>
      </footer>
    </div>
  );
}
