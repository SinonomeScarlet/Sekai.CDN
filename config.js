module.exports = {
    filesDir: "files",
    prvDir: "private",
    port: 8080,
    trustedIPs: [],
    uploadUserName: "admin",
    uploadPassword: "password",
    useXffHeader: false,
    ...require("./config.json")
};