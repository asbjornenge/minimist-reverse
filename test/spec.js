var assert   = require('assert')
var minimist = require('minimist')
var mreverse = require('../index.js')

it('can create cli options from an object', function() {
    assert.equal(mreverse({'_' : ['cmd'], a:true, foo:'bar'}), 'cmd -a --foo=bar')
})

it('is actually the reverse of minimist', function() {
    var argv = ['cmd','-a','--foo=bar'] 
    assert.equal(mreverse(minimist(argv)), argv.join(' ')) 
})

it('supports multiple arrays for multiple values', function() {
    var args = 'cmd -a --foo=bar --foo=baz'
    assert.equal(mreverse({'_':['cmd'],a:true,foo:['bar','baz']}), args)
})

it('supports multiple double dashed bools', function() {
    var argv = ['cmd','--apples'] 
    assert.equal(mreverse(minimist(argv)), argv.join(' ')) 
}) 

it('adds a --no-key for keys that have value false', function() {
    var clicmd = mreverse({'_':['cmd'], a:true, yay:true, nay:false, meh:'bah'})
    assert(clicmd.indexOf('--no-nay') >= 0)
})

it('supports passing an excludes array', function() {
    var clicmd = mreverse({'_':['cmd'], yay:true, nay:false}, ['nay'])
    assert(clicmd.indexOf('--no-nay') < 0)
})
