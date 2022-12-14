export const NavBar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">
            Brand
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">
                Reports <span className="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Send Message</a>
                </li>
                <li>
                  <a href="#">Users</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Advanced Options</a>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <a href="#">Settings</a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
