<?php snippet('header') ?>

    <main role="main">

        <article>
            <div class="masthead">
                <div class="masthead__content">
                    <div class="masthead__content__inner">
                        <div class="retain  module">
                            <hgroup class="hgroup">
                                <h1 class="h4  hN  color--gray-a  face--base"><?php echo $page->title()->html() ?></h1>
                                <h2 class="h1  hN"><?php echo $page->subtitle()->html() ?></h2>
                            </hgroup>

                            <p><?php echo $site->email()->html() ?><br><a href="<?php echo $site->twitterlink()->html() ?>"><?php echo $site->twitter()->html() ?></a></p>
                        </div>
                    </div>
                </div>
                <div class="masthead__visual">
                    <img class="masthead__visual__object" src="assets/images/bakkes.jpg" alt="Bram's Bakkes" data-img-replace="assets/images/bakkes-bling.jpg">
                </div>
            </div>

            <div class="retain">
                <?php echo $page->text()->kirbytext() ?>
            </div>

        </article>

    </main>

<?php snippet('footer') ?>