import paramalama from "../paramalama";
const params = paramalama( "http://localhost:9999?foo=bar&baz=bot&arr[]=hey&arr[]=how" );


console.log( params );
