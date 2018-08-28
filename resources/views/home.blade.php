<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Archivo">
    <link rel="stylesheet" type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css"
          href="css/personal.css">

    <script src="js/compiled/compiled.js" type="module"></script>

    <title>Brad Jobe</title>
</head>

<body>

<select id="themes" class="">
    <option value="Matrix">Matrix</option>
    <option value="Pretentious">Pretentious</option>
    <option value="1996">1996</option>
</select>

@foreach($links_content as $type_name => $links)
    <div class="card draggable window">
        <h4 class="card-header"><i>{{$type_name}}</i></h4>
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