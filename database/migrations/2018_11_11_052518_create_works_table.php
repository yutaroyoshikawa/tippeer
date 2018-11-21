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
        $thumbnailUrl='';
        Schema::create('works', function (Blueprint $table) {
            $table->increments('id')            -> comment('主キー');
            $table->string('title')->nullable(false)                            -> comment('作品名');
            $table->unsignedInteger('user_id')->nullable(false)                 -> comment('アーティストID');
            $table->integer('price')->nullable(false)                           -> comment('価格');
            $table->string('score')->nullable(false)                            -> comment('評価値');
            $table->string('thumbnail')->nullable(false)->default($thumbnailUrl)-> comment('サムネイル画像URL');
            $table->date('release_date')->nullable(false)                       -> comment('リリース日');

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
