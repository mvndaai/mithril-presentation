fetch(utahHomeless).then((r) => r.json()).then((r) =>
    ReactDOM.render(component(r), document.getElementById("react"))
);

var component = (r) => React.createElement('div', null,
    React.createElement('h1', {className:'subtitle'}, 'React'),
    r.map((e) =>
        React.createElement('div', null,
            `${e.year.split('-')[0]} : ${e.number_of_homeless}`
        )
    )
);