<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorksCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('works_comments', function (Blueprint $table) {
            $table->increments('id')            ->comment('主キー');
            $table->unsignedInteger('user_id')  ->comment('ユーザID');
            $table->unsignedInteger('score')    ->comment('評価値');
            $table->unsignedInteger('works_id') ->comment('作品ID');
            $table->string('content')           ->comment('コメント内容');
            $table->timestampTz('date')         ->comment('投稿日時');

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
        Schema::dropIfExists('works_comments');
    }
}
