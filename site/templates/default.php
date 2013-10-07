<?php snippet('header'); ?>

        <div class="l-main">
            <div class="grid">
                <div class="grid__cell unit-1-1 unit-7-12--desk">
                    <article>
                        <h1><?php echo html($page->title()) ?></h1>
                        <?php echo kirbytext($page->text()) ?>
                    </article>
                </div><!-- .grid__cell -->
                <div class="grid__cell unit-11 unit-4-12--desk push-1-12--desk">
                    <?php snippet('sidebar'); ?>
                </div><!-- .grid__cell -->
            </div><!-- .grid -->
        </div><!-- .l-main -->

<?php snippet('footer'); ?>