const Home = () => {
  const handleClick = () => {
    console.log("Hello world");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
