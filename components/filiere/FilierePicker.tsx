'use client'

/**
 * Two-step filière picker: the filière first — the word a student actually says
 * ("je suis en SVT") — then the option inside it.
 *
 * Two taps, and it resolves to the track the programme is keyed by, so nothing
 * downstream has to guess. Mirrors the picker on zabaqist-turbo, which mirrors
 * the waitlist form on zabaqist.com: one question, asked the same way
 * everywhere.
 */

import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import {
  FILIERE_TRACKS,
  FILIERES,
  readFiliere,
  saveFiliere,
  type Filiere,
  type Track,
} from '@/lib/filiere'
import { chaptersOf } from '@/lib/programme'

export default function FilierePicker({
  onDone,
  confirmLabel,
}: {
  /** Called once a track is committed. */
  onDone?: (track: Track) => void
  confirmLabel?: string
}) {
  const t = useTranslations('auth')
  const [filiere, setFiliere] = useState<Filiere | null>(null)
  const [track, setTrack] = useState<Track | null>(null)
  const [error, setError] = useState(false)

  // Pre-select what this device already chose, so "change my filière" starts
  // from the current answer rather than from a blank form.
  useEffect(() => {
    const c = readFiliere()
    if (!c) return
    setFiliere(c.filiere)
    setTrack(c.track)
  }, [])

  const commit = () => {
    if (!track) {
      setError(true)
      return
    }
    saveFiliere(track)
    onDone?.(track)
  }

  return (
    <div className="space-y-5">
      <fieldset>
        <legend className="text-sm font-medium">{t('filiereLabel')}</legend>
        <div className="mt-2 space-y-2">
          {FILIERES.map((f) => {
            const active = filiere === f
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFiliere(f)
                  // Switching filière invalidates the option under it.
                  setTrack((prev) =>
                    prev && FILIERE_TRACKS[f].includes(prev) ? prev : null,
                  )
                  setError(false)
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-start transition-colors ${
                  active
                    ? 'border-zb-mint bg-zb-mint-soft'
                    : 'border-zb-line bg-white hover:border-zb-mint/40'
                }`}
              >
                <span>
                  <span className="block font-semibold">{t(`filiere-${f}`)}</span>
                  <span className="block text-xs text-gray-500">
                    {t('chapterCount', { count: chaptersOf(f).length })}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-xs text-gray-500">
                  {t(`filiereShort-${f}`)}
                </span>
              </button>
            )
          })}
        </div>
      </fieldset>

      {filiere && (
        <fieldset>
          <legend className="text-sm font-medium">{t('optionLabel')}</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {FILIERE_TRACKS[filiere].map((tr) => {
              const active = track === tr
              return (
                <button
                  key={tr}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setTrack(tr)
                    setError(false)
                  }}
                  className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? 'border-zb-mint bg-zb-mint-soft text-zb-mint'
                      : 'border-zb-line bg-white hover:border-zb-mint/40'
                  }`}
                >
                  {t(`track-${tr}`)}
                </button>
              )
            })}
          </div>
        </fieldset>
      )}

      {error && (
        <p role="alert" className="text-sm font-medium text-zb-rose">
          {t('errorTrack')}
        </p>
      )}

      <button
        type="button"
        onClick={commit}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-zb-mint px-6 font-semibold text-white transition-colors hover:bg-zb-mint-deep"
      >
        {confirmLabel ?? t('confirm')} →
      </button>
    </div>
  )
}
