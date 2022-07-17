function Header() {
  return (
    <>
      <div className="header__container">
        <div className="container">
          <header className="header">
            <h1 className="heading-primary">
              <span className="heading-primary__sub">
                Hi, I'm <br /> Lorenzo Di Leonardo
              </span>
              <span className="heading-primary__main u_margin-top-l">
                <span className="heading-primary__main--top">
                  UX/UI designer
                </span>
                <span className="heading-primary__main--center u_show-on-tab">
                  &amp;
                </span>
                <span className="heading-primary__main--bottom">
                  <span className="u_hide-on-tab--inline">&amp;</span> creative
                  developer
                </span>
              </span>
            </h1>
          </header>
        </div>
        <div className="header__circle header__circle--first"></div>
        <div className="header__circle header__circle--second"></div>
        <div className="header__circle header__circle--third"></div>
      </div>
      <section className="section-introduction">
        <div className="container container-introduction">
          <div className="introduction">
            <div className="introduction__text">
              <p className="introduction__paragraph">
                I’m an <strong>UI/UX designer</strong> and a front-end{" "}
                <strong>developer</strong>, with a solid background in{" "}
                <strong>visual design</strong> and{" "}
                <strong>motion graphics</strong>.
              </p>
              <p className="introduction__paragraph">
                My work is driven by <strong>enthusiasm</strong> and curiosity
                towards <strong>technology</strong> as a{" "}
                <strong>creative tool</strong>, and by passion in exploring the
                ways in which humans can <strong>interact</strong> with it.
              </p>
              <span className="button button--link button--primary u_margin-top-l">
                See my resume &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
