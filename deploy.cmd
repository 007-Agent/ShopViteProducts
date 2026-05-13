@echo off
echo Updating server...
ssh dani4@192.168.155.130 "/home/dani4/scripts/update-backend.sh && /home/dani4/scripts/update-frontend.sh"
echo Done
pause