import  '../css/components.css';
//import imgWebPack from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) =>{

    console.log(nombre);

    const h1 = document.createElement( 'h1' );
    h1.innerText = `Hola ${nombre}!!!!!`;
    document.body.append(h1);

  //  console.log(imgWebPack);
    //const img = document.createElement('img');
    //img.src = imgWebPack;
    //document.body.append( img );
}