<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateContactsRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table -> foreign('user_id')
                -> references('id')
                -> on('users');

            $table -> foreign('type_id')
                -> references('id')
                -> on('contact_types');
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contacts', function (Blueprint $table) {
            $table->dropForeign('contacts_user_id_foreign');
            $table->dropForeign('contacts_type_id_foreign');
        });
    }
}


