<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('works', function (Blueprint $table) {
            $table->increments('id')            -> comment('主キー');
            $table->string('title')             -> comment('作品名');
            $table->unsignedInteger('user_id')  -> comment('アーティストID');
            $table->integer('price')            -> comment('価格');
            $table->string('score')             -> comment('評価値');
            $table->string('thumbnail')         -> comment('サムネイル画像URL');
            $table->date('release_date')        -> comment('リリース日');

            $table -> index('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('works');
    }
}
