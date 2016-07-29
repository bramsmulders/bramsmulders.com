<?php snippet('header') ?>

    <main role="main">


        <div class="o-layer  t-zebra">

            <div class="o-retain  o-retain--readable">

                <h1><?php echo $page->title()->html() ?></h1>
                <?php echo $page->text()->kirbytext() ?>

            </div><!-- .o-retain -->

        </div><!-- .o-layer -->

        <?php snippet('contentinfo') ?>

    </main>

<?php snippet('footer') ?>