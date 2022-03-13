module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '126a69719207e5983fe38899d785e6df'),
  },
});
