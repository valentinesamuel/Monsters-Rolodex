import CardContainer from "../card-container/card-container.component";
import './card-list.styles.css'

const CardList = ({ monsters }) => {


      return <div className="card-list">
            {
                  monsters.map(monster => {
                        const { name, email, id } = monster
                        return <CardContainer key={id} name={name} email={email} id={id} />
                  })
            }
      </div>;

}

export default CardList;
