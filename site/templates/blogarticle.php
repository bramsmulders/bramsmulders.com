<?php snippet('header'); ?>

    <main role="main">

        <div class="o-layer  t-zebra">

            <div class="o-retain  o-retain--readable">

                <article>
                    <time datetime="<?php echo $page->date('Y-m-d'); ?>" pubdate>
                        <?php echo $page->date('M d Y'); ?>
                    </time>

                    <hgroup>
                        <h1><?php echo html($page->title()) ?></h1>
                        <p>Estimated reading time: <?php echo readingtime($page->text()) ?></p>
                    </hgroup>

                    <?php echo kirbytext($page->text()) ?>

                </article>
                <a href="<?php echo url('home') ?>#section:articles">< Back</a>

            </div><!-- .o-retain -->

        </div><!-- .o-layer -->

        <?php snippet('contentinfo') ?>

    </main>

<?php snippet('footer'); ?>