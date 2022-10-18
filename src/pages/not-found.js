import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);
  return (
    <div className="bg-gray-background">
      <div className="flex flex-col justify-center items-center h-screen md:flex md:flex-row">
        <div className="text-left">
          <h1 className="font-bold text-3xl mb-2">404</h1>
          <h3 className="font-bold text-3xl mb-2">Ooops!</h3>
          <h3 className="font-bold text-3xl mb-2">Page Not Found</h3>
          <p className="text-l text-gray-light">
            This page doesn't exist or was removed!
          </p>
          <p className="mb-8 text-l text-gray-light">
            We suggest you back to home
          </p>
          <Link
            to="login"
            style={{
              color: "white",
              backgroundColor: "#9888ff",
              border: "1px solid transparent",
              borderRadius: "20px",
              padding: "12px",
            }}
          >
            Back to Home
          </Link>
        </div>
        <div>
          <img src="/images/404.png" alt="Not Found Image" />
        </div>
      </div>
    </div>
  );
}
