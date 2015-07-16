#!/usr/bin/env node

function extract_services( service_array ) {
		for(var index in service_array){
				var service = service_array[index];
				if(service["name"]){
						export_credentials(service["name"],service["credentials"]);
				}

		}
}

function export_credentials( service_name, credentials ) {
  for (var k in credentials) {
		var key = service_name.replace(/[ \.\-]/g,"_") + "_" + k.replace(/[ \.\-]/g,"_");
		console.log("export " + key + "=" + credentials[k]);
  }
}

var vcap = JSON.parse( process.env.VCAP_SERVICES );

extract_services(vcap["user-provided"]);
