import { useEffect, useRef } from "react"

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
  const containerRef = useRef<HTMLDivElement>(null)

  // One subtle, single-play accent: the corner line draws in once on load.
  // (Excessive/looping motion was the single biggest issue with the previous
  // version — six infinite animations running at once. This keeps exactly
  // one continuous loop, the gradient sweep, as the sole ambient motion.)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const paths = containerRef.current?.querySelectorAll<SVGPathElement>(".animation-line")
    if (!paths) return

    const timers: number[] = []

    paths.forEach((path) => {
      const len = path.getTotalLength()
      path.style.strokeDasharray = `${len}px`
      path.style.strokeDashoffset = `${len}px`

      timers.push(
        window.setTimeout(() => {
          path.style.transition = "stroke-dashoffset 1.6s ease-in-out"
          path.style.strokeDashoffset = "0px"
        }, 400)
      )
    })

    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [])

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

          .dynamic-hero .animation-line {
            fill: none;
            stroke: color-mix(in srgb, white 55%, transparent);
            stroke-width: 1.5;
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
        ref={containerRef}
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

        <div className="line-group absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-60" aria-hidden="true">
          <svg className="line-wrapper absolute w-full h-full" viewBox="0 0 177 159" preserveAspectRatio="none">
            <path
              className="animation-line"
              d="M176 1L53.5359 1C52.4313 1 51.5359 1.89543 51.5359 3L51.5359 56C51.5359 57.1046 50.6405 58 49.5359 58L0 58"
            />
          </svg>
          <svg className="line-wrapper absolute w-full h-full" viewBox="0 0 176 59" preserveAspectRatio="none">
            <path
              className="animation-line"
              d="M0 1L122.464 1C123.569 1 124.464 1.89543 124.464 3L124.464 56C124.464 57.1046 125.36 58 126.464 58L176 58"
            />
          </svg>
        </div>

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
