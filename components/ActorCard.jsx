const ActorCard = ({ actor }) => {
  return (
    <div className="col-4 mb-4">
      <div className="card shadow-lg h-100">
        <img
          src={actor.image}
          className="card-img-top"
          alt={actor.name}
          style={{ maxHeight: "400px", objectFit: "cover", }}
        />
        <div className="card-body">
          <h5 className="card-title">{actor.name}</h5>
          <p className="card-text">
            <strong>Born:</strong> {actor.birth_year} <br />
            <strong>Nationality:</strong> {actor.nationality}
          </p>
          <p className="small">{actor.biography}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <strong>Awards:</strong> {actor.awards.join(', ')}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ActorCard
