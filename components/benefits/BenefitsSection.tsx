"use client";

import React, { useRef, useState } from "react";

export default function BenefitsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 30, y: y * 30 });
  };

  return (
    <section
      data-benefits=""
      className="benefits"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="benefits__container">
        <div className="benefits__inner">
          <div className="benefits__content">
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/69b2c25bdf51e00864bcf4f1_benefits-text-eng.svg"
              loading="lazy"
              width={600}
              height={218}
              alt="Why Aardvark?"
              className="benefits__logo-text"
            />
            <img
              src="https://cdn.prod.website-files.com/696173cb00865d1b386e4af8/696a402939e1e6124f2c2b39_logo-circle-big.svg"
              loading="lazy"
              width={568}
              height={568}
              alt="Aardvark Book Club Icon"
              className="benefits__logo animate-spin-slow"
            />
          </div>

          <div data-momentum-hover="" className="benefits__label-wrap absolute inset-0 pointer-events-none">
            <div
              className="benefits__label absolute top-[15%] left-[10%] transition-transform duration-300 pointer-events-auto"
              style={{ transform: `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px) rotate(-4deg)` }}
            >
              <div className="benefits__label-inner text-[#0E0E10] px-8 py-4 rounded-full border-2 border-[#0E0E10] shadow-[4px_4px_0_0_rgba(14,14,16,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(14,14,16,1)] transition-all cursor-pointer" style={{ backgroundColor: '#FF69DA' }}>
                <div className="benefits__label-text font-bold text-xl md:text-2xl whitespace-nowrap">
                  Range of genres
                </div>
              </div>
            </div>

            <div
              className="benefits__label absolute top-[25%] right-[10%] transition-transform duration-300 pointer-events-auto"
              style={{ transform: `translate(${mouseOffset.x * -1.2}px, ${mouseOffset.y * -1.2}px) rotate(6deg)` }}
            >
              <div className="benefits__label-inner text-[#0E0E10] px-8 py-4 rounded-full border-2 border-[#0E0E10] shadow-[4px_4px_0_0_rgba(14,14,16,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(14,14,16,1)] transition-all cursor-pointer" style={{ backgroundColor: '#FF8D29' }}>
                <div className="benefits__label-text font-bold text-xl md:text-2xl whitespace-nowrap">
                  Free shipping
                </div>
              </div>
            </div>

            <div
              className="benefits__label absolute bottom-[35%] left-[8%] transition-transform duration-300 pointer-events-auto"
              style={{ transform: `translate(${mouseOffset.x * 1.5}px, ${mouseOffset.y * 1.5}px) rotate(-2deg)` }}
            >
              <div className="benefits__label-inner text-[#0E0E10] px-8 py-4 rounded-full border-2 border-[#0E0E10] shadow-[4px_4px_0_0_rgba(14,14,16,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(14,14,16,1)] transition-all cursor-pointer" style={{ backgroundColor: '#8684FF' }}>
                <div className="benefits__label-text font-bold text-xl md:text-2xl whitespace-nowrap">
                  Affordable
                </div>
              </div>
            </div>

            <div
              className="benefits__label absolute bottom-[15%] right-[15%] transition-transform duration-300 pointer-events-auto"
              style={{ transform: `translate(${mouseOffset.x * -0.9}px, ${mouseOffset.y * 0.9}px) rotate(4deg)` }}
            >
              <div className="benefits__label-inner text-[#0E0E10] px-8 py-4 rounded-full border-2 border-[#0E0E10] shadow-[4px_4px_0_0_rgba(14,14,16,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(14,14,16,1)] transition-all cursor-pointer" style={{ backgroundColor: '#A4F6F8' }}>
                <div className="benefits__label-text font-bold text-xl md:text-2xl whitespace-nowrap leading-tight text-center">
                  High quality <br />
                  hardcovers
                </div>
              </div>
            </div>

            <div
              className="benefits__label absolute bottom-[5%] left-[45%] -translate-x-1/2 transition-transform duration-300 pointer-events-auto"
              style={{ transform: `translate(${mouseOffset.x * 1.1}px, ${mouseOffset.y * -1.1}px) rotate(-5deg)` }}
            >
              <div className="benefits__label-inner text-[#0E0E10] px-8 py-4 rounded-full border-2 border-[#0E0E10] shadow-[4px_4px_0_0_rgba(14,14,16,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(14,14,16,1)] transition-all cursor-pointer" style={{ backgroundColor: '#C8F064' }}>
                <div className="benefits__label-text font-bold text-xl md:text-2xl whitespace-nowrap">
                  Curated books
                </div>
              </div>
            </div>
          </div>

          <div className="benefits__bg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1920 1080"
              data-background-animation=""
              className="benefits__bg-svg is--desktop"
            >
              <path
                d="M622.956 92.984c69.68-13.332 124.091 11.33 166.146 66.451 37.834 49.612 52.094 108.845 68.023 167.531 17.015 62.708 33.544 125.678 54.097 187.256 15.213 45.582 44.491 82.912 84.258 111.302 37.83 27.001 78.65 36.435 124.32 25.002 50.27-12.591 92.73-39.978 135.02-68.255 37.81-25.261 75.44-51.01 114.93-73.391 33.31-18.877 69.78-31.477 109.2-29.686 71.66 3.254 118.64 57.683 133.6 122.222 13.54 58.421.94 113.436-22.27 167.116-24.77 57.338-61.83 107.317-94.92 159.675-31.66 50.112-60.42 101.453-69.5 161.203-4.62 30.42-4.55 60.61 9.84 89 14.94 29.48 39.11 48.49 69.45 55.47-81.24 30.12-208.99 79.29-324.5 122.86-38.79-25.16-64.29-60.23-63.06-111.3.7-28.55 5.79-58.25 15.52-85.01 18.34-50.44 42.58-98.69 62.16-148.71 9.86-25.18 18.08-51.846 21.44-78.548 6.57-52.461-26.55-89.231-79.28-93.381-32.8-2.591-64.81 1.965-96.82 8.372-47.599 9.543-95.035 20.489-143.067 26.944-27.486 3.684-56.451 2.571-83.964-1.568-43.559-6.563-69.693-35.655-83.846-76.364-13.828-39.799-12.733-81.006-12.31-122.239.259-25.129-.162-50.268-.701-75.384-.135-6.434-1.493-12.93-2.997-19.229-9.605-40.368-36.568-55.459-73.901-36.683-31.54 15.866-60.163 37.506-90.168 56.437-36.968 23.326-72.964 48.481-111.324 69.293-64.323 34.899-134.904 41.246-206.21 34.284-65.083-6.353-129.663-17.582-194.586-25.645-45.808-5.696-91.896-5.797-137.238 3.474-43.882 8.982-83.289 27.227-110.731 64.886-18.082 24.823-23.594 52.639-18.247 82.666 10.129 56.81 45.402 96.993 87.647 132.721C-94.353 1001.24-40.827 1030 11.69 1060.35c52.987 30.63 105.833 61.47 150.046 104.54 27.508 26.8 51.194 56.57 65.086 92.97 24.309 63.69 10.075 119.77-33.697 170.09a258 258 0 0 1-4.983 5.57l-241.336-31.48c5.88-39.47-6.454-79.83-36.872-115.17-37.549-43.63-85.539-72.6-134.789-100.38-56.973-32.14-114.712-63.18-169.726-98.45-69.469-44.54-116.549-108.116-141.485-187.068-20.043-63.453-14.519-126.396 10.628-187.033 46.63-112.453 128.778-184.025 249.305-208.106 61.535-12.29 122.605-4.466 183.068 9.317 56.605 12.908 112.898 27.297 169.758 38.935 83.258 17.039 151.197-11.223 201.213-78.079 33.656-44.99 63.206-93.172 92.831-141.018 37.24-60.153 73.756-120.717 124.837-170.592 35.975-35.14 76.904-61.747 127.382-71.412"
                fill="currentColor"
                stroke="currentColor"
                opacity=".5"
              />
              <path
                d="M639.856 543.657c37.333-18.775 64.31-3.688 73.902 36.683 1.487 6.29 2.845 12.787 2.992 19.218.543 25.128.965 50.267.701 75.383-.422 41.233-1.517 82.44 12.312 122.24 14.153 40.709 40.298 69.797 83.857 76.359 27.513 4.14 56.478 5.253 83.964 1.568 48.032-6.454 95.464-17.413 143.066-26.944 31.99-6.403 64.02-10.962 96.82-8.372 52.75 4.146 85.86 40.904 79.28 93.369-3.36 26.701-11.58 53.368-21.44 78.549-19.59 50.03-43.84 98.27-62.17 148.71-9.73 26.76-14.82 56.45-15.51 84.99-1.24 51.09 24.26 86.16 63.06 111.32-68.89 25.98-133.43 49.98-181.16 66.77-16.458-30.02-21.454-63.6-17.627-98.22 5.421-48.96 15.437-97.43 24.427-145.94 7.14-38.48 13.4-76.73 7.59-116.12-8.39-56.91-56.908-109.587-123.034-105.734-33.859 1.974-65.045 13.287-96.708 24.223-30.14 10.406-61.045 20.841-92.433 24.881-46.346 5.96-83.604-12.5-108.187-54.086-19.571-33.127-25.751-69.564-29.062-106.964-2.666-30.169-3.029-60.765-14.966-89.377-10.306-24.705-28.009-33.475-54.038-28.224-19.269 3.895-34.639 13.869-46.863 28.482-13.885 16.611-26.908 33.95-39.942 51.251-40.002 53.055-92.354 73.198-156.813 56.577-28.843-7.434-56.675-18.865-84.849-28.818-42.496-15.017-84.505-32.025-130.67-31.798-29.872.151-59.682 3.217-84.253 21.687-42.549 31.983-45.887 85.942-.264 113.45 24.344 14.675 50.13 27.67 76.613 37.928 58.981 22.852 119.504 41.802 178.143 65.472 86.292 34.83 155.98 89.5 196.065 176.48 25.095 54.48 37.693 110.51 24.633 170.54-5.719 26.28-14.355 50.27-25.59 72.18l-213.539-27.85c1.68-1.82 3.34-3.68 4.978-5.56 43.771-50.32 58.007-106.4 33.698-170.09-13.892-36.4-37.579-66.17-65.087-92.97-44.226-43.07-97.072-73.91-150.047-104.54-52.516-30.36-106.047-59.12-152.723-98.594-42.241-35.716-77.518-75.911-87.646-132.722-5.36-30.023.152-57.839 18.247-82.666 27.445-37.646 66.853-55.892 110.735-64.874 45.343-9.271 91.43-9.169 137.238-3.473 64.923 8.063 129.516 19.288 194.586 25.645 71.301 6.949 141.883.601 206.21-34.285 38.363-20.799 74.357-45.967 111.337-69.296 30.005-18.931 58.627-40.572 90.167-56.438"
                fill="currentColor"
                stroke="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
