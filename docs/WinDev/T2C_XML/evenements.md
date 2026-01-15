# T2C XML - Evenements.xml

::: danger Avertissement: Nouveau Réseau T2C
Cette page parle d'un **endpoint obsolète** lors de la migration vers l'API "Yoozly"
:::

Dernières "Actualités" de l'application T2C.

::: info
Les Actualités sont le contenu affiché dans l'onglet "Actualités" de l'application T2C.

Elles apparaissent aussi dans un diaporama dans l'accueil.
:::

## Obtenir les dernières actus de la T2C

#### URL
```
  GET https://www.t2c.fr/evenements.xml
```

## Exemple de réponse

:::details Cliquez pour voir la Réponse.
```xml
<?xml version="1.0" encoding="utf-8"?>
<rss
	xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0" xml:base="https://www.t2c.fr/">
	<channel>
		<title>Événements</title>
		<link>https://www.t2c.fr/</link>
		<description/>
		<language>fr</language>
		<item>
			<title>Une nouvelle ère pour l'information voyageurs</title>
			<link>https://www.t2c.fr/actu-evenements/une-nouvelle-ere-pour-linformation-voyageurs</link>
			<description>
&lt;span&gt;Une nouvelle ère pour l'information voyageurs&lt;/span&gt;

&lt;p&gt;&lt;img src="https://www.t2c.fr/sites/default/files/styles/300/public/2025-05/VISUEL_FLIRT_APPLI_1600X900PX.jpg?itok=rCGtFTyQ" alt="Une nouvelle ère pour l'information voyageurs" title="Une nouvelle ère pour l'information voyageurs"&gt;&lt;/p&gt;
</description>
			<pubDate>Fri, 16 May 2025 06:41:41 +0000</pubDate>
			<guid isPermaLink="false">267689 at https://www.t2c.fr</guid>
		</item>
		<item>
			<title>Lutter contre les incivilités</title>
			<link>https://www.t2c.fr/actu-evenements/lutter-contre-les-incivilites-0</link>
			<description>
&lt;span&gt;Lutter contre les incivilités&lt;/span&gt;

&lt;p&gt;&lt;img src="https://www.t2c.fr/sites/default/files/styles/300/public/2023-11/V1_T2C_VISUEL_INCIVILITES_CONTROLEUSE_1600X900PX.jpg?itok=TxNyOeMM" alt="Lutter contre les incivilités" title="Lutter contre les incivilités"&gt;&lt;/p&gt;
</description>
			<pubDate>Thu, 23 Nov 2023 16:10:02 +0000</pubDate>
			<guid isPermaLink="false">249988 at https://www.t2c.fr</guid>
		</item>
		<item>
			<title>Billet Sans Contact (BSC)</title>
			<link>https://www.t2c.fr/actu-evenements/billet-sans-contact-bsc</link>
			<description>
&lt;span&gt;Billet Sans Contact (BSC)&lt;/span&gt;

&lt;p&gt;&lt;img src="https://www.t2c.fr/sites/default/files/styles/300/public/2022-10/bsc-1600X900_0.jpg?itok=HbTFuq6q" alt="Billet Sans Contact (BSC)" title="Billet Sans Contact (BSC)"&gt;&lt;/p&gt;
</description>
			<pubDate>Wed, 16 Nov 2022 06:50:57 +0000</pubDate>
			<guid isPermaLink="false">210258 at https://www.t2c.fr</guid>
		</item>
		<item>
			<title>Appli T2C</title>
			<link>https://www.t2c.fr/actu-evenements/appli-t2c</link>
			<description>
&lt;span&gt;Appli T2C&lt;/span&gt;

&lt;p&gt;&lt;img src="https://www.t2c.fr/sites/default/files/styles/300/public/2023-05/Ev%C3%A9nement_Appli_1600X900PX.jpg?itok=UCV_C0gu" alt="Appli T2C" title="Appli T2C"&gt;&lt;/p&gt;
</description>
			<pubDate>Tue, 23 May 2023 15:42:37 +0000</pubDate>
			<guid isPermaLink="false">235194 at https://www.t2c.fr</guid>
		</item>
		<item>
			<title>Prime Transport</title>
			<link>https://www.t2c.fr/actu-evenements/prime-transport</link>
			<description>
&lt;span&gt;Prime Transport&lt;/span&gt;

&lt;p&gt;&lt;img src="https://www.t2c.fr/sites/default/files/styles/300/public/2022-05/T2C_PUB_PRIME_TRANSPORT_1600X900.jpg?itok=Bbe7IxwD" alt="Prime Transport" title="Prime Transport"&gt;&lt;/p&gt;
</description>
			<pubDate>Sat, 01 Oct 2022 08:00:00 +0000</pubDate>
			<guid isPermaLink="false">6493 at https://www.t2c.fr</guid>
		</item>
		<item>
			<title>Facile et rapide ! Achetez votre ticket unité par SMS !</title>
			<link>https://www.t2c.fr/actu-evenements/facile-et-rapide-achetez-votre-ticket-unite-par-sms</link>
			<description>
&lt;span&gt;Facile et rapide ! Achetez votre ticket unité par SMS !&lt;/span&gt;

&lt;p&gt;&lt;img src="https://www.t2c.fr/sites/default/files/styles/300/public/2020-09/Evenement_SMS_TICKET_1600x900.jpg?itok=3Zwquuoo" alt="Facile et rapide ! Achetez votre ticket unité par SMS !" title="Facile et rapide ! Achetez votre ticket unité par SMS !"&gt;&lt;/p&gt;
</description>
			<pubDate>Sun, 25 Sep 2022 06:05:36 +0000</pubDate>
			<guid isPermaLink="false">92274 at https://www.t2c.fr</guid>
		</item>
	</channel>
</rss>

```
:::

