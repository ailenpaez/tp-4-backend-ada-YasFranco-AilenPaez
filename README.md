# Documentación para el proyecto de app con protocolo TCP.

Esta es una app que corre en un servidor TCP, que permite realizar distintas acciones sobre dos bases de datos locales. Una de estas bases de datos es sobre libro y la otra sobre usuarios. A continuación se detallaran las distintas peticiones que pueden pasarse por consola, para que el cliente pueda acceder a la información deseada.
Este proyecto backend fue construído con node.js.

## Estructura del proyecto.

- controller
  - *bookController.js*
  - *server.js*
  - *userController.js*
- database
  - *books.json*
  - *users.json*
- model
  - *booksModel.js*
  - *usersModel.js*
- utils
  - *hashPassword.js*
- *index.js*

### Desarrollo de la estructura.

1. ***controller***
   - El server es el encargado de delegar a los controladores (books y users) las peticiones que recibe del cliente, para luego devolver lo que este retorna.
   - También se encuentran los controladores tanto de books como de users. Derivando del model las funciones que modifican las dos bases de datos, retornando el resultado al server, siendo este exitoso o no, a través de las alertas que maneja cada uno de los archivos.
2. ***database***
   - Aquí encontramos las dos bases de datos que contienen la información en un array de objetos. Cada uno con su estructura correspondiente.
3. ***model***
   - Estos dos archivos contienen la lógica que modifica la base de datos y retorna los resultados a controller.
4. ***utils***
   - Aquí encontramos el método para encriptar las contraseñas de los usuarios y brindarle mayor seguridad a la aplicación.
5. ***index.js***
   - Es el encargado de validar los datos que el cliente pasa por la consola para luego enviarle esa petición al server.

## Dependencia necesaria para su funcionamiento

- UUID ^9.0.1: para generar los id dinámicos tanto para books, cómo para usuarios.

## Bases de datos

Cada petición enviada por el cliente se almacena en una base de datos correspondiente con el siguiente formato:

1. ***books***
```
   {
   "title": "1984",
   "id": "8c26422d-8f0e-40c5-8763-a76d3ed17109",
   "author": "George Orwell",
   "tags": ["política", "historia", "distopía"]
   }
```

2. ***users***
```
   {
   "username": "marina",
   "userId": "3e4b4c02-3d26-4ee4-b1cc-9bc5601eee51",
   "password": "15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225"
   }
```

## Acciones que el cliente podría hacer

1. ***Getters***:

- **node index.js** | Obtener todos los datos de la base de datos.
- **node index.js --get id "id"** | Obtener un libro segun su ID.
- **node index.js --get title "title"** | Obtener un libro según su titulo.
- **node index.js --get author "author"** | Obtener libros según autor.
- **node index.js --get tag "tagname"** | Obtener libros según tag.

2. ***Setters***:

- **node index --add title "title" author "author" tags ""tag1-tag2-tag3"** | Agregar un nuevo libro a la base de datos.
- **node index --delete book id "id"** | Borrar un libro de la base de datos.
- **node index.js --add user "username" "password"** | Agregar un nuevo usuario a la base de datos.
- **node index --delete user "password"** | Borrar un libro de la base de datos.

##### **NOTA:**

- **Al agregar un nuevo libro, si el autor o el título contiene más de una palabra, se debe ingresar entre comillas. Los tags deben pasarse seguidos por un guión medio**.
- **Al agregar un nuevo usuario, la contraseña debe ser de 8 o más caracteres.**
- **Al borrar un usuario, se debe ingresar su contraseña.**

## Uso de la aplicación

Para la ejecución de esta aplicación, son necesarias dos consolas. Una será para levantar el servidor y otra para recibir las peticiones del cliente.
  En la consola del servidor se ejecutara el comando **"node ./controller/server.js"**, esta se debe ejecutar primero.
  En la consola del cliente, se ejecutaran los **getters o setters** deseados. Una vez enviada la petición se esperará una respuesta del servidor.
  La consola del cliente, finalizar la consulta permitirá volver a enviar otra petición.
  Si el comando que envía el cliente está incompleto o no es correcto, recibirá un mensaje del servidor para que ingrese los datos correctamente.

  ## Autoras
  
  * Yasmín Franco.
  * Ailén Páez.

##### **División de tareas:**
En el proceso del desarrollo de la app, al comenzar a encarar el proceso decidimos empezar como primera parte a desarrollar los archivos de *model* y *controller*. Una desarrolló la parte dirigida a usuarios, y la otra la dirigida a los libros.
Una vez que se probó que los archivos funcionaran correctamente, unimos los archivos que desarrolló cada una y comenzamos a desarrollar el *index* y el *server* en conjunto. Por momentos tuvimos dificultades, pero investigando y volviendo a ver las clases supimos resolverlas. Al tener estos archivos corriendo correctamente, comenzamos a ajustar las funcionalidades acordes a la consigna. Por ejemplo, al ingresar los tags con guiones, utilizamos el método ***slice***  y también ajustamos la funcionalidad para que la contraseña sea de 8 caracteres, eso se realizó en el archivo ***server.js***. Por último, en conjunto desarrollamos el módulo **utils** para hashear la contraseña en un archivo **hashPassword.js** y modificamos esa funcionalidad en el **model** de usuarios. Decidimos que para eliminar un usuario, este deba ingresar la **password** para que lo elimine de la base de datos. 
Así concluímos la finalización de la app. 