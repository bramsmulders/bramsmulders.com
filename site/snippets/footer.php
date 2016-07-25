    </div><!-- .wrapper -->

    <script type="text/javascript">
        // Define bs object
        var bs = bs || {};
        bs.cutsMustard = false;

        // Cut the mustard
        if ('visibilityState' in document) {
            bs.cutsMustard = true;
            // load all javascript
            (function(){
                var app = document.createElement('script');
                app.type = 'text/javascript';
                app.async = true;
                app.src = '<?php echo url('assets/js/app/app.js'); ?>';
            (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(app);
            })();
        }
    </script>

</body>
</html>