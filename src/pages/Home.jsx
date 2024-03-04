function Home() {
  const style = {
    width: "20rem",
  };
  return (
    <div className="d-flex  mt-3 mb-3 justify-content-center">
      <div className="card" style={style}>
        <img className="card-img-top" src="./images/me.jpg" />
        <div className="card-body">
          <div className="card-title">
            <h2 className="text-center">Gatis Jansons</h2>
          </div>
          <p className="card-text  text-center ">
            Passionate, self-driven professional with a relentless commitment to
            personal and professional growth.
          </p>
          <p className="card-text text-center ">
            Please follow directions to view my projects{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
