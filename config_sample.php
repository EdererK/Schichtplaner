<?php

DEFINE("URL", "http://localhost/planer");
DEFINE("BASEDIR", $_SERVER['DOCUMENT_ROOT'] . "/planer/");	// base dir of cms including document root
DEFINE("ROOT", "/planer/");									// base dir of cms without document root
DEFINE("TEMPLATEDIR", BASEDIR . "template/");				// directory of template files
DEFINE("PLUGINDIR", BASEDIR . "plugins/");					// directory of plugins
DEFINE("LANGUAGE", "de-DE");								// used language file
DEFINE("FRONTENDURL", "http://localhost/planer/");
DEFINE("ORGANISATION", "Organisation Ltd.");
DEFINE("COMPRESS_ENABLED", false);
DEFINE("ENFORCE_SSL", false);								// redirect to https
DEFINE("WEBMASTER", "webmaster@domain.com");

require("dbConn.php");
require("template.php");

dbConn::setHost("localhost");
dbConn::setDatabase("schichtplaner");
dbConn::setUsername("root");
dbConn::setPassword("root");
dbConn::setTablePrefix("mvoe_");
template::setDoIndent(true);

require_once("emailSettings.php");
emailSettings::setHost("localhost");
emailSettings::setUsername("user@domain.com");
emailSettings::setPassword("53cur3");
emailSettings::setSender(WEBMASTER);
emailSettings::setMethod(emailSendMethod::PHPMAILER);

?>