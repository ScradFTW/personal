<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Archivo" rel="stylesheet">
    <link rel="stylesheet" type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/personal.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
            integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
            crossorigin="anonymous"></script>

    <script src="js/personal.js"></script>
    <title>Brad Jobe</title>
</head>

<body>
<div id="terminal">
    <i>$</i> ./brad_jobe_personal_site.sh<span id="cursor"> </span>
</div>

@foreach($links_content as $type_name => $links)
    <div class="card draggable window">
        <h4 class="card-header">{{$type_name}}</h4>
        @foreach($links as $link)
            <div class="card-body">
                <h5 class="card-title">{{$link->link_name}}</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a class="btn btn-primary" href="{{$link->url}}">{{$link->link_name}}</a>
            </div>
        @endforeach
    </div>
@endforeach
</body>
</html>