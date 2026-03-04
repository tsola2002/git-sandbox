// this command will list all branches
git branch 

// this command will create a branch
git branch red-website 

//this command will with branches
git checkout red-website

//this command will creating and switch to the branch at the same time
git checkout -b yellow - website

// how to rename a branch(-m stands for move)
git branch -m red-website blue-website

// show graphical git log with a branch commits
git log --oneline --decorate --graph --all

// how to delete a branch in git
git branch -d branch_to_delete
git branch --delete branch_to_delete

// if you add a new file it will be able to switch branches

// this shows all branches that have our current change in our current branch
git branch --merged

//switch to a branch and delete it while on the branch
// git will not allow you to delete a branch that has not been merged into the master branch

// this will do a hard delete
git branch -D branch_to_delete

// this will compare 2 branches using the diff tool
git diff master..blue-website

git diff --color-words master..blue-website