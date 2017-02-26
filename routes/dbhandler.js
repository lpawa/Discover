const pg = require('pg');
const conString = 'postgres://ddiscover:1thing@localhost:5432/1thingdb' ;// make sure to match your own database's credentials
//var client = new Client({user: 'lakshya', database: '1thingdb'});
function getLinks(cb) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err)
        }
        let links=[];
        client.query('SELECT * from link', function (err, result) {
            done()

            if (err) {
                return console.error('error happened during query', err)
            }
            for(row of result.rows) {
                links.push({
                  link:row.links
                })
            }
            cb(links);


        })
    })
}
module.exports={
    getLinks : getLinks
};