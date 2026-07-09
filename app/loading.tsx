import { houseConfig } from "@/config/houseConfig";

export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <div className="loading-content">
        <div className="loading-crest" aria-hidden="true">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            className="loading-crest-svg"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle
              cx="40" cy="40" r="34"
              stroke="rgba(171,133,60,0.45)"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
            <circle
              cx="40" cy="40" r="26"
              stroke="rgba(171,133,60,0.25)"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
            <line x1="16" y1="60" x2="64" y2="60" stroke="#ab853c" strokeWidth="1.6" />
            <path d="M 20 60 L 20 38 L 40 20 L 60 38 L 60 60 Z" stroke="#ab853c" strokeWidth="1.6" fill="rgba(171,133,60,0.08)" />
            <path d="M 14 40 L 40 16 L 66 40" stroke="#ab853c" strokeWidth="1.6" />
            <path d="M 35 60 L 35 47 L 45 47 L 45 60" stroke="#ab853c" strokeWidth="1.4" />
            <rect x="22" y="42" width="8" height="7" rx="1" stroke="#ab853c" strokeWidth="1.3" fill="rgba(171,133,60,0.12)" />
            <rect x="50" y="42" width="8" height="7" rx="1" stroke="#ab853c" strokeWidth="1.3" fill="rgba(171,133,60,0.12)" />
          </svg>
        </div>
        <p className="loading-text">{houseConfig.messages.loading}</p>
        <span className="loading-line" aria-hidden="true" />
      </div>
    </div>
  );
}
