# T2C Push Server - DonneVersionReseau

::: danger Avertissement: Nouveau Réseau T2C
Cette page parle d'un **endpoint obsolète** lors de la migration vers l'API "Yoozly"
:::

Permettait d'obtenir la dernière version du réseau.

::: info
C'est la première action que l'appli execute, elle vérifie si une nouvelle version du réseau existe.

Si oui elle va executer les actions:
* [Retourne_Donnees_Reseau_arret](/WinDev/WD_Push/Retourne_Donnees_Reseau_arret.md)
* [Retourne_Donnees_Reseau_dest](/WinDev/WD_Push/Retourne_Donnees_Reseau_dest.md)
* [Retourne_Donnees_Reseau_ligne](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne.md)
* [Retourne_Donnees_Reseau_ligne_image](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne_image.md)
* [Retourne_Donnees_Reseau_tarif](/WinDev/WD_Push/Retourne_Donnees_Reseau_tarif.md)
:::

## Obtenir la version

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

## Headers
| Paramètres   | Contenu                                     | Description                |
| :----------- | :------------------------------------------ | :------------------------- |
| `SOAPAction` | `urn:WD_Serveur_Push/DonneVersionReseau`    | **Requis.** Demande la version du réseau au serveur. |
|`Content-Type`| `text/xml; charset=utf-8` | **Recommandé.** Type de contenu à envoyer. |

## Données (Payload)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body/>
</SOAP-ENV:Envelope>
```

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
```xml{5}
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <DonneVersionReseauResult>84</DonneVersionReseauResult>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
:::

Ici, le serveur renvoie le numéro de Version du Réseau, qui est `84`.