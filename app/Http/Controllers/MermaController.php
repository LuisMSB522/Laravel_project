<?php

namespace App\Http\Controllers;

use App\Models\AjusteMerma;
use Illuminate\Http\Request;

class MermaController extends Controller
{



    /*
    =================================
    === mostrar todos los registros
    =================================
    */
    public function index()
    {
        $merma = AjusteMerma::orderBy('id', 'asc')->get(); 
        return view('merma.index', compact('merma')); 
    }


    /*
    =================================
    === Crear un nuevo registro merma
    =================================
    */

    public function store(Request $request)
    {
        //validacion de los datos
        $request->validate([
            'cantidad' => 'required|integer|min:1',
            'causa' => 'required|string|max:255',
            'producto' => 'required|exists:productos,id',
            'usuario' => 'required|exists:usuarios,id',
        ]);


        //creacion del registro

        AjusteMerma::create([
            'cantidad' => $request->cantidad,
            'causa_ajuste' => $request->causa,
            'id_producto' => $request->producto,
            'id_usuario' => $request->usuario,
        ]);

        return redirect()->route('merma.index')->with('success', 'Merma registrada.');

    }

    /*
    =================================
    === Modificar un registro merma
    =================================
    */
    public function update(Request $request)
    {
        

        // 1. Obtener el ID del formulario
        $id = $request->input('id');

        

        // 2. Buscar el registro o lanzar 404 si no existe
        $merma = AjusteMerma::find($id);

        if (!$merma) {
            return redirect()
                ->route('merma.index')
                ->with('error', 'Registro de merma no encontrado.');
        }

        

        // 3. Validar los datos
        $validated = $request->validate([
            'cantidad' => 'required|integer|min:1',
            'causa' => 'required|string|max:255',
            'fecha' => 'nullable|date',
            'producto' => 'required|exists:productos,id',
            'usuario' => 'required|exists:usuarios,id',
        ]);

        

        // 4. Preparar datos para actualizar
        $data = [
            'cantidad' => $validated['cantidad'],
            'causa_ajuste' => $validated['causa'],
            'id_producto' => $validated['producto'],
            'id_usuario' => $validated['usuario'],
        ];

        

        // 5. Si se envió fecha, incluirla
        if (!empty($validated['fecha'])) {
            $data['fecha'] = $validated['fecha'];
        }

        
        // 6. Actualizar el registro
        $merma->update($data);

        
        // 7. Redirigir con mensaje de éxito
        return redirect()
            ->route('merma.index')
            ->with('success', 'Merma actualizada exitosamente.');
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
