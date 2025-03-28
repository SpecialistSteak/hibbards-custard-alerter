"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  // The blob effect has been taken from Hyperplex's tutorial on YouTube
  useEffect(() => {
    const blob = document.getElementById("blob");

    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      const { clientX, clientY } = event;

      if (!blob) {
        return;
      }

      // Get the container's bounding rectangle
      if (!containerRef.current) {
        return;
      }
      const containerRect = containerRef.current.getBoundingClientRect();

      // Calculate the blob's position relative to the container
      const blobX = clientX - containerRect.left;
      const blobY = clientY - containerRect.top;

      // Animate the blob, keeping it within the container's bounds
      blob.animate(
        {
          left: `${Math.max(0, Math.min(blobX, containerRect.width))}px`,
          top: `${Math.max(0, Math.min(blobY, containerRect.height))}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center px-4"
      style={{ position: "relative", overflow: "hidden" }} // Added position: relative
    >
      <div
        id="blob"
        style={{
          width: "20vmax",
          aspectRatio: 1,
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          borderRadius: "50%",
          background: "linear-gradient(to right, aquamarine, mediumpurple)",
          animation: "rotate 20s infinite",
          opacity: 0.6,
          filter: "blur(10vmax)",
          zIndex: 1,
        }}
      ></div>
      <div
        id="blur"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 2,
          backdropFilter: "blur(12vmax)",
        }}
      ></div>
      <div style={{ zIndex: 3 }} className="w-full max-w-2xl">
        <svg
          width="209.886"
          height="209.886"
          viewBox="0 0 209.886 209.886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-36 h-36 mb-8 mx-auto"
          aria-label="Frozen Custard / Ice Cream Logo"
        >
          <path
            d="M156.707,110.122h-0.158c2.344-3.098,3.788-6.912,3.788-11.088v-3.948c0-5.651-2.203-10.551-6.203-13.791    c-1.564-1.266-3.322-2.197-5.216-2.805c1.021-6.884,2.19-21.335-4.626-27.768c-1.237-1.17-2.525-1.943-3.848-2.473    c2.307-25.546-10.434-46.284-20.826-48.108c-4.04-0.722-8.916,1.202-10.538,8.692c-1.734,8.014-7.157,8.819-17.394,9.649    c-5.921,0.484-12.633,1.029-18.516,4.197c-4.191,2.255-6.885,5.582-8.007,9.883c-1.632,6.257,0.639,13.131,2.607,17.467    c-3.605,0.91-6.711,2.399-9.059,4.746c-7.44,7.439-4.008,19.763-1.907,25.307c-0.405,0.302-0.809,0.606-1.191,0.944    c-3.949,3.5-6.125,8.49-6.125,14.061v3.948c0,4.177,1.444,7.99,3.788,11.088h-0.093c-2.04,0-3.695,1.653-3.695,3.695    c0,2.042,1.655,3.695,3.695,3.695h7.894l13.133,89.216c0.267,1.815,1.822,3.157,3.655,3.157h57.787    c1.833,0,3.388-1.342,3.655-3.157l13.133-89.216h4.264c2.04,0,3.695-1.653,3.695-3.695    C160.402,111.774,158.747,110.122,156.707,110.122z"
            fill="white"
          />
        </svg>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Hibbard&apos;s Frozen Custard Tracker
          </h1>
          <p className="text-gray-300 mt-5">
            Indulge in the sweetness of life! Track your favorite flavors, get
            notified about new arrivals, and never miss a scoop with our email
            updates.
          </p>
        </div>
        <div className="flex space-x-4 mb-8 justify-center">
          <Link
            href="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Log In
          </Link>
        </div>
        <div className="text-gray-400 mb-4 text-center">
          Already logged in?
        </div>
        <div className="text-center mb-8">
          <Link
            href="/dashboard"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Dashboard
          </Link>
        </div>
        <div className="flex space-x-6 justify-center">
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-all"
          >
            About
          </Link>
          <Link
            href="/flavors"
            className="text-gray-300 hover:text-white transition-all"
          >
            Our Flavors
          </Link>
          <a
            href="http://www.hibbardscustard.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-all"
          >
            Visit Hibbard&apos;s
          </a>
        </div>
      </div>
      <style>{`
        @keyframes rotate {
          from {
            rotate: 0deg;
          }
          50% {
            scale: 1 1.2;
          }
          to {
            rotate: 360deg;
          }
        }
      `}</style>
    </div>
  );
}