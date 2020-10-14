import { toast, ToastOptions } from "react-toastify";
import React, { useContext } from "react";
import { Store } from "./Store";

interface Iprops {
  episode: any;
  favourite?: boolean;
}

function Episode(props: Iprops) {
  const [state, dispatch] = useContext(Store);
  const { favourites } = state;
  const { episode, favourite } = props;
  const { image, name, summary, url } = episode;
  const summaryString = summary?.substring(3, summary.lastIndexOf("<" || "."));
  const handleFavAdd = (episode: any) => {
    const isExist = favourites.find(
      (elmenent: any) => elmenent.airdate === episode.airdate
    );
    if (!isExist) dispatch({ type: "ADD_FAVOURITE", payload: episode });
    const direction: string = isExist === undefined ? `success` : `info`;
    showToast(direction);
  };
  const handleFavDeletion = (episode: any): void => {};
  const showToast = (direction: string) => {
    const options: ToastOptions = {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    const message: string =
      direction === "success"
        ? "This episode is added to your favourites"
        : "Episode already added to favourites!";
    if (direction === `success`) toast.success(message, options);
    else toast.info(message, options);
  };
  return (
    <div className="episode">
      <div className="episode__image">
        <img src={image.original} alt="img" />
      </div>
      <div className="episode__details">
        <h1 className="episode__title">{name}</h1> <span>{}</span>
        <p className="episode__summary">{summaryString}</p>
      </div>
      <div className="episode__buttons">
        {favourite ? (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FAVOURITE", payload: episode })
            }
            className="episode__button episode__button--favorite--delete"
          >
            delete
          </button>
        ) : (
          <button
            onClick={() => handleFavAdd(episode)}
            className="episode__button episode__button--favorite"
          >
            add to favourite
          </button>
        )}
        <a
          href={url}
          target="_blank"
          className="episode__link episode__button--watch"
        >
          Watch
        </a>
      </div>
    </div>
  );
}

export default Episode;
