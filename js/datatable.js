// Datos de ejemplo para la tabla
const employees = [
    { Fruit_Name: 'Naranja', Category: 'Cítricos', Origin: 'Valencia, Spain', Quantity_Available: '33kg', Date_Added: '2024/09/10' },
    { Fruit_Name: 'Mango', Category: 'Exótica', Origin: 'Chiapas, México', Quantity_Available: '47kg', Date_Added: '2024/09/12' },
    { Fruit_Name: 'Durazno', Category: 'Frutas de hueso', Origin: 'Georgia, EE.UU.', Quantity_Available: '66kg', Date_Added: '2024/09/11' },
    { Fruit_Name: 'Fresa', Category: 'Bayas', Origin: 'Huelva, España', Quantity_Available: '41kg', Date_Added: '2024/09/09' },
    { Fruit_Name: 'Cereza', Category: 'Frutas de hueso', Origin: 'Yakima, EE.UU.', Quantity_Available: '28kg', Date_Added: '2024/09/08' },
    { Fruit_Name: 'Sandía', Category: 'Melones', Origin: 'Sonora, México', Quantity_Available: '61kg', Date_Added: '2024/09/13' },
    { Fruit_Name: 'Limón', Category: 'Cítricos', Origin: 'Sicilia, Italia', Quantity_Available: '38kg', Date_Added: '2024/09/10' },
    { Fruit_Name: 'Espinaca', Category: 'Verduras de hoja', Origin: 'California, EE.UU.', Quantity_Available:'21kg', Date_Added: '2024/09/14' },
    { Fruit_Name: 'Zanahoria', Category: 'Verduras de raíz', Origin: 'Nantes, Francia', Quantity_Available: '46kg', Date_Added: '2024/09/11' },
    { Fruit_Name: 'Arándano', Category: 'Bayas', Origin: 'Columbia Británica, Canadá', Quantity_Available: '22kg', Date_Added: '2024/09/10' }
];

// Función para poblar la tabla dinámicamente
function populateTable() {
    const tableBody = document.querySelector('#example tbody');
    employees.forEach(employee => {
        const row = `
            <tr>
                <td>${employee.Fruit_Name}</td>
                <td>${employee.Category}</td>
                <td>${employee.Origin}</td>
                <td>${employee.Quantity_Available}</td>
                <td>${employee.Date_Added}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Inicializar DataTable cuando el documento esté listo
$(document).ready(function() {
    // Poblar la tabla antes de inicializar DataTables
    populateTable();

    // Inicializar DataTables
    $('#example').DataTable();
});
