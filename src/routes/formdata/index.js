export function GET(req, res) {
    res.setHeader('Content-Type', 'text/plain');

    res.end(`
        Name: Gorbenko Fedir
        Age: 20
        Email: fedorgorbenko@gmail.com
    `);
}

export function POST(req, res, payload) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('POST request handled' + payload);
}

export function OPTIONS(req, res) {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.end();
}