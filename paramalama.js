/*!
 *
 * Paramalama
 * Use with jQuery or Ender as $.paramalama() or standalone as paramalama()
 *
 * @author: @kitajchuk
 * @url: http://github.com/kitajchuk
 *
 *
 */
(function ( context, undefined ) {


"use strict";


/******************************************************************************
 * paramalama
*******************************************************************************/
(function ( factory ) {
    
    if ( typeof define === "function" && define.amd ) {
        define( [ "jquery" ], factory );
        
    } else {
        factory( $ );
    }
    
})(function ( $ ) {
    
    var paramalama = function ( str ) {
        var query = decodeURIComponent( str ).match( /[#|?].*$/g ),
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
    
    if ( typeof module === "object" && module && typeof module.exports === "object" ) {
        module.exports = paramalama;
        
    } else if ( context.jQuery !== undefined ) {
        context.jQuery.paramalama = paramalama;
        
    } else {
        context.paramalama = paramalama;
    }
    
});


})( this );