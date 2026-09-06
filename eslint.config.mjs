import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

/**
 * ESLint 9 reads `eslint.config.*` and ignores `.eslintrc.json`, so
 * `npm run lint` had been failing outright — the project has had no lint gate.
 *
 * `eslint-config-next` 16 ships a native flat config, so this imports it
 * directly rather than going through FlatCompat (which chokes on it).
 */
const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts', '**/*.d.ts'],
  },
  ...(Array.isArray(nextCoreWebVitals) ? nextCoreWebVitals : [nextCoreWebVitals]),
  {
    rules: {
      // `any` is used at the GeoGebra and mock-API boundaries, where the
      // third-party surface genuinely is untyped.
      '@typescript-eslint/no-explicit-any': 'off',

      // The product is written in French and Arabic. `l'apprentissage`,
      // `qu'il`, `d'une` — an apostrophe in copy is not a mistake here, and the
      // rule fires on almost every sentence. Off, deliberately.
      'react/no-unescaped-entities': 'off',

      // localStorage does not exist during SSR, so hydrating from it can only
      // happen in an effect — the rule cannot tell that case from a cascade.
      // Kept as a WARNING rather than off: the pattern is deliberate and
      // documented at each site, but new instances should still be visible.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
]

export default config
