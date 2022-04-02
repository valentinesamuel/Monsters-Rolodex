import './card-component.css'


const CardContainer = ({ monster }) => {
      const { id, name, email } = monster


      return (
            <div className="card-container" key={id}>
                  <img src={`https://robohash.org/${id}?set=set2&size=100x100`} alt={name} />
                  <h2>{name}</h2>
                  <p>{email}</p>
            </div>
      )

}

export default CardContainer