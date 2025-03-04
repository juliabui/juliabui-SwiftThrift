# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP: 15.204.91.109, http://15.204.91.109/
2. SSH username: ajsouza
3. SSH password: BoxCombo1854!@
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used: http://15.204.91.109/phpmyadmin, or the port used 3306.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
6. Database username: ajsouza
7. Database password: professor
8. Database name: csc648-website
9. Instructions on how to use the above information.
# Database Connection Instructions
 
### Using phpMyAdmin  
1. Open your browser and go to: [http://15.204.91.109/phpmyadmin](http://15.204.91.109).  
2. Enter your credentials:  
   - **Username:** `ajsouza`  
   - **Password:** `professor`  
3. Click **Log In** to access the phpmyadmin normally and then see the database csc648-website.  

---
### Using MySQL Command Line  
1. SSH into your VPS:  
   ```bash
   ssh ajsouza@15.204.91.109
   ```  
2. Connect to MySQL:  
   ```bash
   mysql -u ajsouza -p (port if necessary -P 3306)
   ```  
3. Enter the password (`professor`) when prompted.  

---

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
