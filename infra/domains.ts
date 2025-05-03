const SUB = $app.stage === "prod" ? "" : `${$app.stage}.`;

const HOST = "stackforge.xyz";

export const domains = {
  api: `${SUB}api.${HOST}`,
  apiService: `${SUB}service.api.${HOST}`,
  platform: `${SUB}${HOST}`,
  auth: `${SUB}auth.${HOST}`,
};
