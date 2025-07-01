const { ZodError } = require('zod');

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const error = {};
    err.errors.forEach((e) => {
      error[e.path[0]] = e.message;
    });
    return res.status(400).json(error);
  }

  res.status(err.status || 500).json({
    message: err.message || 'Something went wrong',
  });
};

module.exports = errorMiddleware;
