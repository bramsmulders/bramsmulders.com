<?php snippet('header'); ?>

        <div class="l-main">
            <div class="grid">
                <div class="grid__cell unit-1-1 unit-7-12--desk">

                    <section>

                        <article class="visuallyhidden">
                            <h1><?php echo html($page->title()) ?></h1>
                            <?php echo kirbytext($page->text()) ?>
                        </article>

                        <?php $articles = $page->children()->visible()->flip()->paginate(5); ?>

                        <?php if(count($articles->_) > 0): ?>
                            <?php foreach($articles as $article): ?>

                            <article class="media m-post">
                                <div class="media__img visuallyhidden--palm">
                                    <time datetime="<?php echo $article->date('Y-m-d'); ?>" pubdate class="m-post__date">
                                        <span class="brand--color"><?php echo $article->date('M d'); ?></span><br>
                                        <?php echo $article->date('Y'); ?>
                                    </time><!-- .m-post__date -->
                                </div><!-- .img -->
                                <div class="media__body">
                                    <div class="m-post__misc visuallyhidden--gt-palm browser-hidden">
                                        <span class="brand--color"><?php echo $article->date('M d'); ?></span>
                                        <?php echo $article->date('Y'); ?>
                                    </div><!-- .m-post__misc -->
                                    <h1>
                                        <a href="<?php echo $article->url() ?>" class="link--rev">
                                            <?php echo $article->title(); ?>
                                        </a>
                                    </h1>
                                </div><!-- .body -->
                            </article><!-- .media -->

                            <?php endforeach ?>

                            <?php if($articles->pagination()->hasPages()): ?>
                            <nav>
                                <ul class="nav nav--pagination">

                                <?php if($articles->pagination()->hasPrevPage()): ?>
                                <li class="pagination__first">
                                    <a class="prev" href="<?php echo $articles->pagination()->prevPageURL() ?>">newer posts</a>
                                </li>
                                <?php endif ?>

                                <?php if($articles->pagination()->hasNextPage()): ?>
                                <li class="pagination__last">
                                    <a class="next" href="<?php echo $articles->pagination()->nextPageURL() ?>">older posts</a>
                                </li>
                                <?php endif ?>

                                </ul><!-- .pagination -->
                            </nav>
                            <?php endif ?>
                        <?php else: ?>
                        <p>It's lonely in here</p>
                        <?php endif; ?>

                    </section>

                </div><!-- .grid__cell -->
                <div class="grid__cell unit-1-1 unit-4-12--desk push-1-12--desk">
                    <?php snippet('sidebar'); ?>
                </div><!-- .grid__cell -->
            </div><!-- .gw -->
        </div><!-- .l-main -->

<?php snippet('footer'); ?>