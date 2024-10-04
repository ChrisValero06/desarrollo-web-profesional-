// Simulación de la función val() de jQuery
function val(elementId, newValue) {
    var element = document.getElementById(elementId);
    if (newValue === undefined) {
        return element.value;
    } else {
        element.value = newValue;
    }
}

// Lógica del carrito
var items = [];

function agregarItem() {
    var producto = val('productoInput');
    var cantidad = val('cantidadInput');
    
    if (producto && cantidad) {
        items.push({ producto: producto, cantidad: cantidad });
        actualizarLista();
        val('productoInput', '');
        val('cantidadInput', '');
    }
}

function eliminarItem(index) {
    items.splice(index, 1);
    actualizarLista();
}

function actualizarLista() {
    var lista = document.getElementById('itemList');
    lista.innerHTML = '';
    items.forEach(function(item, index) {
        var li = document.createElement('li');
        li.innerHTML = 
            '<span>' + item.cantidad + 'x ' + item.producto + '</span>' +
            '<button class="deleteBtn" onclick="eliminarItem(' + index + ')">Eliminar</button>';
        lista.appendChild(li);
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('agregarBtn').addEventListener('click', agregarItem);
});