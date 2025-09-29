// this command will list all branches
git branch 

// this command will create a branch
git branch red-website 

//this command will with branches
git checkout red-website

//this command will creating and switch to the branch at the same time
git checkout -b yellow - website

// how to rename a branch
git branch -m red-website blue-website

// show graphical git log with a branch commits
git log --oneline --decorate --graph --all

// how to delete a branch in git
git branch -d branch_to_delete
git branch --delete branch_to_delete

// this shows branches that have our current change
git branch --merged

//switch to a branch and delete it while on the branch

// this will do a hard delete
git branch -D branch_to_delete

// this will compare 2 branches
git diff master..blue-website