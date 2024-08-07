import React from "react";

function Home() {
  return (
    <div
      className="grid place-items-center h-screen w-full bg-left lg:bg-center bg-cover "
      style={{
        backgroundImage: `url(${"/src/assets/pexels-kseniachernaya-3952094.jpg"})`,
      }}
    >
      <div className="inline-block">
        <h1
          style={{
            animation: "typing 2s, cursor 0.4s step-end infinite alternate",
          }}
          className="w-full overflow-hidden border-r-2 border-r-blue-700 font-montserrat whitespace-nowrap text-4xl text-blue-700 font-bold"
        >
          HOME STOVE.
        </h1>
      </div>
    </div>
  );
}

export default Home;
