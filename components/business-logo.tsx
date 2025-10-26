"use client";

import Image from "next/image";
import { useState } from "react";

const WORD_SPLIT_RE = /\s+/;

export default function BusinessLogo({
  src,
  name,
  width = 120,
  height = 64,
}: {
  src?: string;
  name: string;
  width?: number;
  height?: number;
}) {
  const [errored, setErrored] = useState(false);

  const initials = name
    .split(WORD_SPLIT_RE)
    .map((part) => part[0] ?? "")
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (errored || !src) {
    return (
      <div
        aria-hidden={false}
        role="img"
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
          color: "#ffffff",
          padding: 8,
          borderRadius: 6,
          fontWeight: 700,
          fontSize: Math.floor(Math.min(width, height) / 2.6),
        }}
        title={name}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      alt={`${name} logo`}
      height={height}
      onError={() => setErrored(true)}
      src={src}
      style={{ objectFit: "contain", borderRadius: 4 }}
      unoptimized
      width={width}
    />
  );
}
