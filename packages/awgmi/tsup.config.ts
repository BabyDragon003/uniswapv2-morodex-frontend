import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    core: 'core/src/index.ts',
    'connectors/safePal': 'core/src/connectors/safePal.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
})
