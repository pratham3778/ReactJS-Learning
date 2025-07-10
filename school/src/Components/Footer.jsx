const Footer = () => {
  return (
    <footer
      style={{
        padding: '64px 100px',
        background: "#03011c",
        display: "flex",
        gap: 48,
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#f5f5f5",
            fontWeight: "500",
          }}
        >
          Code School
        </h2>
        <p
          style={{
            color: "#f5f5f5",
          }}
        >
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#f5f5f5",
            fontWeight: "500",
          }}
        >
          Useful Links
        </h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Teachers
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Holidays
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Talk to us
            </a>
          </li>
        </ul>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#f5f5f5",
            fontWeight: "500",
          }}
        >
          Social Links
        </h2>
        <ul
          style={{
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Youtube
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Facebook
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Linkedln
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#f5f5f5",
            fontWeight: "500",
          }}
        >
          Enquiry
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <input
            name="fullname"
            placeholder="Fullname"
            required
            style={{
              border: "none",
              padding: 12,
              borderRadius: 4,
            }}
          />

          <input
            name="email"
            placeholder="example@mail.com"
            type="email"
            required
            style={{
              border: "none",
              padding: 12,
              borderRadius: 4,
            }}
          />

          <textarea
            name="message"
            placeholder="Message"
            type="email"
            required
            style={{
              border: "none",
              padding: 12,
              borderRadius: 4,
            }}
          />

          <button
            style={{
              width: "fit-content",
              border: "none",
              background: "orange",
              color: "white",
              borderRadius: 4,
              padding: "12px 24px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
