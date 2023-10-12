import { GitItem } from './GitItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

  /* const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages)
  }

  useEffect(() => {
    getImages();
  }, [])  */ 

  const {images, isLoading} = useFetchGifs( category );

  return (
    <>
        <h3>{category}</h3>
        {/* {
          isLoading ? (<h2>Cargando...</h2>) : null
        } */}
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>
          {images.map( (image) => (
            <GitItem 
              key={image.id}
              /* title={image.title}
              url={image.url} */
              { ...image }
            />
          ))}
        </div>
    </>
  )
}
