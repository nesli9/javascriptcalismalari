(function(exports, require, module, __filename, __dirname) {
    var url = "http://logger.io/logger";
    var name = "Sadık Turan";

    // var module2 = (function(){
    //function scope

    //     return{

    //     }

    // })();

    function log(message) {
        console.log(message);
        console.log(__filename);
        console.log(__dirname);
    }

    // module.exports.log = log;
    // exports.log = log;

    module.exports = {
        name: name,
        log: log,
    };
});