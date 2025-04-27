import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import Loader from '../components/Loader/Loader';
import CountryList from '../components/CountryList/CountryList';

const SearchCountry = () => {
   const[countries, setCountries] = useState([]);
    const[error, setError] = useState(null);
    const[isLoading, setIsLoading]=useState(false);
  const[searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get("region")

    useEffect(() => {
      if(!region) return;

      const fetchData = async() => {
        setIsLoading(true)
        setError(null)
        try{
          const data= await fetchByRegion(region)
          setCountries(data)
        }catch (error) {
          setError(error)
        }finally{
          setIsLoading(false)
        }
      }
      fetchData()
    },[region])
  
  const handeleSubmit = value => {
setSearchParams({ region: value })
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handeleSubmit}/>
        {isLoading && <Loader/>}
        {error && <Heading title="Oops! something went wrong..." bottom/>}
        {countries.length > 0 && <CountryList countries={countries}/>}

        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default SearchCountry;
