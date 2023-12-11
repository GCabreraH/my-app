•	Se debe instalar node.js para Windows de “forma next, next, next”.
•	Estando parado en la raíz del proyecto, en la consola de Windows, se debe ejecutar la instrucción “npm i -g expo-cli” para instalar de forma global la CLI de expo que es necesaria para que al usar el servidor de desarrollo se pueda ejecutar y de un código QR que permite correr la aplicación o framework a través de código.
•	Luego “npm install” que instala más archivos.
o	Se debe ejecutar npm run web. En caso que no parta, se debe ejecutar:
o	“npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0” completando la instalación de aquellas cosas que podrían faltar.
o	se vuelve a ejecutar “npm run web” lo que debería levantar la app.
o	Nota: también están disponibles “npm run Android” y “npm run iOS”.

