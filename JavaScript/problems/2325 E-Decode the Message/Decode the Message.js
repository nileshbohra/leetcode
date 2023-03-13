/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let substitutionTable = {};

    let atoz = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let count = 0;
    key.split('').forEach(k => {
        if (k !== ' ' && substitutionTable[k] === undefined) {
            substitutionTable[k] = atoz[count];
            count++;
        }
    })

    let res = '';
    message.split('').forEach(msg => {
        if (msg == " ") {
            res += msg
        } else {
            res += substitutionTable[msg];
        }
    })
    return res;
};