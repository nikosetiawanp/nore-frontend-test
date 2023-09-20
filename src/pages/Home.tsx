import NewForm from "../components/NewForm";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { fetchOffices } from "../mock";

export default function Home() {
  const { data: offices, isLoading } = useQuery({
    queryFn: () => fetchOffices(),
    queryKey: ["offices"],
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-start items-center bg-primary-lightgrey overflow-y-scroll py-20">
      <div className="flex flex-col gap-4 items-center w-full max-w-[350px]">
        {/* TITLE */}
        <h1 className="text-accent-blue text-[64px] font-light">Offices</h1>
        {/* ADD NEW LOCATION BUTTON */}
        <NewForm />
        {offices?.data.map((office) => (
          <Card key={office.id} office={office} />
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
