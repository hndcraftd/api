import { firebaseAuth } from "../connections/firebase-admin.js";

/**
 * Auth middleware
 * @returns {Middleware} - middleware
 */
export function authenticate() {
  return async (ctx, next) => {
    const { authorization: token } = ctx.request.header;
    ctx.assert(token, 401, "Missing auth token.");

    try {
      const firebaseUser = await firebaseAuth.verifyIdToken(token);

      const {
        uid: id,
        email,
        iss,
        auth_time: authTime,
        user_id: userId,
        sub,
        iat,
        exp,
        email_verified: emailVerified,
        firebase,
      } = firebaseUser;

      ctx.state.user = {
        id,
        email,
        iss,
        authTime,
        userId,
        sub,
        iat,
        exp,
        emailVerified,
        firebase,
      };
    } catch (error) {
      ctx.throw(401, "Invalid authorization token.");
    }

    await next();
  };
}
