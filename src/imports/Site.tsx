import { useState, useEffect, useRef } from "react";
import svgPaths from "./svg-rbnoezal0z";
import imgImageHealthyFood from "@/assets/c6321bc658df8915369191499ea66641bd0a1058.png";
import imgImage from "@/assets/a8eea92051d14e6a7c46659a265d548f3f638cea.png";
import imgImage1 from "@/assets/9a32dbb6ed65f0283e8974d5278932d4bcae051e.png";
import imgImage2 from "@/assets/e5294f751d0c5ac385da581d5c92cf3e1899c8a5.png";
import imgImage3 from "@/assets/e271bf931a04dd6602ed53a2fd5af266d09fe8a5.png";
import imgImage4 from "@/assets/ca27e31ef2c2e6763717010455537962ccdd0fe8.png";
import imgImage5 from "@/assets/a033bced262d0ab077d480dba17be62b0fcbec0b.png";
import Logo from "./Logo";
import GradientContainer from "./Container";
import { Sheet, SheetContent, SheetTitle } from "@/app/components/ui/sheet";

function ListMenu() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[32px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] text-center tracking-[0.7px] uppercase" data-name="List menu">
      <p className="relative shrink-0">О специалисте</p>
      <p className="relative shrink-0">Результаты</p>
      <p className="relative shrink-0">Блог</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_125_351)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          <path d={svgPaths.p2c68500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_125_351">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_125_340)" id="Icon">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_125_340">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[36px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative shrink-0 w-[132px]" data-name="Contacts">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex flex-col items-start relative text-left w-full">
      <p className="bg-clip-text font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.15] relative text-[20px] sm:text-[28px] md:text-[46px] w-full" style={{ backgroundImage: "linear-gradient(97.8564deg, rgb(0, 212, 146) 0.5699%, rgb(0, 110, 76) 70.134%)", WebkitTextFillColor: "transparent" }}>
        НУТРИЦИОЛОГИЯ - ЭТО ПРОСТО!
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative text-[10px] sm:text-[12px] text-[#00BA80] tracking-[4.2px] uppercase mt-[4px]">Art of Nutrition</p>
    </div>
  );
}

function HeroDescription() {
  return (
    <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[1.6] md:leading-[1.9] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.55)] text-justify max-w-[488px] w-full">
      <span className="md:hidden">Индивидуальные программы питания с заботой о вашем здоровье и целях. Продуманная стратегия для улучшения самочувствия.</span>
      <span className="hidden md:inline whitespace-pre-wrap">Индивидуальные программы питания, разработанные с заботой о вашем здоровье, энергии и долгосрочном благополучии. Мы учитываем ваши цели, образ жизни, состояние организма и вкусовые предпочтения. Это продуманная стратегия, которая помогает улучшить самочувствие, поддерживать форму и чувствовать себя уверенно каждый день.</span>
    </p>
  );
}

function Button() {
  return (
    <div className="h-[54px] relative shrink-0 w-full sm:w-[240px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-[#111111] inset-0 pointer-events-none" />
      <p className="absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-1/2 -translate-x-1/2 text-[14px] text-center text-[#111111] top-[17px] tracking-[0.7px] uppercase">Записаться</p>
    </div>
  );
}

function Container1() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid left-0 rounded-[26843500px] size-[432px] top-0" data-name="Container" />;
}

function Container2() {
  return <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.07)] border-solid left-[32px] rounded-[26843500px] size-[368px] top-[32px]" data-name="Container" />;
}

