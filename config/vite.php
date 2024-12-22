<?php

use craft\helpers\App;

return [
	"useDevServer" => App::env("CRAFT_ENVIRONMENT") === "dev",
	"manifestPath" => "@webroot/dist/manifest.json",
	"devServerPublic" =>
		App::env("VITE_DEVSERVER_PUBLIC") ?? "http://localhost:3002/",
	"serverPublic" => "/dist/",
	"errorEntry" => "src/main.js",
	"cacheKeySuffix" => "",
	"devServerInternal" =>
		App::env("VITE_DEVSERVER_INTERNAL") ?? "http://host.docker.internal:3002/",
	"checkDevServer" => false,
	"includeReactRefreshShim" => false,
	"includeModulePreloadShim" => true,
	"criticalPath" => "@webroot/dist/criticalcss",
	"criticalSuffix" => "_critical.min.css",
];
