## T2C Push Server - DonneVersionReseau

Obtenir la dernière version du réseau.

### Obtenir la version

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

#### Headers
| Paramètres   | Contenu                                     | Description                |
| :----------- | :------------------------------------------ | :------------------------- |
| `SOAPAction` | `urn:WD_Serveur_Push/DonneVersionReseau`    | **Requis.** Demande la version du réseau au serveur. |
|`Content-Type`| `text/xml; charset=utf-8` | **Recommandé.** Type de contenu à envoyer. |

#### Données (Payload):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body/>
</SOAP-ENV:Envelope>
```

---

### Exemple de réponse:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <DonneVersionReseauResult>84</DonneVersionReseauResult>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
