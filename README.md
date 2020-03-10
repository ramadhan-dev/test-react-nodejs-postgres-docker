## Server-Service

### pre requisite
-   docker
-   create database dengan nama db

#### 
    jalankan docker-compose up pada directori react-app
    setelah semua image terdownload 
    jalankan perintah dibawah ini untuk migrate database dan seed data dummy
    ```
        docker exec -it react-app_server-service_1 bash
        yarn db:migrate
        yarn db:seed
    ```
#### list api
    tampilkan semua data cource
        - http://localhost:7100/cources
    detail cource by id
        -http://localhost:7100/cource/{id}# cource
