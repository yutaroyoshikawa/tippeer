<?php
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        $tag = ['J_pop', 'Rock', 'fine_art'];
        $spot = ['Shinjuku_station', 'Shibuya_station', 'Shinjuku_park', 'Inogashira_park', 'Ueno_park', 'Kinshi_park', 'Gyoen_park', 'Kinuta_park', 'Shakujii_park'];
        for($i=0; $i<10; $i++) {
            $artist = new \App\Artists_test();
            $artist->artist_name = $faker->name;
            $artist->twitter_id = $faker->userName;
            $artist->save();
            
            $place = new \App\Places_test();
            $place->place_name = $faker->randomElement($spot);
            $place->address = $faker->address;
            $place->save();
        }
        for($i=0; $i<10; $i++) {
            $performance = new \App\Performances_test();
            $performance->performance_name = $faker->name;
            $performance->artist_id = $faker->numberBetween(1,10);
            $performance->place_id = $faker->numberBetween(1, 9);
            $performance->tag = $faker->randomElement($tag);
            $performance->save();
        }
    }
}
