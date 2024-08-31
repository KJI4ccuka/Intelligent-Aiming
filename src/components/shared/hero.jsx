"use client";

export function Hero() {
  return (
    <>
      {/* <HeroHighlight>
        <Navbar />
        <PageHeading title="Intelligent Aiming" subtitle="Top-tier cheats, unmatched privacy and security." />
      </HeroHighlight> */}
      <video
        className="h-screen  absolute -z-[144] min-w-min"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/char.mp4" type="video/mp4" />
      </video>
      <div>
        {/* <img src="https://i.imgur.com/nL1MW0M.jpeg" className="absolute top-0 -z-[51] object-contain"/> */}
      </div>
    </>
  );
}
