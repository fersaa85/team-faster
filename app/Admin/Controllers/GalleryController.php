<?php

namespace App\Admin\Controllers;

use App\Models\Gallery;
use App\Models\Workout;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use Illuminate\Support\Facades\DB;

class GalleryController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Galery';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Gallery());

        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Gallery::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Gallery());

        //$form->text('name', __('Name'));
        //$form->hidden('id');
        //$form->image('name', 'Imagen');
        $form->multipleImage('name', 'imagenes')->move('galeria/la_mexicana/');
        $form->select('workout_id',  __('Evento'))->options(function ($id) {
            return Workout::where( DB::raw('YEAR(date_start)'), '=', '2023' )->where('active', 1)->pluck('date_start', 'id');
        });


        return $form;
    }
}
