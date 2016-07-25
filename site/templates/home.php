<?php snippet('header') ?>

    <main role="main">

        <article>
            <div class="c-masthead  js--vh-trick">
                <div class="c-masthead__content">
                    <div class="c-masthead__content__inner">
                        <div class="o-retain  o-retain--readable  module">
                            <hgroup class="hgroup">
                                <h1 class="u-h4  u-hN  u-color--gray-a  u-family-body"><?php echo $page->title()->html() ?></h1>
                                <h2 class="u-h1  u-hN"><?php echo $page->subtitle()->html() ?></h2>
                            </hgroup>

                            <p><?php echo $site->email()->html() ?><br><a href="<?php echo $site->twitterlink()->html() ?>"><?php echo $site->twitter()->html() ?></a></p>
                        </div>
                    </div>
                </div>
                <div class="c-masthead__visual">
                    <picture>
                        <source srcset="assets/images/bakkes.jpg" media="(min-width: 768px)">
                        <img class="c-masthead__visual__object" src="assets/images/bakkes-small.jpg" alt="Bram’s Bakkes">
                    </picture>
                </div>
            </div>

            <div class="o-layer">

                <div class="o-retain  o-retain--readable  module">
                    <?php echo $page->text()->kirbytext() ?>
                </div>

            </div>

        </article>

    </main>

<?php snippet('footer') ?>