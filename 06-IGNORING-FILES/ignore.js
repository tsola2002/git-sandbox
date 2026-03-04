// will ignore any file end in .php
*.php

// dont ignore index.php
!index.php

// this ignore a range of numbers 0-9
[0-9]

// ignore everthing in videos folder
assets/videos

// this will comment you gitignore code
#

git config --global core.excludesfile ~/.gitignore_global

// this will ignore a tracked file by removing it from the staging index
git rm --cached indexedDB.php

