// "use client";

// import { useEffect, useRef } from "react";
// import WebGLFluid from "webgl-fluid";

// export default function FluidBackgroundMasked() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const wrapper = wrapperRef.current;
//     if (!canvas || !wrapper) return;

//     // راه‌اندازی افکت
//     const instance = WebGLFluid(canvas, {
//       TRIGGER: "pointermove",
//       IMMEDIATE: true,
//       AUTO: false,

//       SIM_RESOLUTION: 128,
//       DYE_RESOLUTION: 1024,

//       // دیرتر محو شدن
//       DENSITY_DISSIPATION: 1.0,
//       VELOCITY_DISSIPATION: 1.2,

//       // حس آب‌رنگی قوی‌تر
//       PRESSURE: 0.9,
//       CURL: 22,

//       // رد موس بزرگ‌تر + قوی‌تر
//       SPLAT_RADIUS: 0.45,
//       SPLAT_FORCE: 11000,

//       SHADING: true,
//       COLORFUL: true,
//       TRANSPARENT: true,
//     });

//     const onMove = (e: PointerEvent) => {
//       const rect = wrapper.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 100;
//       const y = ((e.clientY - rect.top) / rect.height) * 100;

//       wrapper.style.setProperty("--mx", `${x}%`);
//       wrapper.style.setProperty("--my", `${y}%`);
//     };

//     wrapper.addEventListener("pointermove", onMove, { passive: true });

//     return () => {
//       wrapper.removeEventListener("pointermove", onMove);
//       // بعضی ورژن‌ها destroy دارن، بعضی‌ها ندارن:
//       instance?.destroy?.();
//     };
//   }, []);

//   return (
//     <div
//       ref={wrapperRef}
//       className="fixed inset-0 -z-10 pointer-events-auto"
//       style={{
//         // دایره بزرگ‌تر = trail بیشتر دیده میشه
//         WebkitMaskImage:
//           "radial-gradient(circle 260px at var(--mx, 50%) var(--my, 50%), rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)",
//         maskImage:
//           "radial-gradient(circle 260px at var(--mx, 50%) var(--my, 50%), rgba(0,0,0,1) 0%, rgba(0,0,0,0) 72%)",
//       }}
//     >
//       <canvas ref={canvasRef} className="w-full h-full" />
//     </div>
//   );
// }