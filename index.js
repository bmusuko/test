const glob = require("glob");

const getDirectories = function(src, callback) {
  glob(src + "/**/*", callback);
};
getDirectories("./a", function(err, res) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(res);
  }
});
