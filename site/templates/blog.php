<?php snippet('header'); ?>

    <main role="main" class="o-main  js--pjax__target">

        <div class="o-main__content  js--pjax__content">

            <section class="o-layer  t-zebra">

                <div class="o-retain  o-retain--readable  module">
                    <h1><?php echo html($page->title()) ?></h1>
                    <?php echo $page->text()->kirbytext() ?>
                </div>

            </section>

            <?php snippet('blog', array('headingType' => 'h2')); ?>

            <?php snippet('contentinfo'); ?>

        </div>

    </main>

<?php snippet('footer'); ?>