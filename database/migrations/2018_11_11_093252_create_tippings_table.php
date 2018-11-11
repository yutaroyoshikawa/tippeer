<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTippingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tippings', function (Blueprint $table) {
            $table->increments('id')              ->comment('主キー');
            $table->unsignedInteger('user_id')    ->comment('ユーザID');
            $table->unsignedInteger('artist_id')  ->comment('アーティストID');
            $table->unsignedInteger('value')      ->comment('投げ銭額');
            $table->timestampTz('date')           ->comment('投げ銭日時');

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
        Schema::dropIfExists('tippings');
    }
}
