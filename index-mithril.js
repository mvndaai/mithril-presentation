var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=84062&appid=74afd8b2438530184bb3e4f0df71d1f1';

var component = {
    name: 'a',
    list: ['a','b','c'],
    oninit: (vnode) => {
        m.request(weatherApiUrl).then((r) => {
            vnode.state.list = r.list;
            vnode.state.name = r.city.name;
            console.log(r);
        });
    },
    onchange: (vnode) => console.log(vnode.state.name),
    view: (vnode) => [
        m('h1.subtitle', 'Mithril'),
        JSON.stringify(vnode.state),
        m('', vnode.state.name),
        vnode.state.list.map((e) => JSON.stringify(e))
    ]
};

m.render(document.getElementById('mithril'), m(component));
