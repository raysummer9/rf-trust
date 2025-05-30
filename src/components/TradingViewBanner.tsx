"use client";
import React, { useEffect, useRef } from "react";

const TradingViewBanner = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current && !container.current.querySelector("iframe")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbols": [
          { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
          { "proName": "FOREXCOM:NSXUSD", "title": "Nasdaq 100" },
          { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
          { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
          { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
        ],
        "showSymbolLogo": true,
        "colorTheme": "dark",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "en"
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-[#181A2A] border-t border-gray-800 shadow-lg tradingview-ticker-custom">
      <div ref={container} className="tradingview-widget-container w-full" />
    </div>
  );
};

export default TradingViewBanner; 