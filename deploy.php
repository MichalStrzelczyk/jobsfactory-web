<?php
namespace Deployer;

require_once './vendor/autoload.php';
require 'recipe/common.php';
require 'recipe/rsync.php';

// Project name
set('application', 'jobsfactory.pl');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Writable dirs by web server 
set('writable_dirs', []);
set('keep_releases', 3);

// Hosts

host('root@digitalfarm.pl')
    ->stage('production')
    ->set('deploy_path', '/var/www/{{application}}/web')
    ->set('rsync_src', './dist')
    ->set('rsync_dest','{{release_path}}');


desc('Deploy your project');
task('deploy', [
    'deploy:prepare',
    'deploy:release',
    'rsync',
    'deploy:clear_paths',
    'deploy:symlink',
    'cleanup',
    'success'
]);
