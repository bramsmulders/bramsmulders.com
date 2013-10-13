<?php
$htmltitle = html($page->title()) .' - '. html($site->title());
?><!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie10 lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie10 lt-ie9" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Prefetch external DNS -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//themes.googleusercontent.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//platform.twitter.com">
    <link rel="dns-prefetch" href="//p.twitter.com">
    <link rel="dns-prefetch" href="//cdn.api.twitter.com">

    <!-- SEO stuff -->
    <title><?php echo $htmltitle; ?></title>
    <meta name="description" content="<?php echo html($site->description()) ?>" />
    <meta name="robots" content="index, follow" />

    <!-- CSS -->
    <?php echo css('//fonts.googleapis.com/css?family=Lato:100,300,400,700') ?>
    <?php echo css('public/css/theme.20131013.css') ?>

    <!-- Modernizr -->
    <?php echo js('public/js/libs/modernizr.min.js') ?>

    <!-- Facebook open graph -->
    <meta property="og:image" content="<?php echo url('public/gfx/logo.20130126.png'); ?>" />
    <meta property="og:url" content="<?php echo thisURL(); ?>" />
    <meta property="og:title" content="<?php echo $htmltitle; ?>" />
    <meta property="og:description" content="<?php echo html($site->description()) ?>" />

    <!-- Microsoft metro stuff -->
    <meta name="msapplication-TileColor" content="#292929"/>
    <meta name="msapplication-TileImage" content="<?php echo url('public/gfx/logo.20130126.png'); ?>"/>

    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', '<?php echo html($site->analytics()) ?>']);
        _gaq.push(['_trackPageview']);
        (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
</head>

<body>
        <div class="wrapper">
        <!--[if lt IE 9]>
            <div class="notice--warning">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</div>
        <![endif]-->

        <?php snippet('menu') ?>
        <a href="<?php echo url(); ?>" title="Get me Home!" class="<?php echo (($pages->find('home')->isOpen())?' is-active':''); ?>">BS
        </a>