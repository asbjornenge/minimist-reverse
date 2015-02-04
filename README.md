# minimist-reverse 


The reverse of [minimist](https://github.com/substack/minimist).  This module is meant to construct arguments for running other cli programs.

There are multiple other modules that does this.

* [dargs](https://www.npmjs.com/package/dargs)
* [maximist](https://www.npmjs.com/package/maximist)
* [tsiminim](https://www.npmjs.com/package/tsiminim)

This module differs in that it structures the arguments in a specific way. It also includes the _ key values, first in the output. That might very well **NOT** be what you want. It also outputs a string. 

**NOTE** You probably want to use [dargs](https://www.npmjs.com/package/dargs) instead of this module!

## Install

    npm install minimist-reverse

## Use

    var minimist = require('minimist')
    var mreverse = require('minimist-reverse')

    var argv = ['cmd','-a','--foo=bar'] 
    assert.equal(mreverse(minimist(argv)), argv.join(' ')) 

    var cmd = mreverse({
	    _: ['cmd'],
	    a: 1,
	    b: 'b',
	    c: true,
	    d: true,
	    e: false,
	    h: [1,2,3],
	    bar: 'baz'
    })
    console.log(cmd)
    // => cmd -cd -a=1 -b=b -h=1 -h=2 -h=3 --bar=baz

## Changelog

### 1.0.0

* Initial release :tada:

enjoy
