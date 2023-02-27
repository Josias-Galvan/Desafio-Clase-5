import ManagerUsuarios from './managers/ManagerUsuarios.js';

const ProductManager = new ManagerUsuarios();
const env = async() =>{
    let primeraConsultaUsuarios = await ProductManager.consultarProductos();
    console.log(primeraConsultaUsuarios); //Debe devolver vacío
    let consultarProductos = {
        title : "Manzana" ,
		price : "$14",
		thumbnail : "manzana.jpg" ,
		code : "1225" ,
		stock : "20",
		id : "1"
    }
    let result = await ProductManager.crearProducto(consultarProductos);
    console.log(result); //Debe devolver al usuario con un id
    let segundaConsultaUsuarios = await ProductManager.consultarProductos();
    console.log(segundaConsultaUsuarios); //Debe devolver al usuario instertado
}
env();