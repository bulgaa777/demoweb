"use client";

import Image from "next/image";
import { useState } from "react";

const tabPaneUrl =
  "https://www.figma.com/api/mcp/asset/e9cc6292-f5dc-40e1-a472-ceb9c9181a9b";

const tabs = [
  {
    title: "Browse and select",
    description:
      "Search our catalog of US sale items and add what you want to your cart.",
  },
  {
    title: "Place your order",
    description:
      "Complete checkout with your shipping address and payment information securely.",
  },
  {
    title: "Receive your goods",
    description: "Track your package and receive it at your door in Mongolia.",
  },
];

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#e6efff] w-full px-16 py-28 shrink-0 overflow-hidden flex flex-col items-center">
      <div className="flex flex-col gap-20 items-center max-w-[1280px] w-full">
        {/* Section title */}
        <div className="flex flex-col gap-4 items-center max-w-[768px] w-full">
          {/* Tagline */}
          <div className="flex items-center shrink-0">
            <p
              className="font-semibold leading-[1.5] text-[16px] text-[#000906] text-center whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Process
            </p>
          </div>
          {/* Content */}
          <div className="flex flex-col gap-6 items-start text-[#000906] text-center w-full">
            <h2
              className="font-medium leading-[1.2] tracking-[-0.52px] text-[52px] w-full"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              How ordering works from start to finish
            </h2>
            <p
              className="font-normal leading-[1.5] text-[18px] w-full"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Three simple steps get your items moving. We handle everything in
              between.
            </p>
          </div>
        </div>

        {/* Content: tabs + image */}
        <div className="flex flex-col gap-16 items-center w-full">
          {/* Tabs row */}
          <div className="flex items-start text-[#000906] w-full">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex flex-1 flex-col gap-1 items-center justify-center min-w-0 px-6 py-4 border-b-2 transition-colors text-left ${
                  activeTab === i
                    ? "border-[#0b5fff]"
                    : "border-[rgba(0,9,6,0.15)] hover:border-[rgba(11,95,255,0.5)]"
                }`}
              >
                <p
                  className="font-medium leading-[1.4] tracking-[-0.22px] text-[22px] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {tab.title}
                </p>
                <p
                  className="font-normal leading-[1.5] text-base text-center w-full"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {tab.description}
                </p>
              </button>
            ))}
          </div>

          {/* Tab image */}
          <div className="flex flex-col gap-16 items-start w-full">
            <div className="relative rounded-lg overflow-hidden w-full aspect-[1280/738]">
              <Image
                src={tabPaneUrl}
                alt={tabs[activeTab].title}
                fill
                className="object-cover pointer-events-none rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
