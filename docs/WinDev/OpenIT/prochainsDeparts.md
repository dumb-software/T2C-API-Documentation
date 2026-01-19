# OpenIT - ProchainsDeparts

Obtenir le temps restant d'attente d'un arrêt.

Contient aussi d'autres informations sur le trajet, comme l'heure d'arrivée, un compte a rebours, si il est annulé, accès handicapé disponible...

Cela peut peut comprendre ou non toutes les Lignes associés à l'arrêt si le paramètre `lineid=` est indiqué.

## Obtenir les prochains départs (Ligne Spécifiée)

#### URL

```
  GET https://tr.t2c.openit.ch/prochainsDeparts?roid=&rn=&lineid=&of=
```
ou
```
  GET https://qr.t2c.fr/prochainsDeparts?roid=&rn=&lineid=&of=
```

## Obtenir les prochains départs (Ligne Non-Spécifiée)

#### URL

```
  GET https://tr.t2c.openit.ch/prochainsDeparts?roid=&rn=&of=
```
ou
```
  GET https://qr.t2c.fr/prochainsDeparts?roid=&rn=&of=
```


## Paramètres
| Paramètres   | Description                                             | Exemple                    |
| :----------- | :------------------------------------------------------ | :------------------------- |
| `roid=`      | **Requis.** Identifiant de l'arrêt.                     | `roid=3377704015496218`    |
| `rn=`        | **Recommandé.** Nombre maximum de résultats à afficher. | `rn=20` (défaut)           |
| `lineid=`    | **Optionnel.** Identifiant de la Ligne.                 | `lineid=11821953316814893` |
| `of=`        | **Optionnel.** Définit le format de réponse?            | `of=xml`                   |

## Exemple d'envoi

```
  GET https://tr.t2c.openit.ch/prochainsDeparts?roid=3377704015496218&rn=20&lineid=11821953316814893&of=xml
```

Ici, nous avons fait la demande des prochains passages de l'arrêt **Sully**, de la **Ligne 9**, d'un **maximum** de résultat de **20** passages.

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
```xml{3-65}
<timeTable
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://synthese.rcsmobility.com/include/54_departures_table/DisplayScreenContentCommon.xsd" type="departure">
	<journey routeId="2533425114685885" dateTime="2025-08-27 17:48:46" plannedDateTime="2025-08-27 17:48:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951639382" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="00:21:36.471255">
		<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
		<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Georges Besse" wayback="1" handicapped_access="yes">
			<network id="6192453782601729" name="T2C" image="" />
		</line>
		<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
		<destination id="1970329131942181" name="Georges Besse" cityName="Clermont-Ferrand"/>
		<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
	</journey>
	<journey routeId="2533425114685887" dateTime="2025-08-27 18:14:46" plannedDateTime="2025-08-27 18:14:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951639277" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="00:47:36.470612">
		<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
		<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Jean Moulin" wayback="1" handicapped_access="yes">
			<network id="6192453782601729" name="T2C" image="" />
		</line>
		<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
		<destination id="1970329131942183" name="Jean Moulin" cityName="Clermont-Ferrand"/>
		<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
	</journey>
	<journey routeId="2533425114685885" dateTime="2025-08-27 18:40:28" plannedDateTime="2025-08-27 18:40:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951639264" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="01:13:18.470159">
		<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
		<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Georges Besse" wayback="1" handicapped_access="yes">
			<network id="6192453782601729" name="T2C" image="" />
		</line>
		<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
		<destination id="1970329131942181" name="Georges Besse" cityName="Clermont-Ferrand"/>
		<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
	</journey>
	<journey routeId="2533425114685886" dateTime="2025-08-27 19:15:28" plannedDateTime="2025-08-27 19:15:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951639340" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="01:48:18.469720">
		<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
		<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Brézet" wayback="1" handicapped_access="yes">
			<network id="6192453782601729" name="T2C" image="" />
		</line>
		<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
		<destination id="1970329131942174" name="Brézet" cityName="Clermont-Ferrand"/>
		<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
	</journey>
	<journey routeId="2533425114685886" dateTime="2025-08-27 19:44:28" plannedDateTime="2025-08-27 19:44:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951639295" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="02:17:18.469272">
		<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
		<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Brézet" wayback="1" handicapped_access="yes">
			<network id="6192453782601729" name="T2C" image="" />
		</line>
		<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
		<destination id="1970329131942174" name="Brézet" cityName="Clermont-Ferrand"/>
		<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
	</journey>
	<journey routeId="2533425114685886" dateTime="2025-08-27 20:16:28" plannedDateTime="2025-08-27 20:16:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951639384" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="02:49:18.468832">
		<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
		<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Brézet" wayback="1" handicapped_access="yes">
			<network id="6192453782601729" name="T2C" image="" />
		</line>
		<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
		<destination id="1970329131942174" name="Brézet" cityName="Clermont-Ferrand"/>
		<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
	</journey>
	<journey routeId="2533425114685887" dateTime="2025-08-27 21:15:28" plannedDateTime="2025-08-27 21:15:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951673922" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="03:48:18.468389">
		<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
		<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Jean Moulin" wayback="1" handicapped_access="yes">
			<network id="6192453782601729" name="T2C" image="" />
		</line>
		<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
		<destination id="1970329131942183" name="Jean Moulin" cityName="Clermont-Ferrand"/>
		<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
	</journey>
</timeTable>
```

