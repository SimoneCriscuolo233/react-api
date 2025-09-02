const ActressesCard = ({ actress }) => {
  return (
    <div className="col-4 mb-4">
      <div className="card shadow-lg h-100">
        <img
          src={actress.image}
          className="card-img-top"
          alt={actress.name}
          style={{ maxHeight: "400px", objectFit: "cover", }}
        />
        <div className="card-body">
          <h5 className="card-title">{actress.name}</h5>
          <p className="card-text">
            <strong>Born:</strong> {actress.birth_year} <br />
            <strong>Nationality:</strong> {actress.nationality}
          </p>
          <p className="small">{actress.biography}</p>
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

export default ActressesCard
