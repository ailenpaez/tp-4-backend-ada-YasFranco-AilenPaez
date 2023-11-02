# DESAFIO INTEGRADOR - NODE JS

## CONSIGNA

Desarrollar una app que corra en un servidor TCP, que permita realizar distintas acciones sobre dos bases de datos locales.
Una de las base de datos tiene libros, pero está incompleta. Tiene que tener como mínimo 18 libros y respetar su estructura. Completarla utilizando los comando correspondientes.
La otra base de datos tiene información relativa a usuarios: nombre de usuario, una contraseña hasheada y un id generado dinamicamente con uuid.
La app tiene que estar modularizada siguiento el patrón MVC.

- El usuario interactúa con un sólo modulo, pudiento realizar las siguientes acciónes:

## Input para manipular la data referente a libros:

### Getters

- node index.js | Obtener todos los datos de la DB
- node index.js --get id "id" | Obtener un libro segun su ID
- node index.js --get title "title" | Obtener un libro según su titulo
- node index.js --get author "author" | Obtener libros según autor
- node index.js --get tag "tagname" | Obtener libros según tag

## Setters

- node index --add title "title" author "author" tags ""tag1-tag2-tag3"
  Crea un nueva entrada en la DB con los datos especificados. Al ejecutar este comando, el nuevo libro ingresado tendrá un ID que es generado automaticamente con UUID. Al finalizar correctamente la operación, devolver un mensaje indicando al nombre y el ID generado del nuevo libro creado.

- node index --delete book id "id"
  Borra un libro de la DB. Al finalizar correctamente la operación, avisar al usuario con un mensaje.

## Input para manipular la data referente a asuarios:

## Setters

- node index.js --add user "username" "password"
  Agrega un nuevo usuario en users.json. El usuario ingresa su contraseña, la cual debe tener al menos 8 caracteres. Al plasmarse en la base de datos, la contraseña debe hashearse con el algoritmo SHA256 en formato hexadecimal con Crypto. Contenido visto en la clase del 9/10/2023. Y además deberá tener un id generado con uuid.

- node index --delete user "id"
  Borra un usuario de la base de datos, avisar al usuario un mensaje.

## A tener en cuenta:

- Manejar correctamente todos los errores, con sus respectivos mensajes.
- En caso de no encontrar alguna de las consultas anteriores, devolver un mensaje informando.
- Todas las consultas tienen que ser no sensitivas (no importa si el usuario ingresa minúsculas o mayúsculas). Validar en client.js.
- La entrega de este trabajo debe incluir un archivo README.md con instrucciones precisas para que cualquier usuario pueda usarlo sin problemas. Incluir información de los participantes del grupo.
- Explicar en el readme de qué forma modularizaron el código, indicando la función de cada módulo.
- Ordenar el proyecto en carpetas (como estuvimos trabajando estas últimas clases).
- El código tiene que estar ordenado, claro y sin comentarios.

## Consejos:

- Leer bien la consigna antes de escribir código. Emepezar a desarrollar una vez que entienden que deben hacer, como y por qué.
- Modularizar y repartir las tareas. Por ejemplo, una compañera puede encargarse de hacer todo lo relativo a los usuarios y otra a los libros. Luego en una etapa posterior conjugan las partes.
- No tratar de hacer mucho trabajo de una sola vez. Ir en trayectos cortos, validando cada paso y cada posible respuesta.
- Acuérdense de testear todo. Desde la conexión del cliente con el servidor, si el paquete de npm esta instalado e importado de la forma correcta, etc. Usar mucho el console.log para este punto pero no olvidar de eliminar todos los innescesarios a la hora de la entrega.
- Por más de que tengan tres semanas de desarrollo estipulen un día previo a la fecha final. Estos días suelen guardarse para testear la app y realizar correcciones en caso de que las haya.

## A la hora de evaluar se tendrá en cuenta:

> 6 | Programa funcionando, sin errores de programación, modularización, redacción de readme al menos explicando la estructura del proyecto.

> 7 | Programa funcionando, sin errores, con manejo de respuestas, modularizado y readme.

> 8 | Programa funcionando, sin errores, con manejo de respuestas.
> | Correctamente modularizado.
> | Archivo readme detallado, explicando claramente el proyecto y sus componentes.
> | Proyecto entregado en tiempo y forma.

> 9 | Programa funcionando, sin errores y con manejo de respuestas.
> | Correctamente modularizado.
> | Existe un patrón para nombrar cada elemento: carpetas, archivos, funciones, constantes, etc.
> | Archivo readme bien detallado, explicando claramente el proyecto y sus componentes, respetando la sintaxis de markdown. (.md).
> | Proyecto entregado en tiempo y forma.

> 10 | Programa funcionando, sin errores y con manejo de respuestas.
> | Todos los módulos respetan estrictamente su función.
> | El proyecto está ordenado por carpetas.
> | El proyecto está desarrollado de forma declarativa, clara y legible por otras personas.
> | Archivo readme bien detallado, explicando claramente el proyecto y sus componentes, respetando la sintaxis de markdown. (.md).
> | No hay codigo sobrante, solo el necesario para que cumpla de la forma más óptima la funcionalidad requerida.
> | Proyecto entregado en tiempo y forma.