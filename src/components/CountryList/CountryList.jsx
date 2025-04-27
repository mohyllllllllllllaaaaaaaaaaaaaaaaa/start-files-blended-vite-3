import Grid from '../Grid/Grid.jsx';
import GridItem from '../GridItem/GridItem.jsx';
import { Link, useLocation } from 'react-router-dom';

const CountryList = ({countries}) => {
const location= useLocation();

  return (
    <Grid>
      {countries.map(({id, flag, country}) =>
      <GridItem key={id}>
        <Link to={`/country/${id}`} state={{from: location}}>
       <img src={flag} alt={country} />
       </Link>
      </GridItem>
      )}
    </Grid>
  );
};
export default CountryList;
