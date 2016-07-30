<?php snippet('header'); ?>

    <main role="main" class="o-main  js--pjax__target">

        <div class="o-main__content  js--pjax__content">

            <div class="o-layer  t-zebra">

                <div class="o-retain  o-retain--readable">

                    <article>
                        <time datetime="<?php echo $page->date('Y-m-d'); ?>" pubdate>
                            <?php echo $page->date('M d Y'); ?>
                        </time>

                        <hgroup>
                            <h1><?php echo html($page->title()) ?></h1>
                            <p class="u-milli">Estimated reading time: <?php echo readingtime($page->text()) ?></p>
                        </hgroup>

                        <?php echo kirbytext($page->text()) ?>

                    </article>
                    <a class="js--pjax__link" href="<?php echo url('home') ?>#section:articles">< Back</a>

                </div><!-- .o-retain -->

            </div><!-- .o-layer -->

            <?php snippet('contentinfo') ?>

        </div>

    </main>

<?php snippet('footer'); ?>