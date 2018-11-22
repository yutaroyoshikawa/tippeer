<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoginHistoriesRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('login_histories', function (Blueprint $table) {
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
        Schema::table('login_histories', function (Blueprint $table) {
            $table->dropForeign('login_histories_user_id_foreign');
        });
    }
}


