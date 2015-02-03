# minimist-reverse 


The reverse of [minimist](https://github.com/substack/minimist).  This module is meant to construct arguments for running other cli programs.

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
