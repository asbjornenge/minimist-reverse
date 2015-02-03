module.exports = minimistReverse

function extractArgv(minimistObject) {
    return Object.keys(minimistObject).reduce(function(coll, key, index, keys) {
        var value  = minimistObject[key]
        var prefix = (key.length == 1) ? '-' : '--'
        if (value == false) return coll
        if (value == true)  { coll[prefix+'t'].push((key.length == 1) ? key : prefix+key); return coll }
        if (key == '_')     { coll.cmd = value;     return coll }
        value = (value instanceof Array) ? value : [value]
        value.unshift('')
        coll[prefix+'kw'] = coll[prefix+'kw'].concat(value.join(' '+prefix+key+'=').substring(1).split(' '))
        return coll 
    },{ cmd : [], '-t' : [], '--t' : [], '-kw' : [], '--kw' : [] })
}

function minimistReverse(minimistObject) {
    var argv = extractArgv(minimistObject)
    if (argv['-t'].length > 0) argv['-t']  = ['-'+argv['-t'].join('')]
    var args = argv.cmd.concat(argv['-t'].concat(argv['--t'].concat(argv['-kw'].concat(argv['--kw']))))
    return args.join(' ')
}
