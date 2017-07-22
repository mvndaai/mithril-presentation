var component = {
    r : [],
    oninit: (vnode) => {
        m.request(utahHomeless).then((r) => vnode.state.r = r);
    },
    view: (vnode) => [
        m('h1.subtitle', 'Mithril'),
        vnode.state.r.map(
            (e) => m('', `${e.year.split('-')[0]} : ${e.number_of_homeless}`)
        )
    ]
};

m.mount(document.getElementById('mithril'), component);
