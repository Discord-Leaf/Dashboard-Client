import ghpages from 'gh-pages';
 
ghpages.publish('dist', function(err) {});

//This file is built for adding files to the gh-pages branch