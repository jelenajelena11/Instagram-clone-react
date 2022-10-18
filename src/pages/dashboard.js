import { useEffect } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";

export default function dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  });
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="flex mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}

//4:26:04 -- https://www.youtube.com/watch?v=mDgEqoQUBgk