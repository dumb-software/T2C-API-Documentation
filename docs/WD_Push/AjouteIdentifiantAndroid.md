# T2C Push Server - AjouteIdentifiantAndroid

::: warning WORK IN PROGRESS
**Cet endpoint est en cours de documentation!**
:::

Ajouter un identifiant du service de notification Android (GSM) à l'aide d'un Jeton Firebase FCM

::: info
Cette action permet d'ajouter son identifiant FCM pour que le Serveur Push nous envoie des Notifications en temps réel.
:::

## Ajouter son identifiant

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

## Headers
| Paramètres     | Contenu                                           | Description                                          |
| :------------- | :------------------------------------------------ | :--------------------------------------------------- |
| `SOAPAction`   | `urn:WD_Serveur_Push/AjouteIdentifiantAndroid`    | **Requis.** Ajouter son identifiant. |
| `Content-Type` | `text/xml; charset=utf-8`                         | **Recommandé.** Type de contenu à envoyer.           |

## Données (Payload)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <SOAP-ENV:Header/>
    <ns1:Liste_param xmlns:ns1="urn:WD_Serveur_Push">[IDENTIFIANT_FCM]</ns1:Liste_param>
        <ns1:idUniqueAndroid xmlns:ns1="urn:WD_Serveur_Push">[ANDROID_ID]</ns1:idUniqueAndroid>
    <ns1:sInfoPerso xmlns:ns1="urn:WD_Serveur_Push">1	1	1	1	1</ns1:sInfoPerso>
  <SOAP-ENV:Body/>
</SOAP-ENV:Envelope>
```

**WIP: PLUS D'INFOS SUR `sInfoPerso`** 

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
```xml{8}
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header/>
	<SOAP-ENV:Body>
		<AjouteIdentifiantAndroidResult>false</AjouteIdentifiantAndroidResult>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
:::

Ici, le serveur renvoie le statut de la requête:

* `false` signifie l'ajout n'a pas été fait, où aucune modification n'est nécessaire.
* `true` signifie l'ajout à été ajouté au service de notification GSM.