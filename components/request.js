// components/request.js
import Loader from './loader.js';
export default {
    oninit: vnode => m.request('https://odn.data.socrata.com/resource/j8a6-qa8k.json')
        .then(r => vnode.state.r = r),
    view: vnode => vnode.state.r ?
        vnode.state.r.map(e => m('', JSON.stringify(e)) ) : m(Loader)
};