function ImageHealthyFood() {
  return (
    <div className="h-[296px] relative shrink-0 w-full" data-name="Image (Healthy food)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHealthyFood} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute left-[64px] rounded-[26843500px] size-[304px] top-[64px] z-10" data-name="Container">
      <div className="overflow-hidden relative rounded-[inherit] size-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageHealthyFood} />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(0,0,0,0.07)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[92.8px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute rounded-[26843500px] size-[96px]" data-name="Container" style={{ top: 'calc(50% - 48px)', left: -48 }}>
      <div className="overflow-hidden relative rounded-[inherit] size-full hero-orbit-img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[124.8px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute rounded-[26843500px] size-[128px]" data-name="Container" style={{ top: 'calc(50% - 64px)', left: -64 }}>
      <div className="overflow-hidden relative rounded-[inherit] size-full hero-orbit-img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[108.8px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute rounded-[26843500px] size-[112px]" data-name="Container" style={{ top: 'calc(50% - 56px)', left: -56 }}>
      <div className="overflow-hidden relative rounded-[inherit] size-full hero-orbit-img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[432px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <div className="hero-orbit-ring absolute rounded-full" style={{ '--orbit-duration': '28s', '--orbit-delay': '-7s', width: 390, height: 390, top: 'calc(50% - 195px)', left: 'calc(50% - 195px)' } as React.CSSProperties}>
        <Container4 />
      </div>
      <div className="hero-orbit-ring absolute rounded-full" style={{ '--orbit-duration': '35s', '--orbit-delay': '-23s', width: 440, height: 440, top: 'calc(50% - 220px)', left: 'calc(50% - 220px)' } as React.CSSProperties}>
        <Container5 />
      </div>
      <div className="hero-orbit-ring absolute rounded-full" style={{ '--orbit-duration': '42s', '--orbit-delay': '-14s', width: 436, height: 436, top: 'calc(50% - 218px)', left: 'calc(50% - 218px)' } as React.CSSProperties}>
        <Container6 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-y-[16px] sm:gap-y-[24px] lg:gap-x-[32px] lg:gap-y-[16px] items-start relative shrink-0 w-full">
      <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
        <Frame5 />
      </div>
      <div className="justify-self-center lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:self-center w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[432px] lg:h-[432px] my-[12px] sm:my-[20px] md:my-[32px] lg:my-0">
        <div className="w-[432px] h-[432px] origin-top-left scale-[0.51] sm:scale-[0.6] md:scale-[0.74] lg:scale-100">
          <Container />
        </div>
      </div>
      <div className="lg:col-start-1 lg:row-start-2">
        <HeroDescription />
      </div>
      <div className="lg:col-start-1 lg:row-start-3 lg:pt-[32px]">
        <Button />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(0,0,0,0.35)] text-center tracking-[3.6px] uppercase whitespace-pre-wrap">
        <span className="leading-[16px]">{`Мы создаем `}</span>
        <span className="leading-[16px] text-[#00d492]">здоровье</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[45px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Paragraph />
    </div>
  );
}

function BurgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-[6px] shrink-0 size-[36px] md:hidden"
      aria-label="Открыть меню"
    >
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex items-center justify-center relative size-full">
        <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
          <path d="M2 4h12M2 8h12M2 12h12" stroke="#333333" strokeWidth="1.33" strokeLinecap="round" />
        </svg>
      </div>
    </button>
  );
}

function Frame3() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[83px] items-start relative shrink-0 w-full z-[1]">
      <div className="shrink-0 w-full py-[10px] px-0" data-name="Header">
        <div
          className="flex flex-row items-center justify-between px-[24px] h-[64px] rounded-[20px]"
          style={{
            background: 'rgba(247,244,237,0.7)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
          }}
        >
          <Logo className="content-stretch flex flex-col items-start relative shrink-0" />
          <div className="hidden md:flex">
            <ListMenu />
          </div>
          <div className="hidden md:flex">
            <Contacts />
          </div>
          <BurgerButton onClick={() => setMenuOpen(true)} />
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" className="bg-[#f7f4ed] border-[rgba(0,0,0,0.1)] p-0 text-[#111111]">
          <SheetTitle className="sr-only">Меню</SheetTitle>
          <div className="flex flex-col gap-[32px] p-[32px] pt-[64px]">
            <nav className="flex flex-col gap-[24px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-[rgba(0,0,0,0.65)] tracking-[0.7px] uppercase cursor-pointer" onClick={() => { setMenuOpen(false); setTimeout(() => document.querySelector('[data-name="Block 2"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350); }}>О специалисте</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-[rgba(0,0,0,0.65)] tracking-[0.7px] uppercase cursor-pointer" onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350); }}>Результаты</p>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-[rgba(0,0,0,0.65)] tracking-[0.7px] uppercase cursor-pointer" onClick={() => { setMenuOpen(false); setTimeout(() => document.querySelector('[data-name="Form"]')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350); }}>Записаться</p>
            </nav>
            <div className="border-t border-[rgba(0,0,0,0.1)] pt-[24px]">
              <Contacts />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-706px] relative shrink-0 w-full z-[2]">
      <Frame3 />
    </div>
  );
}

function HeroBlock() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[706px] relative shrink-0 w-full" data-name="Hero block">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-[#edeade]" />
      <Frame4 />
      <div className="h-[730px] mb-[-706px] opacity-5 shrink-0 w-full z-[1]" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 730\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -70.532 -84.143 0 720 365)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.00082891\\'/><stop stop-color=\\'rgba(191,191,191,0.75)\\' offset=\\'0.00062168\\'/><stop stop-color=\\'rgba(128,128,128,0.5)\\' offset=\\'0.00041446\\'/><stop stop-color=\\'rgba(64,64,64,0.25)\\' offset=\\'0.00020723\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0\\'/></radialGradient></defs></svg>\')" }} />
    </div>
  );
}

