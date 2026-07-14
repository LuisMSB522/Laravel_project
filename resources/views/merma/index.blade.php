<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merma</title>
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
    ==================================
    == Formulario Agregar Merma 
    ==================================
    -->


        <!-- 
            El ID es usado por el CSS 
            La class es usada por el js
        -->

    <form class="formulario_agregar_merma" id="formulario_vista" method="POST" action="{{ route('merma.store') }}">
        @csrf

        <div class="fondo_formulario">
            
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Agregar Merma</h2>

        </div>



        <div class="contenido_formulario">


            <p class="identificador_agregar">ID Merma</p>
            <input type= "number" class="inpu1_agregar"  name="cantidad"   placeholder="CANTIDAD"> 
            <input type= "text"   class="inpu2_agregar"  name="causa"      placeholder="CAUSA">  
            <input type= "date"   class="inpu3_agregar"  name="fecha"      placeholder="FECHA">  
            <input type= "number" class="inpu4_agregar"  name="producto"   placeholder="ID PRODUCTO">  
            <input type= "number" class="inpu5_agregar"  name="usuario"    placeholder="ID USUARIO"> 



            <br>


            <!-- 
                El ID es usado por el CSS 
                La class es usada por el js
            -->

            <div class="botonera_formulario">
            
                <button class="volver_agregar"    id="volver_boton"     type="button">Volver</button>
                <button class="salir_agregar"     id="salir_boton"      type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_agregar" id="siguiente_boton"  type="button" >Sig</button>
                <button class="enviar_agregar"    id="enviar_boton"     type="submit">Enviar</button>


            </div>

        </div>


    </form>





    <!--  
    ==================================
    == Formulario Eliminar Merma 
    ==================================
    -->


        <!-- 
            El ID es usado por el CSS 
            La class es usada por el js
        -->

    <form class="formulario_eliminar_merma" id="formulario_vista">
        

        <div class="fondo_formulario">
            
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Eliminar Merma</h2>

        </div>



        <div class="contenido_formulario">


            <p class="identificador_eliminar">ID Merma</p>
            <input type= "text"   class="input1_eliminar"   placeholder="ID MERMA">
            <input type= "number" class="input2_eliminar"   placeholder="CANTIDAD"> 
            <input type= "text"   class="input3_eliminar"   placeholder="CAUSA">  
            <input type= "date"   class="input4_eliminar"   placeholder="FECHA">  
            <input type= "number" class="input5_eliminar"   placeholder="ID PRODUCTO">  
            <input type= "number" class="input6_eliminar"   placeholder="ID USUARIO"> 



            <br>


            <!-- 
                El ID es usado por el CSS 
                La class es usada por el js
            -->

            <div class="botonera_formulario">
            
                <button class="volver_eliminar"    id="volver_boton"     type="button">Volver</button>
                <button class="salir_eliminar"     id="salir_boton"      type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_eliminar" id="siguiente_boton"  type="button" >Sig</button>
                <button class="enviar_eliminar"    id="enviar_boton"     type="submit">Enviar</button>


            </div>

        </div>


    </form>




    <!--  
    ==================================
    == Formulario Modificar Merma 
    ==================================
    -->


        <!-- 
            El ID es usado por el CSS 
            La class es usada por el js
        -->

    <form class="formulario_modificar_merma" id="formulario_vista" method="POST" action="{{ route('merma.update') }}">
        
        @csrf
        @method('PUT')

        <div class="fondo_formulario">
            
            <h1>Inversiones Hermanos Fernandez</h1>
            <h2>Modificar Merma</h2>

        </div>



        <div class="contenido_formulario">


            <p class="identificador_modificar">ID Merma</p>
            <input type= "text"   class="input1_modificar"  name="id"       placeholder="ID MERMA">
            <input type= "number" class="input2_modificar"  name="cantidad" placeholder="CANTIDAD"> 
            <input type= "text"   class="input3_modificar"  name="causa"    placeholder="CAUSA">  
            <input type= "date"   class="input4_modificar"  name="fecha"    placeholder="FECHA">  
            <input type= "number" class="input5_modificar"  name="producto" placeholder="ID PRODUCTO">  
            <input type= "number" class="input6_modificar"  name="usuario"  placeholder="ID USUARIO"> 



            <br>


            <!-- 
                El ID es usado por el CSS 
                La class es usada por el js
            -->

            <div class="botonera_formulario">
            
                <button class="volver_modificar"    id="volver_boton"     type="button">Volver</button>
                <button class="salir_modificar"     id="salir_boton"      type="button"><i class="fas fa-power-off"></i></button>
                <button class="siguiente_modificar" id="siguiente_boton"  type="button" >Sig</button>
                <button class="enviar_modificar"    id="enviar_boton"     type="submit">Enviar</button>


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
                        <li> <a href="">  1 </a></li>
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
                        <li>                     <a href="/categoria">  Categorias </a></li>
                        <li class="activo_link"> <a href="/merma">      Merma      </a></li>
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
                
                <button id="nav_verde" class = "agregar_merma" >Agregar Merma</button>
                <button id="nav_azul"  class = "modificar_merma" >Modificar Merma</button>
                <button id="nav_rojo"  class = "eliminar_merma" >Eliminar Merma</button>
                <input  id="nav_azul"  class = "buscador"  type="text" placeholder="ID/Producto/Usuario">
                <button id="nav_azul"  class = "boton_buscador" >Buscar</button>
                <button id="nav_azul"  class = "boton_refrescar" >Refrescar</button>

            </nav>

            <!--  Tabla de contenido que muestra los productos  -->


            <div class="tabla_contenedor">

                <table border="">
                
                    <!--  Aqui se mostrara las filas que refleja los datos de la BD alamcenados  -->
                    <tr>

                        <td>ID Merma</td>
                        <td>Cantidad</td>
                        <td>Causa</td>
                        <td>Fecha de ajuste</td>
                        <td>ID del producto</td>
                        <td>ID del usuario</td>
                    
                    </tr>

                    <!--  codigo del blade para mostrar los registros  -->
                    <tbody class="contenedor_variables">

                        @forelse($merma as $mer)
                        
                        <tr>
                            <td> {{ $mer->id }}</td>
                            <td> {{ $mer->cantidad }}</td>
                            <td> {{ $mer->causa_ajuste }}</td>
                            <td> {{ $mer->fecha }}</td>
                            <td> {{ $mer->id_producto }}</td>
                            <td> {{ $mer->id_usuario }}</td>
                        </tr>

                        @empty
                        <tr>
                            <td colspan="6" style="text-align: center;">No hay registros de merma.</td>
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

<script src="{{ asset ('logica/merma/agregar.js')}}"></script>
<script src="{{ asset ('logica/merma/eliminar.js')}}"></script>
<script src="{{ asset ('logica/merma/modificar.js')}}"></script>
<script src="{{ asset ('logica/merma/buscador.js')}}"></script>
<script src="{{ asset ('logica/merma/dividir_contenido.js')}}"></script>
<script src="{{ asset ('logica/navegador.js')}}"></script>

</body>

</html>
