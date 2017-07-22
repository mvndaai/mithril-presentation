fetch(weatherApiUrl).then((r) => r.json()).then((r) =>
    ReactDOM.render(component(r), document.getElementById("react"))
);

var component = (r) => React.createElement('div', null,
    React.createElement('h1', {className:'subtitle'}, 'ReactJS'),
    React.createElement('div', null, r.city.name),
    r.list.map((e) =>
        React.createElement('div', null,
            `${e.dt_txt} - ${e.weather[0].description} - ${e.main.temp}`)
        )
);