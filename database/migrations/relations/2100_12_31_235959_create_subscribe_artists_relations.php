<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscribeArtistsRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('subscribe_artists', function (Blueprint $table) {
            $table -> foreign('user_id')
                -> references('id')
                -> on('users');

            $table -> foreign('artist_id')
                -> references('id')
                -> on('users');  
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subscribe_artists', function (Blueprint $table) {
            $table->dropForeign('subscribe_artists_user_id_foreign');
            $table->dropForeign('subscribe_artists_artist_id_foreign');
        });
    }
}


