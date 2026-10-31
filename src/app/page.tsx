import Link from "next/link";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function LogoMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4.5 16.5 9.5 11l3.5 3.5L19.5 8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8h4.5v4.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 10.5 12 4l8 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9.5V20h12V9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 20v-5h4v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="m4 17 5-5 3.5 3.5L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 7h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="m5 12.5 4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.5c.7 5.4 4.6 9.3 10 10-5.4.7-9.3 4.6-10 10-.7-5.4-4.6-9.3-10-10 5.4-.7 9.3-4.6 10-10Z" />
    </svg>
  );
}

function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M13 3 5 14h5l-1 7 8-11h-5l1-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 3 5 6v5c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 11.5 1.8 1.8 3.4-3.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HashIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeviceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect
        x="7"
        y="3"
        width="10"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const growthBars = [22, 30, 26, 38, 42, 52, 55, 66, 74, 88];

const mortgageFeatures = [
  "Monthly principal and interest repayments",
  "Total interest and total cost over the term",
  "Year-by-year amortisation breakdown",
  "Compare rates, terms, and deposit sizes",
];

const compoundFeatures = [
  "Future value of your savings",
  "Regular weekly, fortnightly, or monthly contributions",
  "Monthly, quarterly, or annual compounding",
  "Clear split between contributions and interest",
];

const steps = [
  {
    number: "01",
    title: "Pick a calculator",
    description:
      "Choose mortgage repayments or compound growth — whichever question you’re trying to answer.",
  },
  {
    number: "02",
    title: "Add your numbers",
    description:
      "Enter your loan details, interest rate, term, or savings plan in seconds.",
  },
  {
    number: "03",
    title: "Read the breakdown",
    description:
      "Get a clear result, plus the detail behind it, so you can plan with confidence.",
  },
];

const reasons = [
  {
    title: "Instant results",
    description: "Change any input and see the outcome straight away — no submit button, no waiting.",
    Icon: BoltIcon,
  },
  {
    title: "No sign-up",
    description: "Open a calculator and start. No accounts, emails, or personal details required.",
    Icon: ShieldIcon,
  },
  {
    title: "Transparent math",
    description: "Every result comes with the formula and a breakdown you can follow.",
    Icon: HashIcon,
  },
  {
    title: "Any screen",
    description: "A clean, responsive layout that works as well on your phone as on your desktop.",
    Icon: DeviceIcon,
  },
];

