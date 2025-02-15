"use client";
import Link from "next/link";
import Particles from "@/components/Particles";
import React, { useEffect, useState } from "react";


function formatUTCDate(date: Date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get components of the date
  const dayName = days[date.getUTCDay()];
  const monthName = months[date.getUTCMonth()];
  const day = date.getUTCDate().toString().padStart(2, "0");
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const year = date.getUTCFullYear();

  // Construct the formatted date string
  return `${dayName} ${monthName} ${day} ${hours}:${minutes}:${seconds} UTC ${year}`;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Rynvo (Digital Marketing)", href: "https://rynvo.media" },
  { name: "Billing Portal", href: "https://billing.nicklausvega.tech" },
  { name: "Projects", href: "/projects" },
  // { name: "Contact", href: "/contact" },
];

 

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, []);
  return (
    <div className="overflow-hidden bg-black">
      {/* First Section */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black px-4">
        <nav className="my-8 sm:my-12 animate-fade-in">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs sm:text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <Particles
          className="pointer-events-none absolute inset-0 z-10 animate-fade-in"
          quantity={500} /* Reduced particle count for performance */
        />
        <h1 className="z-10 text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-transparent duration-10000 bg-white cursor-default text-edge-outline animate-title font-bold whitespace-nowrap bg-clip-text">
          Nicklaus Vega
        </h1>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black"></div>
      </div>

      {/* Second Section */}
      <div className="relative z-10 w-full max-w-[85rem] px-4 py-6 mx-auto sm:px-6 lg:px-8 my-6 bg-black">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Console Section */}
          <div className="terminal p-4 sm:p-6 rounded-lg w-full">
            <div className="flex space-x-2 mb-4">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-400" />
            </div>
            <div className="text-xs sm:text-sm text-white font-bold w-full">
              <p className="text-white font-bold">
                Last login: {formatUTCDate(currentDate)} on ttys000
              </p>
              <p className="text-white">
                hello@nicklausvega ~ % ssh user@example-dedicated-server.com
              </p>
              <p className="text-stone-300">
                Welcome to Ubuntu 20.04.1 LTS (GNU/Linux 5.4.0-42-generic x86_64)
              </p>
              <p className="text-stone-300">
                * Documentation: https://help.ubuntu.com
              </p>
              <p className="text-stone-300">
                * Management: https://landscape.canonical.com
              </p>
              <p className="text-stone-300">
                * Support: https://ubuntu.com/advantage
              </p>
              <p className="text-stone-300">
                System information as of Sun Mar 31 05:25:37 UTC 2024
              </p>
              <p className="text-white">
                user@example-dedicated-server:~$ uptime
              </p>
              <p className="text-gray-200">
                09:16:01 up 1:10, 2 users, load average: 0.00, 0.01, 0.05
              </p>
              <p className="text-white">
                user@example-dedicated-server:~$ logout
              </p>
              <p className="text-white">
                Connection to example-dedicated-server.com closed.
              </p>
              <p className="text-stone-300">hello@nicklausvega ~ %</p>

            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="font-normal mt-5 text-base sm:text-lg md:text-2xl text-stone-50">
            I’m <strong>Nicklaus Vega</strong>, an aspiring <strong>entrepreneur </strong>and <strong>computer science student</strong> with over 5 years of experience in the tech world. With a passion for machine learning, frontend/backend development, and graphic design, I’m committed to learning, growing, and applying my skills to impactful projects.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
}
