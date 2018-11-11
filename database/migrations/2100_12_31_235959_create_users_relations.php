<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table -> foreign('gender_id')
                -> references('id')
                -> on('genders');

            $table -> foreign('account_type_id')
                -> references('id')
                -> on('account_types');
        });
    }
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_gender_id_foreign');
            $table->dropForeign('users_account_type_id_foreign');
        });
    }
}