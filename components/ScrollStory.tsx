"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  FileStack,
  MousePointer2,
  Network,
  Radar,
  Workflow,
} from "lucide-react";
import { useRef, useState } from "react";

const story = [
  {
    eyebrow: "Diagnose",
    title: "We identify growth bottlenecks",
    body: "MMe-AI maps the friction hiding between your teams, tools, and customer journey.",
    icon: Radar,
    x: "12%",
    y: "72%",
    color: "#315C72",
  },
  {
    eyebrow: "Design",
    title: "We turn ideas into automated workflows",
    body: "Manual steps become thoughtful systems that keep moving—even when your team is offline.",
    icon: Workflow,
    x: "31%",
    y: "28%",
    color: "#4FA3A5",
  },
  {
    eyebrow: "Connect",
    title: "We connect content, leads, and reporting",
    body: "Every customer signal flows into one connected operating rhythm instead of another silo.",
    icon: Network,
    x: "52%",
    y: "61%",
    color: "#6D5BD0",
  },
  {
    eyebrow: "Operate",
    title: "We help teams operate smarter",
    body: "Clear prompts, timely follow-ups, and useful context reach the right person at the right time.",
    icon: FileStack,
    x: "73%",
    y: "25%",
    color: "#7BAE7F",
  },
  {
    eyebrow: "Scale",
    title: "We scale automation across the business",
    body: "What works becomes a repeatable growth system with visibility built in from day one.",
    icon: ChartNoAxesCombined,
    x: "89%",
    y: "65%",
    color: "#315C72",
  },
];

