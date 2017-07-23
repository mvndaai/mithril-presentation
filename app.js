// app.js
import Frame from './components/frame.js';
import Counter from './components/counter.js';
import Request from './components/request.js';

m.route(document.body, "/home", {
    "/home": {view: _ => m(Frame, "Home")},
    "/counter": {view: _ => m(Frame, m(Counter))},
    "/request": {view: _ => m(Frame, m(Request))},
});