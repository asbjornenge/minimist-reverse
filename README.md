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

    var options = {
	    _: ['cmd'],
	    a: 1,
	    b: 'b',
	    c: true,
	    d: true,
	    yay: false,
	    foo: [1,2],
	    bar: 'baz',
        bad: 'nevah'
    })
    var excludes = ['bad']
    console.log(mreverse(options, excludes))
    // => cmd -cd -a=1 -b=b --no-yay --foo=1 --foo=2 --bar=baz

## Changelog

### 1.1.0

* Indicated similar modules and specifically pointing to dargs as the one to use
* Added support for transforming key:false -> --no-key
* Added support for excludes

### 1.0.0

* Initial release :tada:

enjoy
