import "./App.css";

import IconPlus from "./assets/icon-plus.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-start items-center bg-primary-lightgrey overflow-y-scroll py-20">
      <div className="flex flex-col gap-4 items-center w-full max-w-[350px]">
        {/* TITLE */}
        <h1 className="text-accent-blue text-[64px] font-light">Offices</h1>
        {/* ADD NEW LOCATION BUTTON */}
        <button className="flex justify-between items-center bg-accent-blue text-white font-light w-full px-6 py-4 rounded-lg shadow-md">
          Add New Location
          <img src={IconPlus} alt="icon-plus" />
        </button>
        <Card />
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

export default App;
