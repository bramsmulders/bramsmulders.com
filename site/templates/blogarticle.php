<?php snippet('header'); ?>

    <main role="main">

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
        <a href="<?php echo url('blog') ?>">< Back</a>

    </main>

<?php snippet('footer'); ?>