export default () => ({
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
