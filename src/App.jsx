import Navbar from "./components/Navbar";
import Poster from "./components/poster/Poster";

export default function App() {
  return (
    <div className="flex flex-col h-screen pt-5">
      <Navbar />
      <div className="flex items-center justify-center flex-1 flex-wrap gap-10">
        <Poster />
        <div className="behance md:h-[582px] md:w-[582px] h-[342px] w-[342px]">
          <iframe
            src="https://www.behance.net/embed/project/164402641?ilo0=1"
            className="w-full h-full"
            allowFullScreen
            lazyload
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
