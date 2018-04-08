var os = require("os");
var msg = "The platform is ";

function main() {
    console.log(msg + os.platform());
}

main();