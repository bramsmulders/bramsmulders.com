<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title><?php echo $page->title()->html() ?> | <?php echo $site->title()->html() ?></title>
    <meta name="description" content="<?php echo ( $page->content()->has('Description') ) ? $page->description()->html() : $site->description()->html(); ?>">

    <link href='https://fonts.googleapis.com/css?family=Oswald:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Arvo:400,700' rel='stylesheet' type='text/css'>
    <?php echo css('assets/css/style.css') ?>

</head>
<body>
    <div class="wrapper">
        <?php //snippet('menu') ?>
