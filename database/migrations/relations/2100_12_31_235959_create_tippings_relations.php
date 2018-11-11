<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTippingsRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tippings', function (Blueprint $table) {
            $table -> foreign('user_id')
                -> references('id')
                -> on('users');

            $table -> foreign('artist_id')
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
        Schema::table('tippings', function (Blueprint $table) {
            $table->dropForeign('tippings_user_id_foreign');
            $table->dropForeign('tippings_artist_id_foreign');
        });
    }
}


