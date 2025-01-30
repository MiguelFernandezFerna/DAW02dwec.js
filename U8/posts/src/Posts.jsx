// Importamos los hooks useState y useEffect de React
import {useState, useEffect} from 'react'
import Comentarios from './Comentarios';

// Definimos el componente funcional Posts
function Posts(){
    // Estado para almacenar los posts
    const[posts, setPosts] = useState([]);
    // Estado para manejar el estado de carga
    const [loading, setLoading] = useState(true);
    // Estado para almacenar los autores
    const [autores, setAutores] = useState([]);
    
    // Efecto para cargar los posts
    useEffect(() => {
        // Función asíncrona para obtener los posts
        async function fetchPosts() {
            // Hacemos la petición a la API
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            // Convertimos la respuesta a JSON
            const postList = await res.json();
            // Actualizamos el estado de los posts
            setPosts(postList);
        }

        // Llamamos a la función para obtener los posts
        fetchPosts();
    }, []) // Este efecto se ejecuta solo una vez al montar el componente

    // Efecto para cargar los nombres de los usuarios
    useEffect(() => {
        // Función asíncrona para obtener los nombres de usuarios
        async function fetchUserNames() {
            //los 3 puntos expanden todo el array
            // Creamos un nuevo array con los ids únicos de los autores, para que no haya repetidos
            const arrayAutoresUnicos = [...new Set(posts.map(post => post.userId))];
            const usuariosPromesas = arrayAutoresUnicos.map(uid => {
                return fetch( `https://jsonplaceholder.typicode.com/users/${uid}`)
                .then(respuesta => respuesta.json()) // Convertimos la respuesta a JSON)
            })
            // Hacemos la petición a las promesas de usuarios
            const usuarios = await Promise.all(usuariosPromesas);
            //Nos quedamos solo con el nombre
            const nombresUsuario = usuarios.map(usuario => usuario?.name);
            // Actualizamos el estado de los autores
            setAutores(nombresUsuario);
        }
        // Llamamos a la función para obtener los nombres de usuarios
        fetchUserNames();
    }, [posts]) // Este efecto se ejecuta cada vez que cambia el estado de posts
    

    // Renderizamos el componente y hacemos que se muestre en pantalla
    return (
        <>
            <div className='post-list'>
            {
                // Mapeamos los posts para renderizarlos
                //El ?. hace que si el autores no están cargados, no intente buscarlos
                posts.map(post => 
                    <div className='post' key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        {/* El -1 le ponemos porque los ID empiezan en 1, pero al tenerlo almacenado en un array, 
                        empieza desde 0, y para que coincidan le restamos uno */}
                        <p> Autores: {autores[post.userId -1]}</p>
                        <Comentarios postId={post.id}/>
                    </div>
                )
            }
            </div>
        </>
    )
}

// Exportamos el componente Posts
export default Posts