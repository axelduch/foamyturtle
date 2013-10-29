var FoamyTurtle = (function (window, undefined) {
    'use strict';
    
    return {
        
        /**
         * @param {Object} scope
         * @param {Array} definitions An array of objects with keys name and descriptor
         * @return {Class}
         */
        Class: function (definition, initialScope) {
            var scope = initialScope || {},
                descriptor,
                prop,
                method;
            for (prop in definition) {
                descriptor = definition[prop];
                for (method in descriptor) {
                    if (typeof descriptor[method] === 'function') {
                        // bind scope
                        descriptor[method] = descriptor[method].bind(scope);
                    }
                }
                // define property for this
                Object.defineProperty(this, prop, definition[prop]);
            }
        }
    };
    
}(window));