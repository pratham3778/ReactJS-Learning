function App() {
  return (
    <div>
      <nav
        style={{
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            listStyle: "none",
            justifyContent: "space-evenly",
          }}
        >
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "8px",
                display: "block",
                fontSize: 18,
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "8px",
                display: "block",
                fontSize: 18,
              }}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "8px",
                display: "block",
                fontSize: 18,
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <section style={{
        width: '75%',
        padding: 34,
        background: '#f5f5f5',
        margin: '48px auto'
      }}>
        <h1> This is a section </h1>
      </section>

      <footer style={{
        background: '#323232',
        textAlign: 'center',
        color: 'white',
        padding: 100
      }}>
        <h1> This is footer</h1>
      </footer>
    </div>
  );
}

export default App;
