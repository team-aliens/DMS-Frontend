import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000, // 개발 서버 포트
    proxy: {
      '/api': {
        target: 'https://dev-api.dms-dsm.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React 핵심 라이브러리
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // 상태 관리 및 데이터 fetching
          'query-vendor': ['@tanstack/react-query'],
          // 디자인 시스템
          'design-system': ['@team-aliens/design-system'],
          // Excel 관련 (큰 라이브러리)
          'excel-vendor': ['exceljs', 'file-saver'],
          // 스타일링
          'style-vendor': ['styled-components'],
          // 유틸리티
          'utils-vendor': ['axios', 'date-fns', 'mitt', 'react-cookie'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // 1000KB까지 경고 임계값 상향
  },
});
