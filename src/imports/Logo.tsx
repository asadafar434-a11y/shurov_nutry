export default function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-name="logo">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[24px] text-white tracking-[3px] uppercase w-[177px] whitespace-pre-wrap">ELENA OZER</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[12px] text-[rgba(0,186,128,0.53)] tracking-[4.2px] uppercase w-[min-content] whitespace-pre-wrap">Art of Nutrition</p>
      <div className="absolute left-[101px] size-[10px] top-[3px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_125_334)" fillOpacity="0.2" id="Ellipse 1" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_334" x1="5" x2="5" y1="0" y2="10">
              <stop stopColor="#019365" />
              <stop offset="1" stopColor="#10C089" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[113px] size-[10px] top-[3px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="url(#paint0_linear_125_334)" fillOpacity="0.2" id="Ellipse 1" r="5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_125_334" x1="5" x2="5" y1="0" y2="10">
              <stop stopColor="#019365" />
              <stop offset="1" stopColor="#10C089" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}