// Importamos el hook del store para leer el carrito
import { useCarritoStore } from '../store/useCarritoStore';

// Definimos el componente Encabezado
function Encabezado() {
  // Leemos solo items del store usando un selector
  const items = useCarritoStore((state) => state.items);

  // Sumamos las cantidades de todos los items para obtener el total de unidades
  const totalUnidades = items.reduce((suma, item) => suma + item.cantidad, 0);

  return (
    <header className="encabezado">
      {/* Nombre de la tienda */}
      <h1>Mi Tienda</h1>
      {/* Insignia con el número de unidades en el carrito */}
      <span className="insignia">{totalUnidades}</span>
    </header>
  );
}

// Exportamos el componente para usarlo en App
export default Encabezado;