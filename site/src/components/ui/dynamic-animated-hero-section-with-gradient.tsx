import { Ambient3D } from "./ambient-3d"

export interface DynamicHeroCta {
  label: string
  href: string
  external?: boolean
}

export interface DynamicHeroStat {
  value: string
  label: string
}

export interface DynamicAnimatedHeroProps {
  eyebrow: string
  titleLine: string
  gradientLine: string
  subtitle: string
  primaryCta: DynamicHeroCta
  secondaryCta?: DynamicHeroCta
  stats?: DynamicHeroStat[]
  /** Background photo URL. Pass "" to disable and keep the flat black background. */
  backgroundImage?: string
}

const DEFAULT_BACKGROUND_IMAGE = `${import.meta.env.BASE_URL}assets/hero-bg.jpg`

export const DynamicAnimatedHeroSection = ({
  eyebrow,
  titleLine,
  gradientLine,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  backgroundImage = DEFAULT_BACKGROUND_IMAGE,
}: DynamicAnimatedHeroProps) => {
  return (
    <>
      <style>
        {`
          @keyframes dynamic-hero-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes dynamic-hero-fadeIn {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .dynamic-hero-fadeIn {
            animation: dynamic-hero-fadeIn 0.8s ease-out forwards;
          }
          .dynamic-hero-fadeIn.delay-1 { animation-delay: 0.08s; opacity: 0; }
          .dynamic-hero-fadeIn.delay-2 { animation-delay: 0.16s; opacity: 0; }
          .dynamic-hero-fadeIn.delay-3 { animation-delay: 0.24s; opacity: 0; }
          .dynamic-hero-fadeIn.delay-4 { animation-delay: 0.32s; opacity: 0; }

          /* Brand gradient (violet -> orange -> teal), matching --grad-brand
             used sitewide, not an arbitrary neon palette. */
          .dynamic-hero-gradient-text {
            background: linear-gradient(100deg, #a78bfa, #efa24e, #57bbae, #a78bfa);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: dynamic-hero-gradient 10s ease infinite;
          }

          .dynamic-hero a.dynamic-hero-cta-primary,
          .dynamic-hero a.dynamic-hero-cta-primary:hover {
            color: #0b0b0f;
            text-decoration: none;
          }
          .dynamic-hero a.dynamic-hero-cta-secondary,
          .dynamic-hero a.dynamic-hero-cta-secondary:hover {
            color: #fff;
            text-decoration: none;
          }

          @media (prefers-reduced-motion: reduce) {
            .dynamic-hero-fadeIn {
              animation: none;
              opacity: 1;
              transform: none;
            }
            .dynamic-hero-gradient-text {
              animation: none;
              background-position: 30% 50%;
            }
          }
        `}
      </style>

      <div
        className="dynamic-hero min-h-[92svh] flex items-center justify-center bg-[#0b0b0f] text-white font-sans overflow-hidden relative py-24"
      >
        {backgroundImage && (
          <>
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: `url(${backgroundImage})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(55% 50% at 50% 40%, rgba(11,11,15,0.15) 0%, rgba(11,11,15,0.72) 100%), linear-gradient(180deg, rgba(11,11,15,0.15) 0%, rgba(11,11,15,0.85) 100%)",
              }}
              aria-hidden="true"
            />
          </>
        )}

        <Ambient3D variant="hero" />

        <div className="container max-w-3xl text-center z-10 relative px-6">
          <div className="dynamic-hero-fadeIn font-mono text-xs tracking-[0.14em] uppercase text-[#efa24e] mb-5 flex items-center justify-center gap-2.5">
            <span className="w-[7px] h-[7px] rounded-full bg-[#efa24e] inline-block" aria-hidden="true" />
            {eyebrow}
          </div>

          <h1 className="dynamic-hero-fadeIn delay-1 font-serif font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight m-0">
            {titleLine}
            <br />
            <span className="dynamic-hero-gradient-text inline-block">{gradientLine}</span>
          </h1>

          <p className="dynamic-hero-fadeIn delay-2 mt-6 text-base sm:text-lg text-[rgba(232,237,241,0.78)] max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <div className="dynamic-hero-fadeIn delay-3 mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              rel={primaryCta.external ? "noopener noreferrer" : undefined}
              className="dynamic-hero-cta-primary inline-flex items-center gap-2 px-8 py-3.5 bg-white border-none rounded-full font-semibold text-base transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)]"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="dynamic-hero-cta-secondary inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-white/25 rounded-full font-semibold text-base transition-all duration-200 ease-out hover:border-white/60"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div className="dynamic-hero-fadeIn delay-4 mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-xs text-[rgba(232,237,241,0.6)]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <b className="block text-white font-serif text-xl font-semibold normal-case tracking-normal">
                    {stat.value}
                  </b>
                  {stat.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
