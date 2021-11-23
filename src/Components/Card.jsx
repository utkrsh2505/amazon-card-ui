function Card({ id, date, title, heading, heading2, title2, url }) {
  return (
    <>
      <div className={id}>
        <div className="box1">
          <h2>{date}</h2>
          <img style={{ width: "150px", height: "150px" }} src={url} />
        </div>

        <h2
          style={{
            border: "5px solid black",
            width: "200px",
            padding: "5px",
            color: "white",
            backgroundColor: "black",
            textAlign: "center"
          }}
        >
          {title}
        </h2>

        <p className="heading">
          {heading}
          <br /> {heading2}
        </p>
        <div>
          <h3 className="title2">{title2}</h3>
        </div>
      </div>
    </>
  );
}
export default Card;
