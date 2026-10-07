import type { CSSProperties } from "react";

const flakes = [
  { left: "4%", size: "8px", duration: "38s", delay: "-24s", drift: "22px" },
  { left: "11%", size: "6px", duration: "31s", delay: "-12s", drift: "-18px" },
  { left: "19%", size: "9px", duration: "45s", delay: "-37s", drift: "28px" },
  { left: "27%", size: "5px", duration: "34s", delay: "-8s", drift: "-25px" },
  { left: "35%", size: "7px", duration: "42s", delay: "-30s", drift: "18px" },
  { left: "43%", size: "6px", duration: "36s", delay: "-17s", drift: "-32px" },
  { left: "51%", size: "10px", duration: "48s", delay: "-42s", drift: "20px" },
  { left: "59%", size: "5px", duration: "33s", delay: "-5s", drift: "-20px" },
  { left: "67%", size: "8px", duration: "39s", delay: "-28s", drift: "30px" },
  { left: "75%", size: "6px", duration: "35s", delay: "-15s", drift: "-16px" },
  { left: "83%", size: "9px", duration: "46s", delay: "-34s", drift: "24px" },
  { left: "91%", size: "6px", duration: "32s", delay: "-10s", drift: "-28px" },
  { left: "97%", size: "7px", duration: "43s", delay: "-20s", drift: "17px" },
];

export function Snowfall() {
  return (
    <div className="ambient-snow" aria-hidden="true">
      {flakes.map((flake, index) => (
        <span
          className="ambient-snow__flake"
          key={`${flake.left}-${index}`}
          style={{
            left: flake.left,
            fontSize: flake.size,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
            "--snow-drift": flake.drift,
          } as CSSProperties}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
