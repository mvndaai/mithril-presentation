// app.js
import Counter from './components/counter.js';
import Request from './components/request.js';

m.route(document.body, "/home", {
    "/home": {view: _ => "Home" },
    "/counter": Counter,
    '/request': Request,
});