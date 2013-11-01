<ul class="nav">
    <?php foreach($pages->visible() AS $p): ?>
    <li<?php echo ($p->isOpen()) ? ' class="is-active"' : '' ?>><a href="<?php echo $p->url() ?>"><?php echo html($p->title()) ?></a></li>
    <?php endforeach ?>
</ul>
