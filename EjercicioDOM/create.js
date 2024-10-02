export function crearTabla() {
    return `
        <h1>Equipos Futbol</h1>
        <table class="tabla-futbol"> 
            <tr>
                <th>NOMBRE</th>
                <th>CIUDAD</th>
                <th>ESTADIO</th>
                <th>CAPACIDAD</th>
            </tr>
            <tr>
                <td>Real Betis Balompie</td>
                <td>Sevilla</td>
                <td>Benito Villamarín</td>
                <td>60.721</td>
            </tr>
            <tr>
                <td>FC Barcelona</td>
                <td>Barcelona</td>
                <td>Camp Nou</td>
                <td>99.354</td>
            </tr>
            <tr>
                <td>Real Madrid</td>
                <td>Madrid</td>
                <td>Santiago Bernabéu</td>
                <td>85.000</td>
            </tr>
        </table>
    `;
}

export function crearLista() {
    return `
        <h1>Lista</h1>
        <ul class="lista-equipos">
            <li>Alavés</li>
            <li>Athletic Club</li>
            <li>Atlético de Madrid</li>
            <li>Barcelona</li>
            <li>Real Betis</li>
            <li>Celta de Vigo</li>
            <li>Espanyol</li>
            <li>Getafe</li>
            <li>Girona</li>
            <li>Las Palmas</li>
            <li>Leganés</li>
            <li>Mallorca</li>
            <li>Osasuna</li>
            <li>Rayo Vallecano</li>
            <li>Real Madrid</li>
            <li>Real Sociedad</li>
            <li>Sevilla</li>
            <li>Valencia</li>
            <li>Valladolid</li>
            <li>Villarreal</li>
        </ul>
    `;
}

export function imagen() {
    return `
        <h1>Imagen</h1>
        <img src="img/cr7.jpg" alt="CR7" class="imagen">
    `;
}

export function crearParrafo() {
    return `
        <h1>Párrafo</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>
    `;
}
