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


// this will move from intialized stage to local repository
git commit -am "Adding buy.html page"


git diff 
// shows the diferences between your head pointer and your working directory

// this will show you your git log
git log

// this show documentation for git log
git help log

// this will show you the last 2 commits in your git log
git log -n 1


// this will show you commits on the specified date and after that date
git log --since=2025-08-24

// this will show you commits on the specified date and before that date
git log --until=2025-08-24

// this will show all commits made by a certain author
git log --author="Omatsola"

// this will search your commit history for the word init
git log --grep="Init"

git log -p -2
// this shows the difference between the patched output and the last commit

// this will display your commits in oneline
git log --pretty=oneline

// this will format the logs using wildcards
git log --pretty=format:"%h - %an, %ar : %s"

// this will display your log in graphical format
git log --pretty=format:"%h %s" --graph


// find the location of the head point
cd .git
cat HEAD

// show current head pointers sha1 id
cd refs/heads
cat master

// show the location of the head pointer
git log HEAD

// shows the difference between the repository and the last head pointer location
git diff


// shows the difference between the repository and the staging area
git diff --staged