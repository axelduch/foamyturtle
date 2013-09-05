(function (window, undefined) {
    'use strict';
    
    return {
        
        /**
         * @param {Object} scope
         * @param {Array} definitions An array of objects with keys name and descriptor
         * @return {Class}
         */
        Class: function (scope, definitions) {
            
            var name,
                descriptor,
                key, i, l;
            
            for (i = 0, l = definitions.length; i < l; ++i) {
                
                name       = definitions[i].name;
                descriptor = definitions[i].descriptor;
                
                // loop through descriptor
                for (key in descriptor) {
                    
                    if (!descriptor.hasOwnProperty(key)
                        && typeof descriptor[key] === 'function') {
                        
                        // bind scope
                        descriptor[key] = descriptor[key].bind(scope);
                    }
                }
                
                // define property for this
                Object.defineProperty(this, name, descriptor);
            }
        }
    };
    
}(window));