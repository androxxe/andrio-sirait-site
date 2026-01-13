import React from "react";
import Image from "next/image";

const Services = () => (
  <div className="text-center mb-10">
    <h1 className="text-primary-500 font-bold text-xl mt-5 mb-5">MY SERVICES</h1>
    <p className="mb-5">Give my best effort for every projects. I give a solution with my creative app.</p>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center gap-5">
      <div className="flex items-center flex-col">
        <Image alt="Creative ideas" src="/assets/images/idea.png" width={50} height={50} />
        <p className="mb-3 font-bold">Inovative Ideas</p>
        <p className="text-sm text-gray-500">
          I am ready to start from scratch, or continue the ongoing projects. I always give innovative ideas to build
          the best applications.
        </p>
      </div>
      <div className="flex items-center flex-col">
        <Image alt="Clean code" src="/assets/images/clean-code.png" width={50} height={50} />
        <p className="mb-3 font-bold">Clean Code</p>
        <p className="text-sm text-gray-500">
          I always give a clean code to the client so the application is easy to understand and easy to develop.
        </p>
      </div>
      <div className="flex items-center flex-col">
        <Image alt="Communication" src="/assets/images/conversation.png" width={50} height={50} />
        <p className="mb-3 font-bold">Good Communication</p>
        <p className="text-sm text-gray-500">
          I always communicate with the client so simply the application is really fit with what client needs.
        </p>
      </div>
      <div className="flex items-center flex-col">
        <Image alt="Best Result" src="/assets/images/result.png" width={50} height={50} />
        <p className="mb-3 font-bold">Best Result</p>
        <p className="text-sm text-gray-500">I will give you the best applications for your best ideas.</p>
      </div>
    </div>
  </div>
);

export default Services;
