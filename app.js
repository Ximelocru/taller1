import { series } from './data.js';
const tableBody = document.getElementById('seriesTabla');
let promedio = document.getElementById("average");
tabla(series);
function tabla(series) {
    if (tableBody) {
        let num_series = 0;
        let temporadas = 0;
        series.forEach(function (serie) {
            const columna = document.createElement('tr');
            columna.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
            tableBody.appendChild(columna);
            num_series++;
            temporadas += serie.seasons;
        });
        promedio.innerHTML = temporadas / num_series + "";
    }
}
