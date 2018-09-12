<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    @if(app('env')=='local')
        <link rel="stylesheet" href="{{ asset('/static/css/normalize.css') }}">
        <link rel="stylesheet" href="{{ asset('/static/css/main.css') }}">
        <link rel="manifest" href="{{ asset('/manifest.json') }}">
    @endif
    @if(app('env')=='production')
        <link rel="stylesheet" href="{{ secure_asset('/static/css/normalize.css') }}">
        <link rel="stylesheet" href="{{ secure_asset('/static/css/main.css') }}">
        <link rel="manifest" href="{{ secure_asset('/manifest.json') }}">
    @endif
    <title>Tipper</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
    @if(app('env')=='local')
        <script src="{{ asset('/static/js/main.js') }}"></script>
    @endif
    @if(app('env')=='production')
        <script src="{{ secure_asset('/static/js/main.js') }}"></script>
    @endif
  </body>
</html>
