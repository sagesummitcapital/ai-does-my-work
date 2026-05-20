"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);

  // Mouse-driven 3D tilt on the dashboard
  useEffect(() => {
    const wrap = wrapRef.current;
    const dash = dashRef.current;
    if (!wrap || !dash) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let rect = wrap.getBoundingClientRect();
    const recalc = () => { rect = wrap.getBoundingClientRect(); };
    window.addEventListener("resize", recalc);

    const onMove = (e: MouseEvent) => {
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      const ry = -6 + cx * 8;
      const rx = 2 - cy * 6;
      dash.style.transform = `rotateY(${ry}deg) rotateX(${rx}deg)`;
    };
    const onLeave = () => { dash.style.transform = ""; };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("resize", recalc);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="container-x">
        <div className="hero__inner">
          {/* LEFT: copy */}
          <div className="hero__copy">
            <div className="eyebrow">
              <span className="eyebrow__dot" />
              <span>AI-native portfolio transformation</span>
            </div>

            <h1 className="hero__title">
              <span className="gradient-headline">Replace repetitive work with </span>
              <span className="gradient-accent gradient-accent--underline">intelligent systems.</span>
            </h1>

            <p className="hero__lede">
              We help private equity firms and middle-market businesses
              modernize operational infrastructure with AI-native workflows
              and intelligent operating systems.
            </p>

            <div className="hero__ctas">
              <Link href="#contact" className="btn btn-primary">
                Book an AI Audit
                <span className="btn-arrow">→</span>
              </Link>
              <Link href="#framework" className="btn btn-ghost">
                See the framework
              </Link>
            </div>

            <ul className="hero__proof">
              <li>
                <span className="hero__proof-k gradient-accent">$5M–$100M</span>
                <span className="hero__proof-v">Ideal revenue band</span>
              </li>
              <li>
                <span className="hero__proof-k gradient-accent">30–60%</span>
                <span className="hero__proof-v">Lower operational overhead</span>
              </li>
              <li>
                <span className="hero__proof-k gradient-accent">2–5×</span>
                <span className="hero__proof-v">Faster execution</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: animated operational dashboard */}
          <div className="dash-wrap" ref={wrapRef}>
            <div className="dash" ref={dashRef}>
              <div className="dash__chrome">
                <div className="dash__brand">
                  <Image src="/assets/aidmw-mark.png" alt="" width={22} height={22} />
                  <span>Operational Intelligence</span>
                </div>
                <div className="dash__live">
                  <span className="dash__live-dot" />
                  LIVE
                </div>
              </div>

              <div className="dash__kpis">
                <Kpi label="Hours saved / wk" value="412" delta="▲ 38%" />
                <Kpi label="Cost reduction" value="$1.8M" delta="▲ YTD" />
                <Kpi label="Workflows live" value="24" delta="▲ 6 new" />
                <Kpi label="Decision velocity" value="3.2×" delta="▲ vs Q1" />
              </div>

              <div className="dash__chart">
                <div className="dash__chart-head">
                  <span className="dash__chart-label">Workflow throughput</span>
                  <span className="dash__chart-legend">
                    <span className="dash__chart-dot" />Live ops
                  </span>
                </div>
                <svg className="dash__chart-svg" viewBox="0 0 320 80" preserveAspectRatio="none">
                  <g className="grid">
                    <line x1="0" y1="15" x2="320" y2="15" />
                    <line x1="0" y1="35" x2="320" y2="35" />
                    <line x1="0" y1="55" x2="320" y2="55" />
                    <line x1="0" y1="75" x2="320" y2="75" />
                  </g>
                  <path
                    className="line"
                    d="M0 68 L40 60 L80 54 L120 58 L160 42 L200 36 L240 28 L280 22 L320 10"
                  />
                  <g>
                    <circle className="pt" cx="80" cy="54" r="3" />
                    <circle className="pt" cx="160" cy="42" r="3" />
                    <circle className="pt" cx="240" cy="28" r="3" />
                    <circle className="pt" cx="320" cy="10" r="3" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Floating callouts */}
            <div className="dash__float dash__float--a">
              <div className="dash__float-k">AI agent</div>
              <div className="dash__float-v">14 invoices reconciled</div>
            </div>
            <div className="dash__float dash__float--b">
              <div className="dash__float-k">Throughput</div>
              <div className="dash__float-v">+38% vs. baseline</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="kpi">
      <div className="kpi__label">{label}</div>
      <div className="kpi__value">{value}</div>
      <div className="kpi__delta">{delta}</div>
    </div>
  );
}
