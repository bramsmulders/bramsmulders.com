


<section class="o-layer" id="section:projects">

    <div class="o-retain  o-retain--readable  module">
        <hgroup class="hgroup">
            <h3 class="">Projects</h3>
        </hgroup>

        <?php $projects = $pages->find('projects')->children()->visible()->flip()->paginate(5); ?>

        <?php if(count($projects) > 0): ?>
            <ul class="o-list-clean">
            <?php foreach($projects as $project): ?>
            <li>
                <h1 class="u-h4  u-heading-linked">
                    <?php echo $project->title(); ?>
                </h1>
            </li>
            <?php endforeach ?>
            </ul>
        <?php else: ?>
        <p>It's lonely in here</p>
        <?php endif; ?>

    </div>

</section>