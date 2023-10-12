//used to get refresh token from google access code
export const GoogleOauthUrl = "https://api.spyke.social/user/oauth2/google";

//used to get id token from google refresh token
export const GoogleIdTokenFromRefreshToken =
  "https://api.spyke.social/user/oauth2/refresh/google";

export const endPointURL = "https://api.spyke.social/graphql";

export const googleWellKnownOpenConfig =
  "https://accounts.google.com/.well-known/openid-configuration";

export const checkAccountStatusURL =
  "https://api.spyke.social/user/get_account_status";

//returns necessary data from spyke api to upload a video using TUS to the CDN
export const uploadVideoURL = "https://api.spyke.social/upload/video/create";

export const generateImageUploadHash = `https://api.spyke.social/upload/image/create`;
export const uploadImageURL = `https://api.spyke.social/upload/image`;

export const usernameCheckURL = "https://api.spyke.social/user/exists/";
export const createUserURL = "https://api.spyke.social/user/create";

export const guestAccountRefreshToken = "rt-pFoOEBHe881t4X4pYq5666BbXKuQ5sus";
