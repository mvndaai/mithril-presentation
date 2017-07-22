// component/counter.js
export default {
    count: 0,
    view: vnode => m('div', [
        m('button', {
            onclick: _ => vnode.state.count++
        }, vnode.attrs.name),
        vnode.state.count
    ])
};