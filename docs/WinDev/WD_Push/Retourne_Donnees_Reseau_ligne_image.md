# T2C Push Server - Retourne_Donnees_Reseau_ligne_image

::: danger Avertissement: Nouveau Réseau T2C
Cette page parle d'un **endpoint obsolète** lors de la migration vers l'API "Yoozly"
:::

Obtenir les images des Lignes du réseau T2C. 

:::info
Cela contient les images *en 144p* des Lignes affichés dans l'application.
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
```xml{8-43}
<?xml version="1.0" encoding="UTF-8"?>
<SOAP-ENV:Envelope
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
	<SOAP-ENV:Header/>
	<SOAP-ENV:Body>
		<Retourne_Donnees_Reseau_ligne_imageResult>H4sIAAAAAAAACuy9XcssSbCd91eac22Zqsr69F1VVhYYgw3GdxYICY4PMj6SsPCV/7xjPSuy&#13;
u/fMnpktH10YM/Cy6f2+Xd1V+REZsWLFiv/5H//Tf/wP//kf/6f/4X+Z6r/6V//r6/9+/cM/&#13;
/5v//D/+x3/+N//Hv/+n//CP/+bf//M//cN/9w+8/lf/9r/93//TP/3Df8M7/t3/9b/99//8&#13;
b//pH/22eMvzvO79Ff+24TUMr3F4zedrXl/zoX/jN8P4+TmGf/1//uv/wAv+NHDhqBfr/pqX&#13;
17a/1uO1rvnX+Y4fLhle05m/1M/Ov7M+c/Tvl6+/jnmJf0rjbdfv3/Z5Pa95Y5M/ufzubdPn&#13;
vyV/88O3jN+f1r4u//qcfPzf38DXgPi/WwzIyFA0XbLNr6nF69caQxSv46H4TRn4N27p+Izn&#13;
feW3zKXfucf/+8Vvf7hk4sEX/v3+WRnquf914zcbl2zv//IToxd3cvHvzs/Jv/7rySU3vzx5&#13;
W/362bgqhu556T2V136W/h6e7pWP9v0g37dauMSva//2/cfv+u3PD9/yaz//lS+JR6vvhbTr&#13;
6eqUzzJ5QcbinHJCR89jyRe6dubaGLr3GhuZrPF3P79fmd+XeDBnrl2/5pT5en/RteiScfha&#13;
YB7/6WudLH3ZfO3K7f76FrbwyH2O02tiZ82jvncsryXW/5hrLB58iy08v8r02mOzjK+TUZrK&#13;
a55eV4xV/HV5LdPr5pIn9kW8ubzWuDAumfIRxvjk7TXur/GQ3ZiW17S+JlZybPzpkJGJnVWW&#13;
V1lfZXuVXTurnFpv8ywDJcu2veZdl8jEna8lbnV+LfHt62vZXsv+Wo7Xcr7W+PZZGzas2bqF&#13;
fdMl2tHnayvaxVvs5fW1bTJ62/HaztdeXvv82pfXvr727bVzyX689vN1TK+jvI75dSyvY30d&#13;
2+vYX8fxOs7XOb3O8jrn17m8TuzYub3O/XUer/N8XTE+5XXNMWWva31d2+vaX9fxuk4tsFpi&#13;
QnVJXV51fdXtVfdXPV71fN0xmOV1z697ed3r695k5+/jdZ9hsXVJm16tvNr8asurra+2vdr+&#13;
aserna8n1uT0esrrmV/P8nrW18MgP3FSHK/n/HHFjt3k/natpk3+w3X7k+XKJT9fsd1ET/3C&#13;
tGlcMrPUv1cs74nZ+f4ifYK+iwXjg2DV0o1FG8s1PiGMthZq0Yr1Wo2biXU7Y2C9br1c4w5j&#13;
9cYSjUUbyzVWr9fqPeZCnZiXWI1xPsZCjSH9Yelq3b4+izZXLJf84aJ9/WzF6pI/XrSvn61Y&#13;
NvJ70U6/X7ev3y1aHv/P1u3rd4tWl/zpun39btHqkj9btz9ZsaxkL9rfrtjX93K97WbUvmDG&#13;
L1NccmmVhyM4vq7p8WN2zofbe1j8MRcDv5z01+EvXrP3//ptf1/y9yV/X/L3JX9f8vclf1/y&#13;
9yV/X/L3JX9f8vclf1/y9yV/X/L3JX9f8vclf1/y/41LntfZXhep0uN+bY+A33l/LcCD46bf&#13;
VDIgpb7G+3VeSg0c5+sGxB5PwdH7/NpqIr3n+rpvgZPx+esmpFHZhEWA7bMJf17aqzblZMuV&#13;
2YQG4HwWvWdfX3MVHL2Or3q9VkB4YbmPUFndJ88y7tzt9nraa7+EeB8lvzRu5plfRzxIfW3x&#13;
aPdrAoMtJH+n9jqrkO35VELzOvWe9RK+qrtdhcHGHU6kn+IN8fmCUstrquDbj6D1uNWyv1p8&#13;
1C3EOy4UkMu3TLc+MH7ZFt1hfNFzClv2vcVTx6C1Sw8SN7nsCaf7buOqeEa/s4H6bgyycqnx&#13;
+fGe+EAnhflev3M4lOAoD8jwLWw8/hXu3fINB1MZH7Wf+ZtSBInHo02T0G+nJOL39yC8/ekJ&#13;
u8oM+k91100eqyD3ZRM0rT9V4fkxOKe+ixsblCyIWbunXEtH+5qaR3/9Ggpm/zMarz8fCmWf&#13;
jcA/wslvLQZdW6seP15PB3PKQA2L1nZ81LDm48fr/RB4HneutH4Twv+zEX4N5Pf/aITHR4mP&#13;
oSqlfvWhm8kmxEKd+1zXSZmI+dE4x7XzJgA/PjyWffxmiz1CGn26dGO1/Pl0vPpc5CD/wnS8&#13;
.....
fVKm4dEGJad4gs3UPfxOLAlzSayBGlJ/fdQ2QepXQKV0aYQEg7FGYHEvYcOnONTCkmj5ymai&#13;
knoJRjl4dg6/tRPdl5rQiiRKTXUWHf0bTkC7vDpX8FFKLB/mQkUf8Y7146elgVU56/z047gr&#13;
WOEGFV3VuddcdfPQ7un0S0grJzF5gWan47jsOCN+ipP3eAXbSepJNB3W50b70SZmEFUjkwt6&#13;
P16NT5nBO3Ae6H+FDcLHHq3QJDZULl/xL7GOQ9E2DdsUDvqZvHT/+XBk/1ToybhB5x+WkMgI&#13;
q/PnL/0ZDkx0HfX/8w3vP1/yz5f88yX/fMk/X/LPl/zzJf98CROt3f+3f/s//u1//z8BjyMB&#13;
4cIpNwA=</Retourne_Donnees_Reseau_ligne_imageResult>
	</SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```
:::

:::tip IMPORTANT
Les informations sont contenus dans la balise `<Retourne_Donnees_Reseau_arretResult>`.

Mais **elles sont encodés en BASE64 puis en GunZip!**

Pour lire les informations, **nous vous recommendons d'utiliser [ce preset CyberChef](https://cyberchef.io/#recipe=Find_/_Replace(%7B'option':'Regex','string':'%26%2313;'%7D,'',true,true,true,false)From_Base64('A-Za-z0-9%2B/%3D',true)Gunzip()Unescape_Unicode_Characters('%5C%5Cu')).**
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
