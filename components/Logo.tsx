export default function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "small" | "large";
}) {
  const dimensions = {
    small: { w: 140, h: 140 },
    default: { w: 220, h: 220 },
    large: { w: 300, h: 300 },
  };
  const { w, h } = dimensions[size];

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="wingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF2D9B" />
          <stop offset="50%" stopColor="#E91E8C" />
          <stop offset="100%" stopColor="#D63384" />
        </linearGradient>
        <linearGradient id="wingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6BC2" />
          <stop offset="100%" stopColor="#F0389E" />
        </linearGradient>
        <linearGradient id="wingGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E91E8C" />
          <stop offset="60%" stopColor="#B8256E" />
          <stop offset="100%" stopColor="#8B1A5A" />
        </linearGradient>
        <linearGradient id="wingInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD1EC" />
          <stop offset="100%" stopColor="#FF6BC2" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===== UPPER WING (large, sweeping to upper-right) ===== */}
      <path
        d="M108 108C115 80 130 45 158 22C172 11 190 10 200 20C210 32 205 55 190 72C170 94 140 108 108 108Z"
        fill="url(#wingGrad1)"
      />
      {/* Upper wing scalloped edge layer */}
      <path
        d="M115 100C120 78 134 50 156 32C168 22 182 20 188 28C195 38 188 56 178 68C162 88 140 100 115 100Z"
        fill="url(#wingGrad2)"
        opacity="0.7"
      />
      {/* Upper wing inner highlight */}
      <path
        d="M122 94C126 76 138 55 155 42C164 35 174 34 178 40C182 48 176 60 168 68C156 82 140 92 122 94Z"
        fill="url(#wingInner)"
        opacity="0.6"
      />
      {/* Upper wing feather/petal shapes along edge */}
      <path
        d="M160 20C168 14 178 12 184 16C190 22 186 34 178 38C170 42 162 36 160 28Z"
        fill="#F9A8D4"
        opacity="0.5"
      />
      <path
        d="M190 40C198 36 206 38 208 46C210 54 202 60 194 58C186 56 184 46 190 40Z"
        fill="#F9A8D4"
        opacity="0.4"
      />
      {/* Upper wing dots/circles */}
      <circle cx="158" cy="42" r="7.5" fill="white" opacity="0.5" />
      <circle cx="172" cy="34" r="5.5" fill="white" opacity="0.45" />
      <circle cx="148" cy="58" r="6.5" fill="white" opacity="0.45" />
      <circle cx="165" cy="52" r="4.5" fill="white" opacity="0.4" />
      <circle cx="180" cy="48" r="4" fill="white" opacity="0.35" />
      <circle cx="140" cy="72" r="5" fill="white" opacity="0.4" />
      <circle cx="155" cy="68" r="4" fill="white" opacity="0.35" />
      <circle cx="188" cy="30" r="4.5" fill="white" opacity="0.4" />
      <circle cx="195" cy="42" r="3.5" fill="white" opacity="0.3" />

      {/* ===== LOWER WING (rounder, sweeping down-right) ===== */}
      <path
        d="M108 118C125 125 155 145 170 172C178 188 172 205 158 210C142 214 125 200 118 182C110 160 108 138 108 118Z"
        fill="url(#wingGrad3)"
      />
      {/* Lower wing inner layer */}
      <path
        d="M112 125C126 132 148 148 160 170C166 182 162 196 152 198C140 200 128 190 122 175C116 158 112 140 112 125Z"
        fill="url(#wingGrad1)"
        opacity="0.65"
      />
      {/* Lower wing highlight */}
      <path
        d="M116 132C128 138 144 152 152 168C156 178 152 188 145 188C136 188 128 180 124 168C118 154 116 142 116 132Z"
        fill="url(#wingInner)"
        opacity="0.55"
      />
      {/* Lower wing petal edge */}
      <path
        d="M168 180C174 190 172 202 164 206C156 210 148 202 150 192C152 184 160 178 168 180Z"
        fill="#F9A8D4"
        opacity="0.45"
      />
      {/* Lower wing dots */}
      <circle cx="142" cy="158" r="6" fill="white" opacity="0.45" />
      <circle cx="152" cy="172" r="5" fill="white" opacity="0.4" />
      <circle cx="134" cy="145" r="5" fill="white" opacity="0.4" />
      <circle cx="148" cy="148" r="4" fill="white" opacity="0.35" />
      <circle cx="158" cy="186" r="4.5" fill="white" opacity="0.35" />
      <circle cx="128" cy="160" r="3.5" fill="white" opacity="0.3" />

      {/* ===== BODY ===== */}
      <ellipse cx="106" cy="118" rx="5" ry="18" fill="#D63384" transform="rotate(-5 106 118)" filter="url(#glow)" />
      {/* Body shimmer */}
      <ellipse cx="105" cy="114" rx="2" ry="10" fill="#FF6BC2" opacity="0.4" transform="rotate(-5 105 114)" />

      {/* ===== HEAD ===== */}
      <circle cx="108" cy="98" r="6.5" fill="#D63384" filter="url(#glow)" />
      <circle cx="107" cy="96" r="2.5" fill="#FF6BC2" opacity="0.4" />

      {/* ===== CURLY ANTENNA (left - swirling down-left like reference) ===== */}
      <path
        d="M103 94C90 78 68 62 50 58C38 55 28 60 26 68C24 78 32 85 40 82C48 79 44 70 38 66"
        stroke="#E91E8C"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />
      {/* Antenna spiral end */}
      <path
        d="M38 66C34 62 26 60 24 64C22 70 28 74 32 72"
        stroke="#E91E8C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* ===== CURLY ANTENNA (right) ===== */}
      <path
        d="M114 94C120 80 132 68 146 60C154 56 164 58 166 66C168 74 160 78 154 76C148 74 150 64 156 60"
        stroke="#E91E8C"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />
      {/* Right antenna spiral end */}
      <path
        d="M156 60C160 56 168 54 170 58C172 64 166 68 162 66"
        stroke="#E91E8C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* ===== TAIL CURL (bottom, like reference) ===== */}
      <path
        d="M102 136C98 150 90 162 78 172C68 180 54 182 48 176C42 168 48 158 56 156C64 154 68 162 64 168"
        stroke="#E91E8C"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
      />
    </svg>
  );
}
