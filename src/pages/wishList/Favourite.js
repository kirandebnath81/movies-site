import React from "react";

//logo
import playLogo from "../../img/play.png";

//style
import { Container, CardContainer, Card } from "./style/WishList.styles";
import { StyledHeader } from "../../style/Main.style";
import { Button } from "../watch/style/Header.styles";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setMediaType } from "../../features/media/mediaSlice";
import { deleteMedia } from "../../features/wishList/wishListSlice";

//router
import { useNavigate } from "react-router-dom";

//base url
const image_base_url = "https://image.tmdb.org/t/p/original";

const Favourite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favouriteList } = useSelector((state) => state.wishList);

  const clickHandler = (id, media_type) => {
    navigate(`/${media_type}/${id}`);
    dispatch(setMediaType(media_type));
  };

  return (
    <>
      <StyledHeader />
      <Container>
        <CardContainer>
          {favouriteList.length > 0 ? (
            favouriteList.map((movie) => (
              <Card key={movie.id}>
                <img
                  src={movie.poster_path && image_base_url + movie.poster_path}
                  alt={movie.original_title}
                />
                <div>
                  <img
                    src={playLogo}
                    alt=""
                    onClick={() => clickHandler(movie?.id, movie?.media_type)}
                  />

                  <Button
                    onClick={() =>
                      dispatch(
                        deleteMedia({
                          listType: "favourite",
                          id: movie.id,
                        })
                      )
                    }
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <h2 style={{ margin: "50px 0px" }}>No Items Added</h2>
          )}
        </CardContainer>
      </Container>
    </>
  );
};

export default Favourite;
