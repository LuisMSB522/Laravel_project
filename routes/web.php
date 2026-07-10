<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});



//llamando los controladores de productos
use App\Http\Controllers\ProductoController;

Route::get('/productos', [ProductoController::class, 'index'])->name('productos.index');    //salida visual
Route::post('/productos', [ProductoController::class, 'store'])->name('productos.store');   //agregar un registro
Route::put('/productos', [ProductoController::class, 'update'])->name('productos.update');  //modificar un registro


//llamando los controladores de categoria
use App\Http\Controllers\CategoriaController;

Route::get('/categoria', [CategoriaController::class, 'index'])->name('categoria.index');   //salida visual
Route::post('/categoria', [CategoriaController::class, 'store'])->name('categoria.store');  //almacenar
Route::put('/categoria', [CategoriaController::class, 'update'])->name('categoria.update'); //modificar
