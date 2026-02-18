// rename a file and check your git status
git status


// do the 2 at the same time and it will count as a renamed file
// git add the new file and delete the deleted file and check te status
git add new_file.html
git rm deleted_file.html

// the proper way of renaming a file
// git will automatically move it to the staging index
git mv old_file.html new-file.html

// moving a file into a directory
git mv thirdfile.html first-directory/thirdfile.html