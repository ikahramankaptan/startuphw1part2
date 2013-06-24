var fs = require('fs');
var outfile = "part2.txt";
var prime = new Array();
prime[0] = 2;

var out = "Modify this script to write out something different.\n";
fs.writeFileSync(outfile, prime[0]);

for (var i=0;i<100;i++)
{
  var isprime = true;
	for(var j = 0; j < prime.length; j++)
	{
		if(i % prime[j] == 0)
		{
			isprime = false;
			break;
		}
	}
	if(isprime == true)
	{
		prime.push(j);
		fs.writeFileSync(outfile, ","+prime[0]);
	}
}  
