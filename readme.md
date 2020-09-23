#### Alice's First Task:
I create a new folder eg. `git_exercise`, initialize it as a git repository and make the first commit
1) I start VSCode and open the new folder
2) I initialize a git repository
   - 2A: I open the Source Control **Ctrl+Shift+G** and then click the Initialize repository button or
   - 2B: I open the Source Control by clicking the branch-like
     icon on the left bar and then click the Initialize repository
     button or
   - 2C:
      1. I open a terminal in VSCode
         + **Ctrl+J** on German keyboard or
         + **Ctrl+\`** on English keyboard or
         + in menu **Terminal>New Terminal**
      2. the path is now my new folder and I initialize a git repository by entering in the terminal: `git init`
3) I type `git status` in terminal to check if it's ok
4) I create something, eg. `readme.md` or `index.html` and save
5) I add the files to the staging area (aka. index) by typing in the terminal
   - `git add .`  or
   - `git add index.html` \
repeat #3.
6) I commit the staged files by typing `git commit -m 'initial commit'` \
repeat #3.

It is ready to be pushed to GitHub

**purr purr**
