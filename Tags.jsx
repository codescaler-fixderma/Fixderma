function Tags({ cart }) {
  return (
    <>
      <nav className="navbar-expand-lg bg-grey border-bottom px-4 py-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center px-3 py-2">
            <a
              className="d-flex align-items-center text-decoration-none"
              href="/"
            >
              <img
                src="https://www.fixderma.com/cdn/shop/files/fixderma_logo_down.svg?v=1750145899&width=300"
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </a>

            <form className="d-flex align-items-center gap-3">
              <input
                className="form-control rounded-pill text-center"
                type="search"
                placeholder=" Search Here"
              />
              <div className="position-relative">
                <button type="button" className="btn btn-light">
                  🛒
                </button>
                <span
                  className="position-absolute top-0 start-100 translate-middle bg-info-subtle text-dark text-center"
                  style={{
                    borderRadius: "12rem",
                    width: "20px",
                    height: "20px",
                    fontSize: "12px",
                  }}
                >
                  {cart}
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              {/* === Face Dropdown === */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Face
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Face Wash</a></li>
                  <li><a className="dropdown-item" href="#">Face Serum</a></li>
                  <li><a className="dropdown-item" href="#">Sunscreen</a></li>
                  <li><a className="dropdown-item" href="#">Moisturizer</a></li>
                  <li><a className="dropdown-item" href="#">Lips Care</a></li>
                </ul>
              </li>

              {/* === Body Dropdown === */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Body
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Body Wash</a></li>
                  <li><a className="dropdown-item" href="#">Sunscreen</a></li>
                  <li><a className="dropdown-item" href="#">Body Spray</a></li>
                  <li><a className="dropdown-item" href="#">Cream</a></li>
                  <li><a className="dropdown-item" href="#">Lips Care</a></li>
                </ul>
              </li>

              {/* === Hair Dropdown === */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hair
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Shampoo</a></li>
                  <li><a className="dropdown-item" href="#">Conditioner</a></li>
                  <li><a className="dropdown-item" href="#">Serum</a></li>
                  <li><a className="dropdown-item" href="#">Lotion</a></li>
                </ul>
              </li>

              {/* === Sunscreen Dropdown === */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sunscreen
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Sunscreen Gel</a></li>
                  <li><a className="dropdown-item" href="#">Sunscreen Lotion</a></li>
                  <li><a className="dropdown-item" href="#">Sunscreen Cream</a></li>
                  <li><a className="dropdown-item" href="#">Sunscreen For Kids</a></li>
                  <li><a className="dropdown-item" href="#">Sunscreen Spray</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">New Launches</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Offers</a>
              </li>

              {/* === Category Dropdown === */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORY
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Sunscreen Cream</a></li>
                  <li><a className="dropdown-item" href="#">Face Serum</a></li>
                  <li><a className="dropdown-item" href="#">Face Wash</a></li>
                  <li><a className="dropdown-item" href="#">Hand Cream</a></li>
                  <li><a className="dropdown-item" href="#">Baby Care</a></li>
                  <li><a className="dropdown-item" href="#">Acne Care</a></li>
                </ul>
              </li>

              {/* === Concern Dropdown === */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONCERN
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Anti Ageing</a></li>
                  <li><a className="dropdown-item" href="#">Hair Problem</a></li>
                  <li><a className="dropdown-item" href="#">Dry Skin</a></li>
                  <li><a className="dropdown-item" href="#">Oily Skin</a></li>
                  <li><a className="dropdown-item" href="#">Acne</a></li>
                  <li><a className="dropdown-item" href="#">Moms and Baby Cares</a></li>
                </ul>
              </li>

              {/* === Ingredients Dropdown === */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ingredients
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Anti Ageing</a></li>
                  <li><a className="dropdown-item" href="#">Hair Problem</a></li>
                  <li><a className="dropdown-item" href="#">Dry Skin</a></li>
                  <li><a className="dropdown-item" href="#">Oily Skin</a></li>
                  <li><a className="dropdown-item" href="#">Acne</a></li>
                  <li><a className="dropdown-item" href="#">Moms and Baby Cares</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">RX Range</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Tags;
