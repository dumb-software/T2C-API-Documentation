# T2C Push Server - Retourne_Donnees_Reseau_ligne_image

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

Obtenir les images des Lignes du réseau T2C. 

:::info
Cela contient les images *en 144p* des Lignes affichées dans l'application.
:::

## Obtenir les derniers tarifs

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

## Headers
| Paramètres   | Contenu                                     | Description                |
| :----------- | :------------------------------------------ | :------------------------- |
| `SOAPAction` | `urn:WD_Serveur_Push/Retourne_Donnees_Reseau_ligne_image`    | **Requis.** Demande les dernières images des lignes au serveur. |
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

::: warning
La réponse est trop longue, elle a été coupée.
:::

::: details Cliquez pour voir la Réponse.
<<< @/snippets/Retourne_Donnees_Reseau_ligne_image.xml{8-43}
:::

:::tip IMPORTANT
Les informations sont contenus dans la balise `<Retourne_Donnees_Reseau_arretResult>`.

Mais **elles sont encodés en BASE64 puis en GunZip!**

Pour lire les informations, **nous vous recommandons d'utiliser [ce preset CyberChef](https://cyberchef.io/#recipe=Find_/_Replace(%7B'option':'Regex','string':'%26%2313;'%7D,'',true,true,true,false)From_Base64('A-Za-z0-9%2B/%3D',true)Gunzip()Unescape_Unicode_Characters('%5C%5Cu')).**
:::

::: warning
La réponse est trop longue, elle a été coupée.
:::

En decodant l'exemple ci dessus, cela donne:
```json
ReponseOKT2C--[ { "m_sNom_ligne_img":"ligne-a.jpg", "m_sbufImage_ligne":"FF D8 FF E0 00 10 4A 46 49 46 00 01 01 01 01 90\r\n01 90 00 00 FF E1 00 68 45 78...
```
:::tip IMPORTANT
Les images sont encore encodés, en Hex cette fois ci, utilisez [ce preset CyberChef](https://cyberchef.io/#recipe=From_Hex('Auto')Render_Image('Raw')) pour extraire le contenu encodé en Hex uniquement.
:::
