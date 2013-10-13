<?php snippet('header'); ?>
    <section>
        <article class="visuallyhidden">
            <h1><?php echo html($page->title()) ?></h1>
            <?php echo kirbytext($page->text()) ?>
        </article>
        <?php $articles = $pages->find('blog')->children()->visible()->flip()->limit(5); ?>
        <?php if(count($articles->_) > 0): ?>
            <?php foreach($articles as $article): ?>
            <article>
                <time datetime="<?php echo $article->date('Y-m-d'); ?>" pubdate>
                    <span class="brand--color"><?php echo $article->date('M d'); ?></span><br>
                    <?php echo $article->date('Y'); ?>
                </time>
                <h1>
                    <a href="<?php echo $article->url() ?>" class="link--rev">
                        <?php echo $article->title(); ?>
                    </a>
                </h1>
            </article>
            <?php endforeach ?>
        <?php else: ?>
        <p>It's lonely in here</p>
        <?php endif; ?>
    </section>

    <?php snippet('sidebar'); ?>
<?php snippet('footer'); ?>