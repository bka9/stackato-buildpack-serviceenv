#!/usr/bin/env node

function leaves( obj ) {
  for (var k in obj) {
    if (typeof (obj[k]) == 'string') {
      console.log("export " + k + "=" + obj[k]);
    } else {
      leaves(obj[k]);
    }
  }
}

var vcap = JSON.parse( process.env.VCAP_SERVICES );

leaves(vcap);