### Attributs du XML Événements:

* Le formatage doit être un minimum correct, sinon le message ne s'affiche pas dans l'application T2C.
* Le message dans la balise `<description>` doit obligatoirement commencer par une balise `<span>`, puis le message formaté.
* Le contenu de l'Actu est dans la balise `<item>`.
* Les images doivent faire partie de `EnteteSiteT2c` (par défaut: `https://www.t2c.fr`), sinon les images ne vont pas se charger.

* La Balise `<title>` est le titre affiché de l'événement.
* La balise `<link>` est un lien ramenant vers un article de la T2C lorsque l'on clique sur l'événement.
* La balise `<description>` est la partie principale, le contenu est formaté en "HTML échappé" (escaped HTML). Elle doit contenir une balise `<span>` puis une image.
* La balise `<pubDate>` contient la date de publication de l'évènement.
* La balise `<guid>` est l'identifiant unique universel de l'évènement.

## Exemple de formatage
:::details Cliquez pour voir le formatage.

```xml{10-35}
<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0" xml:base="https://www.t2c.fr/">
  <channel>
    <title>Événements</title>
    <link>
    https://www.t2c.fr/
    </link>
    <description/>
    <language>fr</language>
    <item>
      <title>Squeezie</title>
      <link>
      https://youtube.com/@Squeezie
      </link>
      <description>
        &lt;span&gt;Squeezie&lt;/span&gt;

        &lt;p&gt;&lt;img src=&quot;http://127.0.0.1/img/squeezie.jpg&quot;&gt;&lt;/p&gt;
      </description>
      <pubDate>Thu, 23 Nov 2025 16:10:02 +0000</pubDate>
      <guid isPermaLink="false">333333 at https://www.t2c.fr</guid>
    </item>
    <item>
      <title>Cyprien</title>
      <link>
      https://youtube.com/@cyprien
      </link>
      <description>
        &lt;span&gt;Cyprien&lt;/span&gt;

        &lt;p&gt;&lt;img src=&quot;http://127.0.0.1/img/cyprien.jpg&quot;&gt;&lt;/p&gt;
      </description>
      <pubDate>Thu, 23 Nov 2025 16:10:02 +0000</pubDate>
      <guid isPermaLink="false">333334 at https://www.t2c.fr</guid>
    </item>
  </channel>
</rss>

```
:::

<h3 align="center">
  <br>
  <img src="/evenement_exemple1.png" width="250px" alt="Image de l'application T2C montrant l'accueil, avec le diaporama montrant des évènements custom."/>
  <br>
  <img src="/evenement_exemple2.png" width="250px" alt="Image de l'application T2C montrant le menu Actualités montrant des évènements custom."/>
</h3>

Titres: `<title>Squeezie</title>` et `<title>Cyprien</title>`

Liens: `<link>https://youtube.com/@Squeezie</link>` et `<link>https://youtube.com/@cyprien</link>`

<details>
  <summary>Contenu de l'évènement: (cliquez)</summary>

::: info Contenu (formaté en "HTML Échappé"):
```xml
<description>
&lt;span&gt;Squeezie&lt;/span&gt;

&lt;p&gt;&lt;img src=&quot;http://127.0.0.1/img/squeezie.jpg&quot;&gt;&lt;/p&gt;
</description>
```
:::

:::info Contenu (formaté en HTML Classique):
```html
<description>
<span>Squeezie</span>

<p><img src="http://127.0.0.1/img/squeezie.png"></p>
</description>
```
:::

</details>

Dates de publication: `<pubDate>Thu, 23 Nov 2025 16:10:02 +0000</pubDate>`

Identifiants:

`<guid isPermaLink="false">333333 at https://www.t2c.fr</guid>`

`<guid isPermaLink="false">333334 at https://www.t2c.fr</guid>`
