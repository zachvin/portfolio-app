import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <svg className="header-art" viewBox="0 0 1200 512" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <circle cx="180" cy="210" r="190" fill="#60935d" fillOpacity="0.06" />
        <circle cx="1020" cy="90" r="230" fill="#60935d" fillOpacity="0.05" />

        <line x1="95" y1="58" x2="255" y2="258" stroke="#60935d" strokeOpacity="0.14" strokeWidth="1" />
        <line x1="255" y1="258" x2="430" y2="38" stroke="#60935d" strokeOpacity="0.11" strokeWidth="1" />
        <line x1="430" y1="38" x2="730" y2="95" stroke="#60935d" strokeOpacity="0.11" strokeWidth="1" />
        <line x1="730" y1="95" x2="950" y2="268" stroke="#60935d" strokeOpacity="0.14" strokeWidth="1" />
        <line x1="950" y1="268" x2="1120" y2="62" stroke="#60935d" strokeOpacity="0.11" strokeWidth="1" />
        <line x1="95" y1="58" x2="430" y2="38" stroke="#60935d" strokeOpacity="0.07" strokeWidth="1" />
        <line x1="730" y1="95" x2="1120" y2="62" stroke="#60935d" strokeOpacity="0.07" strokeWidth="1" />
        <line x1="255" y1="258" x2="560" y2="210" stroke="#60935d" strokeOpacity="0.07" strokeWidth="1" />
        <line x1="560" y1="210" x2="950" y2="268" stroke="#60935d" strokeOpacity="0.07" strokeWidth="1" />
        <line x1="255" y1="258" x2="370" y2="390" stroke="#60935d" strokeOpacity="0.05" strokeWidth="1" />
        <line x1="950" y1="268" x2="830" y2="400" stroke="#60935d" strokeOpacity="0.05" strokeWidth="1" />

        <circle cx="95"   cy="58"  r="4.5" fill="#60935d" fillOpacity="0.32" />
        <circle cx="255"  cy="258" r="3.5" fill="#60935d" fillOpacity="0.28" />
        <circle cx="430"  cy="38"  r="5"   fill="#60935d" fillOpacity="0.28" />
        <circle cx="560"  cy="210" r="3"   fill="#60935d" fillOpacity="0.22" />
        <circle cx="730"  cy="95"  r="4.5" fill="#60935d" fillOpacity="0.24" />
        <circle cx="950"  cy="268" r="3.5" fill="#60935d" fillOpacity="0.28" />
        <circle cx="1120" cy="62"  r="4"   fill="#60935d" fillOpacity="0.28" />
        <circle cx="370"  cy="390" r="2.5" fill="#60935d" fillOpacity="0.13" />
        <circle cx="830"  cy="400" r="2"   fill="#60935d" fillOpacity="0.11" />

        <circle cx="320"  cy="140" r="2"   fill="#152128" fillOpacity="0.1" />
        <circle cx="640"  cy="55"  r="2"   fill="#152128" fillOpacity="0.1" />
        <circle cx="840"  cy="185" r="2"   fill="#152128" fillOpacity="0.1" />
        <circle cx="155"  cy="120" r="1.5" fill="#60935d" fillOpacity="0.2" />
        <circle cx="1060" cy="185" r="1.5" fill="#60935d" fillOpacity="0.2" />
        <circle cx="500"  cy="460" r="1.5" fill="#60935d" fillOpacity="0.07" />
        <circle cx="700"  cy="475" r="1"   fill="#60935d" fillOpacity="0.06" />
      </svg>
      <h1 className="roboto-serif-light">Zach Vincent</h1>
      <h2 className="poppins-medium">ML / Data</h2>
    </div>
  );
};

export default Header;
