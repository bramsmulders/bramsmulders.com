<?php snippet('header'); ?>
    <section id="hero" class="masthead  text--center  js--page-section">
        <div class="hero">
            <ul
                class="hero__panes  js--cycle"
                id="js--cycle-hero"
                data-slides=">li"
                data-cycle-pager=".spotlight__pager"
                data-cycle-fx="fade"
                data-auto-height="0"
                data-speed="1000"
                data-timeout="8000"
            >
                <li class="hero__pane  color--white">
                    <div class="background  background--rain"></div>
                    <div class="hero__center  is-animated">
                        <h1 class="giga">Hi, my name is Bram Smulders</h1>
                        <p class="caps">I'm a UX-designer, Front-end architect, writer and I create awesome stuff for the web.</p>
                        <a href="#about" class="button  button--white">About</a>
                    </div><!-- .hero__center -->
                </li><!-- .hero__pane -->
            </ul><!-- .hero__panes -->
        </div><!-- .hero -->
    </section><!-- .masthead -->

    <section id="about" class="layer  layer--large  layer--lightest  text--center  js--page-section">
        <div class="site--retain">
            <div class="hgroup  sign">
                <h1 class="delta  hN  color--light">About me</h1>
                <h2 class="alpha  hN  color--dark">This is how i roll</h2>
            </div><!-- .hgroup -->
            <hr class="rule  rule--tiny">
            <div class="carousel">
                <ul class="carousel__panes  js--cycle"
                    id="js--cycle-carousel"
                    data-slides=">li"
                    data-cycle-pager=".carousel__pager"
                    data-cycle-fx="scrollHorz"
                    data-auto-height="0"
                    data-speed="400"
                    data-timeout="8000"
                >
                    <li class="carousel__pane">
                        <h3 class="brand--color  flatten">I Design</h3>
                        <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</p>
                    </li><!-- .carousel__pane -->
                    <li class="carousel__pane">
                        <h3 class="brand--color  flatten">I Code</h3>
                        <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</p>
                    </li><!-- .carousel__pane -->
                    <li class="carousel__pane">
                        <h3 class="brand--color  flatten">I Create</h3>
                        <p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</p>
                    </li><!-- .carousel__pane -->
                </ul><!-- .carousel__panes -->
                <button
                    class="carousel__control  is-prev  button  button--brand  js--cycle-carousel-controller"
                    data-cycle-cmd="prev"
                    data-cycle-context="#js--cycle-carousel"
                ><</button>
                <button
                    class="carousel__control  is-next  button  button--brand  js--cycle-carousel-controller"
                    data-cycle-cmd="next"
                    data-cycle-context="#js--cycle-carousel"
                >></button>
            </div><!-- .carousel -->
        </div><!-- .site-retain -->
    </section><!-- layer -->

    <section id="process" class="layer  layer--large  layer--brand  color--white  text--center  js--page-section">
        <div class="site--retain">
            <div class="hgroup  sign">
                <h1 class="delta  hN">Process</h1>
                <h2 class="alpha  hN">How I do it</h2>
            </div><!-- .hgroup -->
            <hr class="rule  rule--tiny  rule--white">

            <div class="grid">
                <div class="grid__cell  unit-3-12  text--center">
                    <h3 class="flatten">Title</h3>
                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression.</p>
                </div><!-- .grid__cell -->
                <div class="grid__cell  unit-3-12  text--center">
                    <h3 class="flatten">Title</h3>
                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression.</p>
                </div><!-- .grid__cell -->
                <div class="grid__cell  unit-3-12  text--center">
                    <h3 class="flatten">Title</h3>
                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression.</p>
                </div><!-- .grid__cell -->
                <div class="grid__cell  unit-3-12  text--center">
                    <h3 class="flatten">Title</h3>
                    <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression.</p>
                </div><!-- .grid__cell -->
            </div><!-- .grid -->
        </div><!-- .site-retain -->
    </section><!-- layer -->

    <section id="portfolio" class="layer  layer--large  text--center  js--page-section">
        <div class="site--retain">
            <div class="hgroup  sign">
                <h1 class="delta  hN  color--light">Portfolio</h1>
                <h2 class="alpha  hN  color--dark">I’ve made websites, frameworks , guidelines</h2>
            </div><!-- .hgroup -->
            <hr class="rule  rule--tiny">
            <div class="grid">

                <div class="grid__cell  unit-4-12">
                    <article class="jetpack">
                        <div class="jetpack__overlay">
                            <div class="jetpack__center">
                                <div class="hgroup">
                                    <h1 class="jetpack__title  gamma  hN">Blocss</h1>
                                    <h2 class="jetpack__subtitle  milli  hN">Front-end framework</h2>
                                </div>
                            </div><!-- .jetpack__center -->
                        </div><!-- .jetpack__overlay -->
                        <img src="<?php echo url('public/gfx/theme/cases/blocss.png'); ?>" alt="" class="jetpack__platform">
                        <a href="https://github.com/Blocss/blocss" class="jetpack__link" rel="external">Blocss Front-end framework</a>
                    </article><!-- .jetpack -->
                </div><!-- .grid__cell -->

                <div class="grid__cell  unit-4-12">
                    <article class="jetpack">
                        <div class="jetpack__overlay">
                            <div class="jetpack__center">
                                <div class="hgroup">
                                    <h1 class="jetpack__title  gamma  hN">Scoor je stage</h1>
                                    <h2 class="jetpack__subtitle  milli  hN">for freshheads</h2>
                                </div>
                            </div><!-- .jetpack__center -->
                        </div><!-- .jetpack__overlay -->
                        <img src="<?php echo url('public/gfx/theme/cases/scoorjestage.png'); ?>" alt="" class="jetpack__platform">
                        <a href="http://www.knvbtalentteam.nl" class="jetpack__link" rel="external">Scoor je stage</a>
                    </article><!-- .jetpack -->
                </div><!-- .grid__cell -->

                <div class="grid__cell  unit-4-12">
                    <article class="jetpack">
                        <div class="jetpack__overlay">
                            <div class="jetpack__center">
                                <div class="hgroup">
                                    <h1 class="jetpack__title  gamma  hN">Scoor je stage</h1>
                                    <h2 class="jetpack__subtitle  milli  hN">for freshheads</h2>
                                </div>
                            </div><!-- .jetpack__center -->
                        </div><!-- .jetpack__overlay -->
                        <img src="//lorempixel.com/340/340/city/3" alt="" class="jetpack__platform">
                        <a href="http://www.knvbtalentteam.nl" class="jetpack__link" rel="external">Scoor je stage</a>
                    </article><!-- .jetpack -->
                </div><!-- .grid__cell -->

            </div>
        </div><!-- .site-retain -->
    </section><!-- layer -->
<?php snippet('footer'); ?>