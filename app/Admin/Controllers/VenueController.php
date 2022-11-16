<?php

namespace App\Admin\Controllers;

use App\Models\Venue;
use App\Models\Coatch;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class VenueController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Venue';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Venue());



        $grid->column('id', __('Id'));
        $grid->column('name', __('Name'));
        $grid->column('address', __('Address'));
        $grid->column('workout.date_start', 'Cuando');
        $grid->column('workout.description', 'Experiencia workout');
        $grid->column('workout.coatch_id', 'Coatch');
        $grid->column('workout.active', 'Activo');
        //$grid->workout()->description();

        /*$grid->workout()->display(function ($workout) {
            if(isset($workout['coatch_id'])){
                $coutch = Coatch::find($workout['coatch_id']);
                return isset($coutch->name) ? $coutch->name : '-' ;
            }
            return 'Sin asignar';
        });
        */


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
        $show = new Show(Venue::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('address', __('Address'));
        $show->field('lat', __('Lat'));
        $show->field('lng', __('Lng'));
        $show->field('image', __('Image'));
        $show->field('image_map', __('Image map'));
        $show->field('thumbnail', __('Thumbnail'));
        $show->field('order', __('Order'));
        $show->field('slug', __('Slug'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Venue());

        $form->text('name', __('Name'));
        $form->textarea('address', __('Address'));

        $form->text('workout.date_start',  __('Cuando'));
        $form->text('workout.description',  __('Experiencia workout'));
        $form->text('workout.coatch_id',  __('Coatch'));
        $form->text('workout.active', 'Activo');

        return $form;
    }
}
