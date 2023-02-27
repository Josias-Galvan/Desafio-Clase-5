import fs from 'fs';

const path = '../Productos.json'
export default class ManagerUsuarios {
    consultarProductos = async () => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8');
            console.log(data);
            const productos = JSON.parse(data);
            return productos;
        }
        else{
            return [] 
        }
    }
    crearProducto = async (usuario) => {
        const users =  await this.consultarProductos();
        if(users.length===0){
            usuario.id=1;
        }else{
            usuario.id = users[users.length-1].id+1;
        }
        users.push(usuario);
        await fs.promises.writeFile(path,JSON.stringify(users,null,'\t'));
        return usuario;
    }
}