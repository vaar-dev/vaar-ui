import "./loader-page.css";

export function PageLoader() {
  return (
    <div className="vaar-page-loader">
      <svg
        viewBox="0 0 100 90"
        className="vaar-coffee-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="vaar-cup-clip">
            <path d="M22 42 C22 42, 20 68, 32 74 C38 77, 56 77, 62 74 C74 68, 72 42, 72 42 Z" />
          </clipPath>
        </defs>

        {/* Steam wisps */}
        <path
          className="vaar-steam-1"
          d="M36 35 C34 30, 38 27, 36 22 C34 17, 37 14, 36 10"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          className="vaar-steam-2"
          d="M47 33 C49 28, 45 25, 47 20 C49 15, 46 12, 47 7"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          className="vaar-steam-3"
          d="M58 35 C56 30, 60 27, 58 22 C56 17, 59 13, 58 9"
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Saucer */}
        <path
          d="M10 76 C10 72, 28 68, 47 68 C66 68, 84 72, 84 76 C84 80, 66 84, 47 84 C28 84, 10 80, 10 76 Z"
          className="vaar-saucer-base"
        />
        <path
          d="M14 75 C14 72, 30 69, 47 69 C64 69, 80 72, 80 75 C80 78, 64 80, 47 80 C30 80, 14 78, 14 75 Z"
          className="vaar-saucer-top"
        />

        {/* Handle */}
        <path
          d="M72 48 C86 48, 88 64, 72 64"
          className="vaar-handle-back"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M72 48 C84 48, 86 64, 72 64"
          className="vaar-handle-front"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cup body */}
        <path
          d="M22 42 C22 42, 20 68, 32 74 C38 77, 56 77, 62 74 C74 68, 72 42, 72 42"
          className="vaar-cup-base"
        />
        {/* Cup shadow — soft left side */}
        <path
          d="M22 42 C22 42, 20 68, 32 74 C35 76, 40 76, 42 74 C42 68, 34 42, 34 42 Z"
          className="vaar-cup-shadow"
          clipPath="url(#vaar-cup-clip)"
        />
        {/* Cup highlight — soft right-center area */}
        <ellipse
          cx="56"
          cy="58"
          rx="10"
          ry="14"
          className="vaar-cup-highlight"
          clipPath="url(#vaar-cup-clip)"
        />

        {/* Coffee liquid — fills the rim opening */}
        <ellipse cx="47" cy="42" rx="23" ry="3.5" className="vaar-liquid" />
        <ellipse
          cx="52"
          cy="41.5"
          rx="8"
          ry="1.8"
          className="vaar-liquid-highlight"
        />

        {/* Rim — ring around the opening */}
        <ellipse cx="47" cy="42" rx="25" ry="5" className="vaar-rim-outer" />
        <ellipse cx="47" cy="42" rx="22" ry="3.5" className="vaar-rim-inner" />
      </svg>
    </div>
  );
}
