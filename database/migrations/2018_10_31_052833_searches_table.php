<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SearchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artists_test', function (Blueprint $table) {
            $table -> increments('id');
            $table -> string('artist_name');
            $table -> string('twitter_id');
        });

        Schema::create('places_test', function (Blueprint $table) {
            $table -> increments('id');
            $table -> string('place_name');
            $table -> string('address');
        });

        Schema::create('performances_test', function (Blueprint $table) {
            $table -> increments('id');
            $table -> string('performance_name');
            $table -> unsignedInteger('artist_id');
            $table -> unsignedInteger('place_id');
            $table -> string('tag');

            $table -> foreign('artist_id')
                -> references('id')
                -> on('artists_test');

            $table -> foreign('place_id')
                -> references('id')
                -> on('places_test');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('performances_test');
        Schema::dropIfExists('artists_test');
        Schema::dropIfExists('places_test');
    }
}
