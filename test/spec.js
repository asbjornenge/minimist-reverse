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

