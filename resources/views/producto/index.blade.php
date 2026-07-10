<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Producto</title>
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
    ===  Formulario Agregar producto 
    =====================================================

    -->


        <!-- 
            El ID es usado por el CSS 
            La class es usada por el js
        -->

    <form class="formulario_producto" id="formulario_vista" method="POST" action="{{ route('productos.store') }}">
        
        @csrf

        <div class="fondo_formulario">
            
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Agregar Producto</h2>

        </div>



        <div class="contenido_formulario">


            <p class="identificador_formulario">Codigo producto</p>
            <input type= "text"   class="inpu1_producto"   name="codigo"          placeholder="CODIGO"> 
            <input type= "text"   class="inpu2_producto"   name="nombre"          placeholder="NOMBRE"> 
            <input type= "number" class="inpu3_producto"   name="id_categoria"    placeholder="ID CATEGORIA"> 
            <input type= "text"   class="inpu4_producto"   name="marca"           placeholder="MARCA">
            <input type= "text"   class="inpu5_producto"   name="medida_tecnica"  placeholder="MEDIDA"> 
            <input type= "number" class="inpu6_producto"   name="stock_actual"    placeholder="STOCK ACTUAL"> 
            <input type= "number" class="inpu7_producto"   name="stock_minimo"    placeholder="STOCK MINIMO"> 
            <input type= "number" class="inpu8_producto"   name="costo_compra"    placeholder="COSTO">
            <input type= "number" class="inpu9_producto"   name="precio_venta"    placeholder="PRECIO"> 
            <input type= "text"   class="inpu10_producto"  name="estado_logico"   placeholder="ESTADO ACTUAL">  




            <br>


            <!-- 
                El ID es usado por el CSS 
                La class es usada por el js
            -->

            <div class="botonera_formulario">
            
                <button class="volver_formulario_producto"    id="volver_boton"     type="button">Volver</button>
                <button class="salir_formulario_producto"     id="salir_boton"      type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_formulario_producto" id="siguiente_boton"  type="button" >Sig</button>
                <button class="enviar_formulario_producto"    id="enviar_boton"     type="submit">Agregar</button>


            </div>

        </div>


    </form>








    <!--  

    =====================================================
    ===  Formulario Modificar producto 
    =====================================================

    -->

        <!-- 
            El ID es usado por el CSS 
            La class es usada por el js
        -->

    <form class="formulario_modificar" id="formulario_vista" method="POST" action="{{ route('productos.update') }}">
        
        @csrf
        @method('PUT')   
        
        <div class="fondo_formulario">
            
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Modificar Producto</h2>

        </div>


        <div class="contenido_formulario">


            <p class="identificador_modificar">ID producto</p>
            <input type= "number" class="inpu1_modificar"  name="id" placeholder="ID">
            <input type= "text"   class="inpu2_modificar"  name="codigo" placeholder="CODIGO"> 
            <input type= "text"   class="inpu3_modificar"  name="nombre" placeholder="NOMBRE"> 
            <input type= "number" class="inpu4_modificar"  name="id_categoria" placeholder="ID CATEGORIA"> 
            <input type= "text"   class="inpu5_modificar"  name="marca" placeholder="MARCA">
            <input type= "text"   class="inpu6_modificar"  name="medida_tecnica" placeholder="MEDIDA"> 
            <input type= "number" class="inpu7_modificar"  name="stock_actual" placeholder="STOCK ACTUAL"> 
            <input type= "number" class="inpu8_modificar"  name="stock_minimo" placeholder="STOCK MINIMO"> 
            <input type= "number" class="inpu9_modificar"  name="costo_compra" placeholder="COSTO">
            <input type= "number" class="inpu10_modificar" name="precio_venta" placeholder="PRECIO"> 
            <input type= "text"   class="inpu11_modificar" name="estado_logico" placeholder="ESTADO ACTUAL">  
            <input type= "text"   class="inpu12_modificar" name="" placeholder="MOTIVO DE LA MODIFICACION">  





            <br>


            <!-- 
                El ID es usado por el CSS 
                La class es usada por el js
            -->


            <div class="botonera_formulario">
            
                <button class="volver_formulario_modificar"    id="volver_boton"     type="button">Volver</button>
                <button class="salir_formulario_modificar"     id="salir_boton"      type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_formulario_modificar" id="siguiente_boton"  type="button" >Sig</button>
                <button class="enviar_formulario_modificar"    id="enviar_boton"     type="submit">Modificar</button>


            </div>

        </div>


    </form>











    <!--  

    =====================================================
    ===  Formulario Merma 
    =====================================================

    -->



        <!-- 
            El ID es usado por el CSS 
            La class es usada por el js
        -->

    <form class="formulario_merma" id="formulario_vista">


        <div class="fondo_formulario">
            
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Agregar Merma</h2>

        </div>


        <div class="contenido_formulario">


            <p class="identificador_merma">ID producto</p>
            <input type: text  class="inpu1_merma" name="id"      placeholder="ID">
            <input type: text  class="inpu2_merma" name="cantdad" placeholder="Cantidad">
            <input type: text  class="inpu3_merma" name="causa"   placeholder="Causa">
            <input type: text  class="inpu4_merma" name="fecha"   placeholder="Fecha">



            <br>


            <div class="botonera_formulario">
            
                <button class="volver_formulario_merma"    id="volver_boton"     type="button">Volver</button>
                <button class="salir_formulario_merma"     id="salir_boton"      type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_formulario_merma" id="siguiente_boton"  type="button" >Sig</button>
                <button class="enviar_formulario_merma"    id="enviar_boton"     type="submit">Reportar</button>


            </div>

        </div>

    </form>
    











    <!--  

    =====================================================
    ===  Menu lateral o nav de la ventana 
    =====================================================

    -->



    <div class="dashboard">
      
        
        <aside class="sidebar">

            <div class="nombre_comercio">
                <h1> Logo o nombre </h1>
            </div>


            <nav class="navegador">
            
                <ul>
            
                    <li class="active">
                        <a href="#"> <span>Inicio</span></a>
                    </li>
            
                    <li>
                        <a href="#"></i> <span>Personal</span></a>
                    </li>
            
                    <li>
                        <a href="#"> <span>Inventario</span></a>
                    </li>
            
                    <li>
                        <a href="#"> <span>Gestión interna</span></a>
                    </li>
            
                    <li>
                        <a href="#"><span>Ventas / Taller</span></a>
                    </li>
            
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
                
                <button id="nav_verde"class = "agregar_producto" >Agregar Producto</button>
                <button id="nav_azul" class = "modificar_producto" >Modificar Producto</button>
                <button id="nav_azul" class = "exportar_inventario" >Exportar Inventario</button>
                <button id="nav_rojo" class = "agregar_merma" >Agregar Merma</button>
                <input type="text">

            </nav>

            <!--  Tabla de contenido que muestra los productos  -->


            <div class="tabla_contenedor">

                <table border="">
                
                    <!--  Aqui se mostrara las filas que refleja los datos de la BD alamcenados  -->
                    <tr>

                        <td>ID</td>
                        <td>Codigo</td>
                        <td>nombre</td>
                        <td>categoria</td>
                        <td>Marca</td>
                        <td>Medida</td>
                        <td>Stock</td>
                        <td>Stock minimo</td>
                        <td>Costo</td>
                        <td>Precio</td>
                        <td>Estado</td>
                    
                    </tr>


                    <!-- Codigo para ver contenido BD -->


                    <tbody class = "contenedor_datos">


                        @forelse($productos as $producto)
                        <tr>

                            <td> {{$producto->id}} </td>
                            <td> {{$producto->nombre}} </td>
                            <td> {{$producto->codigo}} </td>
                            <td> {{$producto->marca}} </td>
                            <td> {{$producto->medida_tecnica}} </td>
                            <td> {{$producto->stock_actual}} </td>
                            <td> {{$producto->stock_minimo}} </td>
                            <td> {{$producto->costo_compra}} </td>
                            <td> {{$producto->precio_venta}} </td>
                            <td> {{$producto->estado_logico}} </td>
                            <td> {{$producto->id_categoria}} </td>
                        
                        </tr>

                        @empty

                        <tr>
                            <td colspan="11">No hay productos agregados</td>
                        </tr>
                        @endforelse

                        
                    </tbody >




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

<script src="{{ asset ('logica/inventario/dividir_contenido.js')}}"></script>
<script src="{{ asset ('logica/inventario/merma.js')}}"></script>
<script src="{{ asset ('logica/inventario/agregar.js')}}"></script>
<script src="{{ asset ('logica/inventario/modificar.js')}}"></script>

<!-- 
-->

</body>

</html>
