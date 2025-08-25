import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.80016846d88a44dbb679fdbcb03d4b6f',
  appName: 'BillboardAI',
  webDir: 'dist',
  server: {
    url: 'https://80016846-d88a-44db-b679-fdbcb03d4b6f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera', 'photos']
    },
    Geolocation: {
      permissions: ['location']
    }
  }
};

export default config;