export default ( str ) => {
    let query = decodeURIComponent( str ).match( /[#|?].*$/g );
    const ret = {};

    if ( query ) {
        query = query[ 0 ].replace( /^\?|^#|^\/|\/$|\[|\]/g, "" );
        query = query.split( "&" );

        for ( let i = query.length; i--; ) {
            const pair = query[ i ].split( "=" );
            const key = pair[ 0 ];
            const val = pair[ 1 ];

            if ( ret[ key ] ) {
                // #2 https://github.com/kitajchuk/paramalama/issues/2
                // This supposedly will work as of ECMA-262
                // This works since we are not passing objects across frame boundaries
                // and we are not considering Array-like objects. This WILL be an Array.
                if ( {}.toString.call( ret[ key ] ) !== "[object Array]" ) {
                    ret[ key ] = [ ret[ key ] ];
                }

                ret[ key ].push( val );

            } else {
                ret[ key ] = val;
            }
        }
    }

    return ret;
};
