exports.operacoes = function (req, res) {
    const __dirname = "./";
   res.sendFile('view/operacoes.js' , { root : __dirname});
};
exports.module = this.operacoes;