"use client";
import MyApps from "@/components/MyApps";
import MyButton from "@/components/MyButton";
import MyFooter from "@/components/MyFooter";
import MyLink from "@/components/MyLink";
import MyProjects from "@/components/MyProjects";
import TargetCursor from "@/components/TargetCursor";
import { WavyBackground } from "@/components/ui/wavy-background";
import { useState } from "react";

export default function Home() {
  const [showApps, setShowApps] = useState(false);
  return (
    <div className="min-h-screen font-jura flex flex-col items-center">
      <section className="sticky top-0">
        <header className="text-center my-10 relative inline-block px-4 py-2">
          {/* Top-left corner border */}
          <span className="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-foreground " />
          {/* Bottom-right corner border */}
          <span className="absolute right-0 bottom-0 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-foreground" />
          <h1 className="text-2xl sm:text-3xl md:text-7xl lg:text-9xl font-extrabold">
            ByGjermund
          </h1>
          <p className="text-start text-md sm:text-xl md:text-4xl lg:text-5xl font-thin tracking-wider mt-2">
            For fun and profit
          </p>
        </header>
      </section>
      <main className="w-full">
        <div className="h-[50vh] sticky top-0">
          <WavyBackground waveWidth={20} speed="slow">
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-[auto_1fr] gap-5 h-full">
              <div className="sm:col-span-2 w-full">
                <MyButton
                  props={{
                    label: showApps ? "Close" : "AppStore Apps",
                    cn: "w-full sm:text-3xl",
                    onClick: () => setShowApps(!showApps),
                  }}
                />
              </div>
              {showApps ? (
                <MyApps />
              ) : (
                <>
                  <MyLink
                    props={{
                      label: "Gallery",
                      cn: "w-full h-full sm:text-3xl transition-all duration-1000",
                      href: "#",
                    }}
                  />
                  <MyLink
                    props={{
                      label: "Portfolio Page",
                      cn: "w-full h-full sm:text-3xl transition-all duration-1000",
                      href: "https://www.gjermundmyrvang.com",
                    }}
                  />
                </>
              )}
            </div>
          </WavyBackground>
        </div>
        {/* Sticky Section 2 */}
        <section className="sticky top-0 min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-cyan-700">
          <div className="w-full flex flex-col min-h-screen items-center justify-center relative">
            <h1 className="text-2xl sm:text-3xl md:text-7xl lg:text-9xl my-8 text-white uppercase">
              Projects
            </h1>
            <MyProjects />
          </div>
        </section>
        <section className="sticky top-0 min-h-[50vh] flex items-center justify-center bg-white/10 backdrop-blur-md z-100">
          <div className="w-full flex flex-col h-full items-center justify-center relative">
            <MyFooter />
          </div>
        </section>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </main>
    </div>
  );
}
