// Start our app!
const app = require('./app');

const PORT = process.env.PORT || 8010;

const server = app.listen(PORT, () => {
  console.log(`Express running @ PORT ${PORT}`);
});