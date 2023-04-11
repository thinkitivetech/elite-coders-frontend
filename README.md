# Elite Coder Backend
  # This Project about CV Generator.
   # For Generating the CV :
     There are 5 Section such as Professional Summary, Project Details ,Personal Information
     Technical Skills and Project information.
     After fetching Each Section Details Then Submit all the session and Then  
     CV will be open in google documentation there we can modify the CV information If Required.



Installation Required for Running the Project
# Java 11 version should be installed
# Maven 3.6 version installed
# docker installed
# Postgres db install

## Run Locally
 # Clone the project
    git clone git@github.com:thinkitivetech/elite-coders-backend.git

 # Go to the project directory
    cd elite-code-backend

 # Run script
```bash
  ./init.sh
```

After Running the script Backend Service Will become Up


# Deployment Step

  #Update services jars
   Pull latest changes and Run script
```bash
  ./init.sh
```


Backend Services will be updated and will be up and running

Build Services Docker Images

```bash
  docker-compose --file docker-compose.yml build
```

Run Services

```bash
  docker-compose --file docker-compose.yml up -d
```
#Architecture Diagram
![Alt text](/Artifact/Artifacts-Developer/Architecture_Diagram.png?raw=true)
