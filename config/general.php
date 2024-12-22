<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

$isDev = App::env("CRAFT_ENVIRONMENT") === "dev";
$isProd = App::env("CRAFT_ENVIRONMENT") === "production";

// https://craftcms.com/docs/4.x/config/config-settings.html

return GeneralConfig::create()
	->aliases([
		"@web" => "/",
		"@webroot" => dirname(__DIR__) . "/web",
		"@svg" => dirname(__DIR__) . "/web/static/img/svg",
	])
	->allowAdminChanges($isDev)
	->defaultWeekStartDay(1)
	->devMode($isDev)
	->disallowRobots(!$isProd)
	->enableGql(false)
	->errorTemplatePrefix("_errors/")
	->omitScriptNameInUrls(true)
	->preloadSingles()
	->preventUserEnumeration(true)
	->privateTemplateTrigger("")
	->sendPoweredByHeader(false)
	->timezone("America/Chicago")
	->testToEmailAddress($isDev ? "dev@simplygoodwork.com" : false)
	->transformGifs(false)
	->upscaleImages(false);
