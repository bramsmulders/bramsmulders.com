<?php snippet('header') ?>

    <main role="main" class="o-main  js--pjax__target">

        <div class="o-main__content  js--pjax__content">

            <div class="o-layer  t-zebra">

                <div class="o-retain  o-retain--readable">

                    <h1><?php echo $page->title()->html() ?></h1>
                    <?php echo $page->text()->kirbytext() ?>

                </div><!-- .o-retain -->

            </div><!-- .o-layer -->

            <?php snippet('contentinfo') ?>

        </div>

    </main>

<?php snippet('footer') ?>