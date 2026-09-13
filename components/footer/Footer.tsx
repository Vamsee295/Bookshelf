"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer data-footer-parallax="" className="footer relative overflow-hidden">
      <div data-footer-parallax-top="" className="footer__top">
        <div className="footer__container u-container">
          <div className="footer__top-inner">
            <div className="footer__top-nav">
              <div className="footer__logo">
                <img
                  width={295}
                  height={74}
                  alt="Aardvark Book Club Logo"
                  src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696d10ebb91f9b8707240373_aardvark-logo.svg"
                  loading="lazy"
                  className="footer__logo-img"
                />
              </div>

              <div className="footer__cta flex gap-3 flex-wrap">
                <a
                  aria-label="Download on the App Store"
                  data-wf--button-app-store--variant="outline"
                  href="https://apps.apple.com/us/app/aardvark-book-club/id6443419435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is--app w-inline-block transition-transform duration-300 hover:scale-105"
                >
                  <img
                    width={300}
                    height={100}
                    alt="AppStore Button"
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69960373d1c35e0dd8ec560d_button-app-store.svg"
                    loading="lazy"
                    className="button__bg is--app"
                  />
                </a>
                <a
                  aria-label="Get it on Google Play"
                  data-wf--button-google-play--variant="outline"
                  href="https://play.google.com/store/apps/details?id=com.aardvark.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is--app w-inline-block transition-transform duration-300 hover:scale-105"
                >
                  <img
                    width={300}
                    height={100}
                    alt="Google Play Button"
                    src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/6996037302aa4574b3eecab8_button-google-play.svg"
                    loading="lazy"
                    className="button__bg is--app"
                  />
                </a>
              </div>

              <div className="footer__socials flex gap-3">
                <a
                  aria-label="Go to Instagram"
                  data-wf--button-social-instagram--variant="big"
                  href="https://www.instagram.com/aardvarkbookclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-social w-inline-block"
                >
                  <div className="button-social__inner">
                    <span className="button-social__bg" />
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
                        />
                      </svg>
                    </span>
                  </div>
                </a>

                <a
                  aria-label="Go to TikTok"
                  data-wf--button-social-tiktok--variant="big"
                  href="https://www.tiktok.com/@aardvarkbookclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-social w-inline-block"
                >
                  <div className="button-social__inner">
                    <span className="button-social__bg" />
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
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>

              <div className="footer__links flex gap-4 text-xs opacity-75">
                <Link
                  href="/terms-of-service"
                  className="footer__link w-inline-block"
                >
                  <span className="footer__bottom-text u-paragraph-extra-small">
                    Terms of Service
                  </span>
                </Link>
                <Link
                  href="/privacy-policy"
                  className="footer__link w-inline-block"
                >
                  <span className="footer__bottom-text u-paragraph-extra-small">
                    Privacy Policy
                  </span>
                </Link>
              </div>
            </div>

            <div className="footer__top-form">
              <h3 className="footer__form-title u-heading-s text-white">
                Join our mailing list
              </h3>
              <div data-form-validate="" className="form w-form">
                {subscribed ? (
                  <div className="success-message w-form-done p-4 bg-green-500/20 rounded-xl text-white font-bold">
                    <div className="u-heading-xs white-font">
                      Thank you, <br />
                      you joined us!
                    </div>
                  </div>
                ) : (
                  <form
                    id="newsletter-form"
                    name="email-form"
                    onSubmit={handleSubmit}
                    className="form__group flex gap-2"
                  >
                    <div data-validate="" className="form__field-group flex-1">
                      <label
                        htmlFor="EMAIL"
                        className="form__label u-screen-reader"
                      >
                        Email Address
                      </label>
                      <div className="form__field">
                        <input
                          className="form__input w-input w-full p-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-yellow-400"
                          maxLength={256}
                          name="EMAIL"
                          placeholder="Email Address"
                          type="email"
                          id="EMAIL"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div
                      data-hover=""
                      data-submit=""
                      className="form__submit-group"
                    >
                      <button
                        type="submit"
                        data-button-alt=""
                        className="button-alt cursor-pointer"
                      >
                        <span className="button-alt__text-wrap">
                          <span className="button-alt__bg" />
                          <span className="button-alt__text-outer">
                            <span
                              data-button-alt-text=""
                              className="button-alt__text"
                            >
                              Subscribe
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
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-footer-parallax-bottom="" className="footer__bottom">
        <div className="footer__container u-container">
          <div className="footer__bottom-inner">
            <div className="footer__bottom-copyright">
              <span className="footer__bottom-text u-paragraph-extra-small">
                ©2026 Aardvark Book Club. All rights reserved.
              </span>
            </div>
            <div className="footer__bottom-credit flex gap-4">
              <a
                href="https://www.dylanbrouwer.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link w-inline-block opacity-75 hover:opacity-100"
              >
                <span className="footer__bottom-text u-paragraph-extra-small">
                  Design by Dylan
                </span>
              </a>
              <a
                href="https://www.futurethree.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link w-inline-block opacity-75 hover:opacity-100"
              >
                <span className="footer__bottom-text u-paragraph-extra-small">
                  Development by Future Three
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__visual">
        <div className="footer__visual-wrap">
          <img
            className="footer__visual-img"
            src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp"
            width={630}
            height={789}
            data-footer-parallax-visual=""
            alt="Aardvark Book Club Box"
            sizes="(max-width: 767px) 100vw, 630px"
            loading="lazy"
            srcSet="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual-p-500.webp 500w, https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual-p-800.webp 800w, https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual-p-1080.webp 1080w, https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b9afc474f523151b7c0941_package-visual.webp 1260w"
          />
        </div>
      </div>
      <div data-footer-parallax-overlay="" className="footer__overlay" />
    </footer>
  );
}
