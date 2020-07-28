const redis = require("redis");

const bookclient = redis.createClient();
const userclient = redis.createClient();



module.exports = {
  bookclient,
  userclient
}
