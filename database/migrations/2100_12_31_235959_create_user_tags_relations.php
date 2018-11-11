<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTagsRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_tags', function (Blueprint $table) {
            $table -> foreign('user_id')
                -> references('id')
                -> on('users');

            $table -> foreign('tag_id')
                -> references('id')
                -> on('tags');
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_tags', function (Blueprint $table) {
            $table->dropForeign('user_tags_user_id_foreign');
            $table->dropForeign('user_tags_tag_id_foreign');
        });
    }
}


