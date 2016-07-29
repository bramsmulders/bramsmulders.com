<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <title><?php echo $page->title()->html() ?> | <?php echo $site->title()->html() ?></title>
    <meta name="description" content="<?php echo ( $page->content()->has('Description') ) ? $page->description()->html() : $site->description()->html(); ?>">

    <link rel="stylesheet" href="assets/css/style.css" inline="true">
</head>
<body>
    <div class="wrapper">