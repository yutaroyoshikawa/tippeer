<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArtistProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artist_profiles', function (Blueprint $table) {
            $table->unsignedInteger('id')       ->comment('主キー');
            $table->string('self_introduction') ->comment('自己紹介');
            $table->string('twitter')           ->comment('TwitterID');
            $table->string('youtube')           ->comment('YouTubeID');
            $table->string('homepage')          ->comment('ホームページURL');
            $table->string('top_image')         ->comment('トップ画像URL');

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
        Schema::dropIfExists('artist_profiles');
    }
}
