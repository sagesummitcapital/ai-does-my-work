'use client'

import { useEffect, useId, useState } from 'react'

interface HubSpotFormProps {
  portalId: string
  formId: string
  region?: string
}

declare global {
  interface Window {
    hbspt?: any
    __hsFormMounted?: Record<string, boolean>
  }
}

export function HubSpotForm({ portalId, formId, region = 'na2' }: HubSpotFormProps) {
  const reactId = useId()
  const targetId = `hubspot-form-${reactId.replace(/:/g, '')}`
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const SCRIPT_ID = 'hubspot-forms-v2'
    const key = `${portalId}:${formId}:${targetId}`

    // Create a local, definitely-defined reference (fixes TS)
    const mountedMap = (window.__hsFormMounted ??= {})

    const createForm = () => {
      if (!window.hbspt?.forms?.create) return
      const target = document.getElementById(targetId)
      if (!target) return

      // Prevent duplicate renders (StrictMode + route transitions)
      if (mountedMap[key]) {
        setLoaded(true)
        return
      }

      mountedMap[key] = true
      target.innerHTML = ''

      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${targetId}`,
        css: '',
        cssClass: 'hubspot-form-custom',
        onFormReady: () => setLoaded(true),
      })
    }

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null

    if (!existing) {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = 'https://js.hsforms.net/forms/v2.js'
      script.async = true
      script.onload = createForm
      document.body.appendChild(script)
    } else {
      if (window.hbspt) createForm()
      else existing.addEventListener('load', createForm, { once: true })
    }

    return () => {
      // allow re-mount if you navigate away and back
      delete mountedMap[key]
    }
  }, [portalId, formId, region, targetId])

  return (
    <div className="hubspot-form-wrapper">
      <div id={targetId} />
      {!loaded && <div className="text-center py-8 text-content-500">Loading form...</div>}

      <style jsx global>{`
        .hubspot-form-wrapper .hs-form-field { margin-bottom: 1.5rem; }
        .hubspot-form-wrapper label { display: block; font-size: 0.875rem; font-weight: 500; color: #cbd5e1; margin-bottom: 0.5rem; }
        .hubspot-form-wrapper .hs-input { width: 100%; padding: 0.75rem 1rem; background: #1a2332; border: 1px solid #334155; border-radius: 8px; color: #f1f5f9; font-size: 1rem; transition: all 0.2s; }
        .hubspot-form-wrapper .hs-input:focus { outline: none; border-color: #14b8a6; box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1); }
        .hubspot-form-wrapper textarea.hs-input { min-height: 120px; resize: vertical; }
        .hubspot-form-wrapper .hs-button { width: 100%; padding: 0.875rem 1.5rem; background: linear-gradient(to right, #14b8a6, #0d9488); color: #0a0f1a; font-weight: 600; font-size: 0.875rem; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s; }
        .hubspot-form-wrapper .hs-button:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(20, 184, 166, 0.25); }
        .hubspot-form-wrapper .hs-error-msgs { margin-top: 0.5rem; color: #f87171; font-size: 0.875rem; }
        .hubspot-form-wrapper .submitted-message { color: #a7f3d0; }
      `}</style>
    </div>
  )
}
