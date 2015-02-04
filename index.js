module.exports = minimistReverse

function extractArgv(minimistObject, excludes) {
    return Object.keys(minimistObject).reduce(function(coll, key, index, keys) {
        if (excludes.indexOf(key) >= 0) { return coll }
        var value  = minimistObject[key]
        var prefix = (key.length == 1) ? '-' : '--'
        if (value == false) { coll['--f'].push('--no-'+key); return coll }
        if (value == true)  { coll[prefix+'t'].push((key.length == 1) ? key : prefix+key); return coll }
        if (key == '_')     { coll.cmd = value;     return coll }
        value = (value instanceof Array) ? value : [value]
        value.unshift('')
        coll[prefix+'kw'] = coll[prefix+'kw'].concat(value.join(' '+prefix+key+'=').substring(1).split(' '))
        return coll 
    },{ cmd : [], '-t' : [], '--f' : [], '--t' : [], '-kw' : [], '--kw' : [] })
}

function minimistReverse(minimistObject, excludes) {
    var argv = extractArgv(minimistObject, (excludes || []))
    if (argv['-t'].length > 0) argv['-t']  = ['-'+argv['-t'].join('')]
    var args = argv.cmd
        .concat(argv['-t']
        .concat(argv['--t']
        .concat(argv['--f']
        .concat(argv['-kw']
        .concat(argv['--kw'])))))
    return args.join(' ')
}
