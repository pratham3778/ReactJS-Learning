function App() {
  var x = 10;
  var y = 1;
  var z = x + y;
  /*console.log(z)*/
  return (
    <div>
      <h1
        style={{
          color: "red",
          fontSize: "50px",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        Dream{z} App v{1.01}{" "}
      </h1>
      <p
        style={{
          color: "blue",
          fontSize: "30px",
          backgroundColor: "pink",
          textAlign: "center",
        }}
      >
        Welcome to Dream11, Let's get Started !
      </p>
    </div>
  );
}

export default App;
