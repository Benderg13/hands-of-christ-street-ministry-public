// src/components/Navbar.tsx
// This component provides a responsive navigation bar with a hamburger menu for mobile.

'use client'; // This directive marks the component as a Client Component,
             // allowing the use of React hooks like `useState`.

import React, { useState } from 'react';
import Link from 'next/link'; // For client-side navigation without full page reloads

/**
 * Navbar Component
 * Renders a responsive navigation bar with a logo, navigation links,
 * and a hamburger menu icon that toggles a mobile navigation overlay.
 */
export default function Navbar() {
  // State to manage the open/closed status of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu's visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-nav-start to-nav-end p-4 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo Section
        <Link href="/" className="text-white text-2xl font-bold rounded-md hover:scale-105 transition-transform duration-200 p-2">
          Home
        </Link> */}

        {/* Desktop Navigation Links */}
        {/*
          `md:flex` makes the links visible on medium screens and up.
          `hidden` hides them by default on smaller screens.
        */}
        <div className="hidden md:flex">
          <Link href="/" className="text-consistant-yellow transition-colors duration-200 text-lg p-2 rounded-md hover:bg-white hover:bg-opacity-10">
            Home
          </Link>
          <Link href="/monthly-news" className="text-light-pink transition-colors duration-200 text-lg p-2 rounded-md hover:bg-white hover:bg-opacity-10">
            Monthly News
          </Link>
          <Link href="/services-provided" className="text-light-pink transition-colors duration-200 text-lg p-2 rounded-md hover:bg-white hover:bg-opacity-10">
            Services Provided
          </Link>
          <Link href="/mission-statement" className="text-light-pink transition-colors duration-200 text-lg p-2 rounded-md hover:bg-white hover:bg-opacity-10">
            Mission Statement
          </Link>
          
        </div>

        {/* Hamburger Menu Button (for mobile) */}
        {/*
          `md:hidden` hides the button on medium screens and up.
          `focus:outline-none` removes the default outline.
          `aria-controls` and `aria-expanded` are important for accessibility.
        */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-light-pink focus:outline-none p-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          {/* Hamburger Icon / Close Icon */}
          {/*
            This uses a simple animated SVG icon.
            The lines transform to an 'X' when the menu is open.
          */}
          <svg
            className="w-8 h-8 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {/*
        Conditionally rendered based on `isOpen` state.
        `fixed` and `inset-0` make it full screen.
        `transform` and `translate-x-full`/`translate-x-0` create a slide-in/out effect.
        `transition-transform` applies the animation.
        `duration-300` sets the animation speed.
        `ease-in-out` defines the easing function.
      */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-navy-blue bg-opacity-95 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8`}
        style={{ zIndex: 40 }} // Ensure it's below the main nav but above other content
      >
        <Link href="/" className="text-lighter-pink text-3xl hover:text-darker-pink hover:bg-opacity-10 transition-colors duration-200" onClick={toggleMenu}>
          Home
        </Link>
        <Link href="/monthly-news" className="text-lighter-pink text-3xl hover:text-darker-pink hover:bg-opacity-10 transition-colors duration-200" onClick={toggleMenu}>
          Monthly News
        </Link>
        <Link href="/services-provided" className="text-lighter-pink text-3xl hover:text-darker-pink hover:bg-opacity-10 transition-colors duration-200" onClick={toggleMenu}>
          Services Provided
        </Link>
        <Link href="/mission-statement" className="text-lighter-pink text-3xl hover:text-darker-pink hover:bg-opacity-10 transition-colors duration-200" onClick={toggleMenu}>
          Mission Statement
        </Link>

        {/* Close Button for Mobile Menu */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-lighter-pink focus:outline-none p-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors duration-200"
          aria-label="Close menu"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
