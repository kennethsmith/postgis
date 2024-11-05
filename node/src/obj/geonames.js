exports.tableName = 'geonames'

exports.dataLocations = [
    // These relative paths assume the code is running from the node directory
    '../data/geonames/99.txt',
    '../data/geonames/cities15000.txt',
]

exports.geonameObj = (line) => {
    return {
        countryCode: line[8],
        geonameId: line[0],
        name: line[1],
        latitude: line[4],
        longitude: line[5],
        timezone: line[17],
    }
}