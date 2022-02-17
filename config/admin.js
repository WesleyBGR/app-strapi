module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '09a28b445b5bd1ce3792a85f4f2be177'),
  },
});
