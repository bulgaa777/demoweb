import Image from "next/image";
import Link from "next/link";

const heroImageUrl =
  "https://www.figma.com/api/mcp/asset/e4535a1a-27bb-4f68-80cc-e631f1c9d7db";

export default function HeroSection() {
  return (
    <section className="bg-[#e6efff] w-full px-16 py-20 shrink-0 overflow-hidden flex flex-col items-center">
      <div className="flex flex-col items-start justify-center max-w-[1280px] w-full">
        {/* Card */}
        <div className="bg-[#cedfff] border-[0px] border-[rgba(0,9,6,0.15)] border-solid rounded-lg overflow-hidden flex flex-col md:flex-row w-full">
          {/* Left: text */}
          <div className="flex flex-1 flex-col gap-8 items-start justify-center min-w-0 p-12">
            {/* Content */}
            <div className="flex flex-col gap-6 items-start text-[#000906] w-full">
              <h1
                className="font-medium leading-[1.2] tracking-[-0.72px] text-[72px] w-full"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Шууд захиал
              </h1>
              <p
                className="font-normal leading-[1.5] text-[18px] w-full"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                We bring the best sale items from across the United States
                directly to your door. Shop authentic products at prices that
                matter.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-start gap-4 shrink-0">
              <Link
                href="/products"
                className="bg-[#0b5fff] border border-[#0b5fff] flex items-center justify-center px-3 py-[6px] rounded-md text-white text-base font-medium leading-[1.5] whitespace-nowrap hover:bg-[#0047e0] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Shop
              </Link>
              <Link
                href="/how-it-works"
                className="bg-[rgba(0,9,6,0.05)] border border-transparent flex items-center justify-center px-3 py-[6px] rounded-md text-[#000906] text-base font-medium leading-[1.5] whitespace-nowrap hover:bg-[rgba(0,9,6,0.1)] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative flex-1 min-w-0 aspect-square">
            <Image
              src={heroImageUrl}
              alt="Shopping"
              fill
              className="object-cover pointer-events-none"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
