// components/loader.js
export default {
    view: _ => m('.has-text-centered', [
        m('i.fa.fa-spinner.fa-pulse.fa-5x[aria-hidden="true"]', {
            style: {fontSize: '5rem'},
        }),
        m('span.sr-only', 'Loading...')
    ])
};