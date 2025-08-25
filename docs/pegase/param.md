## Pegase - param

Obtenir la dernière date/heure des dernières modifications des [notifications](https://github.com/dumb-software/T2C-API-Documentation/blob/main/docs/pegase/notification.md)
L'application T2C vérifie régulièrement cet endpoint pour vérifier si il y'a de nouvelles notifications.

### Obtenir la date des dernières modifications

#### URL
```
  GET http://pegase.t2c.fr/Param.txt
```


---

### Exemple de réponse:

```
20250606190353239
```

La réponse est sous format `YYYYMMDDHHMMSSSSS`

Exemple:

    * YYYY = Année (2025)
    * MM = Mois (06)
    * DD = Jour (06)
    * HH = Heure (19)
    * MM = Minutes (03)
    * SS = Secondes (53)
    * SSS = Millisecondes (239)
