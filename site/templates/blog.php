<?php snippet('header'); ?>

    <main role="main">

        <h1><?php echo html($page->title()) ?></h1>
        <?php echo kirbytext($page->text()) ?>

        <?php $articles = $page->children()->visible()->flip()->paginate(5); ?>

        <?php if(count($articles) > 0): ?>
            <?php foreach($articles as $article): ?>

            <article>
                <time datetime="<?php echo $article->date('Y-m-d'); ?>" pubdate>
                    <?php echo $article->date('M d Y'); ?>
                </time>
                <h1>
                    <a href="<?php echo $article->url() ?>">
                        <?php echo $article->title(); ?>
                    </a>
                </h1>
            </article>

            <?php endforeach ?>

            <?php if($articles->pagination()->hasPages()): ?>
            <nav role="navigation">
                <?php if($articles->pagination()->hasPrevPage()): ?>
                    <a href="<?php echo $articles->pagination()->prevPageURL() ?>">Newer posts</a>
                <?php endif ?>

                <?php if($articles->pagination()->hasNextPage()): ?>
                    <a href="<?php echo $articles->pagination()->nextPageURL() ?>">Older posts</a>
                <?php endif ?>
            </nav>
            <?php endif ?>
        <?php else: ?>
        <p>It's lonely in here</p>
        <?php endif; ?>

    </main>

<?php snippet('footer'); ?>