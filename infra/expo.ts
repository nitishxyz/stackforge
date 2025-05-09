import { domains } from "./domains";

export const expo = new sst.x.DevCommand("Expo", {
  dev: {
    directory: "apps/mobile",
    command: "npx expo start --clear",
  },
  environment: {
    EXPO_PUBLIC_OPENAUTH_AUTHORIZATION_ENDPOINT: `https://${domains.auth}/authorize`,
    EXPO_PUBLIC_OPENAUTH_TOKEN_ENDPOINT: `https://${domains.auth}/token`,
    EXPO_PUBLIC_API_URL:
      $app.stage === "prod" || $app.stage === "dev"
        ? `https://${domains.api}`
        : `http://192.168.*.*:3030`,
  },
});
