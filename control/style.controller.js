exports.style = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/style.css' , { root : __dirname});
};
exports.module = this.style;