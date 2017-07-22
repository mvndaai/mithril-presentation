var component = {
    list: [],
    oninit: (vnode) => {
        m.request(weatherApiUrl).then((r) => {
            vnode.state.name = r.city.name;
            vnode.state.list = r.list;
        });
    },
    view: (vnode) => [
        m('h1.subtitle', 'Mithril'),
        m('', vnode.state.name),
        vnode.state.list.map(
            (e) => m('', e.dt_txt)
        )
    ]
};

m.render(document.getElementById('mithril'), m(component));
