<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscribeArtistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscribe_artists', function (Blueprint $table) {
            $table->increments('id')            ->cocmment('主キー');
            $table->unsignedInteger('user_id')  ->comment('ユーザID');
            $table->unsignedInteger('artist_id')->comment('アーティストID');

            $table->index('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscribe_artists');
    }
}
