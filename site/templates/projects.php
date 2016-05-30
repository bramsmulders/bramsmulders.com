<?php snippet('header') ?>

    <main role="main">

        <div>
            <h1><?php echo $page->title()->html() ?></h1>
            <?php echo $page->text()->kirbytext() ?>
        </div>

        <hr>

        <?php snippet('projects') ?>

    </main>

<?php snippet('footer') ?>