<?php
/**
 * Site URL Rules
 *
 * You can define custom site URL rules here, which Craft will check in addition
 * to any routes you’ve defined in Settings → Routes.
 *
 * See http://www.yiiframework.com/doc-2.0/guide-runtime-routing.html for more
 * info about URL rules.
 *
 * In addition to Yii’s supported syntaxes, Craft supports a shortcut syntax for
 * defining template routes:
 *
 *     'blog/archive/<year:\d{4}>' => ['template' => 'blog/_archive'],
 *
 * That example would match URIs such as `/blog/archive/2012`, and pass the
 * request along to the `blog/_archive` template, providing it a `year` variable
 * set to the value `2012`.
 */
use craft\helpers\App;

$routes = [
  "search" => ["template" => "search/index"],
];

// Routes enabled for dev/staging only
if (App::env("ENVIRONMENT") !== "production") {
  $routes["400error"] = ["template" => "_errors/400"];
  $routes["403error"] = ["template" => "_errors/403"];
  $routes["404error"] = ["template" => "_errors/404"];
  $routes["500error"] = ["template" => "_errors/500"];
  $routes["503error"] = ["template" => "_errors/503"];
}

return $routes;
