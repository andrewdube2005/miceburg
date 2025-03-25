import React from "react";
import Card from "../components/Card";

export default function page() {
  return (
    <div className="pt-[70px] h-full w-full overflow-y-auto">
      <div className="py-10 px-20">
        <p className="text-[25px] text-[#656565]">Core Services</p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          px-5
          md:px-20
          mb-10
        "
      >
        <Card title="Consulting" />
      </div>
    </div>
  );
}
