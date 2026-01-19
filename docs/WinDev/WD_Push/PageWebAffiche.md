# T2C Push Server - PageWebAffiche

::: danger Avertissement: Nouveau Réseau T2C
Cette page parle d'un **endpoint obsolète** lors de la migration vers l'API "Yoozly"
:::

Obtenir une URL maintenant inutilisé.

Potentiellement utilisé pour des évènements.

## Obtenir l'URL

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

## Headers
| Paramètres   | Contenu                                     | Description                |
| :----------- | :------------------------------------------ | :------------------------- |
| `SOAPAction` | `urn:WD_Serveur_Push/PageWebAffiche`    | **Requis.** Demande l'url au serveur. |
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
```xml{8}
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header/>
	<SOAP-ENV:Body>
		<PageWebAfficheResult>0;-Jeu Jazz en Tête 2023;-http://92.119.54.135/Page_Web_appli_T2C/</PageWebAfficheResult>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>

```
:::

La valeur retournée si dessus est `0;-Jeu Jazz en Tête 2023;-http://92.119.54.135/Page_Web_appli_T2C/`
