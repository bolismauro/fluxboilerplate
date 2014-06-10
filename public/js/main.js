/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global requirejs:true */

requirejs.config({
  baseUrl: 'public/js'
, paths: {
    react: 'vendor/react/react'
  , flux: 'vendor/fluxxor/build/fluxxor'
  }
});



requirejs(['react', 'flux'], function (react, flux) {
  console.log(react);
  console.log(flux);
});
