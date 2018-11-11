<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerformancesRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('performances', function (Blueprint $table) {
            $table -> foreign('user_id')
                -> references('id')
                -> on('users');

           $table -> foreign('location_id')
               -> references('id')
               -> on('locations');

            $table -> foreign('state_id')
                -> references('id')
                -> on('performance_states');
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('performances', function (Blueprint $table) {
            $table->dropForeign('performances_user_id_foreign');
            $table->dropForeign('performances_location_id_foreign');
            $table->dropForeign('performances_state_id_foreign');
        });
    }
}