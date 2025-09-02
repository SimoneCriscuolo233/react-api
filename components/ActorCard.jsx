const ActorCard = ({ actor }) => {
  const { image, name, birth_year, nationality, biography, awards } = actor
  return (
    <div className="col-4 mb-4">
      <div className="card shadow-lg h-100">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ maxHeight: "400px", objectFit: "cover", }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Born:</strong> {birth_year} <br />
            <strong>Nationality:</strong> {nationality}
          </p>
          <p className="small">{biography}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <strong>Awards:</strong> {Array.isArray(awards) && awards.length > 0 ? awards.join(', ') : awards}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ActorCard
