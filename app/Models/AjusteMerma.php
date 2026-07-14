<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AjusteMerma extends Model
{
    use HasFactory;

    protected $table = 'ajuste_merma';

    protected $fillable = [
        'cantidad',
        'causa_ajuste',
        'fecha',
        'id_producto',
        'id_usuario',
    ];
}