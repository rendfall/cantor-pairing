'use strict';

var CantorPairing = {
    /**
     * Cantor pairing function
     * @see  http://en.wikipedia.org/wiki/Pairing_function#Cantor_pairing_function
     * 
     * @param {number} k1
     * @param {number} k2
     * @return {number}
     */
    pair: function (k1, k2) {
        // If k1 or k2 are larger then limit below dePair returns invalid result.
        var limit = 99999940;

        if (k1 > limit || k2 > limit) {
            throw new Error('Sorry, ' + k1 + ' and ' + k2 +' cannot be paired.');
        }

        var z = parseInt(0.5 * (k1 + k2) * (k1 + k2 + 1) + k2, 10);

        return z;
    },

    /**
     * Inverse of Cantor pairing function
     * @see http://en.wikipedia.org/wiki/Pairing_function#Inverting_the_Cantor_pairing_function
     * 
     * @return {array}
     */
    dePair: function (z) {
        var w = Math.floor((Math.sqrt(8 * z + 1) - 1) / 2);
        var t = ((w*w + w) / 2);
        var y = parseInt(z - t, 10);
        var x = parseInt(w - y, 10);

        return [x, y];
    }
}

module.exports = CantorPairing;
