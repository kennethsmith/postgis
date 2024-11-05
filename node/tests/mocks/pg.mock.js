
exports.Pool = class Pool {
    constructor(config) {
        this.user = config.user
        this.password = config.password
        this.host = config.host
        this.port = config.port
        this.database = config.database
    }

    async query(q) {
        if(q.startsWith('SELECT')) {
            return select()
        } else if(q.startsWith('BAD QUERY')) {
            throw new Error('ERROR!!!')
        }
        return {}
    }

    async end() {
        return {}
    }

}

async function select() {
    return {
        command: 'SELECT',
        rowCount: 7,
        oid: null,
        rows: [
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ],
        fields: [ {}, {}, {}, {} ],
        //_parsers: [
        //  () => {},
        //  () => {},
        //  () => {},
        //  () => {}
        //],
        _types: { _types: {}, text: {}, binary: {} },
        RowCtor: null,
        rowAsArray: false,
        _prebuiltEmptyResultObject: { id: null, name: null, latitude: null, longitude: null }
    }
}
