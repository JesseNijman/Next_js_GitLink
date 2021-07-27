import React from "react";

export default function Carousel(props) {
  const [pictureIndex, setPictureIndex] = React.useState(0);

  const lengthArray = props.allPictures.length;
  console.log("Array lengte is: " + props.allPictures.length);

  function ChangePictureIndex(direction) {
    if (direction == -1) {
      if (pictureIndex == 0) {
        setPictureIndex(pictureIndex + (lengthArray - 1));
      } else {
        setPictureIndex(pictureIndex - 1);
      }
    }

    if (direction == +1) {
      if (pictureIndex == lengthArray - 1) {
        setPictureIndex(0);
      } else {
        setPictureIndex(pictureIndex + 1);
      }
    }
  }

  return (
    <section>
      <img
        src={`/images/${props.allPictures[pictureIndex].image}`}
        alt={`${props.allPictures[pictureIndex].alt_text}`}
        className="w-full object-cover object-center h-96 pb-8"
        style={{ objectPosition: `${props.allPictures[pictureIndex].backPos}` }}
      />
      <ul className="list none text-center">
        {props.allPictures.map((allPicture, index) => (
          <li
            onClick={() => setPictureIndex(index)}
            className="inline-block w-36 h-24 mx-4 mb-8"
          >
            <img
              src={`/images/${allPicture.image}`}
              alt={`${allPicture.alt_text}`}
              className="h-full w-full object-cover object-center"
            />
          </li>
        ))}
      </ul>
      <div className="text-center flex justify-between">
        <button
          onClick={() => ChangePictureIndex(-1)}
          className="w-24 h-24 mx-4 my-0 p-0 text-white text-6xl"
        >
          &lsaquo;
        </button>
        <button
          onClick={() => ChangePictureIndex(+1)}
          className="w-24 h-24 mx-4 my-0 p-0 text-white text-6xl"
        >
          &rsaquo;
        </button>
      </div>
    </section>
  );
}
