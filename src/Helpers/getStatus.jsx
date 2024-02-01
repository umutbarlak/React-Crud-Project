const getStatus = (status) => {
  switch (status) {
    case "important":
      return (
        <span
          style={{ minWidth: "80px", maxWidth: "120px" }}
          className="badge bg-danger"
        >
          Önemli
        </span>
      );

    case "job":
      return (
        <span style={{ minWidth: "80px" }} className="badge bg-warning">
          İş
        </span>
      );

    case "daily":
      return (
        <span style={{ minWidth: "80px" }} className="badge bg-info">
          Günlük
        </span>
      );

    default:
      return (
        <span style={{ minWidth: "80px" }} className="badge bg-success">
          Varsayılan
        </span>
      );
  }
};

//col-sm-3 col-md-2

export default getStatus;
