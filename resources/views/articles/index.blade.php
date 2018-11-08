{{-- layoutsフォルダのapplication.blade.phpを継承 --}}
@extends('layouts.application')

{{-- @yield('title')にテンプレートごとにtitleタグの値を代入 --}}
@section('title', '記事一覧')

{{-- application.blade.phpの@yield('content')に以下のレイアウトを代入 --}}
@section('content')
  <div>
    <a href="/articles/create">新規作成</a>
  </div>
  @foreach ($articles as $article)
    <h4>{{$article->title}}</h4>
    <p>{{$article->body}}</p>
    <a href="/articles/{{$article->id}}">詳細を表示</a>
    <a href="/articles/{{$article->id}}/edit">編集する</a>
    <form action="/articles/{{$article->id}}" method="post">
      {{ csrf_field() }}
      <input type="hidden" name="_method" value="delete">
      <input type="submit" name="" value="削除する">
    </form>
    {{-- <a href="/articles/{{$article->id}}">削除する</a> --}}
    <hr>
  @endforeach
@endsection