jquery-paramalama
=================

> You know, the opposite of jQuery.param...again. Because, why not?

## Install

```shell
# npm
npm install jquery-paramalama

# bower
bower install jquery-paramalama
```

## Usage

```javascript
(function ( $ ) {
    $.paramalama( window.location.href );
})( jQuery )
```

It does NOT parse arrayed values from string, so, ya.