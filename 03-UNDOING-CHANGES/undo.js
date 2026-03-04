//01 restore working directory changes without changing branches
// it does this by checking out the last version
// double dash flag forces you to stay on the current branch
git status
git diff
git checkout -- indexedDB.html

//02 undo changes to our staging index(to assemble a commit)
// this will move changes from staging index back to working directory
git reset HEAD index.html

//03 undoing commits that changes has been made
// amend flag will only work on the last commit
// it can also be used to change the commit message specifically
make changes
gi add .
git commit --ammend -m "items to bring"

//04 retrieve old versions(this will place it in your staging index)
// this will checkout a certain version of the file
git log
git checkout 2907d1260 -- resources.html
// this will check the differences agains the staging area
git diff --staged

//05 this will revert any chages made to the commit file
//anything deleted will be added and anything added will be deleted
// this will pop-up a custom commit message
git revert da38660bbcd206

//06
// check head pointer location
// this will reveal the latest commitid
cat .git/HEAD
cat .git/refs/heads/master

//make a copy of all your commits
//  --soft does not change staging index or working directory(does not get rid of your changes)
// it moves the pointer and does nothing else
// use the cat command to confirm the location of the head pointer 
git reset --soft da33660bbcd 

//mixed-- changes staging index to match the repository
// it does not change your working directory
// changes will not be deleted. they will jus move to working area
git reset --mixed da33660bbcd

// --hard  changes staging index ad working directory to match the repository
//(any changes made after the spicified commit will be completely obliterated)
// this will throw away everything that happened after a specific commitid
git reset --hard da33660bbcd

//10 removing untracked files(-n test run -f force-run)
// add junk1 junk2 junk3 as examples
git clean -n
git clean -f