const { default: axios } = require("axios");

const retornaBase64Pdf = async (link) => {
    const { data } = await axios({
        method: "get",
        url: link,
        responseType: "arraybuffer"
    });
    return Buffer.from(data, "binary").toString("base64");
}

module.exports = {
    retornaBase64Pdf
}