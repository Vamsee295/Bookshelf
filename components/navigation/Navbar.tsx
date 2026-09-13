"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        data-load-reset=""
        data-header=""
        className={`header ${scrolled ? "is--scrolled" : ""}`}
      >
        <div className="header__inner">
          <div className="header__title">
            <Link
              href="/"
              aria-current="page"
              className="header__title-link w-inline-block w--current"
            >
              <img
                width="234"
                height="59"
                alt="Aardvark Book Club Logo"
                src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg"
                loading="eager"
                className="header__title-logo"
              />
            </Link>
          </div>

          <nav className="header__nav">
            <ul role="list" className="header__nav-list w-list-unstyled">
              <li className="header__nav-list-item">
                <Link
                  data-barba-update=""
                  data-button=""
                  href="/allbooks"
                  className="button w-inline-block"
                >
                  <span className="button__bg"></span>
                  <span className="button__inner">
                    <span data-button-text="" className="button__text">
                      All Books
                    </span>
                  </span>
                </Link>
              </li>
              <li className="header__nav-list-item">
                <Link
                  data-barba-update=""
                  data-button=""
                  href="/gifting"
                  className="button w-inline-block"
                >
                  <span className="button__bg"></span>
                  <span className="button__inner">
                    <span data-button-text="" className="button__text">
                      Gifting
                    </span>
                  </span>
                </Link>
              </li>
              <li className="header__nav-list-item">
                <Link
                  data-barba-update=""
                  data-button=""
                  href="/faq"
                  className="button w-inline-block"
                >
                  <span className="button__bg"></span>
                  <span className="button__inner">
                    <span data-button-text="" className="button__text">
                      FAQ
                    </span>
                  </span>
                </Link>
              </li>
              <li className="header__nav-list-item">
                <a
                  data-button-alt=""
                  data-wf--button-alt--variant="base"
                  href="https://app.aardvarkbookclub.com/books"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-alt w-inline-block"
                >
                  <span className="button-alt__text-wrap">
                    <span className="button-alt__bg"></span>
                    <span className="button-alt__text-outer">
                      <span data-button-alt-text="" className="button-alt__text">
                        Log-in / Sign-up
                      </span>
                    </span>
                  </span>
                  <span className="button-alt__icon-wrap">
                    <span className="button-alt__bg"></span>
                    <span className="button-alt__icon-outer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 14 13"
                        fill="none"
                        aria-hidden="true"
                        className="button-alt__icon"
                      >
                        <path
                          d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__sub">
            <ul role="list" className="header__sub-list w-list-unstyled">
              <li className="header__sub-list-item">
                <div className="lang-switch">
                  <div className="w-locales-list">
                    <div role="list" className="locales-list w-locales-items">
                      <div data-button="" role="listitem" className="w-locales-item">
                        <span data-button-text="" className="link w--current">
                          en
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="header__sub-list-item">
                <a
                  aria-label="Go to Instagram"
                  data-wf--button-social-instagram--variant="base"
                  href="https://www.instagram.com/aardvarkbookclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-social w-inline-block"
                >
                  <div className="button-social__inner">
                    <span className="button-social__bg"></span>
                    <span className="button-social__icon-outer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        width="100%"
                        className="button-social__icon"
                      >
                        <path
                          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
              </li>
              <li className="header__sub-list-item">
                <a
                  aria-label="Go to TikTok"
                  data-wf--button-social-tiktok--variant="base"
                  href="https://www.tiktok.com/@aardvarkbookclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-social w-inline-block"
                >
                  <div className="button-social__inner">
                    <span className="button-social__bg"></span>
                    <span className="button-social__icon-outer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        width="100%"
                        className="button-social__icon"
                      >
                        <path
                          d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="header__menu-toggle">
            <button
              data-button-alt=""
              type="button"
              data-menu-toggle=""
              className="button-alt is--menu-toggle"
              onClick={() => setMenuOpen(true)}
            >
              <span className="button-alt__text-wrap">
                <span className="button-alt__bg"></span>
                <span className="button-alt__text-outer">
                  <span data-button-alt-text="" className="button-alt__text">
                    Menu
                  </span>
                </span>
              </span>
              <span className="button-alt__icon-wrap">
                <span className="button-alt__bg"></span>
                <span className="button-alt__icon-outer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    fill="none"
                    aria-hidden="true"
                    className="button-alt__icon is--menu-toggle"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 6h10M4 12h16H7m0 6h10"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY MENU */}
      <div
        data-menu=""
        data-lenis-prevent=""
        data-menu-open=""
        className={`menu ${menuOpen ? "is--active" : ""}`}
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        <div className="menu__inner">
          <div className="menu__container">
            <div className="menu__bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                fill="none"
                viewBox="0 0 386 712"
                className="menu__bg-svg"
              >
                <path
                  fill="currentColor"
                  d="M115.415-56.646c27.361-10.951 55.489-16.17 84.985-10.076 40.714 8.42 64.637 33.98 75.035 73.257 9.349 35.348 3.777 70.616-.769 105.961-4.86 37.766-10.042 75.565-12.734 113.514-1.993 28.09 5.481 54.869 20.638 79.162 14.419 23.106 34.405 37.375 61.693 41.433 30.041 4.465 59.172-.835 88.412-6.653 26.135-5.192 52.289-10.684 78.69-13.939 22.265-2.747 44.838-1.383 65.775 8.431 38.064 17.842 51.287 57.852 44.901 96.147-5.782 34.664-24.948 61.621-49.555 85.474-26.279 25.482-57.556 44.224-87.22 65.142-28.385 20.025-55.476 41.366-73.798 71.673-9.327 15.437-16.063 31.796-14.646 50.393 2.044 26.803 18.243 46.689 45.101 55.529a130 130 0 0 0 4.836 1.485l-139.704 55.662a1143 1143 0 0 1-16.076-9.954c-23.207-14.664-45.445-30.911-63.44-51.988-21.556-25.244-32.204-53.705-17.969-85.831 6.78-15.297 16.202-30.236 27.474-42.541 21.248-23.189 45.199-43.868 67.023-66.553 10.99-11.421 21.425-24.013 29.233-37.716 15.33-26.925 5.653-54.263-21.962-68.343-17.177-8.762-35.531-13.481-54.297-17.195-27.909-5.514-56.046-10.232-83.497-17.516-15.707-4.173-31.138-11.277-45.104-19.692-22.108-13.327-29.728-34.941-28.254-60.155 1.445-24.649 11.284-46.711 20.765-68.939 5.78-13.545 11.193-27.25 16.537-40.967 1.371-3.514 2.093-7.336 2.693-11.083 3.859-24.009-7.353-38.23-31.777-36.443-20.635 1.512-40.986 6.805-61.477 10.321-25.248 4.332-50.38 9.871-75.818 12.53-15.074 1.576-29.77 1.044-44.109-1.173V63.588q.326-.19.651-.383c28.317-16.804 55.126-36.258 81.9-55.513 33.66-24.207 67.019-48.8 105.864-64.338"
                />
              </svg>
            </div>
            <div className="menu__content">
              <header className="menu__header">
                <Link
                  href="/"
                  aria-current="page"
                  className="menu__header-title-link w-inline-block w--current"
                  onClick={() => setMenuOpen(false)}
                >
                  <img
                    width="234"
                    height="59"
                    alt="Aardvark Book Club Logo"
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696179694070e2fa9eca375f_logo.svg"
                    loading="eager"
                    className="menu__header-title-logo"
                  />
                </Link>
                <div className="menu__close">
                  <button
                    data-button-alt=""
                    type="button"
                    data-menu-close=""
                    className="button-alt is--menu-toggle"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="button-alt__icon-wrap">
                      <span className="button-alt__bg"></span>
                      <span className="button-alt__icon-outer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          fill="none"
                          aria-hidden="true"
                          className="button-alt__icon is--menu-toggle"
                        >
                          <path
                            fill="currentColor"
                            d="m12 13.4-4.9 4.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L13.4 12l4.9 4.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </header>
              <nav className="menu__nav">
                <ul role="list" className="menu__nav-list w-list-unstyled">
                  <li className="menu__nav-list-item">
                    <Link
                      data-button=""
                      href="/allbooks"
                      className="button w-inline-block"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="button__bg"></span>
                      <span className="button__inner">
                        <span data-button-text="" className="button__text">
                          All Books
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="menu__nav-list-item">
                    <Link
                      data-button=""
                      href="/gifting"
                      className="button w-inline-block"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="button__bg"></span>
                      <span className="button__inner">
                        <span data-button-text="" className="button__text">
                          Gifting
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li className="menu__nav-list-item">
                    <Link
                      data-button=""
                      href="/faq"
                      className="button w-inline-block"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="button__bg"></span>
                      <span className="button__inner">
                        <span data-button-text="" className="button__text">
                          FAQ
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <footer className="menu__footer">
                <div className="menu__login">
                  <a
                    data-button-alt=""
                    data-wf--button-alt--variant="base"
                    href="https://app.aardvarkbookclub.com/books"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-alt w-inline-block"
                  >
                    <span className="button-alt__text-wrap">
                      <span className="button-alt__bg"></span>
                      <span className="button-alt__text-outer">
                        <span data-button-alt-text="" className="button-alt__text">
                          Log-in / Sign-up
                        </span>
                      </span>
                    </span>
                    <span className="button-alt__icon-wrap">
                      <span className="button-alt__bg"></span>
                      <span className="button-alt__icon-outer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 14 13"
                          fill="none"
                          aria-hidden="true"
                          className="button-alt__icon"
                        >
                          <path
                            d="M13.58 5.66v.845l-5.994 5.66-1.71-2.063a61.427 61.427 0 0 1 4.265-2.988l-.02-.078c-1.828.196-4.107.294-6.387.294H0V4.835h3.734c2.28 0 4.56.098 6.387.294l.02-.059a67.638 67.638 0 0 1-4.265-3.006L7.586 0l5.994 5.66Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </footer>
            </div>
          </div>
          <div className="menu__backdrop" onClick={() => setMenuOpen(false)}></div>
        </div>
      </div>
    </>
  );
}