const footerLinks = [
  { label: "Calculators", href: "#calculators" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why FinCalc", href: "#why" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
            aria-label="FinCalc home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm shadow-emerald-600/30">
              <LogoMark className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">FinCalc</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-400">
            <a
              href="#calculators"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              Calculators
            </a>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              How it works
            </a>
            <a
              href="#why"
              className="transition-colors hover:text-zinc-950 dark:hover:text-white"
            >
              Why FinCalc
            </a>
          </nav>

          <a
            href="#calculators"
            className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-950"
          >
            Try a calculator
          </a>
        </div>
      </header>

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />
            <div className="absolute bottom-[-20%] left-[-8%] h-[24rem] w-[24rem] rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-500/10" />
          </div>

          <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                <SparkIcon className="h-3.5 w-3.5" />
                Two calculators. One clearer picture.
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
                See where your money goes
                <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-300">
                  — and where it could grow.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
                FinCalc answers the two biggest money questions — what your mortgage really
                costs, and what your savings could become — with clear, instant estimates.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#calculators"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500 hover:shadow-emerald-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
                >
                  Explore the calculators
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-6 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-white/25 dark:hover:bg-white/10 dark:focus-visible:ring-offset-zinc-950"
                >
                  How it works
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  Free to use
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  No sign-up
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  Clear breakdowns
                </span>
              </div>
            </div>

            {/* Illustrative preview */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-300/40 via-teal-200/30 to-cyan-200/40 blur-2xl dark:from-emerald-500/15 dark:via-teal-500/10 dark:to-cyan-500/10"
              />

              <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-2xl shadow-emerald-950/10 backdrop-blur-xl sm:p-7 dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-black/40">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                      <TrendIcon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-semibold">Your numbers at a glance</p>
                  </div>
                  <span className="hidden shrink-0 rounded-full border border-zinc-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:inline-flex dark:border-white/10 dark:text-zinc-400">
                    Preview
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-white/5 dark:bg-white/[0.03]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      <HomeIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      Mortgage repayment
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      30-year term
                    </span>
                  </div>

                  <p className="mt-3 text-3xl font-semibold tracking-tight tabular-nums">
                    $2,518
                    <span className="text-lg text-zinc-400 dark:text-zinc-500">/mo</span>
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    $420,000 loan at 6.0% interest
                  </p>

                  <div className="mt-4">
                    <div className="flex h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/10">
                      <div className="h-full w-[46%] bg-emerald-500" />
                      <div className="h-full w-[54%] bg-emerald-500/35 dark:bg-emerald-400/30" />
                    </div>
                    <div className="mt-2 flex justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
                      <span>
                        <span className="font-semibold text-zinc-700 dark:text-zinc-200">46%</span>{" "}
                        principal
                      </span>
                      <span>
                        <span className="font-semibold text-zinc-700 dark:text-zinc-200">54%</span>{" "}
                        interest
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-5 dark:border-white/5 dark:bg-white/[0.03]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      <TrendIcon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      Compound growth
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      20 years
                    </span>
                  </div>

                  <div className="mt-3 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
                        $112,402
                      </p>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        Interest earned on $400/mo
                      </p>
                    </div>
                    <div
                      className="flex h-11 w-20 shrink-0 items-end gap-1 sm:h-12 sm:w-32"
                      aria-hidden="true"
                    >
                      {growthBars.map((height, index) => (
                        <div
                          key={index}
                          style={{ height: `${height}%` }}
                          className={`flex-1 rounded-sm ${
                            index >= growthBars.length - 3
                              ? "bg-indigo-500"
                              : "bg-indigo-500/30 dark:bg-indigo-400/25"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-center text-[11px] text-zinc-400 dark:text-zinc-500">
                  Illustrative estimates. Your results will differ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculators */}
        <section
          id="calculators"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20 sm:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
              The calculators
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Two tools for the decisions that matter most.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              Whether you’re buying a home or building a nest egg, start with the numbers. Both
              calculators are built to be fast, transparent, and easy to understand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Mortgage card */}
            <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-9 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:shadow-black/40">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition duration-300 group-hover:bg-emerald-500/20 dark:bg-emerald-500/10"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/25">
                  <HomeIcon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-zinc-200 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                  Home loans
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-semibold tracking-tight">
                Mortgage Repayment Calculator
              </h3>
              <p className="relative mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Understand what home ownership really costs before you commit. See every
                repayment, the interest you’ll pay, and how the numbers change over the life of
                the loan.
              </p>

              <ul className="relative mt-6 space-y-3 text-sm">
                {mortgageFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-zinc-600 dark:text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-8">
                <Link
                  href="/mortgage-repayment-calculator"
                  className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:text-emerald-300 dark:hover:text-emerald-200 dark:focus-visible:ring-offset-zinc-900"
                >
                  Open mortgage calculator
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                </Link>
              </div>
            </article>

            {/* Compound interest card */}
            <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-9 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-indigo-500/40 dark:hover:shadow-black/40">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition duration-300 group-hover:bg-indigo-500/20 dark:bg-indigo-500/10"
              />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/25">
                  <TrendIcon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-zinc-200 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                  Investing
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-semibold tracking-tight">
                Compound Interest Calculator
              </h3>
              <p className="relative mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Turn a savings habit into a long-term projection. See how regular contributions
                and compounding work together to grow your balance over months, years, and
                decades.
              </p>

              <ul className="relative mt-6 space-y-3 text-sm">
                {compoundFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-zinc-600 dark:text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-8">
                <Link
                  href="/compound-interest-calculator"
                  className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-indigo-700 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:text-indigo-300 dark:hover:text-indigo-200 dark:focus-visible:ring-offset-zinc-900"
                >
                  Open compound interest calculator
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-20 border-y border-zinc-200/80 bg-zinc-50/70 dark:border-white/5 dark:bg-white/[0.02]"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                From question to clear answer in three steps.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="border-t border-zinc-200 pt-6 dark:border-white/10"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                    STEP {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why FinCalc */}
        <section
          id="why"
          className="mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-20 sm:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                Why FinCalc
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Clarity over complexity.
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Financial tools shouldn’t feel like a spreadsheet exam. FinCalc keeps the inputs
                simple and the results honest, so you can make a decision and move on.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map(({ title, description, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold tracking-tight">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 px-6 py-14 text-center shadow-2xl shadow-emerald-900/20 sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"
            />

            <h2 className="relative text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Ready to run the numbers?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-emerald-50">
              Start with your mortgage, your savings, or both. Clear estimates are only a few
              inputs away.
            </p>

            <a
              href="#calculators"
              className="relative mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-emerald-700 shadow-lg shadow-emerald-950/10 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-600"
            >
              Explore the calculators
              <ArrowRightIcon className="h-4 w-4" />
            </a>

            <p className="relative mt-4 text-xs font-medium text-emerald-100/80">
              Free to use · No sign-up · Estimates in seconds
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50/50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
                aria-label="FinCalc home"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <LogoMark className="h-4 w-4" />
                </span>
                <span className="text-base font-semibold tracking-tight">FinCalc</span>
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                Clear answers for the money decisions that matter.
              </p>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-zinc-400">
            <p>© 2026 FinCalc. All rights reserved.</p>
            <p>Estimates for informational purposes only — not financial advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
