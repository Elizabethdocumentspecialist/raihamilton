import { motion } from "framer-motion";

// Simplified SVG world map path data — major continental outlines
const WORLD_PATHS = [
  // North America
  "M 120 80 L 140 70 L 200 75 L 220 100 L 200 130 L 170 150 L 140 140 L 120 120 Z",
  // South America
  "M 160 160 L 185 155 L 200 175 L 195 220 L 175 240 L 155 225 L 150 195 Z",
  // Europe
  "M 340 70 L 380 65 L 400 75 L 395 95 L 370 100 L 345 90 Z",
  // Africa
  "M 350 110 L 390 105 L 415 125 L 415 180 L 395 210 L 365 215 L 340 195 L 335 160 L 345 130 Z",
  // Asia
  "M 410 55 L 500 50 L 560 65 L 580 90 L 540 110 L 480 115 L 430 105 L 405 85 Z",
  // Australia
  "M 500 180 L 540 175 L 560 190 L 555 215 L 525 220 L 495 205 Z",
];

// Global nodes: [x%, y%] as percentage of viewBox
const NODES = [
  { x: 350, y: 70, label: "London", delay: 0 },
  { x: 430, y: 90, label: "Riyadh", delay: 0.5 },
  { x: 185, y: 90, label: "New York", delay: 1.0 },
  { x: 500, y: 90, label: "Dhaka", delay: 1.5 },
];

// Connection lines between nodes
const CONNECTIONS = [
  { x1: 350, y1: 70, x2: 430, y2: 90 },
  { x1: 350, y1: 70, x2: 185, y2: 90 },
  { x1: 430, y1: 90, x2: 500, y2: 90 },
  { x1: 185, y1: 90, x2: 350, y2: 70 },
];

export default function WorldGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 700 280"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="hsl(38 45% 56%)" strokeWidth="0.3" opacity="0.3" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="fade-mask">
            <rect width="700" height="280" fill="url(#fade)" />
          </mask>
        </defs>

        <rect width="700" height="280" fill="url(#grid)" mask="url(#fade-mask)" />

        {/* Continental outlines */}
        {WORLD_PATHS.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="hsl(38 45% 56%)"
            strokeWidth="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5 + i * 0.3, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {/* Connection lines */}
        {CONNECTIONS.map((conn, i) => (
          <motion.line
            key={i}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="hsl(38 45% 56%)"
            strokeWidth="0.4"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 3, delay: 1.5 + i * 0.5, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}

        {/* Node pulses */}
        {NODES.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={8}
              fill="none"
              stroke="hsl(38 45% 56%)"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.5, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, delay: node.delay, repeat: Infinity, repeatDelay: 1.5 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={2.5}
              fill="hsl(38 45% 56%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 2.5, delay: node.delay, repeat: Infinity }}
            />
            <motion.text
              x={node.x + 6}
              y={node.y - 4}
              fill="hsl(38 45% 56%)"
              fontSize="5"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="0.05em"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5 + i * 0.3 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
