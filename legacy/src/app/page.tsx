/* eslint-disable react/no-unescaped-entities */
"use client";

import { PageTransition, Template } from "../components";
import { profile } from "@/data";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Template menu="/">
      <PageTransition>
        <div className="flex items-center justify-center flex-col h-full">
          <p className="mb-2 mt-5">Hello, I'm</p>
          <h2 className="font-bold text-3xl mb-2 text-primary-500">{profile.name}</h2>
          <div className="text-xl text-slate-600 mb-3">{profile.role}</div>
          {profile.roles.length > 0 ? (
            <Typewriter
              options={{
                wrapperClassName:
                  "text-base font-semibold mb-5 text-slate-600 bg-primary-100 text-primary-400 tracking-widest p-1 px-3 ",
                strings: profile.roles,
                autoStart: true,
                loop: true,
              }}
            />
          ) : null}
          <p className="mt-10 mb-20 mx-0 md:mx-4 lg:mx-10 text-center">{profile.about}</p>
        </div>
      </PageTransition>
    </Template>
  );
}
