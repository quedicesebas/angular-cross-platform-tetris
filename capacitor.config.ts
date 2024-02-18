import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'co.angular.crossplatformtetris',
  appName: 'Cross-platform Tetris game',
  webDir: 'dist/tetris/browser',
  server: {
    androidScheme: 'https',
  },
};

export default config;