function MapNode({
  item,
  index,
  active,
}: {
  item: (typeof story)[number];
  index: number;
  active: boolean;
}) {
  const Icon = item.icon;
  return (
    <div
      className="building absolute z-10"
      style={{ left: item.x, top: item.y }}
    >
      <motion.div
        className="building-core relative"
        animate={{ y: active ? -10 : 0, scale: active ? 1.07 : 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <div
          className="absolute left-1/2 top-full h-6 w-16 -translate-x-1/2 rounded-full blur-md"
          style={{ backgroundColor: `${item.color}24` }}
        />
        <div
          className="relative flex h-[68px] w-[68px] items-center justify-center rounded-[20px] border-2 border-white/90 text-white shadow-[0_20px_35px_rgba(24,32,47,.14)] sm:h-[82px] sm:w-[82px] sm:rounded-[24px]"
          style={{ backgroundColor: item.color }}
        >
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.55} />
          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#F7F3EA] text-[9px] font-bold text-[#18202F]">
            0{index + 1}
          </span>
        </div>
        <motion.div
          className="mx-auto mt-2 h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: item.color }}
          animate={{ opacity: active ? [0.4, 1, 0.4] : 0.35 }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.001,
  });
  const movementProgress = reduceMotion ? scrollYProgress : smoothProgress;
  const steps = [0, 0.25, 0.5, 0.75, 1];
  const entityX = useTransform(
    movementProgress,
    steps,
    story.map((item) => item.x),
  );
  const entityY = useTransform(
    movementProgress,
    steps,
    story.map((item) => item.y),
  );
  const pathProgress = useTransform(movementProgress, [0, 1], [0.04, 1]);
  const entityRotate = useTransform(
    movementProgress,
    steps,
    ["-18deg", "20deg", "-10deg", "18deg", "-14deg"],
  );
  const entityScale = useTransform(movementProgress, [0, 0.5, 1], [1, 1.07, 1]);
  const activeStory = story[active];

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActive(Math.min(story.length - 1, Math.round(latest * 4)));
  });

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      aria-labelledby="story-title"
      className="relative h-[380svh] bg-[#EEF4F2] lg:h-[430vh]"
    >
      <div className="sticky top-0 flex h-[100svh] min-h-0 items-center overflow-hidden lg:h-screen lg:min-h-[700px]">
        <div className="soft-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#F3F0FF] blur-3xl" />
        <div className="absolute -right-36 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#F7F3EA] blur-3xl" />

        <div className="relative mx-auto grid h-full w-full max-w-[1500px] grid-cols-1 items-center gap-4 px-5 py-16 sm:gap-8 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr] lg:px-12 xl:px-16">
          <div className="relative z-20 self-end pb-2 lg:self-center lg:pb-0">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#4FA3A5]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315C72]">
                The MMe journey
              </span>
            </div>
            <div
              className="relative min-h-[215px] sm:min-h-[205px] lg:min-h-[310px]"
              aria-live="polite"
              aria-atomic="true"
            >
              <motion.div
                key={activeStory.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.28 }}
              >
                <span className="mb-3 block text-sm font-semibold text-[#4FA3A5]">
                  0{active + 1} / {activeStory.eyebrow}
                </span>
                <h2
                  id="story-title"
                  className="max-w-xl text-[clamp(2rem,4vw,4.3rem)] font-semibold leading-[1.03] text-[#18202F]"
                >
                  {activeStory.title}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-[#667085] sm:text-lg">
                  {activeStory.body}
                </p>
              </motion.div>
            </div>

            <div className="mt-4 flex items-center gap-2 lg:mt-8">
              {story.map((item, index) => (
                <div
                  key={item.eyebrow}
                  className="h-1 overflow-hidden rounded-full bg-[#D9E2E1]"
                  style={{ width: index === active ? 48 : 18 }}
                >
                  <motion.div
                    className="h-full rounded-full bg-[#315C72]"
                    animate={{ x: index <= active ? "0%" : "-100%" }}
                  />
                </div>
              ))}
              <span className="ml-3 hidden items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#667085] sm:flex">
                Keep scrolling <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>

          <div className="map-perspective relative h-[35svh] min-h-[250px] w-full self-start sm:h-[42vh] sm:min-h-[330px] lg:h-[72vh] lg:min-h-[580px] lg:self-center">
            <div className="map-plane absolute inset-[5%] rounded-[36px] border border-white/90 bg-white/46 shadow-[0_45px_100px_rgba(49,92,114,.12)] sm:inset-[6%] lg:inset-[4%]">
              <div className="soft-grid absolute inset-0 rounded-[36px] opacity-60" />
              <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(135deg,rgba(255,255,255,.48),transparent_55%)]" />
              <div className="absolute left-5 top-5 z-20 rounded-2xl border border-white/80 bg-white/72 px-4 py-3 shadow-[0_16px_40px_rgba(49,92,114,.1)] backdrop-blur-sm">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#4FA3A5]">
                  Live cursor route
                </span>
                <span className="mt-1 block text-sm font-bold text-[#18202F]">
                  {activeStory.eyebrow} / stop 0{active + 1}
                </span>
              </div>

              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M120 432 C190 430 230 205 310 168 C390 132 435 345 520 366 C615 388 640 160 730 150 C820 140 825 350 890 390"
                  fill="none"
                  stroke="rgba(49,92,114,.12)"
                  strokeWidth="16"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M120 432 C190 430 230 205 310 168 C390 132 435 345 520 366 C615 388 640 160 730 150 C820 140 825 350 890 390"
                  fill="none"
                  stroke="#4FA3A5"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray="10 16"
                  style={{ pathLength: pathProgress }}
                />
              </svg>

              {story.map((item, index) => (
                <MapNode
                  key={item.title}
                  item={item}
                  index={index}
                  active={active === index}
                />
              ))}

              <motion.div
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: entityX,
                  top: entityY,
                  rotate: entityRotate,
                  scale: entityScale,
                }}
                aria-hidden="true"
              >
                <div className="entity-messenger relative flex h-12 w-12 items-center justify-center rounded-[18px] bg-white text-[#18202F]">
                  <MousePointer2
                    className="h-7 w-7 -translate-x-0.5 -translate-y-0.5 fill-[#18202F]"
                    strokeWidth={1.8}
                  />
                  <span className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#7BAE7F]" />
                  <motion.span
                    className="absolute -bottom-4 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-[#315C72]/25 blur-sm"
                    animate={reduceMotion ? undefined : { opacity: [0.25, 0.7, 0.25], scaleX: [0.7, 1.2, 0.7] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
