<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorksTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('works_tags', function (Blueprint $table) {
            $table->increments('id')            -> comment('主キー');
            $table->unsignedInteger('user_id')  -> comment('アーティストID');
            $table->unsignedInteger('tag_id')   -> comment('タグID');

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
        Schema::dropIfExists('works_tags');
    }
}
