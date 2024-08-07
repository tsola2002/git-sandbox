


//initializes a local git repository
git init

// this will create a file
touch index.html

// to check the status of your repository
git status

// initalizes a repo with a new branch
git init -b main

//list files inside if the .git folder
ls -la .git


// this will add a file to the staging index
git add . 
git add index.html
// this will commit a file to the local repository
git commit -m "Initial Commit"


git diff 
// shows the diferences between your head pointer and your working directory

// this will show you your git log
git log

// this show documentation for git log
git help log

// this will show you the last 2 commits in your git log
git log -n 2


// this will show you commits on the specified date and after that date
git log --since=2012-06-15

// this will show you commits on the specified date and before that date
git log --until=2012-06-15


git log --author="Kevin"

git log --grep="Init"

git log -p -2
// this shows the difference between the patched output and the last commit

// this will display your commits in oneline
git log --pretty=oneline

// this will format the 
git log --pretty=format:"%h - %an, %ar : %s"