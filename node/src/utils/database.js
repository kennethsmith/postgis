process.env.POSTGRES_USER='user'
process.env.POSTGRES_PASSWORD='pass'
process.env.POSTGRES_HOST='localhost'
process.env.POSTGRES_PORT=5432

exports.config = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
};

exports.pool = async(driver, database) => {
    exports.config['database'] = database
    const pool = new driver.Pool(exports.config)
    return pool
}

exports.func = async (c, q) => {
    const r = await c.query(q);
    return r
}

exports.run_f = async (f, c, q) => {
    try {
        return f(c, q)
    } catch (e) {
        console.error(e);
    }
}

exports.run = async(c, qs) => {
    const start = Date.now()
    console.log(new Date().toString());

    let r = []
    try {
        const keys = Object.keys(qs)
        for(let i = 0; i < keys.length; ++i) {
            try {
                r.push(await exports.run_f(exports.func, c, qs[keys[i]]))
            } catch(e) {
                console.error('Tried: ' + qs[keys[i]])
                console.error(e);
            }
        }
    } catch (e) {
        console.error(e);
    } finally {
        c.end()

        console.log(new Date().toString());
        const end = Date.now()
        console.log('Seconds taken: ' + (end - start)/1000)

        return r
    }
}