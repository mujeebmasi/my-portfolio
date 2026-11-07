"use client";

// The package's React component uses hooks but has no "use client" marker,
// so the server-rendered layout can only use it through this wrapper.
import { FallingLeaves } from "falling-leaves/react";

export default function FallingLeavesBackground() {
  return <FallingLeaves fullScreen shapes={["maple"]} />;
}
