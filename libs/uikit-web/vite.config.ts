import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/uikit-web',

  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md']),
    svgr({
      svgrOptions: {
        svgProps: {
          width: '{props.size || 24}',
          height: '{props.size || 24}',
          fill: '{props.color || "currentColor"}'
        }
      },
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/uikit-web',
      provider: 'v8',
    },
  },
});
