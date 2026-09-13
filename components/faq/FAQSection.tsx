"use client";

import React, { useState } from "react";
import Link from "next/link";
import PopUpEasterEgg from "../ui/PopUpEasterEgg";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How much does membership cost, my wallet is asking?",
    answer:
      "In the USA, membership is $17.99 USD/month (accounts for 1 book) and $10.99 for each extra book. In Canada, membership is $25.99 CAD/month (accounts for 1 book) and $15.99 for each extra book.",
  },
  {
    question: "What countries does Aardvark ship to?",
    answer:
      "We ship to the USA & Canada! Please contact support at info@aardvarkbookclub.com if you are mailing to Puerto Rico, an APO/FPO address, or PO box so we can set up your account.",
  },
  {
    question: "How do I join Aardvark?",
    answer:
      "You can sign up for membership by downloading our mobile app or by using our website. Place your first order to kickstart your membership!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq is--bg-white">
      <div className="faq__container u-container">
        <div className="faq__inner">
          <header className="faq__header">
            <h2 className="faq__title u-heading-l">Common questions</h2>
          </header>

          <div className="faq__content">
            <div className="accordion w-dyn-list">
              <div role="list" className="accordion__list w-dyn-items">
                {FAQS.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      role="listitem"
                      className="accordion__item w-dyn-item"
                    >
                      <details
                        data-accordion=""
                        className="accordion__details"
                        open={isOpen}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFAQ(idx);
                        }}
                      >
                        <summary
                          data-accordion-summary=""
                          className="accordion__summary cursor-pointer select-none"
                        >
                          <span className="accordion__title-wrap">
                            <h3 className="accordion__title u-paragraph-large">
                              {faq.question}
                            </h3>
                            <span
                              aria-hidden="true"
                              className="accordion__icon-wrap"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                                width="100%"
                                className={`accordion__icon-plus ${
                                  isOpen ? "hidden" : "block"
                                }`}
                              >
                                <path
                                  fill="currentColor"
                                  d="M7.84 18.8v-7H1.12V7.88h6.72V.96h4.32v6.92h6.76v3.92h-6.76v7z"
                                />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                                width="100%"
                                className={`accordion__icon-minus ${
                                  isOpen ? "block" : "hidden"
                                }`}
                              >
                                <path
                                  fill="currentColor"
                                  d="M3.8 7.9h12.4v4.04H3.8z"
                                />
                              </svg>
                            </span>
                          </span>
                        </summary>
                        <div
                          data-accordion-content=""
                          className={`accordion__content transition-all duration-300 ${
                            isOpen
                              ? "max-h-96 opacity-100 mt-4"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          <div className="accordion__content-inner">
                            <div className="rich-text w-richtext">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              data-button-alt=""
              data-wf--button-alt--variant="base"
              href="/faq"
              className="button-alt w-inline-block"
            >
              <span className="button-alt__text-wrap">
                <span className="button-alt__bg" />
                <span className="button-alt__text-outer">
                  <span data-button-alt-text="" className="button-alt__text">
                    Show all FAQ
                  </span>
                </span>
              </span>
              <span className="button-alt__icon-wrap">
                <span className="button-alt__bg" />
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
                    />
                  </svg>
                </span>
              </span>
            </Link>
          </div>

          <div className="faq__logo-easter-egg">
            <PopUpEasterEgg variant="left" />
          </div>
        </div>
      </div>

      <div className="faq__bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1919 1032"
          data-background-animation=""
          className="faq__bg-svg is--desktop"
        >
          <path
            d="M1020.68 122.72c46.69-18.686 94.68-27.594 145.02-17.194 69.47 14.366 110.29 57.983 128.03 125.006 15.96 60.318 6.45 120.498-1.31 180.811-8.29 64.443-17.13 128.943-21.73 193.698-3.4 47.933 9.35 93.629 35.22 135.083 24.6 39.428 58.71 63.775 105.27 70.699 51.26 7.619 100.97-1.423 150.87-11.35 44.59-8.86 89.22-18.234 134.27-23.788 38-4.687 76.51-2.36 112.24 14.387 64.95 30.446 87.52 98.719 76.62 164.066-9.87 59.152-42.57 105.152-84.56 145.852-44.84 43.48-98.21 75.46-148.83 111.16-48.44 34.17-94.66 70.58-125.93 122.3-15.92 26.34-27.41 54.25-24.99 85.99 3.49 45.74 31.13 79.67 76.96 94.75 163.65 53.87 400.02-1.71 550.17-63.19 1.62-.66 3.29-1.33 5-2.01v198.97c-247.62 111.02-459.19 118.91-579.5 77.54-116.22-39.96-259.45-123.39-341.49-219.49-36.79-43.08-54.96-91.64-30.67-146.46 11.57-26.1 27.65-51.6 46.88-72.59 36.26-39.57 77.13-74.86 114.37-113.57 18.76-19.49 36.56-40.97 49.89-64.35 26.16-45.95 9.64-92.6-37.48-116.625-29.31-14.953-60.63-23.004-92.65-29.342-47.63-9.409-95.64-17.461-142.48-29.89-26.8-7.121-53.13-19.242-76.97-33.601-37.72-22.742-50.723-59.623-48.21-102.648 2.466-42.062 19.26-79.709 35.43-117.637 9.87-23.115 19.1-46.499 28.22-69.906 2.34-5.996 3.58-12.518 4.6-18.913 6.58-40.968-12.55-65.234-54.22-62.184-35.216 2.579-69.943 11.611-104.909 17.609-43.082 7.393-85.969 16.846-129.373 21.383-72.784 7.609-140.417-13.554-203.623-47.289-57.689-30.79-113.048-65.891-169.935-98.199-40.136-22.803-82.672-40.544-128.109-49.342-43.977-8.505-87.366-6.741-127.136 17.54-26.209 16.007-41.953 39.593-48.511 69.378-12.397 56.359 4.801 106.985 30.146 156.167 28.003 54.347 66.438 101.409 103.328 149.563 37.221 48.583 74.232 97.305 98.582 154.025 15.151 35.286 25.632 71.858 24.526 110.811-1.931 68.14-36.553 114.49-96.26 144.22-45.749 22.78-95.324 30.65-144.973 39.2-58.87 10.13-118.15 19.35-175.93 34.11-80.643 20.58-107.526 53.68-164.322 112.54a639 639 0 0 0-16.882 18.19l-132.568-221.71c60.66-4.84 121.702-5.43 182.561-8.15 59.581-2.68 118.458-8.23 172.798-36.44 68.743-35.69 95.922-102.94 71.732-176.511C31.88 880.71-1.357 835.57-36.217 791.052c-40.324-51.507-81.777-102.294-119.093-155.941-47.119-67.745-66.267-144.502-59.071-226.985 5.782-66.292 34.988-122.322 81.436-168.708 86.136-86.027 189.43-120.687 309.991-96.781 61.551 12.208 114.972 42.819 165.548 78.704 47.348 33.599 93.84 68.447 141.911 100.971 70.388 47.621 143.971 47.529 215.775 4.92 48.319-28.674 94.064-61.87 139.753-94.725 57.435-41.309 114.36-83.273 180.647-109.787"
            fill="currentColor"
            stroke="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
