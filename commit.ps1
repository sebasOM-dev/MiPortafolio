$msg = Read-Host "msg del commit";
git add ./ | git commit -m "$msg" | git push