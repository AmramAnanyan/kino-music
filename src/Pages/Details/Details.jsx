import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/actions/asyncActions';
import { selectDetails } from '../../redux/actions/selectFunction';
import { StyledCompany, StyledDetailsImage, StyledDetailsLogo, StyledDetailsPage, StyledRedSpane, StyledSpanHash } from './styled';
import { NavBar } from "../../Components/Navbar/NavBar";
import { Top } from '../../Components/Top';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDetails(id))
  }, [id])
  
  const movieDetails = useSelector(selectDetails);
  const { budget, title, poster_path, overview,
     genres, homepage, popularity,
    release_date,production_companies,backdrop_path } = movieDetails;
  

  
  return (
    <StyledDetailsPage backImage={backdrop_path}>
      <NavBar />
      <StyledDetailsLogo>Details</StyledDetailsLogo>
      <div>
        <div className='titleStyle'>
          <StyledDetailsImage image={poster_path}></StyledDetailsImage>
          <div className='description'>
            <h1> <StyledRedSpane>Title:</StyledRedSpane>  {title} </h1>
            <h2> <StyledRedSpane>Popularity:</StyledRedSpane>  {popularity}</h2>
            <h3> <StyledRedSpane>Budget:</StyledRedSpane>  {budget}$</h3>
            <h3> <StyledRedSpane> RealseDate:</StyledRedSpane> {release_date?.split("-").sort().join("-")}</h3>
            <p>{overview}</p>
            <StyledRedSpane>Genres: </StyledRedSpane>
              {
                genres?.map((genre) => {
                  return <span key={genre.id}><StyledSpanHash>#</StyledSpanHash>{genre.name} </span>
                })
              }
            <h2>Oficial Page: <a href={homepage}>{title}</a> </h2>
            {
              production_companies?.map((prod) => {
                return (
                  <StyledCompany image={prod.logo_path}>
                     <div className='companyImage'></div>
                    <h5> <StyledRedSpane>Name:</StyledRedSpane>  {prod.name}</h5>
                    <h6> <StyledRedSpane>Originale Country:</StyledRedSpane>  {prod.origin_country}</h6>
                  </StyledCompany>
                )
              })
            }
          </div>
        </div>
        <div></div>
      </div>
      <Top />
    </StyledDetailsPage>
  )
}

export { Details };