function Container8() {
  return <div className="hidden lg:block absolute border-[0.8px] border-[rgba(0,0,0,0.07)] border-solid h-[732px] left-[-16px] rounded-[10px] top-[-16px] w-[547.2px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[10px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover object-[center_30%] pointer-events-none rounded-[10px] size-full" src={imgImage} />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center right-0 inset-y-0 px-[10px] md:px-[16px] lg:px-[24px] w-[76px] md:w-[104px] lg:w-[140px]" data-name="Container" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
      <p className="font-['Manrope:Bold',sans-serif] font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1] text-[#111111]">3+</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal text-[9px] md:text-[11px] lg:text-[12px] leading-[1.4] text-center text-[#111111] tracking-[0.6px] uppercase opacity-90">Лет<br/>опыта</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full h-[400px] md:h-[500px] lg:w-[515.2px] lg:h-[700px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function parseStatValue(value: string): { num: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return { num: 0, prefix: '', suffix: value };
  return { num: parseInt(match[2]), prefix: match[1], suffix: match[3] };
}

function StatItem({ value, label }: { value: string; label: string }) {
  const { num, prefix, suffix } = parseStatValue(value);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(num * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, num]);

  return (
    <div ref={ref} className="flex-1 flex flex-col gap-[8px] items-center text-center">
      <p className="font-['Manrope:Bold',sans-serif] font-bold text-[24px] md:text-[30px] lg:text-[36px] leading-[1.2] text-[#111111]">
        {prefix}{count}{suffix}
      </p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal text-[11px] md:text-[12px] lg:text-[14px] leading-[16px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase">{label}</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex justify-between items-start relative shrink-0 w-full pt-[16px] pb-[16px] border-b border-[rgba(0,0,0,0.07)]" data-name="Container">
      <StatItem value="500+" label="Клиентов" />
      <StatItem value="98%" label="Успеха" />
      <StatItem value="24/7" label="Поддержка" />
    </div>
  );
}

function PhilHeading() {
  return (
    <p className="bg-clip-text font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28px] md:text-[48px] w-full whitespace-pre-wrap" style={{ backgroundImage: "linear-gradient(95.1427deg, rgb(0, 212, 146) 0.5699%, rgb(0, 110, 76) 70.134%)", WebkitTextFillColor: "transparent" }}>
      ПУТЬ К ЗДОРОВЬЮ
    </p>
  );
}

function PhilDescription() {
  return (
    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[rgba(0,0,0,0.5)] max-w-[515px] w-full whitespace-pre-wrap">Более 10 лет я помогаю людям обрести гармонию через персонализированные программы питания. Каждая программа создается индивидуально с учетом вашего образа жизни и целей.</p>
  );
}

function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#00d492] h-[24px] shrink-0 w-px mt-[2px]" />
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[14px] md:text-[16px] text-[rgba(0,0,0,0.55)] flex-1 min-w-0">{text}</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <BulletItem text="Индивидуальный подход к каждому клиенту" />
      <BulletItem text="Научно обоснованные методики питания" />
      <BulletItem text="Постоянная поддержка на пути к цели" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full sm:w-[240px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-[#111111] inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 -translate-x-1/2 not-italic text-[14px] text-center text-[#111111] top-[17px] tracking-[0.7px] uppercase">Узнать больше</p>
    </div>
  );
}

function Block() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-x-[32px] lg:gap-x-[64px] gap-y-[24px] lg:gap-y-[32px] items-start relative shrink-0 w-full" data-name="Block 2">
      <div className="lg:col-start-2 lg:row-start-1">
        <PhilHeading />
      </div>
      <div className="w-full lg:col-start-1 lg:row-start-1 lg:row-span-6 lg:self-center">
        <Container7 />
      </div>
      <div className="lg:col-start-2 lg:row-start-3">
        <Container13 />
      </div>
      <div className="lg:col-start-2 lg:row-start-2">
        <PhilDescription />
      </div>
      <div className="lg:col-start-2 lg:row-start-4">
        <Container23 />
      </div>
      <div className="lg:col-start-2 lg:row-start-5 mt-[8px] lg:mt-[16px]">
        <Button1 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="lg:min-h-[783px] relative shrink-0 w-full py-[32px] lg:py-0 lg:-mt-[100px] lg:-mb-[100px]">
      <div className="absolute inset-0 pointer-events-none">
        <GradientContainer />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-center relative w-full z-[1]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#00d492] text-[12px] text-center tracking-[3.6px] uppercase">Философия</p>
        <Block />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="bg-clip-text font-['Manrope:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[28px] md:text-[36px] lg:text-[48px] text-center" style={{ backgroundImage: "linear-gradient(97.71deg, rgb(0, 212, 146) 0.5699%, rgb(0, 110, 76) 70.134%)", WebkitTextFillColor: "transparent" }}>
        <span className="leading-[normal] text-[#111111]">Первая консультация</span>
        <span className="leading-[normal]">{` бесплатно`}</span>
      </p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[14px] md:text-[16px] text-[rgba(0,0,0,0.5)] text-center w-full max-w-[622px] whitespace-pre-wrap">Познакомимся, обсудим ваши цели и я предложу оптимальный план действий</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[167.53px] size-[16px] top-[19.2px] hidden sm:block" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[54px] relative shrink-0 w-full sm:w-[240px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-solid border-[#111111] inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[14px] text-center text-[#111111] top-[17px] tracking-[0.7px] uppercase">Записаться</p>
      <Icon3 />
    </div>
  );
}

function Consultation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Consultation">
      {/* Full-width background */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-[#edeade]" />
      {/* Content */}
      <div className="relative flex flex-col gap-[32px] md:gap-[48px] items-center pb-[48px] md:pb-[64px] pt-[48px] md:pt-[64px] lg:pt-[104px]">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-1/2 not-italic text-[#00d492] text-[12px] text-center top-[20px] tracking-[3.6px] uppercase w-full whitespace-pre-wrap">Специальное предложение</p>
        <Frame8 />
        <Button2 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center py-[32px] relative shrink-0 w-full max-w-[622px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#00d492] text-[12px] tracking-[3.6px] uppercase">Отзывы</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[28px] md:text-[36px] lg:text-[48px] text-[#111111]">Истории успеха</p>
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative text-[14px] md:text-[16px] text-[rgba(0,0,0,0.5)] text-center w-full">Реальные результаты реальных людей</p>
    </div>
  );
}

function QuoteIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`size-[32px] md:size-[40px] shrink-0 ${className}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p14a93580} stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="3.33333" />
        <path d={svgPaths.p29592b72} stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="3.33333" />
      </svg>
    </div>
  );
}

function ReviewCard({ quote, kg, name, profession, imgSrc }: { quote: string; kg: string; name: string; profession: string; imgSrc: string }) {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] flex-[1_0_0] min-w-0 relative">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />

      {/* Mobile: horizontal layout */}
      <div className="flex flex-row gap-[16px] p-[24px] md:p-[32px] lg:hidden relative">
        <div className="flex flex-col items-center gap-[12px] shrink-0">
          <div className="relative size-[48px] rounded-full overflow-hidden">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSrc} />
          </div>
          <div className="border-[0.8px] border-[rgba(0,212,146,0.5)] border-solid px-[12px] py-[6px]">
            <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] text-[#00d492] text-[13px] tracking-[0.7px] uppercase whitespace-nowrap">{kg}</p>
          </div>
        </div>
        <div className="flex flex-col gap-[12px] flex-1 min-w-0">
          <QuoteIcon />
          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] text-[14px] md:text-[16px] text-[rgba(0,0,0,0.55)]">{quote}</p>
          <div className="flex flex-col mt-auto pt-[12px] border-t border-[rgba(0,0,0,0.1)]">
            <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-[#111111] tracking-[0.35px] uppercase">{name}</p>
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase">{profession}</p>
          </div>
        </div>
      </div>

      {/* Desktop: original absolute layout */}
      <div className="hidden lg:block h-[394.4px] relative">
        <QuoteIcon className="!size-[40px] absolute left-[32.8px] top-[32.8px]" />
        <div className="absolute left-[32.8px] top-[96.8px] w-[288px]">
          <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[26px] text-[16px] text-[rgba(0,0,0,0.55)]">{quote}</p>
        </div>
        <div className="absolute border-[0.8px] border-[rgba(0,212,146,0.5)] border-solid h-[36px] left-[32.8px] top-[227.2px]">
          <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] px-[16px] text-[#00d492] text-[14px] py-[7px] tracking-[0.7px] uppercase">{kg}</p>
        </div>
        <div className="absolute flex gap-[16px] h-[72.8px] items-center left-[32.8px] pt-[0.8px] top-[288.8px] w-[288.525px]">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
          <div className="relative shrink-0 size-[48px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSrc} />
          </div>
          <div className="flex flex-col justify-center shrink-0">
            <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-[#111111] tracking-[0.35px] uppercase">{name}</p>
            <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[16px] items-stretch relative shrink-0 w-full">
      <ReviewCard quote="За 3 месяца работы с Еленой я не только похудела на 12 кг, но и полностью изменила свое отношение к еде." kg="-12 кг" name="Анна Соколова" profession="Маркетолог" imgSrc={imgImage3} />
      <ReviewCard quote="Программа спортивного питания помогла мне набрать 8 кг мышечной массы." kg="+8 кг" name="Дмитрий Петров" profession="IT-специалист" imgSrc={imgImage4} />
      <ReviewCard quote="После родов я долго не могла вернуться в форму. Елена составила программу с учетом грудного вскармливания." kg="-15 кг" name="Мария Иванова" profession="Предприниматель" imgSrc={imgImage5} />
    </div>
  );
}

function Frame10() {
  return (
    <div id="testimonials" className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full lg:-mt-[100px]">
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center py-[32px] relative shrink-0 w-full max-w-[622px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#00d492] text-[12px] tracking-[3.6px] uppercase">Контакты</p>
      <p className="font-['Manrope:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[32px] md:text-[48px] text-[#111111]">Начните путь</p>
      <div className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[14px] md:text-[16px] text-[rgba(0,0,0,0.5)] text-center w-full max-w-[280px] whitespace-pre-wrap">
        <p className="mb-0">Первая консультация бесплатно</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] h-[57.6px] left-0 right-0 top-0" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.35)] w-[73px] whitespace-pre-wrap">Ваше имя</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] h-[57.6px] left-0 right-0 top-[81.6px]" data-name="Email Input">
      <div className="content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.35)] w-[40px] whitespace-pre-wrap">Email</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] h-[57.6px] left-0 right-0 top-[163.2px]" data-name="Phone Input">
      <div className="content-stretch flex items-center overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.35)] w-[67px] whitespace-pre-wrap">Телефон</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.04)] h-[153.6px] left-0 right-0 top-[244.8px]" data-name="Text Area">
      <div className="content-stretch flex items-start overflow-clip px-[24px] py-[16px] relative rounded-[inherit] size-full">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.35)] w-[203px] whitespace-pre-wrap">Расскажите о ваших целях</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid h-[53.6px] left-0 right-0 top-[428px]" data-name="Button">
      <div className="flex items-center justify-center gap-[8px] h-full">
        <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[20px] text-[14px] text-center text-[#111111] tracking-[0.7px] uppercase">Отправить</p>
        <Icon7 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[481.6px] relative shrink-0 w-full" data-name="Form">
      <TextInput />
      <EmailInput />
      <PhoneInput />
      <TextArea />
      <Button3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-0 w-[101.713px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase whitespace-pre-wrap">Email</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[101.713px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph7 />
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[#111111] top-[17.79px] w-[106px] whitespace-pre-wrap">elena@ozer.ru</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43.987px] items-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_125_324)" id="Icon">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_125_324">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[15.988px] items-start left-0 top-0 w-[137.05px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase whitespace-pre-wrap">Телефон</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[137.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph8 />
        <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[#111111] top-[17.79px] w-[142px] whitespace-pre-wrap">+7 (999) 123-45-67</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43.987px] items-center relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #00D492)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Manrope:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.6px] uppercase whitespace-pre-wrap">Локация</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[#111111] top-[-2.2px] w-[120px] whitespace-pre-wrap">Москва, Россия</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[43.987px] relative shrink-0 w-[114.025px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] h-[43.987px] items-center relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[48.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container48 />
      <Container51 />
      <Container54 />
    </div>
  );
}

function Container46() {
  return (
    <div className="flex flex-col gap-[48px] items-start relative shrink-0 w-full lg:w-[523.2px]" data-name="Container">
      <Form />
      <Container47 />
    </div>
  );
}

function Container58() {
  return <div className="hidden lg:block absolute border-[0.8px] border-[rgba(0,0,0,0.07)] border-solid h-[791px] left-[-16.2px] rounded-[10px] top-[-16px] w-[555px]" data-name="Container" />;
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3a0993c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1adb0100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic text-[18px] md:text-[20px] text-white tracking-[0.5px] uppercase">Гарантия</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[13px] md:text-[14px] text-[rgba(255,255,255,0.85)]">Результат через 2 недели или вернём деньги</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.45)] content-stretch flex gap-[16px] items-center left-0 right-0 p-[16px] bottom-0 w-full" data-name="Container" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
      <Icon11 />
      <Container61 />
    </div>
  );
}

function Image7() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-full" data-name="Image (Елена Озер)">
      <img alt="" className="absolute inset-0 max-w-none object-cover object-[center_20%] pointer-events-none size-full" src={imgImage1} />
      <Container60 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[10px]" data-name="Container">
      <Image7 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[400px] md:h-[560px] lg:h-[700px] relative shrink-0 w-full lg:w-[523.2px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container45() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-[48px] lg:gap-0 lg:justify-between relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container57 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] md:gap-[48px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Container45 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[22.75px] text-[14px] text-[rgba(0,0,0,0.4)]">Ваш путь к здоровому питанию</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Logo className="content-stretch flex flex-col items-start relative shrink-0" />
      <Paragraph12 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Manrope:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(0,0,0,0.55)] tracking-[0.6px] uppercase whitespace-pre-wrap">Услуги</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">Персональное меню</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">Программы питания</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">Консультации</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[123.988px] items-start left-[289.6px] top-0 w-[241.6px]" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[12px] text-[rgba(0,0,0,0.55)] tracking-[0.6px] uppercase whitespace-pre-wrap">О специалисте</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">Образование</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">Отзывы</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">Связаться</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[123.988px] items-start left-[579.2px] top-0 w-[241.6px]" data-name="Container">
      <Heading2 />
      <List1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Manrope:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(0,0,0,0.55)] tracking-[0.6px] uppercase whitespace-pre-wrap">Контакты</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">elena@ozer.ru</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">+7 (999) 123-45-67</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-[rgba(0,0,0,0.4)] top-[-0.2px]">Москва, Россия</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container67() {
  return (
    <div className="flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <List2 />
    </div>
  );
}

function Container63() {
  return (
    <div className="flex flex-col sm:flex-row gap-[32px] sm:justify-between items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      {/* <Container65 /> */}
      {/* <Container66 /> */}
      <Container67 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[121.412px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Manrope:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.35)] tracking-[0.6px] uppercase">© 2026 Елена Озер</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[69.45px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.35)] tracking-[0.6px] uppercase">Политика</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[48.188px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.35)] tracking-[0.6px] uppercase">Оферта</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[141.637px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[48.788px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.07)] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.8px] relative size-full">
          <Paragraph13 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col gap-[48px] items-start relative w-full">
        <Container63 />
        <Container68 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] md:pt-[64.8px] pb-[32px] relative shrink-0 w-full" data-name="Footer">
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-[#f0ece0]" />
      <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 w-screen border-[rgba(0,0,0,0.07)] border-solid border-t-[0.8px] inset-y-0 pointer-events-none" />
      <div className="relative z-[1] w-full">
        <Container62 />
      </div>
    </div>
  );
}

export default function Site() {
  return (
    <div className="bg-[#f7f4ed] content-stretch flex flex-col gap-[60px] md:gap-[100px] lg:gap-[140px] items-center relative w-full max-w-[1240px] mx-auto px-5" data-name="Site">
      <HeroBlock />
      <Frame7 />
      <Consultation />
      <Frame10 />
      <Frame12 />
      <Footer />
    </div>
  );
}