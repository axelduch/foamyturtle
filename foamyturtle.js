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
                templateClass = {},
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
                Object.defineProperty(templateClass, prop, definition[prop]);
            }
            
            // return the Class
            return function () {
                return templateClass;
            };
        }
    };
    
}(window));