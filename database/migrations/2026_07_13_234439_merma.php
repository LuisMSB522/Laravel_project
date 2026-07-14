<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    //creando la estructura de la tabla de ajuste inventario
       public function up(): void
    {
        Schema::create('ajuste_merma', function (Blueprint $table) {
            $table->id();
            $table->integer('cantidad');
            $table->text('causa_ajuste');
            $table->timestamp('fecha')->useCurrent(); 
            $table->foreignId('id_producto')->constrained('productos')->onDelete('restrict');
            $table->foreignId('id_usuario')->constrained('usuarios')->onDelete('restrict');
            $table->timestamps(); 
        });
    }



    public function down(): void
    {
        Schema::dropIfExists('ajuste_merma');
    }
};
