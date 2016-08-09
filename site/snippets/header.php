<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title><?php echo $page->title()->html() ?> | <?php echo $site->title()->html() ?></title>
    <meta name="description" content="<?php echo ( $page->content()->has('Description') ) ? $page->description()->html() : $site->description()->html(); ?>">

    <style>
        <?php echo file_get_contents('assets/css/style.css'); ?>
    </style>
</head>
<body>
    <div class="wrapper">