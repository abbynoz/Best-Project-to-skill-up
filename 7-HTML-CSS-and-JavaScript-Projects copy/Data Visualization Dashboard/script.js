// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Sales ($)',
            data: [12000, 15000, 10000, 17000, 20000, 25000],
            backgroundColor: [
                '#ff6384',
                '#36a2eb',
                '#cc65fe',
                '#ffce56',
                '#4bc0c0',
                '#9966ff'
            ],
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: { beginAtZero: true },
        },
    },
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Website Traffic',
            data: [3000, 4000, 3500, 4500, 5000, 6000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: { beginAtZero: true },
        },
    },
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [{
            data: [55, 25, 20],
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        }],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
    },
});
