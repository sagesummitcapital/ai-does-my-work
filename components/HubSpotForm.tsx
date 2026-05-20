"use client";

import Script from "next/script";

/**
 * HubSpot AI Audit form.
 * Portal: 244871017
 * Form:   2fb051a8-e088-43d0-a4d0-514236e957b2
 */
export function HubSpotForm() {
  return (
    <>
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="2fb051a8-e088-43d0-a4d0-514236e957b2"
        data-portal-id="244871017"
      />
      <Script
        src="https://js-na2.hsforms.net/forms/embed/244871017.js"
        strategy="afterInteractive"
      />
    </>
  );
}
