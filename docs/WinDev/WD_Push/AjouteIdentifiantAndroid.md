# T2C Push Server - AjouteIdentifiantAndroid

::: danger Avertissement: Nouveau Réseau T2C
Cette page parle d'un **endpoint obsolète** lors de la migration vers l'API "Yoozly"
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
| `SOAPAction`   | `urn:WD_Serveur_Push/AjouteIdentifiantAndroid`    | **Requis.** Ajouter son identifiant.                 |
| `Content-Type` | `text/xml; charset=utf-8`                         | **Recommandé.** Type de contenu à envoyer.           |

## Données (Payload)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <SOAP-ENV:Header/>
  <SOAP-ENV:Body>
    <ns1:bufIdentifiant xmlns:ns1="urn:WD_Serveur_Push">
		[TOKEN FCM]
    </ns1:bufIdentifiant>
    <ns1:idUniqueAndroid xmlns:ns1="urn:WD_Serveur_Push">[ID ANDROID]</ns1:idUniqueAndroid>
    <ns1:sInfoPerso xmlns:ns1="urn:WD_Serveur_Push">1	1	1	1	1</ns1:sInfoPerso>
  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

| Paramètres               | Exemple                                           | Description                                          |
| :----------------------- | :------------------------------------------------ | :--------------------------------------------------- |
| `<ns1:bufIdentifiant>`   | `ZGRzbFFVMTRTYzZURGJpWTd2R05OUTpBUEE5MWJINVlsX3JKS0tnc0VraW5XbGhMWlh5TTVm&#13;Ti12LWhSbjA5T0JPMkJqQks5YTZEYlAtMUFwcVRZTEZvRTZuYjZKcmNyQzRjNzNJbEdrTVFJ&#13;eDRrUEJ6bXJ1bGR5bUd5V1U2dmpJM05ZVkF6azV3OGJyYw==` | **Requis.** [Token Firebase Cloud Messaging.](https://overflow.canine.tools/questions/37671380/what-is-fcm-token-in-firebase#37671576) |
| `<ns1:idUniqueAndroid>`  | `a1b2c3d4e5f67890` | **Requis.** [Identifiant Android.](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID) |
| `<ns1:sInfoPerso>`       | `1	1	1	0	0	Ligne Tram A;` | Paramètres de Canal. |

### Attributs des paramètres de Canal:

Les paramètres de Canal se formatent comme ci:
`NotifsActivés NotifsGénérales NotifsLignes NotifsTouteLigne NotifsTouteLigne Données;`

* `NotifsActivés` définissent le statut des notifications de l'utilisateur, `0` désactive les notifications (push), `1` les activent.
* `NotifsGénérales` définit le statut du Canal global, `1` l'active, `0` de désactive, il est inchangeable dans l'appli T2C. *(Voir Canal `1` dans [Notification.txt](/WinDev/pegase/notification.md))*
* `NotifsLignes` définit le statut du Canal spécifique,`1` l'active, `0` de désactive, il est inchangeable dans l'appli T2C. *(Voir Canal `2` dans [Notification.txt](/WinDev/pegase/notification.md))*
* `NotifsTouteLigne` définit le filtre du Canal spécifique, `1` active les notifications pour toutes les lignes, `0` active les notifications uniquement les lignes sélectionnées dans `Données`. *(Oui, ce paramètre est bien présent 2 fois)*
* `Données` est le filtre des lignes spécifiques, les données correspondent au `m_sLigne_name` des lignes sélectionnés. *(voir [Retourne_Donnees_Reseau_ligne](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne.md))*

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
		<AjouteIdentifiantAndroidResult>true</AjouteIdentifiantAndroidResult>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
:::

Ici, le serveur renvoie le statut de la requête:

* `false` signifie l'ajout n'a pas été fait, où aucune modification n'est nécessaire.
* `true` signifie l'ajout à été ajouté au service de notification GSM.