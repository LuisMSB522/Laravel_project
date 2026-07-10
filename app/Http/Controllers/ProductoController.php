<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;
use App\Models\Categoria;
use Illuminate\Validation\Rule;

class ProductoController extends Controller
{
    

    /*
    =============================================
    ====   Salida visual de la vista   ==========
    =============================================
    */

    public function index()
    {
        $productos = Producto::orderBy('id', 'asc')->get();
        return view('producto.index', compact('productos'));
    }

    



    /*
    =============================================
    ====   Almacenar un registro nuevo   ========
    =============================================
    */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'codigo' => 'required|string|max:50|unique:productos,codigo',
            'nombre' => 'required|string|max:50|unique:productos,nombre',
            'marca' => 'required|string|max:50',
            'medida_tecnica' => 'required|string|max:50',
            'stock_actual' => 'nullable|integer|min:0',
            'stock_minimo' => 'nullable|integer|min:0',
            'costo_compra' => 'nullable|numeric|min:0',
            'precio_venta' => 'nullable|numeric|min:0',
            'estado_logico' => 'nullable|string|max:20',
            'id_categoria' => 'required|exists:categorias,id',
        ]);

        Producto::create($validated);

        return redirect()
            ->route('productos.index')
            ->with('success', 'Producto creado exitosamente.');
    }


    /*
    =============================================
    ====   Modificar un registro existente   ====
    =============================================
    */

    public function update(Request $request)
    {
        // 1. Obtener el ID del formulario
        $id = $request->input('id');

        // 2. Buscar el producto o lanzar 404 si no existe
        $producto = Producto::find($id);

        if (!$producto) {
            return redirect()
                ->route('productos.index')
                ->with('error', 'Producto no encontrado.');
        }

        // 3. Validar los datos (excepto el ID)
        $validated = $request->validate([
            'codigo' => 'required|string|max:50|unique:productos,codigo,' . $id,
            'nombre' => 'required|string|max:50|unique:productos,nombre,' . $id,
            'marca' => 'required|string|max:50',
            'medida_tecnica' => 'required|string|max:50',
            'stock_actual' => 'nullable|integer|min:0',
            'stock_minimo' => 'nullable|integer|min:0',
            'costo_compra' => 'nullable|numeric|min:0',
            'precio_venta' => 'nullable|numeric|min:0',
            'estado_logico' => 'nullable|string|max:20',
            'id_categoria' => 'required|exists:categorias,id',
        ]);

        // 4. Actualizar el producto
        $producto->update($validated);

        // 5. Redirigir con mensaje de éxito
        return redirect()
            ->route('productos.index')
            ->with('success', 'Producto actualizado exitosamente.');
    }



    public function create()
    {
        //
    }


    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}
