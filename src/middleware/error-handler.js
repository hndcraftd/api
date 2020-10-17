/**
 * Error handling  middleware
 * @returns {Middleware} - middleware
 */
export function errorHandler() {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error) {
      ctx.status = error.status || 500;
      const message = error.message || "Something went wrong.";
      ctx.body = {
        error: true,
        message,
      };
      ctx.app.emit("error", error, ctx);
    }
  };
}
