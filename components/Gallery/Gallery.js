import ImageGallery from 'react-image-gallery';

/*const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];}*/

const MyGallery = ({images}) => {
  images.forEach(function(obj) {
    obj.original = obj.image.publicUrlTransformed;
    obj.thumbnail = obj.image.publicUrlTransformed;
  
  });
  console.log(images)
  


    return <ImageGallery items={images} />;
  }


export default MyGallery;