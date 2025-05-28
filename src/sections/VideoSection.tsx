import React from "react";

export default function VideoSection() {
  return (
    <section className="w-full bg-black">
      <video
        className="w-full h-[220px] md:h-[340px] lg:h-[400px] object-cover"
        src="https://www.tridenttrust.com/media/rbybzgq5/hero_banner_1920x600_web2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
} 