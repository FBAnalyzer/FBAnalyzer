// This file contains the script for updating the live game stream page with live game data

const csrftoken = getCookie('csrftoken');
let data = 0;

// Get the game nr from the url
var currentLocation = window.location.pathname;
var locArray = currentLocation.split("/");
var nr = locArray[locArray.length-1];

// Creates the HTML - page when the window is loaded

window.onload = function() {

    fetch("https://fbscanner.io/apis/livejson/" + nr)
        .then(response => response.json())
        .then(jsonData => {

            data = jsonData;
            console.log('window.onload:', data);

            if (Date.now() - Date.parse(data.date) <= 3600000) { // max 1 hour from last update
                    const img = document.createElement('img');
                    img.setAttribute('src',"/static/live.png");
                    img.setAttribute('width', '100px');
                    img.style.paddingTop = "35px";
                    img.style.paddingBottom = "10px"
                    document.getElementById('gstats').prepend(img);
            }
            else {
            document.getElementById('h1').style.paddingTop = "55px";
            }

            document.getElementById('h1').style.fontWeight = "bold"
            document.getElementById('homeTeam').innerHTML = data.nameT1;
            document.getElementById('awayTeam').innerHTML = data.nameT2;

            updateCharts();
            updateData();

            console.log('Success:', data);
        })

        .catch((error) => {
          console.error('Error:', error);
    });

    t = setTimeout(function(){ updatePage() }, 10000);
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Function updates the Live page every second

function updatePage() {

    fetch("https://fbscanner.io/apis/livejson/" + nr)
        .then(response => response.json())
        .then(jsonData => {

            data = jsonData;
            updateData();
            updateCharts();

            console.log('Success:', data);
        })

        .catch((error) => {
          console.error('Error:', error);
    });

    t = setTimeout(function(){ updatePage() }, 1000);
}

function convertTime(arg) {
    var date = new Date(arg * 1000);
    var res = date.toISOString().substr(14, 5);
    return res;
}

function convertPos(lPos, counter) {
    res = Math.round(100 * lPos / counter);
    return res;
}

function calcPercent(xGa, xGb) {
    res = Math.round(xGa / (xGa + xGb) * 100);
    return res;
}

function updateCharts() {

    // xG Game Chart

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', Number(data.xGfGameT1L1), 'color: #002072', Number(data.xGfGameT1L1), Number(data.xGfGameT2L1), 'color: #59D9EB', Number(data.xGfGameT2L1) ],
         ['Line 2', Number(data.xGfGameT1L2), 'color: #002072', Number(data.xGfGameT1L2), Number(data.xGfGameT2L2), 'color: #59D9EB', Number(data.xGfGameT2L2) ],
         ['Line 3', Number(data.xGfGameT1L3), 'color: #002072', Number(data.xGfGameT1L3), Number(data.xGfGameT2L3), 'color: #59D9EB', Number(data.xGfGameT2L3) ],
         ['PP', Number(data.xGfGameT1L4) + Number(data.xGfGameT1L5), 'color: #002072', Number(data.xGfGameT1L4) + Number(data.xGfGameT1L5), Number(data.xGfGameT2L4) + Number(data.xGfGameT2L5), 'color: #59D9EB', Number(data.xGfGameT2L4) + Number(data.xGfGameT2L5) ],
         ['SH', Number(data.xGfGameT1L6) + Number(data.xGfGameT1L7), 'color: #002072', Number(data.xGfGameT1L6) + Number(data.xGfGameT1L7), Number(data.xGfGameT2L6) + Number(data.xGfGameT2L7), 'color: #59D9EB', Number(data.xGfGameT2L6) + Number(data.xGfGameT2L7) ]
      ]);

    var options = {
        title: 'xG by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: { textPosition: 'none' }
        };

    var chart = new google.visualization.BarChart(document.getElementById('xGGame_chart'));
    chart.draw(chartData, options);

    // xG% Game Chart

    xGL1T1 = calcPercent(Number(data.xGfGameT1L1), Number(data.xGaGameT1L1));
    xGL1T2 = calcPercent(Number(data.xGfGameT2L1), Number(data.xGaGameT2L1));
    xGL2T1 = calcPercent(Number(data.xGfGameT1L2), Number(data.xGaGameT1L2));
    xGL2T2 = calcPercent(Number(data.xGfGameT2L2), Number(data.xGaGameT2L2));
    xGL3T1 = calcPercent(Number(data.xGfGameT1L3), Number(data.xGaGameT1L3));
    xGL3T2 = calcPercent(Number(data.xGfGameT2L3), Number(data.xGaGameT2L3));

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', xGL1T1, 'color: #002072', xGL1T1 + "%", xGL1T2, 'color: #59D9EB', xGL1T2 + "%" ],
         ['Line 2', xGL2T1, 'color: #002072', xGL2T1 + "%", xGL2T2, 'color: #59D9EB', xGL2T2 + "%" ],
         ['Line 3', xGL3T1, 'color: #002072', xGL3T1 + "%", xGL3T2, 'color: #59D9EB', xGL3T2 + "%" ]
      ]);

    var options = {
        title: 'xG% by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: {
            viewWindowMode:'explicit',
            textPosition: 'none',
            viewWindow: {
              max:100,
              min:0
            }
        },
        };

    var chart = new google.visualization.BarChart(document.getElementById('xG%Game_chart'));
    chart.draw(chartData, options);

    // Possession Game Chart

    PosL1T1 = convertPos(data.possessionGameT1L1, data.TOCGameT1L1);
    PosL1T2 = convertPos(data.possessionGameT2L1, data.TOCGameT2L1);
    PosL2T1 = convertPos(data.possessionGameT1L2, data.TOCGameT1L2);
    PosL2T2 = convertPos(data.possessionGameT2L2, data.TOCGameT2L2);
    PosL3T1 = convertPos(data.possessionGameT1L3, data.TOCGameT1L3);
    PosL3T2 = convertPos(data.possessionGameT2L3, data.TOCGameT2L3);

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', PosL1T1, 'color: #002072', PosL1T1 + "%", PosL1T2, 'color: #59D9EB', PosL1T2 + "%" ],
         ['Line 2', PosL2T1, 'color: #002072', PosL2T1 + "%", PosL2T2, 'color: #59D9EB', PosL2T2 + "%" ],
         ['Line 3', PosL3T1, 'color: #002072', PosL3T1 + "%", PosL3T2, 'color: #59D9EB', PosL3T2 + "%" ]
      ]);

    var options = {
        title: 'Possession % by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: {
            viewWindowMode:'explicit',
            textPosition: 'none',
            viewWindow: {
              max:100,
              min:0
            }
        },
        };

    var chart = new google.visualization.BarChart(document.getElementById('posGame_chart'));
    chart.draw(chartData, options);

    // TOC Game Chart

    TOCL1T1 = convertPos(data.TOCGameT1L1, data.gameClock);
    TOCL1T2 = convertPos(data.TOCGameT2L1, data.gameClock);
    TOCL2T1 = convertPos(data.TOCGameT1L2, data.gameClock);
    TOCL2T2 = convertPos(data.TOCGameT2L2, data.gameClock);
    TOCL3T1 = convertPos(data.TOCGameT1L3, data.gameClock);
    TOCL3T2 = convertPos(data.TOCGameT2L3, data.gameClock);
    TOCPPT1 = convertPos(data.TOCGameT1L4 + data.TOCGameT1L5, data.gameClock);
    TOCPPT2 = convertPos(data.TOCGameT2L4 + data.TOCGameT2L5, data.gameClock);

    TOCL1T1a = new Date(data.TOCGameT1L1 * 1000).toISOString().substr(14, 5);
    TOCL1T2a = new Date(data.TOCGameT2L1 * 1000).toISOString().substr(14, 5);
    TOCL2T1a = new Date(data.TOCGameT1L2 * 1000).toISOString().substr(14, 5);
    TOCL2T2a = new Date(data.TOCGameT2L2 * 1000).toISOString().substr(14, 5);
    TOCL3T1a = new Date(data.TOCGameT1L3 * 1000).toISOString().substr(14, 5);
    TOCL3T2a = new Date(data.TOCGameT2L3 * 1000).toISOString().substr(14, 5);
    TOCPPT1a = new Date((data.TOCGameT1L4 + data.TOCGameT1L5) * 1000).toISOString().substr(14, 5);
    TOCPPT2a = new Date((data.TOCGameT2L4 + data.TOCGameT2L5) * 1000).toISOString().substr(14, 5);

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', TOCL1T1, 'color: #002072', TOCL1T1a, TOCL1T2, 'color: #59D9EB', TOCL1T2a ],
         ['Line 2', TOCL2T1, 'color: #002072', TOCL2T1a, TOCL2T2, 'color: #59D9EB', TOCL2T2a ],
         ['Line 3', TOCL3T1, 'color: #002072', TOCL3T1a, TOCL3T2, 'color: #59D9EB', TOCL3T2a ],
         ['PP', TOCPPT1, 'color: #002072', TOCPPT1a, TOCPPT2, 'color: #59D9EB', TOCPPT2a ]
      ]);

    var options = {
        title: 'Time On Court by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: { textPosition: 'none' }
        };

    var chart = new google.visualization.BarChart(document.getElementById('TOCGame_chart'));
    chart.draw(chartData, options);

    // Plusminus Game Chart

    pmPPT1 = data.gfGameT1L4+data.gfGameT1L5-data.gaGameT1L4+data.gaGameT1L5;
    pmPPT2 = data.gfGameT2L4+data.gfGameT2L5-data.gaGameT2L4+data.gaGameT2L5;

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', data.gfGameT1L1-data.gaGameT1L1, 'color: #002072', data.gfGameT1L1-data.gaGameT1L1, data.gfGameT2L1-data.gaGameT2L1, 'color: #59D9EB', data.gfGameT2L1-data.gaGameT2L1 ],
         ['Line 2', data.gfGameT1L2-data.gaGameT1L2, 'color: #002072', data.gfGameT1L2-data.gaGameT1L2, data.gfGameT2L2-data.gaGameT2L2, 'color: #59D9EB', data.gfGameT2L2-data.gaGameT2L2 ],
         ['Line 3', data.gfGameT1L3-data.gaGameT1L3, 'color: #002072', data.gfGameT1L3-data.gaGameT1L3, data.gfGameT2L3-data.gaGameT2L3, 'color: #59D9EB', data.gfGameT2L3-data.gaGameT2L3 ],
         ['PP', pmPPT1, 'color: #002072', pmPPT1, pmPPT2, 'color: #59D9EB', pmPPT2 ]
      ]);

    var options = {
        title: '+- by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: { textPosition: 'none' }
        };

    var chart = new google.visualization.BarChart(document.getElementById('pmGame_chart'));
    chart.draw(chartData, options);
    
    // xG Period Chart

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', Number(data.xGfPeriodT1L1), 'color: #002072', Number(data.xGfPeriodT1L1), Number(data.xGfPeriodT2L1), 'color: #59D9EB', Number(data.xGfPeriodT2L1) ],
         ['Line 2', Number(data.xGfPeriodT1L2), 'color: #002072', Number(data.xGfPeriodT1L2), Number(data.xGfPeriodT2L2), 'color: #59D9EB', Number(data.xGfPeriodT2L2) ],
         ['Line 3', Number(data.xGfPeriodT1L3), 'color: #002072', Number(data.xGfPeriodT1L3), Number(data.xGfPeriodT2L3), 'color: #59D9EB', Number(data.xGfPeriodT2L3) ],
         ['PP', Number(data.xGfPeriodT1L4) + Number(data.xGfPeriodT1L5), 'color: #002072', Number(data.xGfPeriodT1L4) + Number(data.xGfPeriodT1L5), Number(data.xGfPeriodT2L4) + Number(data.xGfPeriodT2L5), 'color: #59D9EB', Number(data.xGfPeriodT2L4) + Number(data.xGfPeriodT2L5) ],
         ['SH', Number(data.xGfPeriodT1L6) + Number(data.xGfPeriodT1L7), 'color: #002072', Number(data.xGfPeriodT1L6) + Number(data.xGfPeriodT1L7), Number(data.xGfPeriodT2L6) + Number(data.xGfPeriodT2L7), 'color: #59D9EB', Number(data.xGfPeriodT2L6) + Number(data.xGfPeriodT2L7) ]
      ]);

    var options = {
        title: 'xG by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: { textPosition: 'none' }
        };

    var chart = new google.visualization.BarChart(document.getElementById('xGPeriod_chart'));
    chart.draw(chartData, options);

    // xG% Period Chart

    xGL1T1 = calcPercent(Number(data.xGfPeriodT1L1), Number(data.xGaPeriodT1L1));
    xGL1T2 = calcPercent(Number(data.xGfPeriodT2L1), Number(data.xGaPeriodT2L1));
    xGL2T1 = calcPercent(Number(data.xGfPeriodT1L2), Number(data.xGaPeriodT1L2));
    xGL2T2 = calcPercent(Number(data.xGfPeriodT2L2), Number(data.xGaPeriodT2L2));
    xGL3T1 = calcPercent(Number(data.xGfPeriodT1L3), Number(data.xGaPeriodT1L3));
    xGL3T2 = calcPercent(Number(data.xGfPeriodT2L3), Number(data.xGaPeriodT2L3));

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', xGL1T1, 'color: #002072', xGL1T1 + "%", xGL1T2, 'color: #59D9EB', xGL1T2 + "%" ],
         ['Line 2', xGL2T1, 'color: #002072', xGL2T1 + "%", xGL2T2, 'color: #59D9EB', xGL2T2 + "%" ],
         ['Line 3', xGL3T1, 'color: #002072', xGL3T1 + "%", xGL3T2, 'color: #59D9EB', xGL3T2 + "%" ]
      ]);

    var options = {
        title: 'xG% by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: {
            viewWindowMode:'explicit',
            textPosition: 'none',
            viewWindow: {
              max:100,
              min:0
            }
        },
        };

    var chart = new google.visualization.BarChart(document.getElementById('xG%Period_chart'));
    chart.draw(chartData, options);

    // Possession Period Chart

    PosL1T1 = convertPos(data.possessionPeriodT1L1, data.TOCPeriodT1L1);
    PosL1T2 = convertPos(data.possessionPeriodT2L1, data.TOCPeriodT2L1);
    PosL2T1 = convertPos(data.possessionPeriodT1L2, data.TOCPeriodT1L2);
    PosL2T2 = convertPos(data.possessionPeriodT2L2, data.TOCPeriodT2L2);
    PosL3T1 = convertPos(data.possessionPeriodT1L3, data.TOCPeriodT1L3);
    PosL3T2 = convertPos(data.possessionPeriodT2L3, data.TOCPeriodT2L3);

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', PosL1T1, 'color: #002072', PosL1T1 + "%", PosL1T2, 'color: #59D9EB', PosL1T2 + "%" ],
         ['Line 2', PosL2T1, 'color: #002072', PosL2T1 + "%", PosL2T2, 'color: #59D9EB', PosL2T2 + "%" ],
         ['Line 3', PosL3T1, 'color: #002072', PosL3T1 + "%", PosL3T2, 'color: #59D9EB', PosL3T2 + "%" ]
      ]);

    var options = {
        title: 'Possession % by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: {
            viewWindowMode:'explicit',
            textPosition: 'none',
            viewWindow: {
              max:100,
              min:0
            }
        },
        };

    var chart = new google.visualization.BarChart(document.getElementById('posPeriod_chart'));
    chart.draw(chartData, options);

    // TOC Period Chart

    TOCL1T1 = convertPos(data.TOCPeriodT1L1, data.periodClock);
    TOCL1T2 = convertPos(data.TOCPeriodT2L1, data.periodClock);
    TOCL2T1 = convertPos(data.TOCPeriodT1L2, data.periodClock);
    TOCL2T2 = convertPos(data.TOCPeriodT2L2, data.periodClock);
    TOCL3T1 = convertPos(data.TOCPeriodT1L3, data.periodClock);
    TOCL3T2 = convertPos(data.TOCPeriodT2L3, data.periodClock);
    TOCPPT1 = convertPos(data.TOCPeriodT1L4 + data.TOCPeriodT1L5, data.periodClock);
    TOCPPT2 = convertPos(data.TOCPeriodT2L4 + data.TOCPeriodT2L5, data.periodClock);

    TOCL1T1a = new Date(data.TOCPeriodT1L1 * 1000).toISOString().substr(14, 5);
    TOCL1T2a = new Date(data.TOCPeriodT2L1 * 1000).toISOString().substr(14, 5);
    TOCL2T1a = new Date(data.TOCPeriodT1L2 * 1000).toISOString().substr(14, 5);
    TOCL2T2a = new Date(data.TOCPeriodT2L2 * 1000).toISOString().substr(14, 5);
    TOCL3T1a = new Date(data.TOCPeriodT1L3 * 1000).toISOString().substr(14, 5);
    TOCL3T2a = new Date(data.TOCPeriodT2L3 * 1000).toISOString().substr(14, 5);
    TOCPPT1a = new Date((data.TOCPeriodT1L4 + data.TOCPeriodT1L5) * 1000).toISOString().substr(14, 5);
    TOCPPT2a = new Date((data.TOCPeriodT2L4 + data.TOCPeriodT2L5) * 1000).toISOString().substr(14, 5);

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', TOCL1T1, 'color: #002072', TOCL1T1a, TOCL1T2, 'color: #59D9EB', TOCL1T2a ],
         ['Line 2', TOCL2T1, 'color: #002072', TOCL2T1a, TOCL2T2, 'color: #59D9EB', TOCL2T2a ],
         ['Line 3', TOCL3T1, 'color: #002072', TOCL3T1a, TOCL3T2, 'color: #59D9EB', TOCL3T2a ],
         ['PP', TOCPPT1, 'color: #002072', TOCPPT1a, TOCPPT2, 'color: #59D9EB', TOCPPT2a ]
      ]);

    var options = {
        title: 'Time On Court by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: { textPosition: 'none' }
        };

    var chart = new google.visualization.BarChart(document.getElementById('TOCPeriod_chart'));
    chart.draw(chartData, options);

    // Plusminus Period Chart

    pmPPT1 = data.gfPeriodT1L4+data.gfPeriodT1L5-data.gaPeriodT1L4+data.gaPeriodT1L5;
    pmPPT2 = data.gfPeriodT2L4+data.gfPeriodT2L5-data.gaPeriodT2L4+data.gaPeriodT2L5;

    var chartData = google.visualization.arrayToDataTable([
         ['Line', data.nameT1, { role: 'style' }, { role: 'annotation' }, data.nameT2, { role: 'style' }, { role: 'annotation' } ],
         ['Line 1', data.gfPeriodT1L1-data.gaPeriodT1L1, 'color: #002072', data.gfPeriodT1L1-data.gaPeriodT1L1, data.gfPeriodT2L1-data.gaPeriodT2L1, 'color: #59D9EB', data.gfPeriodT2L1-data.gaPeriodT2L1 ],
         ['Line 2', data.gfPeriodT1L2-data.gaPeriodT1L2, 'color: #002072', data.gfPeriodT1L2-data.gaPeriodT1L2, data.gfPeriodT2L2-data.gaPeriodT2L2, 'color: #59D9EB', data.gfPeriodT2L2-data.gaPeriodT2L2 ],
         ['Line 3', data.gfPeriodT1L3-data.gaPeriodT1L3, 'color: #002072', data.gfPeriodT1L3-data.gaPeriodT1L3, data.gfPeriodT2L3-data.gaPeriodT2L3, 'color: #59D9EB', data.gfPeriodT2L3-data.gaPeriodT2L3 ],
         ['PP', pmPPT1, 'color: #002072', pmPPT1, pmPPT2, 'color: #59D9EB', pmPPT2 ]
      ]);

    var options = {
        title: '+- by Line',
        bar: {groupWidth: "95%"},
        legend: { position: 'bottom'},
        colors: ['#002072', '#59D9EB'],
        hAxis: { textPosition: 'none' }
        };

    var chart = new google.visualization.BarChart(document.getElementById('pmPeriod_chart'));
    chart.draw(chartData, options);

}

