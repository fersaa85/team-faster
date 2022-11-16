<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\Dashboard;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Content;
use Encore\Admin\Layout\Row;
use App\Models\Venue;
use App\Models\WorkoutLimit;


class HomeController extends Controller
{
    public function index(Content $content)
    {
        /*return $content
            ->title('Dashboard')
            ->description('Description...')
            ->row(Dashboard::title())
            ->row(function (Row $row) {

                $row->column(4, function (Column $column) {
                    $column->append(Dashboard::environment());
                });

                $row->column(4, function (Column $column) {
                    $column->append(Dashboard::extensions());
                });

                $row->column(4, function (Column $column) {
                    $column->append(Dashboard::dependencies());
                });
            });
        */
        $venues = Venue::get();
        $workoutLimit = WorkoutLimit::where('id', 1)->first();

        $content = new Content();
        $content->header('Inicio');
        $content->description('inicio');
        $content->body(view('admin.home.index', [
            'venues' => $venues,
            'limit' => isset($workoutLimit->limit_user) ? $workoutLimit->limit_user : 0
        ]));
        return $content;
    }
}
