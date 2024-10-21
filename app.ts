import {series} from './data.js';
import {Serie} from "./Serie.js";

const tableBody = document.getElementById('seriesTabla');
let promedio: HTMLElement = document.getElementById("average")!;

tabla(series);
function tabla(series: Serie[]) :void{
if (tableBody ){
    let num_series = 0;
    let temporadas = 0;
    series.forEach(function(serie){
        const columna = document.createElement('tr')
        columna.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;   
        tableBody.appendChild(columna);
        num_series++;
        temporadas += serie.seasons;
    
    })
    
    promedio.innerHTML = temporadas/num_series + "";

}
}

