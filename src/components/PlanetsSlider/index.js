// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  //   const settings = {
  //     dots: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     infinite: true,
  //     speed: 500,
  //   }

  return (
    <div className="planet-container" testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
