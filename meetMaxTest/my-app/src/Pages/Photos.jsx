import { useContext } from "react";
import { MyContext } from "../Contexts/MyContext";
// import Button from './Button';
// import Header from '../Components/header';
import { HeartFill, Heart } from "react-bootstrap-icons";
import "./index.css";

function Photos() {
  const { photos, toggleFavorite, addToCart } = useContext(MyContext);

  return (
    <div>
      {photos.map((photo) => (
        
        <div key={photo.id} className="row">
            <img src={photo.url} alt={photo.id} className="a4" />
            {photo.isFavorited ? (
              <HeartFill
                className="favorite fill"
                onClick={() => {
                  toggleFavorite(photo.id);
                  console.log(photo.id);
                }}
              />
            ) : (
              <Heart
                className="favorite fill color"
                onClick={() => {
                  toggleFavorite(photo.id);
                  console.log("ok!");
                }}
              />
            )}
            {photo.isInCart ? (
              <button
                className="button"
                onClick={photo.isInCart ? null : () => addToCart(photo)}
              >
                <span>Add to cart</span>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    r="1.91"
                    cy="20.59"
                    cx="10.07"
                    className="cls-1"
                  ></circle>
                  <circle
                    r="1.91"
                    cy="20.59"
                    cx="18.66"
                    className="cls-1"
                  ></circle>
                  <path
                    d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                    className="cls-1"
                  ></path>
                  <polyline
                    points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                    className="cls-1"
                  ></polyline>
                </svg>
              </button>
            ) : (
              <button
                className="button"
                onClick={photo.isInCart ? null : () => addToCart(photo)}
              >
                <span>Add to cart</span>
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    r="1.91"
                    cy="20.59"
                    cx="10.07"
                    className="cls-1"
                  ></circle>
                  <circle
                    r="1.91"
                    cy="20.59"
                    cx="18.66"
                    className="cls-1"
                  ></circle>
                  <path
                    d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                    className="cls-1"
                  ></path>
                  <polyline
                    points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                    className="cls-1"
                  ></polyline>
                </svg>
              </button>
            )}
          </div>
        // </div>
      ))}
    </div>
  );
}

export default Photos;
