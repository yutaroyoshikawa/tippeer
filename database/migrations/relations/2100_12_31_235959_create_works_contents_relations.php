<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorksContentsRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('works_contents', function (Blueprint $table) {
            $table -> foreign('works_id')
                -> references('id')
                -> on('works');
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('works_contents', function (Blueprint $table) {
            $table->dropForeign('works_contents_works_id_foreign');
        });
    }
}


