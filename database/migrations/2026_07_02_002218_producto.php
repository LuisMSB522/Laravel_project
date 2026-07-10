<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{


    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table){
            $table->id();
            $table->string('codigo', 50)->unique();
            $table->string('nombre', 50)->unique();
            $table->string('marca', 50);
            $table->string('medida_tecnica', 50);
            $table->integer('stock_actual')->default (0);
            $table->integer('stock_minimo')->default (5);
            $table->decimal('costo_compra', 12, 2)->default(0.00);
            $table->decimal('precio_venta', 12, 2)->default(0.00);
            $table->string('estado_logico', 20)->default('Activo');
            $table->foreignId('id_categoria')->constrained('categorias')->onDelete('cascade');
            $table->timestamps();

        });
    }



    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
