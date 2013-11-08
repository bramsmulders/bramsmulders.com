<?php snippet('header'); ?>
    <article>
        <h1><?php echo html($page->title()) ?></h1>
        <?php echo kirbytext($page->text()) ?>
    </article>
    <?php snippet('sidebar'); ?>
<?php snippet('footer'); ?>