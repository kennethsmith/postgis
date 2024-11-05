exports.getCsvFile = (fs, fileLocation) => {
    const text = fs.readFileSync(fileLocation, 'utf-8');
    const lines = text.split("\n")
    const fields = []
    lines.forEach(l => {
        const fl = l.split("\t")
        if(fl.length > 1) {
            fields.push(fl)
        }
    })
    return fields
}

exports.getCsvFiles = (fs, fileLocations) => {
    const arrays = []
    fileLocations.forEach(fl => {
        const as = exports.getCsvFile(fs, fl)
        as.forEach((a) => {
            arrays.push(a)
        })
    })
    return arrays
}
