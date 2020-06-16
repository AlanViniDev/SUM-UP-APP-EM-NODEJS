exports.view = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/index.html' , { root : __dirname});
};
exports.module = this.view;