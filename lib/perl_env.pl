#!/usr/bin/env perl
use JSON; # imports encode_json, decode_json, to_json and from_json.

my $decoded = decode_json( "$ENV{'STACKATO_SERVICES'}" );
foreach my $key ( keys %$decoded ) {
	my $nextKey = $decoded->{$key}; 
	foreach my $key1 ( keys %$nextKey ) {
		print "export $key1=$nextKey->{$key1}\n";
	} 
}

