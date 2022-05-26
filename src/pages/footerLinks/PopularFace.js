import React, { useEffect, useState } from "react";

//lazy load images
import { LazyLoadImage } from "react-lazy-load-image-component";

import axios from "../../config/axios";
import { requests } from "../../config/apiConfig";

//style
import styled from "styled-components";
import { StyledHeader } from "../../style/Main.style";
import { CardContainer, Card } from "../style/Movies.styles";

//img base
import { img_base_url } from "../../config/imgConfig";

//component
import { Pagination } from "../../components/Pagination";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setPaginate } from "../../features/pagination/PaginationSlice";

const PopularFace = () => {
  const dispatch = useDispatch();

  //global state
  const { page } = useSelector((state) => state.paginate);

  //local state
  const [people, setPeople] = useState([]);
  const [totalPages, setTotalPages] = useState();

  // getting the default value
  useEffect(() => {
    dispatch(setPaginate(1));
  }, [dispatch]);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    try {
      const { data } = await axios.get(requests.fetchTmdbPopular, {
        params: { page: page },
      });

      setPeople(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  //taking to video route
  return (
    <div>
      <StyledHeader />
      <Container>
        <CardContainer>
          {people &&
            people.map(
              (person) =>
                person.profile_path && (
                  <Card key={person.id}>
                    <LazyLoadImage
                      src={img_base_url + person.profile_path}
                      alt=""
                    />
                    <div className="name">
                      {person?.original_name || person?.name}
                    </div>
                  </Card>
                )
            )}
        </CardContainer>

        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </Container>
    </div>
  );
};

const Container = styled.div`
  padding: 0px 52px;

  @media only screen and (max-width: 600px) {
    padding: 0px 25px;
  }
`;

export default PopularFace;
