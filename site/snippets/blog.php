<?php
    $headingTypeInit = 'h3';
    if ($headingType) {
        $headingTypeInit = $headingType;
    }

    $headingModifierInit = '';
    if ($headingModifier) {
        $headingModifierInit = $headingModifier;
    }
?>

<section class="o-layer  t-zebra" id="section:articles">

    <div class="o-retain  o-retain--readable  module">
        <hgroup class="hgroup">
            <<?php echo $headingTypeInit; ?> class="<?php echo $headingModifierInit; ?>">Articles</<?php echo $headingTypeInit; ?>>
        </hgroup>

        <?php $articles = $pages->find('blog')->children()->visible()->flip()->paginate(5); ?>

        <?php if(count($articles) > 0): ?>
            <ul class="o-list-clean">
            <?php foreach($articles as $article): ?>
            <li>
                <article>
                    <time class="u-milli" datetime="<?php echo $article->date('Y-m-d'); ?>" pubdate>
                        <?php echo $article->date('M d Y'); ?>
                    </time>
                    <h1 class="u-h5  u-heading-linked">
                        <a class="js--pjax__link" href="<?php echo $article->url() ?>">
                            <?php echo $article->title(); ?>
                        </a>
                    </h1>
                </article>
            </li>
            <?php endforeach ?>
            </ul>

            <?php if($articles->pagination()->hasPages()): ?>
            <hr class="c-rule">
            <nav role="navigation">
                <?php if($articles->pagination()->hasPrevPage()): ?>
                    <a class="u-milli  link-humble" href="<?php echo $articles->pagination()->prevPageURL() ?>/#section:articles">Newer articles</a>
                <?php endif ?>

                <?php if($articles->pagination()->hasNextPage()): ?>
                    <a class="u-milli  link-humble" href="<?php echo $articles->pagination()->nextPageURL() ?>/#section:articles">Older articles</a>
                <?php endif ?>
            </nav>
            <?php endif ?>
        <?php else: ?>
        <p>It's lonely in here</p>
        <?php endif; ?>

    </div>

</section>