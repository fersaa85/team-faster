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
        $grid->column('image', __('Imagen'));
        $grid->column('image_map', __('Imagen mapa'));
        $grid->column('thumbnail', __('Imagen thumbnail'));
        $grid->column('google_maps', __('Google Maps'));

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

        $form->display('id', 'ID');

        $form->text('name', __('Nombre'));
        $form->textarea('address', __('Address'));
        $form->image('image', 'Imagen')->move('/venues');
        $form->image('image_map', 'Imagen mapa')->move('/venues');
        //$form->text('image_map', __('Imagen mapa'));
        $form->text('google_maps', __('Google Maps'));
        $form->text('order', __('Orden'));

        $form->text('workout.description',  __('Experiencia workout'));
        $form->select('workout.coatch_id',  __('Coatch'))->options(function ($id) {
             return Coatch::pluck('name', 'id');
        });
        $form->date('workout.date_start',  __('Cuando'))->format('YYYY-MM-DD');
        $form->text('workout.active', 'Activo');

        $form->text('workout.venue_id', __('venue_id'));

        /*$form->hidden('workout.venue_id')->saving(function (Form $form) {;
            //$form->workout->venue_id = $form->id;
            return  $form->id;
        });
        */

        $form->saving(function (Form $form) {

            $form->slug = $form->name;

        });

        return $form;
    }
}
