import { useEffect, useState } from "react";

const Comentarios = ({postId})=> {
    //Hacemos los comentarios de los posts, para el estado de los comentarios
    const [comentarios, setComentarios] = useState([]);

    useEffect(()=>{
        async function fetchComentarios(){
            //cogemos solo los comentarios que necesitemos de los posts,
            //usaremos para detectar el comentario que queremos el postId que pase en la constante
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const data = await response.json();
            setComentarios(data);
        }
        fetchComentarios();
    },[])

    //Mostramos los comentarios en el HTML
    return (<details>
        <summary>Comentarios: </summary>
        {comentarios.map(comentario => 
            <p key={comentario.id}>
                {comentario.name}: {comentario.body}
            </p>
        )}
    </details>)
}

export default Comentarios;