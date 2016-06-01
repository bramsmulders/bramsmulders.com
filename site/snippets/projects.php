<h2>Latest projects</h2>

<ul>
    <?php foreach(page('projects')->children()->visible()->limit(3) as $project): ?>
    <li>
        <h3>
            <a href="<?php echo $project->url() ?>"><?php echo $project->title()->html() ?></a>
        </h3>
        <p><?php echo $project->text()->excerpt(80) ?> <a href="<?php echo $project->url() ?>">read&nbsp;more&nbsp;→</a></p>
    </li>
    <?php endforeach ?>
</ul>
