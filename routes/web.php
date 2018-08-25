<?php

/**
 * Declared here are all routes of Brad Jobe's personal site
 */

/**
 * PUBLIC ROUTES - available to any user
 */
Route::get('/', 'HomeController@index');

/**
 * ADMIN ROUTES - available to only admin users
 */