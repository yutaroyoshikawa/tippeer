<?php

namespace App\Http\Controllers;

use App\Performances_test;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //gitむずかしいね。
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Search  $search
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $keyword = $request->input('key');

        echo $keyword.'<br>';
        $results = Performances_test::query()
            -> leftJoin('artists_test', 'performances_test.artist_id', '=', 'artists_test.id')
            -> leftJoin('places_test', 'performances_test.place_id', '=', 'places_test.id')
            -> where('performances_test.performance_name', 'like', '%'.$keyword.'%')
            -> orWhere('performances_test.tag', 'like', '%'.$keyword.'%')
            -> orWhere('artists_test.artist_name', 'like', '%'.$keyword.'%')
            -> orWhere('artists_test.twitter_id', 'like', '%'.$keyword.'%')
            -> orWhere('places_test.place_name', 'like', '%'.$keyword.'%')
            -> orWhere('places_test.address', 'like', '%'.$keyword.'%')
            -> get();

        foreach($results as $result) {
            echo $result . '<br>';
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Search  $search
     * @return \Illuminate\Http\Response
     */
    public function edit(Search $search)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Search  $search
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Search $search)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Search  $search
     * @return \Illuminate\Http\Response
     */
    public function destroy(Search $search)
    {
        //
    }
}
