<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerformanceCommentsRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('performance_comments', function (Blueprint $table) {
            $table -> foreign('user_id')
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
        Schema::table('performance_comments', function (Blueprint $table) {
            $table->dropForeign('performance_comments_user_id_foreign');
        });
    }
}
