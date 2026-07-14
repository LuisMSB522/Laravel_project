<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categoria</title>
    <link rel="stylesheet" href= "{{ asset ('estilos/estilos.css')}}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

</head>

<body>


    <!--  
    =====================================================
    ===  Fondo oscuro y formularios ocultos 
    =====================================================
    -->

    <div class="fondo_oscuro"></div>







    <!--  
    =====================================================
    ===  Formulario - Agregar Categoria 
    =====================================================
    -->

        <!-- 
            El ID es usado por el CSS 
            La class es usada por el js
        -->


    <form class="formulario_categoria_agregar" id="formulario_vista" method="POST" action="{{ route('categoria.store') }}">
        @csrf

        <div class="fondo_formulario">
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Agregar Categoria</h2>
        </div>

        <div class="contenido_formulario">
            <p class="identificador_formulario">ID categoria</p>
            <input type="text" class="inpu1_categoria" placeholder="NOMBRE" name="nombre" required>
            <input type="text" class="inpu2_categoria" placeholder="DESCRIPCION" name="descripcion">

            <br>

            <div class="botonera_formulario">
                <button class="volver_formulario_categoria" id="volver_boton" type="button">Volver</button>
                <button class="salir_formulario_categoria" id="salir_boton" type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_formulario_categoria" id="siguiente_boton" type="button">Sig</button>
                <button class="enviar_formulario_categoria" id="enviar_boton" type="submit">Enviar</button>
            </div>
        </div>
    </form>









    <!--  
    =====================================================
    ===  Formulario - Modificar Categoria 
    =====================================================
    -->

    <form class="formulario_categoria_modificar" id="formulario_vista" 
        method="POST" 
        action="{{ route('categoria.update') }}">   <!-- ⬅️ Ruta fija, sin {id} -->

        @csrf
        @method('PUT')

        <div class="fondo_formulario">
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Modificar Categoria</h2>
        </div>

        <div class="contenido_formulario">
            <p class="identificador_formulario">ID categoria</p>
            
            <!-- Campo ID visible (el usuario lo escribe) -->
            <input type="number" class="inpu1_modificar" 
                   name="id" 
                   placeholder="ID de la categoría" 
                   required>

            <!-- Campo NOMBRE -->
            <input type="text" class="inpu2_modificar" 
                   name="nombre" 
                   placeholder="Nuevo nombre" 
                   required>

            <!-- Campo DESCRIPCION -->
            <input type="text" class="inpu3_modificar" 
                   name="descripcion" 
                   placeholder="Nueva descripción">

            <br>

            <div class="botonera_formulario">
                <button class="volver_modificar" id="volver_boton" type="button">Volver</button>
                <button class="salir_modificar" id="salir_boton" type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_modificar" id="siguiente_boton" type="button">Sig</button>
                <button class="enviar_modificar" id="enviar_boton" type="submit">Actualizar</button>
            </div>
        </div>
    </form>



    <!--  

    =====================================================
    ===  Menu lateral o nav de la ventana 
    =====================================================

    -->



    <div class="dashboard">

        <aside class="panel_control">

            <div class="nombre_comercio">
                <h1> Logo o nombre </h1>
            </div>


            <nav class="navegador">
            
                <ul>
            
                    <!--
                    =============== 
                    ==  Inicio
                    ===============
                    -->

                    <li class="nav_inicio"> <button> Inicio </button> </li>
            
                    <!-- navegador contenedor de los links URL-->
                    <ul id="direcciones" class="link_inicio">
                        <li class="activo_link"> <a href="">  1 </a></li>
                        <li> <a href="">  2 </a></li>
                        <li> <a href="">  3 </a></li>
                    </ul>
                    
            
                    <!--
                    =============== 
                    ==  Personal
                    ===============
                    -->

                    <li class="nav_personal"> <button> Personal y Seguridad </button> </li>
                    
                    <ul id="direcciones" class="link_personal">
                        <li> <a href="">  1 </a></li>
                        <li> <a href="">  2 </a></li>
                        <li> <a href="">  3 </a></li>
                    </ul>
                    
                    
                    <!--
                    =============== 
                    ==  Gestion interna
                    ===============
                    -->

                    <li class="nav_gestion"> <button> Gestion Interna </button> </li>
            
                    <ul id="direcciones" class="link_gestion">
                        <li> <a href="">  1 </a></li>
                        <li> <a href="">  2 </a></li>
                        <li> <a href="">  3 </a></li>
                    </ul>



                    <!--
                    =============== 
                    ==  Inventario
                    ===============
                    -->


                    <li class="nav_inventario"> <button class="activo"> Inventario </button> </li>
            
                    <ul id="direcciones" class="link_inventario">
                        <li>                     <a href="/productos">  Almacen    </a></li>
                        <li class="activo_link"> <a href="/categoria">  Categorias </a></li>
                        <li>                     <a href="/merma">      Merma      </a></li>
                    </ul>
                    


                    <!--
                    =============== 
                    ==  Ventas y Taller
                    ===============
                    -->

                    <li class="nav_ventas"> <button> Ventas y Taller </button> </li>
            
                    <ul id="direcciones" class="link_ventas">
                        <li> <a href="">  1 </a></li>
                        <li> <a href="">  2 </a></li>
                        <li> <a href="">  3 </a></li>
                    </ul>
                    
                    
                </ul>
            
            </nav>

            <div class="sidebar-footer">
            
                <a href="index.html" class="btn-logout"> <b> Cerrar sesion </b> </a>
            
            </div>

        </aside>




        <!--  
        =====================================================
        ===  Contenido principal de toda la ventana inventario
        =====================================================
        -->
    
        <div class="contenido_principal">
            


            <!--  Botonera y buscador  -->
            <nav class="navegador_principal">
                
                <button id="nav_verde"class = "agregar_categoria" >Agregar Categoria</button>
                <button id="nav_azul" class = "modificar_categoria" >Modificar Categoria</button>
                <input  id="nav_azul" class = "buscador" type="text" placeholder="ID/NOMBRE">
                <button id="nav_azul" class="boton_buscador">Buscar</button>
                <button id="nav_azul" class="boton_refrescar">Refrescar</button>

            </nav>

            <!--  Tabla de contenido que muestra los productos  -->


            <div class="tabla_contenedor">

                <table border="" class="tabla_categoria">
                
                    <!--  Aqui se mostrara las filas que refleja los datos de la BD alamcenados  -->
                    <tr>

                        <td>ID</td>
                        <td>Nombre</td>
                        <td>Descripcion</td>
                    
                    </tr>


                <!-- Muestra de los elementos por laravel  -->
        
                    <tbody class="contenedor_variables">
                        @forelse($categorias as $categoria)
                        <tr>
                            <td>{{ $categoria->id }}</td>
                            <td>{{ $categoria->nombre }}</td>
                            <td>{{ $categoria->descripcion ?? 'Sin descripción' }}</td>
                        </tr>
                        @empty
                        
                        <tr>
                            <td colspan="3" style="text-align: center;">No hay categorías registradas.</td>
                        </tr>
                        @endforelse
                    </tbody>

                </table>

            </div>


            <!-- Botonera para desaparecer y aparecer los siguientes elementos -->

            <div class="botonera_paginacion">
                <button class="paginacion_atras"    id="nav_rojo">Atras</button>
                <button class="paginacion_siguiente" id="nav_verde">Siguiente</button>
            </div>

        </div>

    </div>


    


    <!--  
    =====================================================
    ===  Importando los documentos JS 
    =====================================================
    -->

<script src="{{ asset ('logica/categoria/agregar.js')}}"></script>
<script src="{{ asset ('logica/categoria/modificar.js')}}"></script>
<script src="{{ asset ('logica/categoria/dividir_contenido.js')}}"></script>
<script src="{{ asset ('logica/categoria/buscador.js')}}"></script>
<script src="{{ asset ('logica/navegador.js')}}"></script>

</body>

</html>
