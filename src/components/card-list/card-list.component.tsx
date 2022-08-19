import { Monster } from "../../App";
import CardContainer from "../card-container/card-container.component";
import './card-list.styles.css'

type CardListProps = {
      monsters: Monster[];
}
const CardList = ({ monsters }:CardListProps) => {

      return <div className="card-list">
            {
                  monsters.map(monster => {
                        return <CardContainer key={monster.id} monster={monster} />
                  })
            }
      </div>;

}

export default CardList;
