// restore working directory changes without changing branches
git checkout -- indexedDB.html

// undo changes to our staging index(to assemble a commit)
git reset HEAD indexedDB.html

// undoing commits that changes has been made
git commit--ammend - m "items to bring"

//retrieve old versions(this will place it in your staging index)
git checkout 2907d1260 -- resources.html
git diff--staged

// this will revert any chages made to the commit file 
git revert da38660bbcd206


// check head pointer location 
cat.git / HEAD
cat .git/refs/heads/master

//--soft does not change staging index or working directory
git reset --soft da33660bbcd 

//mixed-- changes staging index to match the repository
git reset --mixed da33660bbcd

// --hard  changes staging index ad working directory to match the repository
//(changes made after them will be obliterated)

//removing untracked files(-n test run -f force-run)
git clean -n
git clean -f