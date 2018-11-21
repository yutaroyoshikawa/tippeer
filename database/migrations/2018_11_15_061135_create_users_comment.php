<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersComment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('comments', function (Blueprint $table) {
            $table->bigincrements('id')  ->comment('主キー');
            $table->string('user_id')->unique()  ->comment('ユーザID');
            $table->unsignedInteger('works_id')    ->comment('作品ID');
            $table->string('score')->nullable(false)  ->comment('評価');
            $table->timestamps()    ->comment('コメント日');

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
        //
    }
}