function updateData() {

            document.getElementById('periodNr').innerHTML = "Period " + data.periodNr;

            var date = new Date(data.periodClock * 1000);
            var display = date.toISOString().substr(11, 8);
            document.getElementById('label').innerHTML = display;

            document.getElementById('homeGoals').innerHTML = data.goalsGameT1;
            document.getElementById('awayGoals').innerHTML = data.goalsGameT2;
            document.getElementById('homeGoalsP').innerHTML = data.goalsPeriodT1;
            document.getElementById('awayGoalsP').innerHTML = data.goalsPeriodT2;
            document.getElementById('homexG').innerHTML = data.xGGameT1;
            document.getElementById('awayxG').innerHTML = data.xGGameT2;
            document.getElementById('homexGP').innerHTML = data.xGPeriodT1;
            document.getElementById('awayxGP').innerHTML = data.xGPeriodT2;
            document.getElementById('homePos').innerHTML = convertPos(data.possessionGameT1, data.gameClock);
            document.getElementById('awayPos').innerHTML = convertPos(data.possessionGameT2, data.gameClock);
            document.getElementById('homePosP').innerHTML = convertPos(data.possessionPeriodT1, data.periodClock);
            document.getElementById('awayPosP').innerHTML = convertPos(data.possessionPeriodT2, data.periodClock);

}