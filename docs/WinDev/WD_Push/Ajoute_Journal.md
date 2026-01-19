# T2C Push Server - Ajoute_Journal

::: danger Avertissement: Nouveau Réseau T2C
Cette page parle d'un **endpoint obsolète** lors de la migration vers l'API "Yoozly"
:::

:::warning On sait pas ce que ça fait..

![Emoji idk.](/idk.png)

**L'action existe dans l'appli mais elle n'est jamais utilisée.**

Mais on a une théorie:
Cela affiche un message dans les logs du serveur.

:::details Une reconstruction de l'Action dit:

Paramètres :
pTexte (chaîne en ANSI)

Valeur de retour :
Aucun

:::

## Afficher un message dans les logs du serveur???

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

## Headers
| Paramètres    | Contenu                                     | Description                                |
| :------------ | :------------------------------------------ | :----------------------------------------- |
| `SOAPAction`  | `urn:WD_Serveur_Push/Ajoute_Journal`        | **Requis.** Envoyer des logs???            |
| `Content-Type`| `text/xml; charset=utf-8`                   | **Recommandé.** Type de contenu à envoyer. |

## Données (Payload)

```xml{4}
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <SOAP-ENV:Header/>
		<ns1:pTexte xmlns:ns1="urn:WD_Serveur_Push">Salut la T2C, passez une bonne journée</ns1:pTexte>
  <SOAP-ENV:Body/>
</SOAP-ENV:Envelope>
```

| Paramètres     | Contenu                                     | Description                                |
| :------------- | :------------------------------------------ | :----------------------------------------- |
| `<ns1:pTexte>` | `(Chaine ANSI)`                             | **Recommandé.** Message?                   |


## Exemple de réponse

:::details Cliquez pour voir la Réponse.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header/>
	<SOAP-ENV:Body/>
</SOAP-ENV:Envelope>
```
:::

Peu importe ce qui est mit dans le payload, **le serveur ne renvoie jamais de réponse**.

~~pas très gentil quand on envoie "passez une bonne journée" :(~~
