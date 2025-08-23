## T2C Push Server - Ajoute_Journal

<h3 align="left">
  <p>on sait pas ce que ça fait..</p>
  <img src="https://github.com/dumb-software/T2C-API-Documentation/blob/main/.github/assets/idk.png?raw=true" alt="Emoji idk."/>
  <p>l'action existe dans l'appli mais elle n'est jamais utilisée</p>
  <br>
</h3>

Un reste de documentation d'un employé T2C dans l'appli dit:
> Résumé : <indiquez ici ce que fait la procédure>
> 
> Syntaxe :
>Ajoute_Journal (<pTexte> est chaîne)

> Paramètres :
> pTexte (chaîne ANSI) : <indiquez ici le rôle de pTexte>
> 
> Valeur de retour :
> Aucune
> 
> Exemple :
> Indiquez ici un exemple d'utilisation

Théorie:
Cela affiche un message dans les logs du serveur.

### Afficher un message dans les logs du serveur???

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

#### Headers
| Paramètres   | Contenu                                     | Description                |
| :----------- | :------------------------------------------ | :------------------------- |
| `SOAPAction` | `urn:WD_Serveur_Push/Ajoute_Journal`    | **Requis.** Envoyer des logs???. |
|`Content-Type`| `text/xml; charset=utf-8` | **Recommandé.** Type de contenu à envoyer. |

#### Données (Payload):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <SOAP-ENV:Header/>
		<pTexte>Salut la T2C, passez une bonne journée</pTexte>
  <SOAP-ENV:Body/>
</SOAP-ENV:Envelope>
```

---

### Exemple de réponse:

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
Peu importe ce qui est mit dans le payload, le serveur ne renvoie jamais de réponse.

~~pas très gentil quand on envoie "passez une bonne journée" :(~~
