<?php

namespace App\Admin\Controllers;

use App\Models\Workout;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Models\Venue;
use App\Models\Coatch;


class WorkoutController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Workout';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Workout());

        $grid->column('id', __('Id'));
        $grid->column('venue_id', __('Venue id'))->display(function ($venue) {
            return Venue::where('id', $venue)->first()->name;
        });
        $grid->column('coatch_id', __('Coatch id'))->display(function ($coatch) {
            return $coatch ? Coatch::where('id', $coatch)->first()->name : '';
        });
        $grid->column('date_start', __('Date start'));
        //$grid->column('date_end', __('Date end'));
        //$grid->column('occupation', __('Occupation'));
        $grid->column('description', __('Description'));
        //$grid->column('timeline', __('Timeline'));
        //$grid->column('couches', __('Couches'));
        //$grid->column('created_at', __('Created at'));
        //$grid->column('updated_at', __('Updated at'));
        $grid->column('active', __('Active'));

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
        $show = new Show(Workout::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('venue_id', __('Venue id'));
        $show->field('coatch_id', __('Coatch id'));
        $show->field('date_start', __('Date start'));
        $show->field('date_end', __('Date end'));
        $show->field('occupation', __('Occupation'));
        $show->field('description', __('Description'));
        $show->field('timeline', __('Timeline'));
        $show->field('couches', __('Couches'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));
        $show->field('active', __('Active'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Workout());

        $form->select('venue_id',  __('Venue id'))->options(function ($id) {
            return Venue::pluck('name', 'id');
        });
        $form->select('coatch_id',  __('Coatch id'))->options(function ($id) {
            return Coatch::pluck('name', 'id');
        });
        $form->datetime('date_start', __('Date start'))->default(date('Y-m-d H:i:s'));
        $form->textarea('description', __('Experiencia workout'));
        //$form->datetime('date_end', __('Date end'))->default(date('Y-m-d H:i:s'));
        //$form->number('occupation', __('Occupation'));
        //$form->textarea('description', __('Description'));
        //$form->textarea('timeline', __('Timeline'));
        //$form->textarea('couches', __('Couches'));
        $form->text('active', __('Active'));

        // callback before save
        $form->saving(function (Form $form) {
            if($form->active == 1){
                Workout::where('id', '!=', $form->model()->id)->update(['active' => 0]);
            }

        });

        return $form;
    }
}
