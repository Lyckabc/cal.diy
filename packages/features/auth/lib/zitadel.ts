/**
 * Zitadel OIDC provider configuration for NextAuth.
 *
 * Required environment variables:
 *   ZITADEL_LOGIN_ENABLED   — "true" to enable Zitadel SSO login button
 *   ZITADEL_ISSUER          — e.g. https://auth.toji.homes
 *   ZITADEL_CLIENT_ID       — OIDC client ID from Zitadel application
 *   ZITADEL_CLIENT_SECRET   — OIDC client secret from Zitadel application
 *
 * Zitadel application setup (in Zitadel console):
 *   - Type: Web (Authorization Code + PKCE)
 *   - Redirect URI: https://cal.toji.homes/api/auth/callback/zitadel
 *   - Post-logout URI: https://cal.toji.homes
 *   - Scopes: openid, profile, email
 */

export const ZITADEL_ISSUER = process.env.ZITADEL_ISSUER;
export const ZITADEL_CLIENT_ID = process.env.ZITADEL_CLIENT_ID;
export const ZITADEL_CLIENT_SECRET = process.env.ZITADEL_CLIENT_SECRET;
export const ZITADEL_LOGIN_ENABLED = process.env.ZITADEL_LOGIN_ENABLED === "true";

export const IS_ZITADEL_LOGIN_ENABLED = !!(
  ZITADEL_ISSUER &&
  ZITADEL_CLIENT_ID &&
  ZITADEL_CLIENT_SECRET &&
  ZITADEL_LOGIN_ENABLED
);
