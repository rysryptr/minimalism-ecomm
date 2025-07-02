import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="">
      <div className="container mx-auto min-h-96 mt-56">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Oops.. 404 Not Found!
            </h2>
            <p className="text-lg mb-12">
              The page or product you are looking for may removed, moved,
              renamed, or never existed.
            </p>
            <Link to="/" className="button-sky">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
