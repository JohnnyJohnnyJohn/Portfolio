import { ArrowDown, Plus } from "lucide-react";

import BorderGlow from "#/components/BorderGlow";
import { heroBorderGlow, profile } from "#/lib/portfolio-content";

const heroTextShadow =
  "0 5px 10px rgba(0,87,255,.15), 0 -5px 10px rgba(255,90,0,.1), 0 -5px 25px rgba(255,255,255,.3)";

const heroSerifShadow =
  "0 5px 15px rgba(0,87,255,.1), 0 -5px 15px rgba(255,90,0,.08), 0 0 30px rgba(255,255,255,.2)";

export function PortfolioHero() {
  return (
    <section className="relative z-10 w-screen overflow-hidden md:px-6 md:pt-40 md:pb-1 lg:px-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-130 bg-[radial-gradient(circle_closest-corner_at_50%_0,rgba(242,242,242,.15),transparent)] md:block" />
      <DesktopHero />
      <MobileHero />
    </section>
  );
}

function DesktopHero() {
  return (
    <div className="relative mx-auto hidden w-full max-w-220.5 md:block min-[1440px]:max-w-261 min-[1920px]:max-w-360">
      <BorderGlow
        className="overflow-hidden rounded-3xl border-white/15 p-2 outline-1 -outline-offset-1 outline-white/15 shadow-[inset_0_0_8px_rgba(0,0,0,.4),0_0_60px_rgba(0,0,0,.2),0_30px_120px_rgba(0,0,0,.8)] min-[1920px]:rounded-[36px] min-[1920px]:p-3 min-[1920px]:shadow-[inset_0_0_10px_rgba(0,0,0,.3),0_0_60px_rgba(0,0,0,.3),0_60px_180px_rgba(0,0,0,1)]"
        colors={heroBorderGlow.colors}
        glowColor={heroBorderGlow.glowColor}
      >
        <div className="overflow-hidden rounded-2xl border border-white/30 shadow-[inset_0_0_10px_rgba(0,0,0,.1),0_0_12px_rgba(0,0,0,.4)] backdrop-blur-[20px] min-[1920px]:rounded-3xl min-[1920px]:shadow-[inset_0_0_15px_rgba(0,0,0,.1),0_0_20px_rgba(0,0,0,.3)]">
          <div className="relative z-10 flex h-10 items-center justify-between rounded-t-2xl bg-linear-to-r from-white/10 via-white/50 to-white/10 pr-3 pl-5 shadow-[0_10px_20px_4px_rgba(0,0,0,.2)] backdrop-blur-2xl min-[1920px]:h-14 min-[1920px]:pr-4 min-[1920px]:pl-7">
            <div className="flex gap-2.5 min-[1920px]:gap-3.5">
              <span className="size-3 rounded-full bg-[#ff6058] shadow-[0_0_18px_rgba(255,96,88,.78)] min-[1920px]:size-4" />
              <span className="size-3 rounded-full bg-[#ffbd44] shadow-[0_0_18px_rgba(255,189,68,.7)] min-[1920px]:size-4" />
              <span className="size-3 rounded-full bg-[#34c84a] shadow-[0_0_18px_rgba(52,200,74,.68)] min-[1920px]:size-4" />
            </div>
            <Plus className="text-white/25" size={20} strokeWidth={1.3} />
          </div>

          <div className="relative flex flex-col bg-[#101010]/70 px-14 pt-20 pb-48 min-[1440px]:px-18 min-[1440px]:pt-24 min-[1440px]:pb-50 min-[1920px]:px-22 min-[1920px]:pt-30 min-[1920px]:pb-70">
            <div className="relative z-10 flex flex-col gap-16 min-[1440px]:gap-18 min-[1920px]:gap-24">
              <h1
                className="max-w-188 text-[4.875rem] font-medium leading-[.9] tracking-tight text-[#f2f2f2] min-[1440px]:max-w-225 min-[1440px]:text-8xl min-[1920px]:max-w-316 min-[1920px]:text-[132px]"
                style={{ textShadow: heroTextShadow }}
              >
                {profile.headlineLead}{" "}
                <span
                  className="inline-block bg-linear-to-b from-[#f2f2f2] from-50% to-[#f2f2f215] to-95% bg-clip-text pr-3 font-['Gloock',serif] font-normal text-transparent italic"
                  style={{ textShadow: heroSerifShadow }}
                >
                  {profile.headlineAccent}
                </span>
              </h1>

              <div className="grid grid-cols-2 gap-6 min-[1440px]:gap-12 min-[1920px]:gap-22">
                <div />
                <div className="flex flex-col text-xl font-medium leading-[1.4] text-[#f2f2f2] min-[1440px]:text-2xl min-[1920px]:text-[2rem]">
                  <span>{profile.intro}</span>
                  <span className="font-normal text-[#f2f2f2]/50">
                    {profile.introMuted}
                  </span>
                </div>
              </div>
            </div>

            <ArrowDown
              className="absolute scroll-anim bottom-19.5 left-1/2 -translate-x-1/2 text-[#f2f2f2]/80 min-[1920px]:bottom-28"
              size={44}
              strokeWidth={2}
            />
          </div>
        </div>
      </BorderGlow>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="relative flex min-h-[75vh] flex-col gap-[10vh] bg-[radial-gradient(circle_farthest-side_at_50%_0,rgba(242,242,242,.25),transparent_80%)] px-4 pt-[20vh] pb-[6vh] md:hidden">
      <div className="relative z-10 flex flex-col gap-[6vh] px-2">
        <div className="flex flex-col gap-[3vh]">
          <p className="flex items-center gap-2 font-['Neue_Montreal',ui-sans-serif,sans-serif] text-base font-normal text-[#f2f2f2]/50">
            <span className="size-2.5 rounded-full bg-[#f2f2f2]" />
            {profile.heroEyebrow}
          </p>

          <h1
            className="font-['Neue_Montreal',ui-sans-serif,sans-serif] text-[2.75rem] font-medium leading-[1.05] tracking-normal text-[#f2f2f2] max-[370px]:text-[2.55rem]"
            style={{ textShadow: heroTextShadow }}
          >
            {profile.headlineLead}{" "}
            <span
              className="block bg-linear-to-b from-[#f2f2f2] from-50% to-transparent to-90% bg-clip-text pr-3 font-['Gloock',serif] font-normal text-transparent italic"
              style={{ textShadow: heroSerifShadow }}
            >
              {profile.headlineAccent}
            </span>
          </h1>
        </div>

        <div className="flex flex-col font-['Neue_Montreal',ui-sans-serif,sans-serif] text-[1.1875rem] font-medium leading-[1.4] text-[#f2f2f2]">
          <span>{profile.intro}</span>
          <span className="text-[#f2f2f2]/50">{profile.introMuted}</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 border-white/10 border-t pt-4">
        <p className="flex items-center gap-1.5 px-0 font-['Neue_Montreal',ui-sans-serif,sans-serif] text-base font-normal text-[#f2f2f2]/50">
          <ArrowDown size={22} strokeWidth={1.4} />
          Selected Work '23
        </p>
      </div>
    </div>
  );
}
