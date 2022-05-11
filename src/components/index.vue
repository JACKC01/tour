<template>
  <div>
    <div class="navigation">
      <input id="navi-toggle" type="checkbox" class="navigation__checkbox">
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <a href="" class="navigation__link"><span>01</span>teneturquos</a>
          </li>
          <li class="navigation__item">      
            <a href="" class="navigation__link"><span>02</span>consectetud</a>
          </li>
          <li class="navigation__item">
            <a href="" class="navigation__link"><span>03</span>Magnifugaut</a>
          </li>
          <li class="navigation__item">      
            <a href="" class="navigation__link"><span>04</span>adipisicingdg</a>
          </li>
          <li class="navigation__item">      
            <a href="" class="navigation__link"><span>05</span>facilislibegfg</a>
          </li>
        </ul>
      </nav>
    </div>
    <header class="header">
      <div class="header__logo-box">
        <img
          class="header__logo"
          src="@/assets/images/logo-white.png"
          alt="Logo"
        />
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">OUTDOORS</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#" class="btn btn--white btn--animated">Discover our tours</a>
      </div>
    </header>
    <main>
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Exciting tours for adventurous people
          </h2>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-magin-bottom-small">tenetur unde fugiat eveniet</h3>
            <p class="paragraph">
              ipsum dolor sit amet consectetur, adipisicing elit. Officia
              exercitationem, tenetur unde fugiat eveniet cum? Reiciendis,
              blanditiis. Saepe sit officia temporibus vel adipisci tempora
              similique. Similique cupiditate asperiores quidem magni.
            </p>
            <h3 class="heading-tertiary u-magin-bottom-small">onsectetur adipisicing</h3>
            <p class="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              tenetur similique fugiat, doloremque rerum esse aliquam cumque,
              culpa ut suscipit facere repudiandae explicabo molestiae.
              Assumenda earum optio sapiente atque iusto?
            </p>
            <a href="#" class="btn-text">Learn more &rarr;</a>
          </div>
          <div class="col-1-of-2">
            <div class="composition">
              <img
                src="@/assets/images/p1.jpeg"
                alt="photo 1"
                class="composition__photo composition__photo--p1"
              />
            </div>
            <div class="composition">
              <img
                src="@/assets/images/p2.jpeg"
                alt="photo 1"
                class="composition__photo composition__photo--p2"
              />
            </div>
            <div class="composition">
              <img
                src="@/assets/images/p3.jpeg"
                alt="photo 1"
                class="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="section-features">
        <div class="row">
          <div class="col-1-of-4" v-for="(item, index) in 4" :key="index">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-world"></i>
              <h3 class="heading-teriary u-magin-bottom-small">
                Explore the world
              </h3>
              <p class="feature-box__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                reprehenderit, fuga dignissimos consequatur omnis a quaerat.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section-tours">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">Most popular tours</h2>
        </div>
        <div class="row">
          <div class="col-1-of-3" v-for="(item,index) in 3" :key="index">
            <div class="card">
              <div class="card__side card__side--front">
                <div :class="['card__picture', `card__picture--${index+1}`]">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span :class="[`card__heading-span`, `card__heading-span--${index+1}`]">The sea explorer</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>up to people</li>
                    <li>2 tour guides</li>
                    <li>sleep in cozy hotels</li>
                    <li>difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div :class="[`card__side card__side--back`, `card__side--back-${index+1}`]">
                <div class="card__cta"> 
                  <div class="card__price-box">
                    <p class="card__price-only">Only</p>
                    <p class="card__price-value u-margin-bottom-big">${{(index+1)*200+199}}</p>
                  </div>
                  <a href="#" class="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="u-center-text u-margin-bottom-huge">
          <a href="#" class="btn btn--green">Discaver all tours</a>
        </div>
      </section>
      <section class="section-stories">
        <!-- <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop>
            <source src="@/assets/tour.mp4" type="video/mp4">
            <source src="" type="video/webm">
          </video>
        </div> -->
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            We make people genuinely happy
          </h2>
        </div>
        <div class="row" v-for="(item,index) in 2" :key="index">
          <div class="story">
            <figure class="story__shape">
              <img class="story__img" src="~@/assets/images/p1.jpeg" alt="Person on a tour">
              <figcaption class="story__caption">May Smith</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">
                I had best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi odit veritatis in, id voluptates 
                explicabo perferendis cumque officia, error ab vitae. Iste maioresing elit.
                psum dolor sit amet consectetur adipisicing elit. Sequi odit veritatis in, id voluptates 
                explicabo perferendis cumque officia, error ab vitae. Iste maioresing elit.
              </p>
            </div>
          </div>
        </div>
        <div class="u-center-text u-margin-bottom-huge">
          <a href="#" class="btn-text">Discaver all stroies</a>
        </div>
      </section>
      <div class="section-book">
        <div class="row">
          <div class="book">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">Start booking now</h2>
                </div>
                <div class="form__group">
                  <input class="form__input" id="name" type="text" placeholder="Full Name" required>
                  <label class="form__label" for="name">Full Name</label>
                </div>
                <div class="form__group">
                  <input class="form__input" id="email" type="email" placeholder="Full address" required>
                  <label class="form__label" for="email">Full address</label>
                </div>
                <div class="form__group">
                  <div class="form__radio-group">
                    <input id="small" type="radio" class="form__radio-input" name="size">
                    <label class="form__radio-label" for="small">
                      <span class="form__radio-button"></span>
                      small tour group
                    </label>
                  </div>
                  <div class="form__radio-group">
                    <input id="large" type="radio" class="form__radio-input" name="size">
                    <label class="form__radio-label" for="large">
                      <span class="form__radio-button"></span>
                      Large tour group
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__logo-box">
        <img class="footer__logo" src="@/assets/images/logo-white.png" alt="">
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item"><a class="footer__link" href="#">consectetur</a></li>
              <li class="footer__item"><a class="footer__link" href="#">adipisicing</a></li>
              <li class="footer__item"><a class="footer__link" href="#">elit</a></li>
              <li class="footer__item"><a class="footer__link" href="#">obcaecati</a></li>
              <li class="footer__item"><a class="footer__link" href="#">amet</a></li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <div class="footer__copyright">
            Lorem ipsum dolor sit amet<a href="#" class="footer__link">cupiditate</a> consectetur adipisicing elit. Recusandae  tempore quis totam exercitationem eligendi temporibus. Hic voluptate consequatur quisquam explicabo dolorem, deleniti quidem 
            <a href="#" class="footer__link">totam voluptas</a>
          </div>
        </div>
      </div>
    </footer>
    <!-- <div class="popup">
      <div class="popup__content">
        <div class="popup__left">
          <img src="@/assets/images/p2.jpeg" alt="" class="popup__img">
          <img src="@/assets/images/p3.jpeg" alt="" class="popup__img">
        </div>
        <div class="popup__right">
          <h2 class="heading-secondary u-margin-bottom-small">开启您的旅程</h2>
          <h2 class="heading-tertiary u-margin-bottom-small">Lorem &ndash; ipsum dolor sit amet consectetur adipisicing.</h2>
          <p class="popup__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, saepe! Beatae voluptatibus sequi quidem accusamus, facilis voluptas ut incidunt laudantium molestiae dolorem, id nam explicabo repudiandae deserunt eos? Distinctio, animi.ipsum dolor sit amet consectetur adipisicing elit. Eaque sunt repudiandae, placeat quo sint possimus quisquam quibusdam, non nulla necessitatibus debitis a corrupti et omnis. Omnis odio maiores reprehenderit delectus?
          </p>
          <a href="#" class="btn btn--green">走&emsp;你</a>
        </div>
      </div>
    </div> -->
    
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "~@/styles/sass";
</style>
