{{-- layoutsフォルダのapplication.blade.phpを継承 --}}
@extends('layouts.application')

{{-- @yield('title')にテンプレートごとにtitleタグの値を代入 --}}
@section('title', '記事一覧')

{{-- application.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  @foreach ($articles as $article)
    <h4>{{$article->title}}</h4>
    <p>{{$article->body}}</p>
    <hr>
  @endforeach
@endsection