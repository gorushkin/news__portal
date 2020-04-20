# info
---

* ## git grog

  `git config --global alias.grog 'log --graph --abbrev-commit --decorate --all --format=format:"%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)"'`
* ## git co
  `git config --global alias.co checkout`
* ## git co
  `git config --global alias.add add .`
* ## git br
  `git config --global alias.br branch`
* ## git ci
  `git config --global alias.ci commit`
* ## git st
   `git config --global alias.st status`
* ## git lg
   `git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"`

alias ls='ls -cvA --block-size=K --group-directories-first -1 --color=always'

alias gl='git log --pretty=format:"%h %C(magenta)%ad | %C(white)%s%d %C(magenta)[%an]" --date=short --graph --max-count=40 $*'
alias gs='git status'
alias ga='git add .'
alias gco='git commit -m $*'
alias push='git push'
alias pull='git pull'

alias pro='cd /mnt/d/projects' # ЗАМЕНИТЕ на путь к вашей директории проектов!

alias i='npm i $*'
alias s='npm start $*'
alias r='npm run $*'

alias subl='subl.exe $*'