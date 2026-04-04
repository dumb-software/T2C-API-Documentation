# T2C Push Server - Retourne_Donnees_Reseau_tarif

::: danger Endpoint Obsolète:
Cette page parle d'un **endpoint obsolète**! Utilisez [l'API Yoozly](/Yoozly/API_Server/index.md).
:::

Obtenir les informations des tarifs du réseau T2C.

::: info
Les informations sont affichées dans l'onglet "Tarifs" de l'application.
:::

## Obtenir les derniers tarifs

#### URL
```
  POST http://push.t2c.fr/WD_PUSH_WEB/awws/WD_Serveur_Push.awws
```

## Headers
| Paramètres   | Contenu                                     | Description                |
| :----------- | :------------------------------------------ | :------------------------- |
| `SOAPAction` | `urn:WD_Serveur_Push/DonneVersionReseau`    | **Requis.** Demande les derniers tarifs au serveur. |
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
<<< @/snippets/Retourne_Donnees_Reseau_tarif.xml{8-21}
:::

:::tip IMPORTANT
Les informations sont contenues dans la balise `<Retourne_Donnees_Reseau_arretResult>`.

Mais **elles sont encodées en BASE64 puis en GunZip!**

Pour lire les informations, **nous vous recommandons d'utiliser [ce preset CyberChef](https://cyberchef.io/#recipe=Find_/_Replace(%7B'option':'Regex','string':'%26%2313;'%7D,'',true,true,true,false)From_Base64('A-Za-z0-9%2B/%3D',true)Gunzip()Unescape_Unicode_Characters('%5C%5Cu')).**
:::

En décodant l'exemple ci-dessus, cela donne:
```json
ReponseOKT2C--[ { "m_nIDTarif":1, "m_sLibelle":"Billet sans contact", "m_sPrix":"0.20 \u20ac", "m_nOrder_aff":2 }, { "m_nIDTarif":2, "m_sLibelle":"Cr\u00e9ation ou renouvellement carte O\u00f9ra", "m_sPrix":"2.00 \u20ac", "m_nOrder_aff":3 }, { "m_nIDTarif":3, "m_sLibelle":"1 voyage", "m_sPrix":"1.60 \u20ac", "m_nOrder_aff":4 }, { "m_nIDTarif":4, "m_sLibelle":"1 voyage \u00e0 bord des bus", "m_sPrix":"2.00 \u20ac", "m_nOrder_aff":5 }, { "m_nIDTarif":5, "m_sLibelle":"2 voyages", "m_sPrix":"3.00 \u20ac", "m_nOrder_aff":6 }, { "m_nIDTarif":6, "m_sLibelle":"10 voyages", "m_sPrix":"15.00 \u20ac", "m_nOrder_aff":8 }, { "m_nIDTarif":7, "m_sLibelle":"24 heures Solo", "m_sPrix":"5.30  \u20ac", "m_nOrder_aff":9 }, { "m_nIDTarif":8, "m_sLibelle":"24 heures Tribu", "m_sPrix":"13.20 \u20ac", "m_nOrder_aff":10 }, { "m_nIDTarif":9, "m_sLibelle":"24 heures Groupe", "m_sPrix":"21.90 \u20ac", "m_nOrder_aff":11 }, { "m_nIDTarif":10, "m_sLibelle":"48 heures Solo", "m_sPrix":"9.50 \u20ac", "m_nOrder_aff":12 }, { "m_nIDTarif":11, "m_sLibelle":"48 heures Tribu", "m_sPrix":"30.00 \u20ac", "m_nOrder_aff":13 }, { "m_nIDTarif":12, "m_sLibelle":"72 heures Solo", "m_sPrix":"13.00 \u20ac", "m_nOrder_aff":14 }, { "m_nIDTarif":13, "m_sLibelle":"72 heures Tribu", "m_sPrix":"45.00 \u20ac ", "m_nOrder_aff":15 }, { "m_nIDTarif":14, "m_sLibelle":"Congr\u00e8s 1 jour", "m_sPrix":"3.00 \u20ac +1.00 \u20ac par jour suppl\u00e9mentaire", "m_nOrder_aff":16 }, { "m_nIDTarif":15, "m_sLibelle":"Parc Relais Solo", "m_sPrix":"4.00 \u20ac", "m_nOrder_aff":17 }, { "m_nIDTarif":16, "m_sLibelle":"Parc Relais Groupe", "m_sPrix":"6.00 \u20ac ", "m_nOrder_aff":18 }, { "m_nIDTarif":17, "m_sLibelle":"Mensuel", "m_sPrix":"60.00 \u20ac", "m_nOrder_aff":19 }, { "m_nIDTarif":18, "m_sLibelle":"Mensuel -26 ans", "m_sPrix":"28.80 \u20ac", "m_nOrder_aff":20 }, { "m_nIDTarif":19, "m_sLibelle":"Mensuel Pro", "m_sPrix":"57.00 \u20ac", "m_nOrder_aff":21 }, { "m_nIDTarif":20, "m_sLibelle":"A compter du 1 F\u00e9vrier 2023", "m_sPrix":"", "m_nOrder_aff":0 }, { "m_nIDTarif":21, "m_sLibelle":"Mensuels TER+T2C", "m_sPrix":"49.30 \u20ac", "m_nOrder_aff":22 }, { "m_nIDTarif":22, "m_sLibelle":"Mensuel TER+T2C -26 ans", "m_sPrix":"25.90 \u20ac", "m_nOrder_aff":23 }, { "m_nIDTarif":23, "m_sLibelle":"Mensuel Solid\u2019Air 1", "m_sPrix":"24.50 \u20ac", "m_nOrder_aff":24 }, { "m_nIDTarif":24, "m_sLibelle":"Mensuel Solid\u2019Air 2", "m_sPrix":"10.90 \u20ac ", "m_nOrder_aff":25 }, { "m_nIDTarif":25, "m_sLibelle":"Mensuel Solid\u2019Air 3", "m_sPrix":"4.30 \u20ac ", "m_nOrder_aff":26 }, { "m_nIDTarif":26, "m_sLibelle":"Annuel ", "m_sPrix":"600.00 \u20ac", "m_nOrder_aff":27 }, { "m_nIDTarif":27, "m_sLibelle":"Annuel -26 ans", "m_sPrix":"280.00 \u20ac", "m_nOrder_aff":28 }, { "m_nIDTarif":28, "m_sLibelle":"Annuel Pro", "m_sPrix":"570.00 \u20ac", "m_nOrder_aff":29 }, { "m_nIDTarif":29, "m_sLibelle":"Enfants \u2013 6 ans accompagn\u00e9s (maximum 3 enfants) ", "m_sPrix":"Gratuit", "m_nOrder_aff":31 }, { "m_nIDTarif":30, "m_sLibelle":"Annuel Employeur", "m_sPrix":"660.00 \u20ac", "m_nOrder_aff":30 }, { "m_nIDTarif":31, "m_sLibelle":"Bus et Tram gratuits le samedi et le dimanche", "m_sPrix":"", "m_nOrder_aff":1 } ]
```
