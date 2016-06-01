<?php snippet('header') ?>

    <main role="main">
        <article>
            <h1><?php echo $page->title()->html() ?></h1>

            <ul>
                <li><b>Year:</b> <time><?php echo $page->year() ?></time></li>
                <li><b>Tags:</b> <?php echo $page->tags() ?></li>
            </ul>

            <?php echo $page->text()->kirbytext() ?>
        </article>

        <nav role="navigation">
            <?php if($prev = $page->prevVisible()): ?>
            <a href="<?php echo $prev->url() ?>">Previous project</a>
            <?php endif ?>
            <?php if($next = $page->nextVisible()): ?>
            <a href="<?php echo $next->url() ?>">Next project</a>
            <?php endif ?>
        </nav>
    </main>

<?php snippet('footer') ?>