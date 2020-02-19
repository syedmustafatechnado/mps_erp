<?php

use Illuminate\Database\Seeder;

class ModulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modules =  [[
            'name' => 'Units'

        ],
        [
            'name' => 'Brands',

        ],
        [
            'name' => 'PPC',

        ],
        [
            'name' => 'Leads',

        ],
        [
            'name' => 'Orders',

        ],
        [
            'name' => 'Invoices',

        ],
        [
            'name' => 'Users',

        ],
        [
            'name' => 'Departments',

        ],
        [
            'name' => 'Designations',

        ]
        ];

        DB::table('modules')->insert(
            $modules
        );
    }
}
