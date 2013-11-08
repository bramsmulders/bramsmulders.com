<?php snippet('header'); ?>
    <section>
        <time datetime="<?php echo $page->date('Y-m-d'); ?>" pubdate>
            <span class="brand--color"><?php echo $page->date('M d'); ?></span><br>
            <?php echo $page->date('Y'); ?>
        </time>
        <article>
            <hgroup>
                <h1 class="hN"><?php echo html($page->title()) ?></h1>
                <div class="micro">
                    Estimated reading time: <?php echo readingtime($page->text()) ?>
                </div>
            </hgroup>
            <?php echo kirbytext($page->text()) ?>

            <a href="<?php echo url('blog') ?>">< Back</a>
        </article>
    </section>
    <?php snippet('sidebar'); ?>
<?php snippet('footer'); ?>