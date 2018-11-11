<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSearchHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('search_histories', function (Blueprint $table) {
            $table->increments('id')            ->comment('主キー');
            $table->unsignedInteger('user_id')  ->comment('ユーザID');
            $table->string('key_word')          ->comment('検索キーワード');
            $table->timestampTz('date')        ->comment('検索日時');

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
        Schema::dropIfExists('search_histories');
    }
}
