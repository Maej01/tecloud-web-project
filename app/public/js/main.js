const bChart = document.getElementById("barChart");
const pChart = document.getElementById("pieChart");

let barChart = new Chart(bChart, {
    type: 'bar',
    data: {
        labels: ["January", "February","March", "April", "May", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Farm Chart Dataset",
                fill: false,
                lineTension: 0.1,
                backgroundColor: ["#ff7f24", "#6495ed", "#ffb90f", "#bcee68", "#bf3eff", "#528b8b", "#ff1493", "#eec900", "#cd6090", "#8b5f65", "#a2b5cd", "#e066ff"],
                borderColor: "rgba(75, 192, 192, 1)",
                borderdCapacity: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 25, 80, 50,40, 60],

            }
        ]
    }
});

let donotChart = new Chart(pChart, {
    type: 'polarArea',
    data: {
        labels: ["iletracy", "financial support","low fertilizers", "transportation", "poor market"],
        datasets: [
            {
                label: "Challenges they faced",
                fill: false,
                lineTension: 0.1,
                backgroundColor: ["#3cb371","#ffdead", "#ff82ab", "#cd6839", "#9acd32"],
                borderColor: "rgba(75, 192, 192, 1)",
                borderdCapacity: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
                pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [70, 50, 65, 38, 48],

            }
        ]
    }
});



