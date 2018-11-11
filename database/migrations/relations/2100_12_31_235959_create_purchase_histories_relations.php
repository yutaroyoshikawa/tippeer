<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseHistoriesRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('purchase_histories', function (Blueprint $table) {
            $table -> foreign('user_id')
                -> references('id')
                -> on('users');

            $table -> foreign('works_content_id')
                -> references('id')
                -> on('works_contents');
        });
    }

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('purchase_histories', function (Blueprint $table) {
            $table->dropForeign('purchase_histories_user_id_foreign');
            $table->dropForeign('purchase_histories_works_content_id_foreign');
        });
    }
}


