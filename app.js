// app.js
import counter from './components/counter.js';
m.mount(document.body, {
    view: _ => [
        m(counter, {name:'Counter 1'}),
        m(counter, {name:'Counter 2'})
    ]
});