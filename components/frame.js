// frame.js
var Header = {
    oninit: vnode => vnode.state.route = m.route.get(),
    view: vnode => m('nav.navbar', [
        m('.navbar-brand', [
            m('a.navbar-item[href=/home]', { oncreate: m.route.link,
                class: vnode.state.route === '/home' ? 'is-active' : '',
            }, 'MithrilJS Demo'),
            m('a.navbar-item[href=/counter]', { oncreate: m.route.link,
                class: vnode.state.route === '/counter' ? 'is-active' : '',
            }, 'Counter'),
            m('a.navbar-item[href=/request]', { oncreate: m.route.link,
                class: vnode.state.route === '/request' ? 'is-active' : '',
            }, 'Request'),
        ])
    ])
};

export default {
    view: vnode => m('section.hero.is-fullheight.is-light', [
        m('.hero-head.is-info', m(Header)),
        m('.hero-body', vnode.children),
        m('.hero-foot.has-text-centered',
            m('a[href="http://mvndaai.com"][target="_blank"]', 'mvndaai.com')
        )
    ])
};
