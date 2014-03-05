/*!
 *
 * jQuery's opposite of .param()
 * Does NOT parse arrayed values from string!
 *
 * @author: @kitajchuk
 * @url: http://github.com/kitajchuk
 *
 *
 */
(function ( $, window, undefined ) {


"use strict";


/******************************************************************************
 * jQuery.paramalama
*******************************************************************************/
(function ( factory ) {
    
    if ( typeof define === "function" && define.amd ) {
        define( [ "jquery" ], factory );
        
    } else {
        factory( $ );
    }
    
})(function ( $ ) {
    
    $.paramalama = function ( str ) {
        var query = str.match( /[#|?].*$/g ),
            ret = {};
        
        if ( query ) {
            query = query[ 0 ].replace( /^\?|^#|^\/|\/$/g, "" );
            query = query.split( "&" );
            
            for ( var i = query.length; i--; ) {
                var pair = query[ i ].split( "=" ),
                    key = pair[ 0 ],
                    val = pair[ 1 ];
                
                ret[ key ] = val;
            }
        }
        
        return ret;
    };
    
});


})( jQuery, window );