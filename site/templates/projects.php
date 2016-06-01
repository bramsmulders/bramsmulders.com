<?php snippet('header') ?>

    <main role="main">

        <h1><?php echo $page->title()->html() ?></h1>
        <?php echo $page->text()->kirbytext() ?>

        <?php snippet('projects') ?>

    </main>

<?php snippet('footer') ?>