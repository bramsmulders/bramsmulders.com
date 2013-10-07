<?php snippet('header'); ?>

        <div class="l-main">
            <div class="grid">
                    <div class="grid__cell unit-1-1 unit-7-12--desk">

                        <section class="media">
                            <div class="media__img visuallyhidden--palm">
                                <time datetime="<?php echo $page->date('Y-m-d'); ?>" pubdate class="m-post__date">
                                    <span class="brand--color"><?php echo $page->date('M d'); ?></span><br>
                                    <?php echo $page->date('Y'); ?>
                                </time>
                            </div>
                            <div class="media__body">
                                <article class="m-post">
                                    <div class="m-post__misc visuallyhidden--gt-palm browser-hidden">
                                        <span class="brand--color"><?php echo $page->date('M d'); ?></span>
                                        <?php echo $page->date('Y'); ?>
                                    </div><!-- .m-post__misc -->
                                    <hgroup>
                                        <h1 class="hN"><?php echo html($page->title()) ?></h1>
                                        <div class="m-post__misc micro">
                                            Estimated reading time: <?php echo readingtime($page->text()) ?>
                                        </div>
                                    </hgroup>
                                    <?php echo kirbytext($page->text()) ?>

                                    <a href="<?php echo url('blog') ?>">< Back</a>
                                </article>
                            </div>

                        </section>

                    </div><!-- .grid__cell -->
                <div class="grid__cell unit-1-1 unit-4-12--desk push-1-12--desk">
                    <?php snippet('sidebar'); ?>
                </div><!-- .grid__cell -->
            </div><!-- .gw -->
        </div><!-- .l-main -->

<?php snippet('footer'); ?>