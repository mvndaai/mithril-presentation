
var name = '';
var list = [];

var component = {
    oninit: (vnode) => {
        m.request(weatherApiUrl).then((r) => {
            name = r.city.name;
            list = r.list;
            console.log('mith', r);
            console.log(name);
            m.redraw();
        });
    },
    onchange: (vnode) => console.log("changing"),
    view: (vnode) => [
        m('h1.subtitle', 'Mithril'),
        m('', name),
        list.map(
            (e) => JSON.stringify(e)
        )
    ]
};

m.render(document.getElementById('mithril'), m(component));
