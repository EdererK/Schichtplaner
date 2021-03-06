# Schichtplaner
## Important
Schichtplaner is in development and it is not recommended to use in production. Also it is only available in german language right now.

## Info
Schichtplaner is a tool to manage schedules of working shifts. It's intention was to have a nice little tool for voluntary associations to easily distribute the helpers into the given time boxes.

  - Create multiple productions with individual time shifts
  - Matching time shifts automatically merged
  - Collect email address of workers to easily contact all workers at once
  - Set required worker count per shift
  - Get notified via email when changes occurred
  - PDF export
  - Simple user management to share link with public

### Screenshots

![Overview](https://felix-honer.com/schichtplaner/screenshot_1.png)

![Edit shift](https://felix-honer.com/schichtplaner/screenshot_2.png)

### Demo
Visit [schichtplaner.felix-honer.com](http://schichtplaner.felix-honer.com) for live demo. Daily build at 06:00 am (Central European Time).
Username: user
Password: P4$$w0rd

### Tech
Schichtplaner is based on Twitter Bootstrap UI framework and uses several third party plugins for better user experience.

### Installation
Schichtplaner requires PHP5.6/PHP7 and MySQL 5.5 or higher.
To build schichtplaner you need 

 - npm
 - composer
 - grunt

Download and extract from [https://github.com/fhoner/Schichtplaner/archive/master.zip](https://github.com/fhoner/Schichtplaner/archive/master.zip)

Install dependencies.

```sh
$ cd Schichtplaner-master
$ npm install
$ composer install
```

Build the distributables.

```sh
$ grunt
```

### Import database
Use the sampledb.sql and run the script on your MySQL instance.

### Configuration
See config_sample.php and change the values to your servers configuration.

### Run
Open Schichtplaner in your webbrowser at e.g. http://localhost/schichtplaner/.
