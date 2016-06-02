<?php snippet('header') ?>

    <main role="main">

        <article>

            <hgroup class="hgroup">
                <h1 class="h4  hN  color--gray-a  face--base"><?php echo $page->title()->html() ?></h1>
                <h2 class="h1  hN"><?php echo $page->subtitle()->html() ?></h2>
            </hgroup>

            <p><?php echo $site->email()->html() ?><br><a href="<?php echo $site->twitterlink()->html() ?>"><?php echo $site->twitter()->html() ?></a></p>

            <?php echo $page->text()->kirbytext() ?>

        </article>

    </main>

<?php snippet('footer') ?>