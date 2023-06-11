import ImageShow from "./ImageShow";

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow image={image} />;
    });
    return (
        <div>
            number of images {images.length}
            {renderedImages}
        </div>
    );
}

export default ImageList;