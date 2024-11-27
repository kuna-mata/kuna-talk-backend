export default () => ({
  port: parseInt(process.env.PORT) || 6000,
  database: {
    uri: process.env.DATABASE_URL,
  },
  mobile: {
    android: {
      uri: process.env.ANDROID_URL,
    },
    device: {
      uri: process.env.DEVICE_URL,
    },
  },
});
