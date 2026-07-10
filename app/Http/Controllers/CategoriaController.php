<?php

namespace App\Http\Controllers;


use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;




class CategoriaController extends Controller
{

    
    /*
    ==============================================
    === Almacenar una nueva categoria en la BD ===
    ==============================================
    */

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:categorias,nombre',
            'descripcion' => 'nullable|string',
        ]);

        Categoria::create($validated);

        return redirect()
            ->route('categoria.index')
            ->with('success', 'Categoría creada exitosamente.');
    }



    /*
    ===================================================
    === Seleccionar y mostrar todos los registros tabla
    ===================================================
    */

    public function index()
    {
        $categorias = Categoria::orderBy('id', 'asc')->get();
        return view('categoria.index', compact('categorias'));
    }




    /*
    ==============================================
    === Modificando un nuevo registro de categoria 
    ==============================================
    */

    public function update(Request $request)
    {
        // Obtener el ID desde el formulario (campo visible)
        $id = $request->input('id');

        // Buscar la categoría
        $categoria = Categoria::find($id);

        if (!$categoria) {
            return redirect()
                ->route('categoria.index')
                ->with('error', 'Categoría no encontrada.');
        }

        // Validar datos
        $validated = $request->validate([
            'nombre' => 'required|string|max:100|unique:categorias,nombre,' . $id,
            'descripcion' => 'nullable|string',
        ]);

        // Actualizar
        $categoria->update($validated);

        return redirect()
            ->route('categoria.index')
            ->with('success', 'Categoría actualizada exitosamente.');
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
