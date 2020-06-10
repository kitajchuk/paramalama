ProperJS // paramalama
======================

> Dead simple, unidirectional query string parsing.



### Install

```shell
# npm
npm i paramalama --save-dev
```



### Usage
Parse a query string into an Object. Supports query string Arrays `?foo=bar&baz=bot&arr[]=hey&arr[]=how`
```javascript
import paramalama from "paramalama";

// Query string becomes Object
console.log( paramalama( window.location.href ) );
```
