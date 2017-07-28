// component/counter.js
export default {
    count: 0,
    view: vnode => m('', [
        m('button', {
            onclick: _ => vnode.state.count++
        }, vnode.attrs.name || 'Count'),
        vnode.state.count
    ])
};