"use client";

export function Hero() {
  return (
    <div className="absolute top-0 left-0 w-full max-h-dvh overflow-hidden">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/char.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
