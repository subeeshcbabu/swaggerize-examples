'use strict';

function pet(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.name = options.name;
    this.tag = options.tag;
}

module.exports = pet;