:::

### Formatage:
Nous allons prendre l'exemple d'un départ, la réponse est formatée comme ci:

```xml
<journey routeId="2533425114685887" dateTime="2025-08-27 18:14:46" plannedDateTime="2025-08-27 18:14:00" arrivalDateTime="" plannedArrivalDateTime="" id="4503749951639277" is_canceled="no" handicapped_access="yes" operatorCode="" blink="0" realTime="yes" waiting_time="00:47:36.470612">
	<stop id="3377704015496218" operatorCode="" name="Sully" handicapped_access="yes"/>
	<line id="11821953316814893" creatorId="" name="Ligne 9" shortName="9" longName="9" color="(171,115,5)" xmlColor="#ab7305" foregroundColor="" xmlForegroundColor="" style="marron" image="ligne-9.jpg" direction="Jean Moulin" wayback="1" handicapped_access="yes">
		<network id="6192453782601729" name="T2C" image="" />
	</line>
	<origin id="1970462275928130" name="Trémonteix Eychart" cityName="Clermont-Ferrand"/>
	<destination id="1970329131942183" name="Jean Moulin" cityName="Clermont-Ferrand"/>
	<stopArea id="1970329131942039" name="Sully" cityId="1688849860563049" cityName="Clermont-Ferrand" directionAlias=""/>
</journey>
```

**La balise `<journey>`:**
* `routeId=` correspond à l'identifiant de la route.
* `dateTime=` correspond à l'heure de l'arrivée du véhicule.
* `plannedDateTime=` correspond à l'heure de l'arrivée du véhicule (approximatif).
* `arrivalDateTime=` *inutilisé*
* `plannedArrivalDateTime=` *inutilisé*
* `id=` correspond à l'identifiant du depart
* `is_canceled=` indique si le depart est annulé.
* `handicapped_access=` indique si l'arrêt *"supporte"* les personnes à mobilité réduite.
* `blink=` *inutilisé*
* `realTime=` indique si l'horaire de depart est en temps réel.
* `waiting_time=` est un compte à rebours du temps restant à attendre.

**La balise `<stop>`:**
* `id=` correspond à l'identifiant de l'arrêt.
* `operatorCode=` *inutilisé*
* `name=` correspond au nom de l'arrêt.
* `handicapped_access=` indique si l'arrêt *"supporte"* les personnes à mobilité réduite.

**La balise `<line>`:**
* `id=` correspond à l'identifiant de la Ligne.
* `creatorId=` *inutilisé*
* `name=` correspond au nom complet de la Ligne.
* `shortName=` correspond au nom "court" de la Ligne.
* `shortName=` correspond au nom "long" de la Ligne.
* `color=` correspond à la couleur associé à la Ligne. (formaté en RGB)
* `xmlColor=` correspond à la couleur associé à la Ligne. (formaté en Hex)
* `foregroundColor=` correspond à la couleur au premier plan associé à la Ligne. (formaté en RGB)
* `xmlForegroundColor=` correspond à la couleur au premier plan associé à la Ligne. (formaté en Hex)
* `style=` correspond au nom simple attribué à la couleur de la Ligne.
* `image=` correspond à l'image affichée dans l'application T2C pour représenter la Ligne. (voir [Retourne_Donnees_Reseau_ligne](/WinDev/WD_Push/Retourne_Donnees_Reseau_ligne.md))
* `direction=` correspond à la direction du Trajet.
* `wayback=` définit si la direction est une sous-destination. (Une sous-destination est affichée comme destination secondaire, pas comme "Direction".)
* `handicapped_access=` indique si l'arrêt *"supporte"* les personnes à mobilité réduite.

**La balise `<origin>`:**
* `id=` correspond à un identifiant de zone.
* `name=` correspond au nom de l'arrêt du point de départ du trajet.
* `cityName=` correspond au nom de la ville.

**La balise `<destination>`:**
* `id=` correspond à un identifiant de zone.
* `name=` correspond au nom de l'arrêt du terminus du trajet.
* `cityName=` correspond au nom de la ville.

**La balise `<stopArea>`:**
* `id=` correspond à un identifiant de zone.
* `name=` correspond au nom de l'arrêt sélectionné.
* `cityId=` correspond à l'identifiant de la ville.
* `cityName=` correspond au nom de la ville.
* `directionAlias=` correspond au nom alternatif de la destination.