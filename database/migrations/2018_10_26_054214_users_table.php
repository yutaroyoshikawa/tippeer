<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table -> increments('id');
            $table -> string('name');
            $table -> unsignedInteger('gender_id');
            $table -> string('user_id');
            $table -> timestamps('birthday');
            $table -> string('tel');
            $table -> string('icon');
            $table -> unsignedInteger('account_type_id');
            $table -> string('email');
            $table -> timestamps('registration_date');

            $table -> index('id');

            $table -> foreign('gender_id')
                -> references('id')
                -> on('genders');

            $table -> foreign('account_type_id')
                -> references('id')
                -> on('account_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
