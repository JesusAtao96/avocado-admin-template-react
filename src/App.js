import "./App.css"

const App = () => {
  // var nav = document.getElementById("nav")
  const onToggle = () => {
    let nav = document.querySelector("#nav")
    // console.log("onToggle", nav)
    nav && nav.classList.toggle("c-nav--toggled")
  }

  if (window.innerWidth <= 600) {
    onToggle()
  }

  return (
    <div className="c-dashboard">
      <header className="c-header">
        <div className="c-header__toolbar">
          <h1 className="c-header__title">
            <i className="c-header__icon fas fa-home"></i>
            Home
          </h1>
          <a href="javascript:void(0)" className="c-header__logout">
            Cerrar Sesión
          </a>
        </div>
      </header>
      <nav id="nav" className="c-nav">
        <div className="c-nav__header">
          <h1 className="c-nav__logo">Avocado</h1>
          <button className="c-nav__toggle" onClick={onToggle}>
            <i className="c-nav__icon fas fa-bars"></i>
          </button>
        </div>
        <ul className="c-nav__menu">
          <li className="c-nav__item">
            <a className="c-nav__link" href="#" title="Home">
              <span className="c-nav__text">Home</span>
              <i className="c-nav__icon fas fa-home"></i>
            </a>
          </li>
          <li className="c-nav__item">
            <a className="c-nav__link" href="#" title="Dashboard">
              <span className="c-nav__text">Dashboard</span>
              <i className="c-nav__icon fas fa-clock"></i>
            </a>
          </li>
          <li className="c-nav__item">
            <a className="c-nav__link" href="#" title="Table">
              <span className="c-nav__text">Table</span>
              <i className="c-nav__icon fas fa-users"></i>
            </a>
          </li>
        </ul>
      </nav>
      <main className="c-dashboard__main"></main>
    </div>
  )
}

export default App
