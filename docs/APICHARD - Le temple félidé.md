# Glossaire

- [Cybersquattage](#Cybersquattage) : Pratique consistant à occuper des noms de domaine correspondant à un domaine déjà existant pour plusieurs raisons : profiter de sa notoriété
- [Framework](#Framework) : Ensemble de composant logiciels ou outils formant une bibliothèque.
- [JPA](#JPA) : Java Persistence API. C'est une interface permettant d'organisée des données relationnelles.
- [Responsive](#Responsive) : Technique de conception de pages qui fait en sorte que l’affichage s'adapte automatiquement aux différents appareils (mobile / tablette / site web).
- [SPA](#SPA) : Single Pages Application en anglais. Cela signifie qu'une seule page web est accessible et la moindre action utilisateur est récupérée et affichée dynamiquement.
- [URL](#URL) : Uniform Resource Locator en anglais. Cela correspond à la localisation d'une page d'un site web.

# Sommaire

1. [Introduction](#introduction)
2. [Expression des besoins](#expression)
   1. [Présentation](#expression_presentation)
   2. [Les acteurs](#expression_acteurs)
   3. [Cas d’utilisations](#expression_cas_utilisations)
   4. [Lots non réalisés dans ce besoin](#expression_lots)
3. [Analyse des besoins](#analyse)
   1. [Cas d’utilisations](#analyse_cas_utilisations)
   2. [Regroupement des classes](#analyse_regroupement_classes)
4. [Conception](#conception)
   1. [Architecture](#conception_architecture)
   2. [Choix technlogiques](#conception_technologies)
   3. [Cas d’utilisations](#conception_cas_utilisation)
5. [Bibliographies](#bibliographie)

<div style="page-break-after: always;"></div>

# Introduction <a name="introduction"></a>

Dans le cadre de l'unité d'enseignement GLG204 - Architectures Logicielles Java niveau 2, il y a une réalisation d'un projet, ainsi que sa soutenance. Ce dernier a pour objectifs de mettre à l'épreuve mes compétences acquises lors de cette formation d'ingénieur, ainsi que mes capacités d'analyses et de prise de recul.

Ce projet s'inscrit pour ma part sur une fin d'études du diplôme d'ingénieur en informatique : Architecture et intégration des systèmes et des logiciels (CYC9101A). La société décrite dans ce projet est une société fictive dont les besoins ont été imaginés par mes soins.

Dans un premier temps, nous allons définir l'expression des besoins de la société "Temple Félidé". Sur la base de cette expression, nous effectuerons l'analyse de ses besoins, puis nous déterminerons l'architecture et les technologies à mettre en place.

<div style="page-break-after: always;"></div>

# Expression des besoins <a name="expression"></a>

Les objectifs de cette section sont de décrire les besoins du Temple Félidé, en établissant les critères de sélection, en favorisant l'aspect concurrentiel et en facilitant la prise de décision. Ces objectifs sont essentiels pour aider l'entreprise à trouver les solutions les mieux adaptées à ses besoins et à ses contraintes, afin de toucher le plus de clients potentiels.

Pour ce faire, nous allons présenter le projet, la société, ainsi que ses acteurs. Nous décrirons les besoins au travers de diagrammes de cas d'utilisation.

## 2. Présentation <a name="expression_presentation"></a>

### 2.1 Présentation du projet

Le Temple félidé souhaite mettre en place un site <a name="Responsive">responsive</a> de garde de chats. Ce site permettrait de mettre en relation des particuliers, souhaitant faire garder leurs animaux soit par des particuliers amoureux d'animaux ou par des professionnels formés.

### 2.2 Situation actuelle

La société ne possède actuellement aucun site et fonctionne par le bouche-à-oreille, ainsi que sur papier.

### 2.3 Les contraintes

- Le site doit également être consultable en mobile au vu des usages actuels
- Le site doit être plaisant et centrer autour de la réservation

### 2.4 Présentation de la société

La société le Temple félidé est une garderie professionnelle dédié aux chats. Le personnel de l'entreprise ont tous une formation d'assistant vétérinaire et sont passionnés par les félins. Les espaces intérieurs et extérieurs sont aménagés et pensés pour le plaisir et le confort de nos amis les chats. Les chambres individuelles et familiales sont imaginés pour satisfaire les félins les plus exigeant.
Le gérant souhaitait mettre en place un site pour faciliter les réservations et passer sur un planning en ligne.

Il a commencé à élaborer une réflexion autour de son besoin avec l'entreprise (Nous) acceptant de réaliser son site. Dans sa réflexion, il a pris en compte que leur garderie est souvent complète à certaines périodes. De nombreux particuliers se retrouvant sans solution pour faire garder leurs chats. Après réflexion ils se sont dit que créer un site qui mettrait en relation des particulier et des professionnels permettrait de résoudre cette problématique ainsi que celle de la réservation et du planning. Cela permet également de générer des partenariats privilégiés. De plus, il souhaite mettre en avant l'intérêt de passer par un professionnel formé et possédant des espaces adaptés pour accueillir des chats. Le gérant imaginait aussi ajouter de nombreuses fonctionnalités par la suite et ainsi lotir son besoin.

<!-- Mélange avec l'analyse ? A voir comment goupiller les choses -->

<div style="page-break-after: always;"></div>

## 3. Les acteurs <a name="expression_acteurs"></a>

- Le particulier souhaitant faire garder son/ses chat(s) sera nommé : CatIndividual
- Le particulier proposant de garder un ou plusieurs chats sera nommé : CatSitter
- Le professionnel sera nommé : CatSitterPro

@startuml
skinparam actorStyle awesome
package Particulier{
actor CatIndividual #ForestGreen
actor CatSitter #Teal
}

package Professionnel {
actor CatSitterPro #Navy
}
@enduml

<div style="page-break-after: always;"></div>

## 4. Cas d’utilisations <a name="expression_cas_utilisations"></a>

1. [Réservation d'un particulier](#expression_besoin_reservation_particulier)
   1. [Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel](#expression_besoin_reservation_particulier_cas1)
   2. [Consulter ma réservation](#expression_besoin_reservation_particulier_cas2)
   3. [Annuler ma réservation](#expression_besoin_reservation_particulier_cas3)
2. [Gestion d'un CatSitter](#expression_besoin_gestion_catsitter)
   1. [Donner mes disponibilités de gardes](#expression_besoin_gestion_catsitter_cas1)
   2. [Consulter mon planning de réservation](#expression_besoin_gestion_catsitter_cas2)
3. [Gestion d'un compte](#expression_besoin_gestion_compte)
   1. [Créer mon compte](#expression_besoin_gestion_compte_cas1)
   2. [Se connecter](#expression_besoin_gestion_compte_cas2)
   3. [Se déconnecter](#expression_besoin_gestion_compte_cas3)
   4. [Modifier mon profil](#expression_besoin_gestion_compte_cas4)

### 4.1 Réservation d'un particulier <a name="expression_besoin_reservation_particulier"></a>

<div style="text-align: center;">

@startuml

left to right direction

skinparam actorStyle awesome
skinparam usecase {
BackgroundColor<<AUTHENTIFICATION>> IndianRed
BackgroundColor<<RESERVATION>> DarkOrange
}

package Particulier{
actor CatIndividual #ForestGreen
}
actor "CatSitterPro / CatSitter" as CatSitterPro

usecase "Payer la réservation auprès de" as UC0
rectangle "Site Le Temple Félidé" {
package Public {
usecase "Se connecter" as UC1 <<AUTHENTIFICATION>>
usecase "Consulter les réservations disponibles" as UC2
}

package Privée {
usecase "Réserver auprès de" as UC8 <<RESERVATION>>
usecase "Se déconnecter" as UC3
usecase "Consulter sa réservation" as UC5
usecase "Annuler sa réservation" as UC6
}
}

CatIndividual ---> UC0 #line:ForestGreen;line.bold
UC0 ---> CatSitterPro #line:ForestGreen;line.bold

CatIndividual ---> UC1 #line:ForestGreen;line.bold

CatIndividual ---> UC2 #line:ForestGreen;line.bold
UC2 --> UC8 #line:ForestGreen;line.bold

CatIndividual ---> UC3 #line:ForestGreen;line.bold

CatIndividual ---> UC5 #line:ForestGreen;line.bold
CatIndividual ---> UC6 #line:ForestGreen;line.bold

UC8 ---> CatSitterPro #line:ForestGreen;line.bold

UC3 ...> UC1 #line:IndianRed;line.dashed
UC5 ...> UC1 #line:IndianRed;line.dashed
UC6 ...> UC1 #line:IndianRed;line.dashed
UC8 ...> UC1 #line:IndianRed;line.dashed

UC5 ...> UC8 #line:DarkOrange;line.dashed
UC6 ...> UC8 #line:DarkOrange;line.dashed

@enduml

</div>

#### 4.1.1 Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel <a name="expression_besoin_reservation_particulier_cas1"></a>

##### Résumé

Le particulier souhaite faire garder son animal et pour ce faire sélectionne un particulier ou un professionnel sur le créneau de son choix. Puis il s'authentifie, afin de finaliser la réservation du créneau préalablement sélectionné.

##### Acteurs

- Le particulier (CatIndividual)
- Le particulier proposant du gardiennage (CatSitter)
- Le professionnel (CatSitterPro)

##### Pré-conditions

- Le particulier doit avoir un compte.
- Le particulier et le professionnel proposant leurs services de garde doivent obligatoirement avoir créé un compte et donner leurs disponibilités au préalable.
  Dans les deux cas, se référer au cas d’utilisation « Gestion d'un compte ».

##### Description

1. Le particulier consulte les réservations
2. Le particulier sélectionne un créneaux disponible correspondant à un particulier ou à un professionnel
3. Il s'authentifie avec son login et son mot de passe
4. Il est redirigé vers sa réservation et la confirme
5. La réservation est effective

##### Exceptions

**L'utilisateur ne s'authentifie pas :** Les données renseignées sont incorrectes et ne permettent pas de s'authentifier.

**La réservation est de 1 jour minimum :** La plage de date choisie doit s'étaler sur au minimum 1 jour.

**La date choisie est antérieur à la date du jour:** La réservation doit explicitement être faite dans le futur.

**La date choisie ne peut être supérieur à 1 an:** La réservation ne peut se faire au dela d'une année.

**Le créneau n'existe plus :** Une autre personne a reservé le créneau avant l'utilisateur courant.

##### Post-conditions

La réservation est confirmée.

##### Diagramme d'activité

@startuml
start
:Consulter les réservations;
:Réserver un créneau;
:S'authentifier;
:Réservation confirmée;
stop
@enduml

#### 4.1.2 Consulter ma réservation <a name="expression_besoin_reservation_particulier_cas2"></a>

##### Résumé

Le particulier souhaite consulter sa réservation afin de vérifier des informations ou les dates choisies.

##### Acteurs

- Le particulier (CatIndividual)

##### Pré-conditions

- Le particulier doit être authentifié.
- Le particulier doit avoir un compte.
- Le particulier doit avoir effectué une réservation au préalable.

##### Description

1. Le particulier clique sur son icône de profil
2. Il clique sur le menu "Mes réservations"
3. Il accède à ses créneaux réservés

##### Exceptions

**Le particulier ne s'est pas authentifié :** Le menu lui permettant de consulter les réservations n'est pas visible en tant qu'anonyme

**Le particulier n'a effectué aucune réservation :** La page lui indique qu'il n'a aucune réservation en cours.

##### Post-conditions

Le particulier a pu voir les informations concernant sa réservation.

##### Remarques

Le particulier peut voir en dessous de sa réservation en cours ou s'il n'a aucune réservation, l'historique de ses réservations passées.

##### Diagramme d'activité

@startuml
start
:Mes réservation;
:Visualisation de la réservation;
stop
@enduml

#### 4.1.3 Annuler ma réservation <a name="expression_besoin_reservation_particulier_cas3"></a>

##### Résumé

Le particulier souhaite pour des raisons personnelles annuler sa réservation. En rebond de cette annulation, une notification doit être envoyé à l'utilisateur qui effectuait le gardiennage de l'animal.

##### Acteurs

- Le particulier (CatIndividual)
- Le particulier proposant du gardiennage (CatSitter)
- Le professionnel (CatSitterPro)

##### Pré-conditions

- Le particulier doit être authentifié.
- Le particulier doit avoir un compte.
- Le particulier doit avoir effectué une réservation au préalable.

##### Description

1. Le particulier clique sur son icône de profil
2. Il clique sur le menu "Mes réservations"
3. Il accède à ses créneaux réservés
4. Il sélectionne le créneau à annuler
5. Il annule la réservation
6. La réservation n'est plus visible dans son espace
7. Une notification d'annulation est envoyée au professionnel ou au particulier devant garder l'animal

##### Exceptions

**Le particulier ne s'est pas authentifié :** Le menu lui permettant de consulter les réservations n'est pas visible en tant qu'anonyme

**Le particulier n'a effectué aucune réservation :** La page lui indique qu'il n'a aucune réservation en cours.

##### Post-conditions

Le particulier a pu annuler sa réservation.

##### Diagramme d'activité

@startuml
start
:Mes réservation;
:Visualisation de la réservation;
:Annuler sa réservation;
stop
@enduml

<div style="page-break-after: always;"></div>

### 4.2 Gestion d'un CatSitter <a name="expression_besoin_gestion_catsitter"></a>

@startuml
left to right direction

skinparam actorStyle awesome
skinparam usecase {
BackgroundColor<<AUTHENTIFICATION>> IndianRed
BackgroundColor<<RESERVATION>> DarkOrange
}

actor "CatSitter / CatSitterPro" as CatSitter #Teal

rectangle "Site Le Temple Félidé" {
package Public {
usecase "Se connecter" as UC1 <<AUTHENTIFICATION>>
}

package Privée {
usecase "Se déconnecter" as UC3
usecase "Modifier mon profil" as UC4
usecase UC7 as "Consulter mon planning
de réservation"
usecase UC11 as "Donner mes disponibilités
de gardes"
}
}

CatSitter ---> UC1 #line:Teal;line.bold
CatSitter ---> UC3 #line:Teal;line.bold
CatSitter ---> UC4 #line:Teal;line.bold
CatSitter ---> UC7 #line:Teal;line.bold

UC3 ...> UC1 #line:IndianRed;line.dashed
UC4 ...> UC1 #line:IndianRed;line.dashed
UC7 ...> UC1 #line:IndianRed;line.dashed

UC4 ---> UC11
@enduml

#### 4.2.1 Donner mes disponibilités de gardes <a name="expression_besoin_gestion_catsitter_cas1"></a>

@startuml
left to right direction

skinparam actorStyle awesome
skinparam usecase {
BackgroundColor<<AUTHENTIFICATION>> IndianRed
}

actor "CatSitter / CatSitterPro" as CatSitter #Teal

rectangle "Site Le Temple Félidé" {
package Public {
usecase "Se connecter" as UC1 <<AUTHENTIFICATION>>
}

package Privée {
usecase "Modifier mon profil" as UC4
usecase UC11 as "Donner mes disponibilités
de gardes"
}
}

CatSitter ---> UC4 #line:Teal;line.bold
UC4 ---> UC11 #line:Teal;line.bold

UC4 ...> UC1 #line:IndianRed;line.dashed

@enduml

##### Résumé

Un utilisateur connecté peut indiquer les plages de jours où il est disponible pour garder des félins.

##### Acteurs

- Le particulier proposant du gardiennage (CatSitter)
- Le professionnel (CatSitterPro)

##### Pré-conditions

- L'utilisateur doit avoir un compte
- L'utilisateur doit être connecté

##### Description

1. L'utilisateur clique sur le menu "Modifier mon profil"
2. il se rend sur la page d'authentification
3. Il fournit son identifiant et son mot de passe
4. Le système vérifie la concordance des données rentrées et attendues
5. L'utilisateur est redirigé vers la page "Mon profil" en étant connecté
6. Il a un encart dédié à l'ajout de ses disponibilités avec un planning
7. Il remplit ses disponibilités

##### Exceptions

**Donner une disponibilité en doublon :** Si l'utilisateur a déjà donné cette disponibilité, alors un message d'alerte s'affiche pour doublon et l'oblige à changer sa saisie

**Se rendre indisponible sur un créneau déjà réservé :** L'utilisateur avait renseigné au préalable sa disponibilité et un particulier a réservé ce créneau. Une notification lui indique une réservation en cours sur cette plage et lui demande confirmation quant à son annulation. L'utilisateur peut soit confirmer la suppression de cette réservation et le particulier sera notifié par mail, soit ne rien faire et garder le créneau disponible.

##### Post-conditions

Son planning est mis à jour et permet la réservation d'un particulier

##### Diagramme d'activité

@startuml
start
:Modifier mon profil;
:Modifier ses disponibilités;
:Profil mis à jour;
stop
@enduml

#### 4.2.2 Consulter mon planning de réservation <a name="expression_besoin_gestion_catsitter_cas2"></a>

@startuml
left to right direction

skinparam actorStyle awesome
skinparam usecase {
BackgroundColor<<AUTHENTIFICATION>> IndianRed
}

actor "CatSitter / CatSitterPro" as CatSitter #Teal

rectangle "Site Le Temple Félidé" {
package Public {
usecase "Se connecter" as UC1 <<AUTHENTIFICATION>>
}

package Privée {
usecase UC7 as "Consulter mon planning
de réservation"
}
}

CatSitter ---> UC7 #line:Teal;line.bold

UC7 ...> UC1 #line:IndianRed;line.dashed
@enduml

##### Résumé

Un utilisateur connecté peut consulter son planning de réservation et voir les jours où il effectuera des gardes et pour quel animal ainsi que le propriétaire.

##### Acteurs

- Le particulier proposant du gardiennage (CatSitter)
- Le professionnel (CatSitterPro)

##### Pré-conditions

- L'utilisateur doit avoir un compte
- L'utilisateur doit être connecté
- L'utilisateur doit avoir rempli ses disponibilités de gardes

##### Description

1. L'utilisateur clique sur le menu "Mon planning"
2. il se rend sur la page d'authentification
3. Il fournit son identifiant et son mot de passe
4. Le système vérifie la concordance des données rentrées et attendues
5. L'utilisateur est redirigé vers la page "Mon planning" en étant connecté
6. Il consulte son planning de réservation

##### Exceptions

**L'utilisateur n'a pas rempli ses disponibilités :** Un texte lui indique qu'il ne propose pas ses services de gardiennage et lui propose s'il le souhaite d'être redirigé vers la page dédié à l'ajout de ses disponibilités.

##### Post-conditions

Il consulte son planning de réservation

##### Diagramme d'activité

@startuml
start
:Consulter mon planning de réservation;
:Visualisation du planning;
stop
@enduml

<div style="page-break-after: always;"></div>

### 4.3 Gestion d'un compte <a name="expression_besoin_gestion_compte"></a>

@startuml
left to right direction

skinparam actorStyle awesome
skinparam usecase {
BackgroundColor<<AUTHENTIFICATION>> IndianRed
BackgroundColor<<RESERVATION>> DarkOrange
}

actor CatIndividual #ForestGreen
actor "CatSitter / CatSitterPro" as CatSitter #Teal

rectangle "Site Le Temple Félidé" {
package Public {
usecase "Se connecter" as UC1 <<AUTHENTIFICATION>>
usecase "Consulter le profil d'un" as UC9
usecase "Créer mon compte" as UC10
}

package Privée {
usecase "Se déconnecter" as UC3
usecase "Modifier mon profil" as UC4
}
}

CatIndividual ---> UC1 #line:ForestGreen;line.bold
CatSitter ---> UC1 #line:Teal;line.bold

CatIndividual ---> UC3 #line:ForestGreen;line.bold
CatSitter ---> UC3 #line:Teal;line.bold

CatIndividual ---> UC4 #line:ForestGreen;line.bold
CatSitter ---> UC4 #line:Teal;line.bold

CatIndividual ---> UC9 #line:ForestGreen;line.bold
UC9 ...> CatSitter #line:Teal;line.dashed

CatIndividual ---> UC10 #line:ForestGreen;line.bold
CatSitter ---> UC10 #line:Teal;line.bold

UC3 ...> UC1 #line:IndianRed;line.dashed
UC4 ...> UC1 #line:IndianRed;line.dashed

UC1 ...> UC10
@enduml

#### 4.2.3 Créer mon compte <a name="expression_besoin_gestion_compte_cas1"></a>

##### Résumé

Permet à un utilisateur de créer son compte sur le site.

##### Acteurs

Tous les acteurs du site.

##### Pré-conditions &#x274C;

##### Description

1. L'utilisateur se rend sur la page d'authentification
2. L'utilisateur clique sur le bouton création de compte
3. Il est redirigé vers la page de création de compte
4. Si c'est un professionnel il clique sur la case à cocher correspondante
5. Il rentre son numéro de siret
6. Il rentre toutes les informations obligatoires et facultatives s'il le souhaite
7. Le système vérifie le format des données et sauvegarde le compte
8. L'utilisateur est redirigé vers la page d'authentification en lui indiquant que son compte a bien été créer et l'invite à se connecter

##### Exceptions

**Utilisateur déjà connu :** L'utilisateur renseigne toutes ses données et le système constate que l'identifiant est déjà connu. L'utilisateur est prévenu qu'un email lui a été envoyé et il s'agit du même mail que celui de la réinitialisation du mot de passe, afin d'éviter de donner une information à un potentiel attaquant.

**Les données ne sont pas au bon format :** Les informations renseignés par l'utilisateur sont incorrecte, il peut modifier ses informations et relancer la création de son compte.

##### Post-conditions

L'utilisateur a désormais un compte.

##### Diagramme d'activité

@startuml
start
:Renseigner les informations nécessaires;
while (formulaire soumis) is (données invalides)
endwhile (données valides)
:Compte créé avec succès;
:Redirection vers la page de **connexion**;
stop
@enduml

#### 4.2.4 Se connecter <a name="expression_besoin_gestion_compte_cas2"></a>

##### Résumé

Permet à un utilisateur de s'authentifier sur le site.

##### Acteurs

Tous les acteurs du site.

##### Pré-conditions

L'utilisateur doit avoir un compte sur le site

##### Description

1. L'utilisateur se rend sur la page d'authentification
2. L'utilisateur fournit son identifiant et son mot de passe
3. Le système vérifie la concordance des données rentrées et attendues
4. L'utilisateur est redirigé vers la page qu'il souhaitait accéder en étant connecté

##### Exceptions

**L'identifiant ou le mot de passe sont mal renseignés :** Les informations renseignés par l'utilisateur sont incorrectes, il peut modifier ses informations et relancer l'authentification

**L'utilisateur a effectué trois tentatives de connexions infructueuses :** Le nombre de tentatives de connexion a verrouillé l'utilisateur. Le système lui indique de procéder à la récupération de son compte en passant par mot de passe oublié ou attendre que son compte se déverrouille.

**Utilisateur non connu :** Soit l'utilisateur constate qu'il ne peut se connecter, car il n'a pas créé de compte, il peut alors effectuer la création. Sinon l'utilisateur effectue les trois tentatives infructueuses et on lui indique le même message malgré qu'il n'existe pas.

##### Post-conditions

L'utilisateur est authentifié.

##### Remarques

Si l'utilisateur n'existe pas, pour éviter de donner une information à une personne malintentionnée on indique à l'utilisateur d'effectuer la démarche "mot de passe oublié".

##### Diagramme d'activité

@startuml
start
:Renseigner l'identifiant et le mot de passe;
while (Login/Mot de passe) is (données invalides)
if (nombre tentative > 3 || utilisateur inconnu & nombre tentative > 3) then ( procédure mot de passe oublié )
stop
endif
endwhile (données valides)
:Redirection vers la page qu'il souhaitait accéder
en étant **authentifié**;
stop
@enduml

#### 4.2.5 Se déconnecter <a name="expression_besoin_gestion_compte_cas3"></a>

##### Résumé

Permet à un utilisateur de se déconnecter du site.

##### Acteurs

Tous les acteurs du site.

##### Pré-conditions

L'utilisateur doit s'être authentifié auparavant.

##### Description

1. L'utilisateur clique sur son profil
2. L'utilisateur clique sur le menu "Se déconnecter"
3. L'utilisateur est redirigé vers la page d'accueil sans être authentifié

##### Post-conditions

L'utilisateur est déconnecté.

##### Diagramme d'activité

@startuml
start
:Se déconnecte;
:Redirection vers la page d'accueil
en étant **anonyme**;
stop
@enduml

#### 4.2.6 Modifier mon profil <a name="expression_besoin_gestion_compte_cas4"></a>

##### Résumé

Permet à un utilisateur de modifier son profil sur le site

##### Acteurs

Tous les acteurs du site.

##### Pré-conditions

L'utilisateur doit s'être authentifié auparavant.

##### Description

1. L'utilisateur clique sur son profil
2. Il clique sur le menu "Modifier son profil"
3. Il est redirigé vers la page de son profil en modification
4. Il modifie les données qu'il souhaite changer
5. Il valide les données changer

##### Post-conditions

Le profil de l'utilisateur a changé.

##### Diagramme d'activité

@startuml
start
:Modifier mon profil;
while (Données renseignées) is (données invalides)
endwhile (données valides)
:Profil mis à jour;
stop
@enduml

<!---
## Conclusion
Est ce utile ?
-->

### 5. Lots non réalisés dans ce besoin <a name="expression_lots"></a>

| Numéro de lot | Description                                         | Remarques                                                                                      |
| ------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Lot 2         | Intégration du profil "Mon(Mes) chat(s)"            | Permet au CatSitter/CatSitter d'avoir le profil des animaux et mieux appréhender leurs besoins |
| Lot 2         | Intégration des paiements                           | Sécuriser les paiments en ligne                                                                |
| Lot 2         | Intégration des connexions type Google/Facebook     |                                                                                                |
| Lot 3         | Choix de la chambre / Pièce pour les professionnels |                                                                                                |
| Lot 3         | Tarifs en fonction de la date de réservation        | Les dates de vacances scolaires sont généralements plus chères qu'à d'autres périodes          |
| Lot 3         | Tarifs en fonction du choix de la pièce             | Choisir une pièce plus grande type famille impacte le prix                                     |
| Lot 4         | Mise en place des notations entre utilisateurs      |                                                                                                |
| Lot 5         | Mise à niveau du site en marque blanche             | Vendre le site à d'autres professionnels pour cibler les besoins par localité                  |

<div style="page-break-after: always;"></div>

# Analyse des besoins <a name="analyse"></a>

Dans la section précédente nous avons établi les exigences du Temple Félidé. Nous allons désormais nous concentrer sur l'analyse de ces besoins exprimés. Dans ce cadre, nous allons choisir les cas d'utilisations qui nous paraissent les plus pertinents et en déterminer les diagrammes de classes. En effet, nous obtiendrons ainsi nos principaux objets. Puis par la suite, nous allons modéliser les diagrammes de séquences et obtenir les relations entre chaque élément, ainsi que les comportements des objets.

Au sein de chaque cas d'utilisation, nous allons déterminer les objets candidats, les interactions entre ces objets, puis décrire les classes correspondantes.

Au travers de la méthode UML nous allons utiliser les catégories d'objets suivants :

- `<<Entity>>` Objet métier : informations durables et persistantes
- `<<Boundary>>` Objet à la frontière entre le système et un acteur
- `<<Control>>` Objet assurant une coordination d’autres objets (Façade entre objet `<<Boundary>>` et objet `<<Entity>>`)
- `<<Life cycle>>` Objet responsable de trouver les objets `<<Entity>>`

## 2. Cas d’utilisations <a name="analyse_cas_utilisations"></a>

Les cas d'utilisation du Temple Félidé sont rappelés dans le sommaire suivant en précisant ceux qui sont analysés ou non.

- Réservation d'un particulier
  - [Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel](#analyse_reservation) &#x2705;
  - Consulter ma réservation &#x274C;
  - Annuler ma réservation &#x274C;
- Gestion d'un CatSitter
  - [Donner mes disponibilités de gardes](#analyse_disponibilite) &#x2705;
  - Consulter mon planning de réservation &#x274C;
- Gestion d'un compte
  - [Créer mon compte](#analyse_create_account) &#x2705;
  - Se connecter &#x274C;
  - Se déconnecter &#x274C;
  - Modifier mon profil &#x274C;

Analysé oui : &#x2705; / Analysé non : &#x274C;

<div style="page-break-after: always;"></div>

### 2.1 Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel <a name="analyse_reservation"></a>

#### 2.1.1 Liste des objets candidats

- `<<boundary>>` BookingCatSitterUI
- `<<control>>` BookingCatSitterService
- `<<control>>` AvailabilityCatSitterService
- `<<entity>>` BookingCatSitter
- `<<entity>>` AvailabilityCatSitter
- `<<life cycle>>` BookingCatSitterRepository
- `<<life cycle>>` AvailabilityCatSitterRepository

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nListe des objets candidats

skinparam actorStyle awesome
actor CatIndividual as user #ForestGreen
boundary "<<boundary>>\nBookingCatSitterUI" as boundary
control "<<control>>\nBookingCatSitterService" as control
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
participant "<<life cycle>>\nBookingCatSitterRepository" as lifecycle
entity "<<entity>>\nAvailabilityCatSitter" as entity2
entity "<<entity>>\nBookingCatSitter" as entity

@enduml

#### 2.1.2 Description des interactions entre objets

Pour gagner en lisibilité, les diagrammes ont été séparés en 4 étapes. Les trois premières sont ordonnancées par ordre chronologique. Pour la dernière étape, il s'agit d'une sous-partie de l'étape 3.

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 1
skinparam actorStyle awesome
actor CatIndividual as user #ForestGreen
boundary "<<boundary>>\nBookingCatSitterUI" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
entity "<<entity>>\nAvailabilityCatSitter" as entity2

== Initialisation du planning ==

user-> boundary: **displaySchedule**\nRécupération du planning de réservation
note over user, boundary
Les jours passés ainsi que le jour même seront grisés
endrnote
activate user
activate boundary
boundary -> control2 : **findBookingAvailableThisMonth**\nRécupère les créneaux de réservations
activate control2
control2 -> lifecycle2
activate lifecycle2
lifecycle2 -> entity2
activate entity2
entity2 -> lifecycle2
deactivate entity2
lifecycle2 -> control2
deactivate lifecycle2
boundary -> user : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
control2 -> boundary
deactivate control2

alt #d0f0c0 Succès : Des créneaux sont disponibles

boundary -> user : Affichage des créneaux sur le mois

else #ffe4e1 Echec : Aucun créneaux

boundary -> user : **displayError**\nMerci de séléctionner une autre plage\nde dates

end
deactivate boundary

@enduml

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 2
skinparam actorStyle awesome
actor CatIndividual as user #ForestGreen
boundary "<<boundary>>\nBookingCatSitterUI" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
entity "<<entity>>\nAvailabilityCatSitter" as entity2

== Selectionne une plage de dates (Non obligatoire) ==
activate user
user-> boundary: **selectDateBooking**\nSelectionne via un champ plage de date\nles choix de dates de réservations

activate boundary

alt #ffe4e1 Echec : La réservation est de 1 jour minimum

boundary -> user : **displayError**\nLa plage de date choisie doit s'étaler sur\nau minimum 1 jour

end

alt #ffe4e1 Echec : La date choisie est antérieur à la date du jour

boundary -> user : **displayError**\nLa réservation doit explicitement être faite dans le futur

end

alt #ffe4e1 Echec : La date choisie ne peut être supérieur à 1 an

boundary -> user : **displayError**\nLa réservation ne peut se faire au dela d'une année

end

boundary -> control2 : **findBookingAvailable**\nRécupère les créneaux de réservations\ncorrespondant à la plage de dates selectionnés
activate control2
control2 -> lifecycle2
activate lifecycle2
lifecycle2 -> entity2
activate entity2
entity2 -> lifecycle2
deactivate entity2
lifecycle2 -> control2
deactivate lifecycle2
boundary -> user : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
control2 -> boundary
deactivate control2

alt #d0f0c0 Succès : Des créneaux sont disponibles

boundary -> user : Affichage des créneaux correspondant à la\nplage de dates selectionnées
note over user, boundary
Prévoir que la plage pourra être plus importante que
la vue mensuelle ?
endrnote

else #ffe4e1 Echec : Aucun créneaux

boundary -> user : **displayError**\nMerci de séléctionner une autre plage\nde dates
deactivate boundary

end

@enduml

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 3
skinparam actorStyle awesome
actor CatIndividual as user #ForestGreen
boundary "<<boundary>>\nBookingCatSitterUI" as boundary
control "<<control>>\nBookingCatSitterService" as control
participant "<<life cycle>>\nBookingCatSitterRepository" as lifecycle
entity "<<entity>>\nBookingCatSitter" as entity

== Selectionne un créneau avec un catSitter ou un CatSitterPro ==

activate user
user -> boundary: **selectBookingSlot**\nSelectionne le créneau désiré
activate boundary
boundary -> user : **displayCatSitter**\nAffichage du CatSitter/CatSitterPro selectionné
deactivate boundary
user -> boundary : **bookingCatSitterSlot**\nConfirme la réservation du créneau avec\nle CatSitter/CatSitterPro
activate boundary

alt #ffe4e1 Echec : L'utilisateur ne s'authentifie pas

boundary -> user : **displayError**\nMerci de vous connecter pour réserver un créneau
boundary -> user : **redirectConnection**\nRedirection vers la page de connexion

end

boundary -> control : **bookingCatSitterSlot**\nRéservation du créneau avec\nle CatSitter/CatSitterPro selectionné
== Consommation du créneau disponible (cf PARTIE 3.1) ==
activate control
alt #d0f0c0 Succès : Réservation validé avec succès
control -> lifecycle
activate lifecycle
lifecycle -> entity : **add**\nRéservation du créneau

activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control-> control : **sendEmail**\nEnvoi d'un email de confirmation\nà CatIndividual
control-> control : **sendEmail**\nEnvoi d'un email de notification\nde réservation à CatSitter/CatSitterPro

boundary -> user : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
control -> boundary
boundary -> user : **displaySuccess**\nAffichage de l'écran de confirmation de la réservation

else #ffe4e1 Echec : Le créneau n'existe plus

control -> control
destroy control
control -> boundary
deactivate control

boundary -> user : **displayError**\nLe créneau n'existe plus. Merci de séléctionner\nun autre CatSitter ou un autre créneau

deactivate boundary

end

deactivate user

note over user, boundary
Pour différencier un catSitter, d'un CatSitterPro une icône permettra de visualiser cet aspect
endrnote

@enduml

@startuml
title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 3.1
skinparam actorStyle awesome
control "<<control>>\nBookingCatSitterService" as control
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
entity "<<entity>>\nAvailabilityCatSitter" as entity2

== Consommation du créneau disponible ==
activate control
control -> control2 : **consumeAvailabilitySlot**\nConsommation du créneau réservé avec\nle CatSitter/CatSitterPro selectionné
activate control2
control2 -> lifecycle2 : **update**\nMise à jour du créneau disponible
activate lifecycle2
lifecycle2 -> entity2 : ajout de booking dans la ligne\ndu AvailabilityCatSitter
activate entity2

alt #d0f0c0 Succès : Réservation validé avec succès
entity2 -> lifecycle2
lifecycle2 -> control2
control2 -> control

else #ffe4e1 Echec : Le créneau n'existe plus

entity2 -> entity2 : Exception lié à la version
destroy entity2
entity2 -> lifecycle2
deactivate entity2
lifecycle2 -> control2
deactivate lifecycle2
control2 -> control
deactivate control2

end

@enduml

#### 2.1.3 Description des classes

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de classes

class "<<boundary>>\nBookingCatSitterUI" as BookingCatSitterUI
class "<<control>>\nBookingCatSitterService" as BookingCatSitterService
class "<<control>>\nAvailabilityCatSitterService" as AvailabilityCatSitterService
class "<<life cycle>>\nBookingCatSitterRepository" as BookingCatSitterRepository
class "<<life cycle>>\nAvailabilityCatSitterRepository" as AvailabilityCatSitterRepository
entity "<<entity>>\nBookingCatSitter" as BookingCatSitter
entity "<<entity>>\nUser" as User
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter

BookingCatSitterUI : +displaySchedule()
BookingCatSitterUI : +selectDateBooking()
BookingCatSitterUI : +displayCatSitter()
BookingCatSitterUI : +bookingCatSitterSlot()
BookingCatSitterUI : +displaySuccess()
BookingCatSitterUI : +displayError()

BookingCatSitterService : +bookingCatSitterSlot()
BookingCatSitterService : +consumeAvailabilitySlot()
BookingCatSitterService : -sendEmailCatIndividual()
BookingCatSitterService : -sendEmailCatSitter()

AvailabilityCatSitterService : +findBookingAvailableThisMonth()
AvailabilityCatSitterService : +findBookingAvailable()
AvailabilityCatSitterService : +update()

AvailabilityCatSitterRepository : +findBookingAvailableThisMonth()
AvailabilityCatSitterRepository : +findBookingAvailable()
AvailabilityCatSitterRepository : +update()

BookingCatSitterRepository : +add()

BookingCatSitter : User catSitter
BookingCatSitter : User catIndividual
BookingCatSitter : Date booking
BookingCatSitter : [...]

AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : Integer maxCat
AvailabilityCatSitter : [...]

User : [...]

BookingCatSitterUI ..> BookingCatSitterService
BookingCatSitterUI ..> AvailabilityCatSitterService
BookingCatSitterService ..> BookingCatSitterRepository
BookingCatSitterService .> AvailabilityCatSitterService
AvailabilityCatSitterService..> AvailabilityCatSitterRepository
BookingCatSitterRepository ..> BookingCatSitter
AvailabilityCatSitterRepository..> AvailabilityCatSitter
BookingCatSitter -> User : catSitter
BookingCatSitter -> User : catIndividual
User -* AvailabilityCatSitter : catSitter

@enduml

<div style="page-break-after: always;"></div>

### 2.2 Gestion d'un CatSitter - Donner mes disponibilités de gardes <a name="analyse_disponibilite"></a>

#### 2.2.1 Liste des objets candidats

- `<<boundary>>` GiveCatCareAvailabilitiesUI
- `<<control>>` AvailabilityCatSitterService
- `<<entity>>` AvailabilityCatSitter
- `<<life cycle>>` AvailabilityCatSitterRepository

@startuml

title Gestion d'un CatSitter - Donner mes disponibilités de gardes\nListe des objets candidats

skinparam actorStyle awesome
actor CatIndividual as user #ForestGreen
boundary "<<boundary>>\nGiveCatCareAvailabilitiesUI" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle
entity "<<entity>>\nAvailabilityCatSitter" as entity

@enduml

#### 2.2.2 Description des interactions entre objets

@startuml

title Gestion d'un CatSitter - Donner mes disponibilités de gardes\nDiagramme de séquence

skinparam actorStyle awesome
actor CatIndividual as user #ForestGreen
boundary "<<boundary>>\nGiveCatCareAvailabilitiesUI" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle
entity "<<entity>>\nAvailabilityCatSitter" as entity

== Affichage du planning ==
activate user
user -> boundary : **displaySchedule**\nAffiche le planning
activate boundary
boundary -> control : **findAvailibilitiesInProgress**\nRécupération des disponibilités en cours
activate control
control -> lifecycle :
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
boundary -> user : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
control -> boundary
deactivate control
boundary -> user
deactivate boundary
user -> boundary : **selectDateAvailable**\nSelectionne la date de début et la date de fin\nde la disponibilité
activate boundary
boundary -> user  
deactivate boundary

== Ajouter une disponibilité ==

user -> boundary : **giveCatCareAvailabilities**\nAjoute une plage de dates de disponibilités
activate boundary
boundary -> control
activate control
alt #d0f0c0 Succès  
control -> lifecycle : **add**\nAjout de la plage de date pour le CatSitter
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control -> boundary
boundary -> user : **displaySuccesAddAvailabilities**\nAffichage du succès de l'ajout
else #ffe4e1 Echec : Donner une disponibilité en doublon
control -> boundary : Disponibilité déjà donné
deactivate control
boundary -> user : **displayError**\nAffichage du message d'erreur
deactivate boundary
end
deactivate boundary

== Annuler une disponibilité déjà mise au préalable ==

user -> boundary : **cancelCatCareAvailabilities**\nSupprime une plage de dates de disponibilités
activate boundary
boundary -> boundary : **slotIsReserved**\nLe créneau supprimé était-il réservé ?
alt #d0f0c0 Succès : Annulation validé avec succès
boundary -> control : **slotIsReserved** <false>\n**cancelCatCareAvailabilities**
activate control
control -> lifecycle : **remove**\nSuppression de la disponibilité du CatSitter
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control -> boundary
deactivate control
boundary -> user : **displaySuccesRemoveAvailabilities**\nAffichage du succès de la suppression

else #ffe4e1 Echec : Se rendre indisponible sur un créneau déjà réservé

boundary -> boundary : **slotIsReserved** <true>
boundary -> user : **displayConfirmCanceled**\nAffichage d'une notification de confirmation\nd'annulation malgré réservation

alt Fermeture de la notification sans confirmer

user -> user : Retour arrière

else Confirmation de l'annulation

user -> boundary : **confirmCanceled**\nConfirmation de l'annulation
boundary -> control : **cancelCatCareAvailabilities**\nSupprime une plage de dates de disponibilités
activate control
control -> lifecycle : **remove**\nSuppression de la disponibilité du CatSitter
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control -> control : **sendEmailCanceledCatIndividual**\nEnvoi de l'email à l'utilisateur qui avait\nréservé le créneau
control -> boundary
deactivate control
boundary -> user : **displaySuccesRemoveAvailabilities**\nAffichage du succès de la suppression
deactivate boundary
deactivate user

end

end

@enduml

<div style="page-break-after: always;"></div>

#### 2.2.3 Description des classes

@startuml

title Gestion d'un CatSitter - Donner mes disponibilités de gardes\nDiagramme de classes

class "<<boundary>>\nGiveCatCareAvailabilitiesUI" as GiveCatCareAvailabilitiesUI
class "<<control>>\nAvailabilityCatSitterService" as AvailabilityCatSitterService
class "<<life cycle>>\nAvailabilityCatSitterRepository" as AvailabilityCatSitterRepository
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter

GiveCatCareAvailabilitiesUI : +displaySchedule()
GiveCatCareAvailabilitiesUI : +selectDateAvailable()
GiveCatCareAvailabilitiesUI : +giveCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +cancelCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +displayConfirmCanceled()
GiveCatCareAvailabilitiesUI : +confirmCanceled()
GiveCatCareAvailabilitiesUI : +displaySuccesAddAvailabilities()
GiveCatCareAvailabilitiesUI : +displaySuccesRemoveAvailabilities()
GiveCatCareAvailabilitiesUI : -slotIsReserved()

AvailabilityCatSitterService : +findAvailibilitiesInProgress()
AvailabilityCatSitterService : +giveCatCareAvailabilities()
AvailabilityCatSitterService : +cancelCatCareAvailabilities()
AvailabilityCatSitterService : +add()
AvailabilityCatSitterService : +remove()
AvailabilityCatSitterService : -sendEmailCanceledCatIndividual()

AvailabilityCatSitterRepository : +findAvailibilitiesInProgress()
AvailabilityCatSitterRepository : +add()
AvailabilityCatSitterRepository : +remove()

AvailabilityCatSitter : Long id
AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : [...]

GiveCatCareAvailabilitiesUI ..> AvailabilityCatSitterService
AvailabilityCatSitterService..> AvailabilityCatSitterRepository
AvailabilityCatSitterRepository..> AvailabilityCatSitter
@enduml

<div style="page-break-after: always;"></div>

### 2.3 Gestion d'un compte - Créer mon compte <a name="analyse_create_account"></a>

#### 2.3.1 Liste des objets candidats

- `<<boundary>>` AddAccountUI
- `<<control>>` UseService
- `<<entity>>` User
- `<<life cycle>>` UserRepository

@startuml

title Gestion d'un compte - Créer mon compte\nListe des objets candidats

skinparam actorStyle awesome
actor "L'utilisateur" as user
boundary "<<boundary>>\nAddAccountUI" as boundary
control "<<control>>\nUserService" as control
participant "<<life cycle>>\nUserRepository" as lifecycle
entity "<<entity>>\nUser" as entity

@enduml

#### 2.3.2 Description des interactions entre objets

@startuml

title Gestion d'un compte - Créer mon compte\nDiagramme de séquence

skinparam actorStyle awesome
actor "L'utilisateur" as user
boundary "<<boundary>>\nAddAccountUI" as boundary
control "<<control>>\nUserService" as control
participant "<<life cycle>>\nUserRepository" as lifecycle
entity "<<entity>>\nUser" as entity

user-> boundary: **displayForm**\nAffichage du formulaire de création de compte
activate user
activate boundary
boundary -> user
deactivate boundary

user-> boundary: **inputForm**\nInsertion des données
activate boundary
boundary -> user
deactivate boundary

user-> boundary: **validateForm**\nValidation des données
activate boundary
boundary -> control : **addAccount**\nAjouter un compte
activate control
control -> lifecycle : **findByEmail**\nChercher si le compte est déjà présent
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity

alt #d0f0c0 Succès : Compte non présent

lifecycle -> control : **findByEmail** <false>
control -> control : **checkDatas**\nVérifie si les données sont correctes

alt #d0f0c0 Succès : Compte créer

control -> lifecycle : **add**\nCréation du compte
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
control -> control : **sendEmail**\nEmail compte créer avec succès
control -> boundary
boundary -> user :**displayEmailSend**\nInforme l'utilisateur qu'il a reçu un email\net l'invite à se connecter

else #ffe4e1 Echec : Données incorrectes

control -> boundary : **checkDatas** <false>
boundary -> user : **displayError**\nAffichage du message d'erreur
end

else #ffe4e1 Echec : Compte déjà existant
lifecycle -> control : **findByEmail** <true>
deactivate lifecycle
control -> control : **sendEmail**\nEmail compte déjà présent
control -> boundary
deactivate control
boundary -> user : **displayEmailSend**\nInforme l'utilisateur qu'il a reçu un email\net l'invite à se connecter
rnote over boundary
On indique la même information qu'un utilisateur non présent
pour éviter de donner des informations à un potentiel attaquant
endrnote

deactivate boundary

end
deactivate user
@enduml

<div style="page-break-after: always;"></div>

#### 2.3.3 Description des classes

@startuml

title Gestion d'un compte - Créer mon compte\nDiagramme de classes

class "<<boundary>>\nAddAccountUI" as AddAccountUI
class "<<control>>\nUserService" as UserService
class "<<life cycle>>\nUserRepository" as UserRepository
entity "<<entity>>\nUser" as User

AddAccountUI : +displayForm()
AddAccountUI : +inputForm()
AddAccountUI : +validateForm()
AddAccountUI : +displayEmailSend()
AddAccountUI : +displayError()

UserService : +addAccount()
UserService : -checkDatas()
UserService : -sendEmail()

UserRepository : +findByEmail()
UserRepository : +add()

User : Long id
User : User catSitter
User : User catIndividual
User : Date start
User : Date end
User : Date booking
User : [...]

AddAccountUI ..> UserService
UserService ..> UserRepository
UserRepository ..> User
@enduml

<div style="page-break-after: always;"></div>

## 3. Regroupement des classes <a name="analyse_regroupement_classes"></a>

### 3.1 Groupe domaine

@startuml

title Groupe domaine

entity "<<entity>>\nBookingCatSitter" as BookingCatSitter
entity "<<entity>>\nUser" as User
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter

BookingCatSitter : Long id
BookingCatSitter : User catSitter
BookingCatSitter : User catIndividual
BookingCatSitter : Date start
BookingCatSitter : Date end
BookingCatSitter : Date booking
BookingCatSitter : [...]

AvailabilityCatSitter : Long id
AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : Integer maxCat
AvailabilityCatSitter : [...]

User : Long id
User : String name
User : String lastname
User : Date birthdate
User : [...]

BookingCatSitter -> User : catSitter
BookingCatSitter -> User : catIndividual
User -* AvailabilityCatSitter : catSitter

@enduml

<div style="page-break-after: always;"></div>

### 3.2 Groupe domaine et cycle de vie

@startuml

title Groupe domaine et cycle de vie

class "<<life cycle>>\nUserRepository" as UserRepository
class "<<life cycle>>\nBookingCatSitterRepository" as BookingCatSitterRepository
class "<<life cycle>>\nAvailabilityCatSitterRepository" as AvailabilityCatSitterRepository
entity "<<entity>>\nBookingCatSitter" as BookingCatSitter
entity "<<entity>>\nUser" as User
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter

UserRepository : +findByEmail()
UserRepository : +add()

AvailabilityCatSitterRepository : +findBookingAvailableThisMonth()
AvailabilityCatSitterRepository : +findBookingAvailable()
AvailabilityCatSitterRepository : +findAvailibilitiesInProgress()
AvailabilityCatSitterRepository : +add()
AvailabilityCatSitterRepository : +update()
AvailabilityCatSitterRepository : +remove()

BookingCatSitterRepository : +add()

BookingCatSitter : Long id
BookingCatSitter : User catSitter
BookingCatSitter : User catIndividual
BookingCatSitter : Date start
BookingCatSitter : Date end
BookingCatSitter : Date booking
BookingCatSitter : [...]

AvailabilityCatSitter : Long id
AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : Integer maxCat
AvailabilityCatSitter : [...]

User : Long id
User : String name
User : String lastname
User : Date birthdate
User : [...]

BookingCatSitterRepository ..> BookingCatSitter
AvailabilityCatSitterRepository..> AvailabilityCatSitter
UserRepository ..> User
BookingCatSitter -> User : catSitter
BookingCatSitter -> User : catIndividual
User -* AvailabilityCatSitter : catSitter

@enduml

### 3.3 Groupe contrôleur

@startuml

title Groupe contrôleur

class "<<control>>\nUserService" as UserService
class "<<control>>\nBookingCatSitterService" as BookingCatSitterService
class "<<control>>\nAvailabilityCatSitterService" as AvailabilityCatSitterService

UserService : +addAccount()
UserService : -checkDatas()
UserService : -sendEmail()

BookingCatSitterService : +bookingCatSitterSlot()
BookingCatSitterService : +consumeAvailabilitySlot()
BookingCatSitterService : -sendEmailCatIndividual()
BookingCatSitterService : -sendEmailCatSitter()

AvailabilityCatSitterService : +findAvailibilitiesInProgress()
AvailabilityCatSitterService : +giveCatCareAvailabilities()
AvailabilityCatSitterService : +cancelCatCareAvailabilities()
AvailabilityCatSitterService : +findBookingAvailableThisMonth()
AvailabilityCatSitterService : +findBookingAvailable(Date start, Date end)
AvailabilityCatSitterService : +add()
AvailabilityCatSitterService : +update()
AvailabilityCatSitterService : +remove()
AvailabilityCatSitterService : -sendEmailCanceledCatIndividual()

BookingCatSitterService .> AvailabilityCatSitterService

@enduml

<div style="page-break-after: always;"></div>

### 3.4 Groupe interface utilisateur et système

@startuml

title Groupe interface utilisateur et système

class "<<boundary>>\nBookingCatSitterUI" as BookingCatSitterUI
class "<<boundary>>\nGiveCatCareAvailabilitiesUI" as GiveCatCareAvailabilitiesUI
class "<<boundary>>\nAddAccountUI" as AddAccountUI

BookingCatSitterUI : +displaySchedule()
BookingCatSitterUI : +selectDateBooking()
BookingCatSitterUI : +displayCatSitter()
BookingCatSitterUI : +bookingCatSitterSlot()
BookingCatSitterUI : +displaySuccess()
BookingCatSitterUI : +displayError()

GiveCatCareAvailabilitiesUI : +displaySchedule()
GiveCatCareAvailabilitiesUI : +selectDateAvailable()
GiveCatCareAvailabilitiesUI : +giveCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +cancelCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +displayConfirmCanceled()
GiveCatCareAvailabilitiesUI : +confirmCanceled()
GiveCatCareAvailabilitiesUI : +displaySuccesAddAvailabilities()
GiveCatCareAvailabilitiesUI : +displaySuccesRemoveAvailabilities()
GiveCatCareAvailabilitiesUI : -slotIsReserved()

AddAccountUI : +displayForm()
AddAccountUI : +inputForm()
AddAccountUI : +validateForm()
AddAccountUI : +displayEmailSend()
AddAccountUI : +displayError()

@enduml

<div style="page-break-after: always;"></div>

# Conception <a name="conception"></a>

Lors des phases précédentes, nous avons mis en place le sujet et décrit l'ensemble du besoin ainsi que ses contraintes. Nous allons désormais nous atteler à la phase de réalisation, c'est-à-dire comment nous allons implémenter la solution ?

Nous allons tout d'abord commencer par l'architecture en identifiant les contraintes techniques de l'applicatif, puis en modélisant les packages et dépendances de celle-ci. Puis nous terminerons par la manière d'effectuer le déploiement de notre solution.

Par la suite, nous nous pencherons sur les technologies à mettre en place et pour ce faire nous décrirons à chaque étape les arguments en faveur de ce choix. Nous commencerons par les choix des langages et des <a name="Framework">frameworks</a> à utiliser. Ensuite, nous nous nous focaliserons sur le serveur qui va porter notre applicatif et le stockage des données. Après, nous nous intéresserons aux différentes couches applicatives : persistance, métier, service et présentation. Enfin nous, nous pencherons sur l'environnement de développement ainsi que les recettes à mettre en place.

Pour terminer, nous reviendrons sur les cas d'utilsations réalisés dans la section analyse pour venir enrichir les modèles existants afin de présenter ce qui sera réellement implémentés dans notre applicatif.

## 2. Architecture <a name="conception_architecture"></a>

### 2.1 Contraintes techniques

Les contraintes primordiales lié à un site web sont la création d'un nom de domaine et son hébergement. En effet, il faut que le nom de domaine soit libre, mais également être vigilant à l'extension qui pourrait amener à un <a name="Cybersquattage">cybersquattage</a>.

Ensuite nous avons des obligations liés à une navigation web, c'est-à-dire que le site doit être fluide et rapide. Notre application devra être user-friendly et accessible pour toucher un maximum d'utilisateurs de tout âge et dans des situations différentes. En effet, il ne s'agit pas d'un intranet qui aurait eu des contraintes différentes.
Par ailleurs, de par sa visibilité publique une sécurisation minimales doit être mise en place.

Enfin il y a les contraintes inhérentes à une bonne conception et implémentation ainsi qu'à l'utilisation de technologies répandues, fiables et éprouvées <!--synonyme à trouver copier coller--> afin de maintenir l'application. Pour ce faire, nous allons mettre en place une architecture héxagonale.

<div style="page-break-after: always;"></div>

### 2.2 Packages et dépendances

<img title="Packages et dépendances front-end" alt="Packages et dépendances front-end" src="img/packages_front-end.png">

- &#x1F5CE; package.json : Contient les dépendances front
- &#x1F5CE; index.js : Point d'entrée (<a name="SPA">SPA</a>)
- &#x1F5CE; style.css : Feuille de style
- &#x1F5C0; components : Contient les composants
- &#x1F5C0; container : Contient la logique métier
- &#x1F5C0; hooks : Contient les appels au back-end
- &#x1F5C0; routes : Contient les chemins (<a name="URL">URL</a>) permettant la navigation
- &#x1F5C0; mocks : Contient les bouchons

&#x26a0; Il s'agit d'une liste non exhaustive et qui pourra être amenée à changer en fonction de l'implémentation.

<div style="page-break-after: always;"></div>

<img title="Packages et dépendances back-end" alt="Packages et dépendances back-end" src="img/packages_back-end.png">

- &#x1F5CE; application.properties : Contient les propriétés fonctionnant avec spring boot
- &#x1F5CE; db.changelog-master.json : Contient la migration et le versionnage de la base de donnée
- &#x1F5CE; build.gradle : Contient les dépendances back
- &#x1F5C0; availability / booking / user (Domain Layer) : Contient la logique métier
- &#x1F5C0; api (Application Layer) : Permet la communication avec le front-end
- &#x1F5C0; routes : Contient les chemins (<a name="URL">URL</a>) permettant la navigation
- &#x1F5C0; test.com.feline.temple : Contient les tests unitaires et d'intégrations

&#x26a0; Il s'agit d'une liste non exhaustive et qui pourra être amenée à changer en fonction de l'implémentation.

<div style="page-break-after: always;"></div>

### 2.3 Déploiement

Le déploiement se fera dans un premier temps sur un pc en local de la manière suivante :

@startuml
node "PC de l'utilisateur" as pc {
skinparam componentStyle uml1
component "Navigateur" <<executable>>
}
node "Serveur Tomcat" as cat{
component "templeFelide" <<application>>
database "PostgresSQL" <<database>>
}
pc -down-> templeFelide : +HTTP
templeFelide -right-> PostgresSQL: +JPA
@enduml

#### 2.3.1 Le nom de domaine et son hébergement

Si les délais le permettent, l'application pourra être déployé dans le cloud avec kubernetes ou un autre provider qu'il faudra sélectionner. Il sera également possible d'acheter le nom de domaine suivant : www.templefelide.fr.

<div style="page-break-after: always;"></div>

## 3. Choix technologiques <a name="conception_technologies"></a>

D'un point de vue global, le choix se portera généralement sur des langages open source de part la gratuité de ceux-ci. En effet, on pourrait choisir des langages libres, cependant cela pourrait amener des coûts supplémentaires. La différence entre open-source et libre ne sera pas expliqué ici. J'invite le lecteur à voir la bibliographie. De plus, il faut choisir des langages et bibliothèques robustes, maintenues et portés par une communauté afin d'avoir une maintenance acceptable. Enfin, il faut prendre en considération la rapidité d'apprentissage du langage ou de la bibliothèque.

Nous allons partir sur une architecture et un choix de langage fréquent dans les applications web de nos jours.

### 3.1 Front-End

Concernant la partie visuel de notre applicatif, nous faisons le choix de ReactJS et Ant Design.

React JS est un langage performant de part sa virtualisation du DOM en mémoire et sa manière de calculer intelliger pour gérer les mises à jours et changements du DOM. Toute cette gestion du DOM se fait discrétement ce qui permet un rendu rapide, intelligent voir invisible pour l'utilisateur. De plus il s'agit d'un langage mature, qui existe depuis maintenant 10 ans et qui est maintenu avec des versions récurrentes (même si la dernière version commence à dater de juin 2022). Par ailleurs c'est un langage simple à comprendre, flexible qui permet une bonne réutilisation des composants. Enfin, il est rattaché à un ensemble vaste d'outils qui permettent d'inspecter et maintenir le code.

L'utilisation de la bibliothéque Ant Design va permettre d'avoir un ensemble de composant de haute qualité, afin de faire rapidement un site esthétique et bien construit.

### 3.2 Back-End

Nous allons désormais choisir le langage ainsi que le <a name="Framework">framework</a> lié au back-end de notre applicatif. Nous avons décidés de mettre en place Kotlin avec les bibliothèques de spring, qui est un des acteurs les plus reconnus dans ce domaine.

Le choix de Kotlin est porté par les éléments suivants : c'est un langage multi-paradigme, c'est-à-dire à capacité fonctionnelle et orentiée objet. D'une part il à un typage statique qui fonctionne à la compilation. D'autre part, il est concis, explicite et permet donc une meilleure lisibilité, on gagne donc en qualité plutôt qu'en quantité de code. De plus, c'est un langage qui évite la nullité comme dans Java qui entraîne souvent des erreurs de type NullPointerException lors de l'éxécution. Enfin c'est un langage facile à apprendre et toujours interopérable avec Java si besoin.

Concernant le <a name="Framework">framework</a> spring, nous allons passer par spring initializr pour démarrer notre projet. Nous allons ajouter comme dépendance spring boot qui permet de créer rapidement une application ainsi que spring MVC qui permet de gérer comme son acronyme l'indique le modèle, la vue et le contrôleur. Puis nous ajouterons également spring-security pour avoir une sécurité minimale ainsi qu'une gestion de l'authentification et autorisation. Enfin nous utiliserons spring Data <a name="JPA">JPA</a> pour la persistance des données.

### 3.3 Gestionnaire de dépendances

Les gestionnaires de dépendances les plus couramment utilisés sur le marché sont maven et gradle. Ils ont chacuns leurs avantages et inconvénients, cependant le choix va se porter sur gradle qui est plus flexible et rapide que maven.

### 3.4 Serveur web

Le choix du serveur web se porte tout naturellement sur Tomcat. En effet, il est embarqué et recommandé avec spring boot et spring MVC.

### 3.5 Stockage des données

Au vu de l'application et de son modèle de donnée, il paraît assez évident qu'il faut utiliser un système de gestion de base de donnée relationnelle (SGBDR) afin de mettre des relations rigoureuses entre nos objets. Le choix du SGBD va se porter sur PostgreSQL, qui permet malgré tout de gérer du NOSQL s'il y avait un besoin futur. Cette décision répond aux critères principaux d'open source et d'avoir une communauté importante. Cependant, il faudra être vigilant sur la manière d'indexer les données et les slow query, car PostgreSQL n'est pas le système le plus rapide.

Par ailleurs, nous allons utiliser liquibase qui est un migrateur de base de donnée open-source. Il va nous permettre de versionner notre base de donnée.

### 3.6 Couche de persistance et métier

Au vu des technologies selectionnés sur le back-end et la base de données : Kotlin, Spring et PostgresSQL ; il paraît naturel de porter notre choix sur l'api <a name="JPA">JPA</a> pour la persistence des données ainsi qu'Hibernate pour l'implémentation de celle-ci. Pour les entités, cela sera fait au travers de l'annotation @Entity comme défini par <a name="JPA">JPA</a>.

### 3.7 Couche service et composant

Les couches services et composant utiliseront les annotations @Service et @Component proposé par le <a name="Framework">framework</a> spring.

### 3.8 Couche présentation

Au niveau de la communication entre le front-end et le back-end nous appliquerons l'architecture REST.
La couche présentation se fera au travers de l'API Fetch intégré par défaut à ReactJS pour le front-end. Concernant la partie back-end nous utiliserons les annotations @Controller et @RequestMapping.

### 3.9 Environnement de développement

Aucune contrainte ne se fera sur ce sujet. Les développeurs doivent être libre d'utiliser l'environnement qu'ils veulent.

### 3.10 Recette de l'application

Il est important de se soucier de tester l'application pour éviter de potentiels erreurs. La recette pourrait se faire au travers d'une intégration continue, mais cela nécessite beaucoup de moyens et un coût non négligeable. Nous passerons donc par des tests unitaires et intégrations lancés manuellement par les développeurs, puis par des tests manuels.

#### 3.10.1 Tests unitaires et intégrations

Les tests unitaires et intégrations seront réalisés avec Junit 5, MockK et Wiremock pour le back-end. Quant au front-end on utilisera Jest et MSW.

#### 3.10.2 Test end to end

Si les délais et les coûts nous avaient permis d'aller plus loin, nous aurions pu utiliser cypress, mais afin d'être raisonnable les tests de parcours complets seront réalisés manuellement.

<div style="page-break-after: always;"></div>

## 4. Cas d’utilisation <a name="conception_cas_utilisation"></a>

Les cas d'utilisation analysé dans la section précédente sont repris en appliquant les critères des technologies selectionnés.
Pour rappel les cas d'utilisations suivants avaient été analysé :

- Réservation d'un particulier
  - [Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel](#conception_reservation) &#x2705;
  - Consulter ma réservation &#x274C;
  - Annuler ma réservation &#x274C;
- Gestion d'un CatSitter
  - [Donner mes disponibilités de gardes](#conception_disponibilite) &#x2705;
  - Consulter mon planning de réservation &#x274C;
- Gestion d'un compte
  - [Créer mon compte](#conception_create_account) &#x2705;
  - Se connecter &#x274C;
  - Se déconnecter &#x274C;
  - Modifier mon profil &#x274C;

Analysé oui : &#x2705; / Analysé non : &#x274C;

### 4.1 Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel <a name="conception_reservation"></a>

#### 4.1.1 Liste des objets candidats

- `<<control>>` BookingCatSitterUi
- `<<boundary>>` BookingCatSitterRequest
- `<<boundary>>` BookingCatSitterController
- `<<control>>` BookingCatSitterService
- `<<control>>` AvailabilityCatSitterService
- `<<entity>>` BookingCatSitter
- `<<entity>>` AvailabilityCatSitter
- `<<life cycle>>` BookingCatSitterRepository
- `<<life cycle>>` AvailabilityCatSitterRepository

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nListe des objets candidats

skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor CatIndividual as user #ForestGreen
control "<<control>>\nBookingCatSitterUi" as controlFront
boundary "<<boundary>>\nBookingCatSitterRequest" as boundaryFront
end box
@enduml
@startuml
box "Back-end" #HoneyDew
boundary "<<boundary>>\nBookingCatSitterController" as boundary
control "<<control>>\nBookingCatSitterService" as control
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
participant "<<life cycle>>\nBookingCatSitterRepository" as lifecycle
entity "<<entity>>\nAvailabilityCatSitter" as entity2
entity "<<entity>>\nBookingCatSitter" as entity
end box

@enduml

#### 4.1.2 Description des interactions entre objets

Pour gagner en lisibilité, les diagrammes ont été séparés en 4 étapes. Les trois premières sont ordonnancées par ordre chronologique. Pour la dernière étape, il s'agit d'une sous-partie de l'étape 3.

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 1
skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor CatIndividual as user #ForestGreen
control "<<control>>\nBookingCatSitterUI" as controlFront
boundary "<<boundary>>\nBookingCatSitterRequest" as boundaryfront
end box
box "Back-end" #HoneyDew
boundary "<<boundary>>\nBookingCatSitterController" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
entity "<<entity>>\nAvailabilityCatSitter" as entity2
end box
== Initialisation du planning ==

user-> controlFront: **displaySchedule**\nRécupération du planning de réservation
note over user, controlFront
Les jours passés ainsi que le jour même seront grisés
endrnote
activate user
activate controlFront
controlFront -> boundaryfront
activate boundaryfront
boundaryfront -> boundary : **findBookingAvailableThisMonth**
activate boundary
boundary -> control2 : **findBookingAvailableThisMonth**\nRécupère les créneaux de réservations
activate control2
control2 -> lifecycle2
activate lifecycle2
lifecycle2 -> entity2
activate entity2
entity2 -> lifecycle2
deactivate entity2
lifecycle2 -> control2
deactivate lifecycle2
boundary -> boundaryfront
boundaryfront -> controlFront : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
controlFront -> user
control2 -> boundary
deactivate control2

alt #d0f0c0 Succès : Des créneaux sont disponibles

boundary -> boundaryfront
boundaryfront -> controlFront : Affichage des créneaux sur le mois
controlFront -> user

else #ffe4e1 Echec : Aucun créneaux

boundary -> boundaryfront
deactivate boundary
boundaryfront -> controlFront : **displayError**\nMerci de séléctionner une autre plage\nde dates
deactivate boundaryfront
controlFront -> user
deactivate controlFront

end

@enduml

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 2
skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor CatIndividual as user #ForestGreen
control "<<control>>\nBookingCatSitterUI" as controlFront
boundary "<<boundary>>\nBookingCatSitterRequest" as boundaryfront
end box
box "Back-end" #HoneyDew
boundary "<<boundary>>\nBookingCatSitterController" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
entity "<<entity>>\nAvailabilityCatSitter" as entity2
end box

== Selectionne une plage de dates (Non obligatoire) ==
activate user
user-> controlFront : **selectDateBooking**\nSelectionne via un champ plage de date\nles choix de dates de réservations\nainsi que le nombre max d'animaux à faire garder

activate controlFront
controlFront -> boundaryfront
activate boundaryfront

alt #ffe4e1 Echec : La réservation est de 1 jour minimum

boundaryfront -> controlFront : **displayError**\nLa plage de date choisie doit s'étaler sur\nau minimum 1 jour
controlFront -> user
end

alt #ffe4e1 Echec : La date choisie est antérieur à la date du jour

boundaryfront -> controlFront: **displayError**\nLa réservation doit explicitement être faite dans le futur
controlFront -> user

end

alt #ffe4e1 Echec : La date choisie ne peut être supérieur à 1 an

boundaryfront -> controlFront : **displayError**\nLa réservation ne peut se faire au dela d'une année
controlFront -> user

end

boundaryfront -> boundary : **findBookingAvailable**\nRécupère les créneaux de réservations\ncorrespondant à la plage de dates selectionnés
activate boundary
boundary -> control2 :
activate control2
control2 -> lifecycle2
activate lifecycle2
lifecycle2 -> entity2
activate entity2
entity2 -> lifecycle2
deactivate entity2
lifecycle2 -> control2
deactivate lifecycle2
boundary -> boundaryfront
boundaryfront -> controlFront : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
controlFront -> user
control2 -> boundary
deactivate control2

alt #d0f0c0 Succès : Des créneaux sont disponibles

boundary -> user : Affichage des créneaux correspondant à la\nplage de dates selectionnées
note over user, boundaryfront
Prévoir que la plage pourra être plus importante que la vue mensuelle
endrnote

else #ffe4e1 Echec : Aucun créneaux

boundary -> boundaryfront
deactivate boundary
boundaryfront -> controlFront : **displayError**\nMerci de séléctionner une autre plage\nde dates
deactivate boundaryfront
controlFront -> user
deactivate controlFront

end

@enduml

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 3
skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor CatIndividual as user #ForestGreen
control "<<control>>\nBookingCatSitterUI" as controlFront
boundary "<<boundary>>\nBookingCatSitterRequest" as boundaryfront
end box
box "Back-end" #HoneyDew
boundary "<<boundary>>\nBookingCatSitterController" as boundary
control "<<control>>\nBookingCatSitterService" as control
participant "<<life cycle>>\nBookingCatSitterRepository" as lifecycle
entity "<<entity>>\nBookingCatSitter" as entity
end box

== Selectionne un créneau avec un catSitter ou un CatSitterPro ==

activate user
user -> controlFront: **selectBookingSlot**\nSelectionne le créneau désiré
activate controlFront
controlFront -> boundaryfront:
activate boundaryfront
boundaryfront -> controlFront : **displayCatSitter**\nAffichage du CatSitter/CatSitterPro selectionné
deactivate boundaryfront
controlFront -> user
user -> controlFront : **bookingCatSitterSlot**\nConfirme la réservation du créneau avec\nle CatSitter/CatSitterPro
controlFront -> boundaryfront
activate boundaryfront

alt #ffe4e1 Echec : L'utilisateur ne s'authentifie pas

boundaryfront -> controlFront : **displayError**\nMerci de vous connecter pour réserver un créneau
controlFront -> user
boundaryfront -> controlFront : **redirectConnection**\nRedirection vers la page de connexion
controlFront -> user
end

controlFront -> boundaryfront
boundaryfront -> boundary : **bookingCatSitterSlot**\nRéservation du créneau avec\nle CatSitter/CatSitterPro selectionné
activate boundary
boundary -> control
== Consommation du créneau disponible (cf PARTIE 3.1) ==
activate control
alt #d0f0c0 Succès : Réservation validé avec succès
control -> lifecycle
activate lifecycle
lifecycle -> entity : **add**\nRéservation du créneau

activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control-> control : **sendEmail**\nEnvoi d'un email de confirmation\nà CatIndividual
control-> control : **sendEmail**\nEnvoi d'un email de notification\nde réservation à CatSitter/CatSitterPro

boundary -> boundaryfront
boundaryfront -> controlFront : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
controlFront -> user
control -> boundary
boundary -> boundaryfront
boundaryfront -> controlFront : **displaySuccess**\nAffichage de l'écran de confirmation de la réservation
controlFront -> user

else #ffe4e1 Echec : Le créneau n'existe plus

control -> control
destroy control
control -> boundary
deactivate control

boundary -> boundaryfront
boundaryfront -> controlFront: **displayError**\nLe créneau n'existe plus. Merci de séléctionner\nun autre CatSitter ou un autre créneau
boundaryfront -> user

deactivate boundaryfront

end

deactivate user

note over user, boundary
Pour différencier un catSitter, d'un CatSitterPro une icône permettra de visualiser cet aspect
endrnote

@enduml

@startuml
title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de séquence - PARTIE 3.1
skinparam actorStyle awesome
box "Back-end" #HoneyDew
control "<<control>>\nBookingCatSitterService" as control
control "<<control>>\nAvailabilityCatSitterService" as control2
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle2
entity "<<entity>>\nAvailabilityCatSitter" as entity2
end box

== Consommation du créneau disponible ==
activate control
control -> control2 : **consumeAvailabilitySlot**\nConsommation du créneau réservé avec\nle CatSitter/CatSitterPro selectionné
activate control2
control2 -> lifecycle2 : **update**\nMise à jour du créneau disponible
activate lifecycle2
lifecycle2 -> entity2 : ajout de booking dans la ligne\ndu AvailabilityCatSitter
activate entity2

alt #d0f0c0 Succès : Réservation validé avec succès
entity2 -> lifecycle2
lifecycle2 -> control2
control2 -> control

else #ffe4e1 Echec : Le créneau n'existe plus

entity2 -> entity2 : Exception lié à la version
destroy entity2
entity2 -> lifecycle2
deactivate entity2
lifecycle2 -> control2
deactivate lifecycle2
control2 -> control
deactivate control2

end

@enduml

#### 4.1.3 Description des classes

@startuml

title Réservation d'un particulier - Réserver une garde de mon chat auprès d'un particulier ou d'un professionnel\nDiagramme de classes

class "<<control>>\nBookingCatSitterUI" as BookingCatSitterUI #AliceBlue
class "<<boundary>>\nBookingCatSitterRequest" as BookingCatSitterRequest #AliceBlue
class "<<boundary>>\nBookingCatSitterController" as BookingCatSitterController #HoneyDew
class "<<control>>\nBookingCatSitterService" as BookingCatSitterService #HoneyDew
class "<<control>>\nAvailabilityCatSitterService" as AvailabilityCatSitterService #HoneyDew
class "<<life cycle>>\nBookingCatSitterRepository" as BookingCatSitterRepository #HoneyDew
class "<<life cycle>>\nAvailabilityCatSitterRepository" as AvailabilityCatSitterRepository #HoneyDew
entity "<<entity>>\nBookingCatSitter" as BookingCatSitter #HoneyDew
entity "<<entity>>\nUser" as User #HoneyDew
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter #HoneyDew

BookingCatSitterUI : +displaySchedule()
BookingCatSitterUI : +selectDateBooking()
BookingCatSitterUI : +displayCatSitter()
BookingCatSitterUI : +bookingCatSitterSlot()
BookingCatSitterUI : +displaySuccess()
BookingCatSitterUI : +displayError()

BookingCatSitterRequest : +bookingCatSitterSlot()
BookingCatSitterRequest : +consumeAvailabilitySlot()

BookingCatSitterController : +bookingCatSitterSlot()
BookingCatSitterController : +consumeAvailabilitySlot()

BookingCatSitterService : +bookingCatSitterSlot()
BookingCatSitterService : +consumeAvailabilitySlot()
BookingCatSitterService : -sendEmailCatIndividual()
BookingCatSitterService : -sendEmailCatSitter()

AvailabilityCatSitterService : +findBookingAvailableThisMonth()
AvailabilityCatSitterService : +findBookingAvailable()
AvailabilityCatSitterService : +update()

AvailabilityCatSitterRepository : +findBookingAvailableThisMonth()
AvailabilityCatSitterRepository : +findBookingAvailable()
AvailabilityCatSitterRepository : +update()

BookingCatSitterRepository : +add()

BookingCatSitter : User catSitter
BookingCatSitter : User catIndividual
BookingCatSitter : Date booking
BookingCatSitter : [...]

AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : Integer maxCat
AvailabilityCatSitter : [...]

User : [...]

BookingCatSitterUI ..> BookingCatSitterRequest
BookingCatSitterRequest ..> BookingCatSitterController
BookingCatSitterController ..> BookingCatSitterService
BookingCatSitterController ..> AvailabilityCatSitterService
BookingCatSitterService ..> BookingCatSitterRepository
BookingCatSitterService .> AvailabilityCatSitterService
AvailabilityCatSitterService..> AvailabilityCatSitterRepository
BookingCatSitterRepository ..> BookingCatSitter
AvailabilityCatSitterRepository..> AvailabilityCatSitter
BookingCatSitter -> User : catSitter
BookingCatSitter -> User : catIndividual
User -* AvailabilityCatSitter : catSitter

@enduml

<div style="page-break-after: always;"></div>

### 4.2 Gestion d'un CatSitter - Donner mes disponibilités de gardes <a name="conception_disponibilite"></a>

#### 4.2.1 Liste des objets candidats

- `<<control>>` GiveCatCareAvailabilitiesUI
- `<<boundary>>` GiveCatCareAvailabilitiesRequest
- `<<boundary>>` GiveCatCareAvailabilitiesController
- `<<control>>` AvailabilityCatSitterService
- `<<entity>>` AvailabilityCatSitter
- `<<life cycle>>` AvailabilityCatSitterRepository

@startuml
title Gestion d'un CatSitter - Donner mes disponibilités de gardes\nListe des objets candidats
skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor CatIndividual as user #ForestGreen
control "<<control>>\nGiveCatCareAvailabilitiesUI" as controlFront
boundary "<<boundary>>\nGiveCatCareAvailabilitiesRequest" as boundaryFront
end box
@enduml
@startuml
box "Back-end" #HoneyDew
boundary "<<boundary>>\nGiveCatCareAvailabilitiesController" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle
entity "<<entity>>\nAvailabilityCatSitter" as entity
end box
@enduml

#### 4.2.2 Description des interactions entre objets

@startuml

title Gestion d'un CatSitter - Donner mes disponibilités de gardes\nDiagramme de séquence

skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor CatIndividual as user #ForestGreen
control "<<control>>\nGiveCatCareAvailabilitiesUI" as controlFront
boundary "<<boundary>>\nGiveCatCareAvailabilitiesRequest" as boundaryFront
end box
box "Back-end" #HoneyDew
boundary "<<boundary>>\nGiveCatCareAvailabilitiesController" as boundary
control "<<control>>\nAvailabilityCatSitterService" as control
participant "<<life cycle>>\nAvailabilityCatSitterRepository" as lifecycle
entity "<<entity>>\nAvailabilityCatSitter" as entity
end box

== Affichage du planning ==
activate user
user -> controlFront : **displaySchedule**\nAffiche le planning
activate controlFront
controlFront -> boundaryFront
activate boundaryFront
boundaryFront -> boundary : **findAvailibilitiesInProgress**\nRécupération des disponibilités en cours
activate boundary
boundary -> control
activate control
control -> lifecycle  
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
boundary -> boundaryFront
boundaryFront -> controlFront
controlFront -> user : **displayLoader**\nAffichage d'un loader en\nattendant l'arrivée des données
control -> boundary
deactivate control
boundary -> boundaryFront  
deactivate boundary
boundaryFront -> controlFront
deactivate boundaryFront
controlFront -> user : **selectDateAvailable**\nSelectionne la date de début et la date de fin\nde la disponibilité
deactivate controlFront

== Ajouter une disponibilité ==

user -> controlFront : **giveCatCareAvailabilities**\nAjoute une plage de dates de disponibilités
activate controlFront
controlFront -> boundaryFront
activate boundaryFront
boundaryFront -> boundary
activate boundary
boundary -> control
activate control
alt #d0f0c0 Succès  
control -> lifecycle : **add**\nAjout de la plage de date pour le CatSitter
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control -> boundary
boundary -> boundaryFront
boundaryFront -> controlFront
controlFront -> user : **displaySuccesAddAvailabilities**\nAffichage du succès de l'ajout
else #ffe4e1 Echec : Donner une disponibilité en doublon
control -> boundary : Disponibilité déjà donné
deactivate control
boundary -> boundaryFront
deactivate boundary
boundaryFront -> controlFront
deactivate boundaryFront
controlFront -> user : **displayError**\nAffichage du message d'erreur
deactivate controlFront
end

== Annuler une disponibilité déjà mise au préalable ==

user -> controlFront : **cancelCatCareAvailabilities**\nSupprime une plage de dates de disponibilités
activate controlFront
controlFront -> boundaryFront
activate boundaryFront
boundaryFront -> boundary
activate boundary
boundary -> control
activate control
control -> control : **slotIsReserved**\nLe créneau supprimé était-il réservé ?
alt #d0f0c0 Succès : Annulation validé avec succès
control -> control : **slotIsReserved** <false>\n**cancelCatCareAvailabilities**
control -> lifecycle : **remove**\nSuppression de la disponibilité du CatSitter
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control -> boundary
boundary -> boundaryFront
boundaryFront -> controlFront
controlFront -> user : **displaySuccesRemoveAvailabilities**\nAffichage du succès de la suppression

else #ffe4e1 Echec : Se rendre indisponible sur un créneau déjà réservé

control -> control : **slotIsReserved** <true>
control -> boundary
deactivate control
boundary -> boundaryFront
deactivate boundary
boundaryFront -> controlFront
deactivate boundaryFront
controlFront -> user : **displayConfirmCanceled**\nAffichage d'une notification de confirmation\nd'annulation malgré réservation
deactivate controlFront
alt Fermeture de la notification sans confirmer

user -> user : Retour arrière

else Confirmation de l'annulation

user -> controlFront : **confirmCanceled**\nConfirmation de l'annulation
activate controlFront
controlFront -> boundaryFront
activate boundaryFront
boundaryFront -> boundary
activate boundary
boundary -> control : **cancelCatCareAvailabilities**\nSupprime une plage de dates de disponibilités
activate control
control -> lifecycle : **remove**\nSuppression de la disponibilité du CatSitter
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
deactivate lifecycle
control -> control : **sendEmailCanceledCatIndividual**\nEnvoi de l'email à l'utilisateur qui avait\nréservé le créneau
control -> boundary
deactivate control
boundary -> boundaryFront
deactivate boundary
boundaryFront -> controlFront
deactivate boundaryFront
controlFront -> user : **displaySuccesRemoveAvailabilities**\nAffichage du succès de la suppression
deactivate controlFront
deactivate user

end

end

@enduml

#### 4.2.3 Description des classes

@startuml
left to right direction
class "<<boundary>>\nGiveCatCareAvailabilitiesUI" as GiveCatCareAvailabilitiesUI #AliceBlue
class "<<boundary>>\nGiveCatCareAvailabilitiesRequest" as GiveCatCareAvailabilitiesRequest #AliceBlue
class "<<boundary>>\nGiveCatCareAvailabilitiesController" as GiveCatCareAvailabilitiesController #HoneyDew
class "<<control>>\nAvailabilityCatSitterService" as AvailabilityCatSitterService #HoneyDew
class "<<life cycle>>\nAvailabilityCatSitterRepository" as AvailabilityCatSitterRepository #HoneyDew
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter #HoneyDew

GiveCatCareAvailabilitiesUI : +displaySchedule()
GiveCatCareAvailabilitiesUI : +selectDateAvailable()
GiveCatCareAvailabilitiesUI : +giveCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +cancelCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +displayConfirmCanceled()
GiveCatCareAvailabilitiesUI : +confirmCanceled()
GiveCatCareAvailabilitiesUI : +displaySuccesAddAvailabilities()
GiveCatCareAvailabilitiesUI : +displaySuccesRemoveAvailabilities()

GiveCatCareAvailabilitiesRequest : +findAvailibilitiesInProgress()
GiveCatCareAvailabilitiesRequest : +giveCatCareAvailabilities()
GiveCatCareAvailabilitiesRequest : +cancelCatCareAvailabilities()

GiveCatCareAvailabilitiesController : +selectDateAvailable()
GiveCatCareAvailabilitiesController : +giveCatCareAvailabilities()
GiveCatCareAvailabilitiesController : +cancelCatCareAvailabilities()
GiveCatCareAvailabilitiesController : -slotIsReserved()

AvailabilityCatSitterService : +findAvailibilitiesInProgress()
AvailabilityCatSitterService : +giveCatCareAvailabilities()
AvailabilityCatSitterService : +cancelCatCareAvailabilities()
AvailabilityCatSitterService : +add()
AvailabilityCatSitterService : +remove()
AvailabilityCatSitterService : -sendEmailCanceledCatIndividual()

AvailabilityCatSitterRepository : +findAvailibilitiesInProgress()
AvailabilityCatSitterRepository : +add()
AvailabilityCatSitterRepository : +remove()

AvailabilityCatSitter : Long id
AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : [...]

GiveCatCareAvailabilitiesUI .> GiveCatCareAvailabilitiesRequest
GiveCatCareAvailabilitiesRequest .> GiveCatCareAvailabilitiesController
GiveCatCareAvailabilitiesController .> AvailabilityCatSitterService
AvailabilityCatSitterService .> AvailabilityCatSitterRepository
AvailabilityCatSitterRepository .> AvailabilityCatSitter
@enduml

<div style="page-break-after: always;"></div>

### 4.3 Gestion d'un compte - Créer mon compte <a name="conception_create_account"></a>

#### 4.3.1 Liste des objets candidats

- `<<control>>` AddAccountUI
- `<<boundary>>` AddAccountRequest
- `<<boundary>>` AddAccountController
- `<<control>>` UseService
- `<<entity>>` User
- `<<life cycle>>` UserRepository

@startuml

title Gestion d'un compte - Créer mon compte\nListe des objets candidats

skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor "L'utilisateur" as user
control "<<control>>\nAddAccountUI" as AddAccountUI
boundary "<<boundary>>\nAddAccountRequest" as boundaryFront
end box
box "Back-end" #HoneyDew
boundary "<<boundary>>\nAddAccountController" as boundary
control "<<control>>\nUserService" as control
participant "<<life cycle>>\nUserRepository" as lifecycle
entity "<<entity>>\nUser" as entity
end box
@enduml

#### 4.3.2 Description des interactions entre objets

@startuml

title Gestion d'un compte - Créer mon compte\nDiagramme de séquence

skinparam actorStyle awesome
box "Front-end" #AliceBlue
actor "L'utilisateur" as user
control "<<control>>\nAddAccountUI" as controlFront
boundary "<<boundary>>\nAddAccountRequest" as boundaryfront
end box
box "Back-end" #HoneyDew
boundary "<<boundary>>\nAddAccountController" as boundary
control "<<control>>\nUserService" as control
participant "<<life cycle>>\nUserRepository" as lifecycle
entity "<<entity>>\nUser" as entity
end box

activate user
user -> controlFront: **displayForm**\nAffichage du formulaire de création de compte
activate controlFront
controlFront -> user
deactivate controlFront

user-> controlFront: **inputForm**\nInsertion des données
activate controlFront
controlFront -> user
deactivate controlFront

user-> controlFront: **validateForm**\nValidation des données
activate controlFront
controlFront-> boundaryfront
activate boundaryfront
boundaryfront -> boundary : **addAccount**\nAjouter un compte
activate boundary
boundary -> control
activate control
control -> lifecycle : **findByEmail**\nChercher si le compte est déjà présent
activate lifecycle
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity

alt #d0f0c0 Succès : Compte non présent

lifecycle -> control : **findByEmail** <false>
control -> control : **checkDatas**\nVérifie si les données sont correctes

alt #d0f0c0 Succès : Compte créer

control -> lifecycle : **add**\nCréation du compte
lifecycle -> entity
activate entity
entity -> lifecycle
deactivate entity
lifecycle -> control
control -> control : **sendEmail**\nEmail compte créer avec succès
control -> boundary
boundary -> user :**displayEmailSend**\nInforme l'utilisateur qu'il a reçu un email\net l'invite à se connecter

else #ffe4e1 Echec : Données incorrectes

control -> boundary : **checkDatas** <false>
boundary -> user : **displayError**\nAffichage du message d'erreur
end

else #ffe4e1 Echec : Compte déjà existant
lifecycle -> control : **findByEmail** <true>
deactivate lifecycle
control -> control : **sendEmail**\nEmail compte déjà présent
control -> boundary
deactivate control
boundary -> user : **displayEmailSend**\nInforme l'utilisateur qu'il a reçu un email\net l'invite à se connecter
rnote over boundary
On indique la même information qu'un utilisateur non présent
pour éviter de donner des informations à un potentiel attaquant
endrnote

deactivate boundary  
deactivate boundaryfront
deactivate controlFront

end

deactivate user

@enduml

#### 4.3.3 Description des classes

@startuml
class "<<control>>\nAddAccountUI" as AddAccountUI #AliceBlue
class "<<boundary>>\nAddAccountRequest" as AddAccountRequest #AliceBlue
class "<<boundary>>\nAddAccountController" as AddAccountController #HoneyDew
class "<<control>>\nUserService" as UserService #HoneyDew
class "<<life cycle>>\nUserRepository" as UserRepository #HoneyDew
entity "<<entity>>\nUser" as User #HoneyDew

AddAccountUI : +displayForm()
AddAccountUI : +inputForm()
AddAccountUI : +validateForm()
AddAccountUI : +displayEmailSend()
AddAccountUI : +displayError()

AddAccountRequest : +addAccount()

AddAccountController : +addAccount()

UserService : +addAccount()
UserService : -checkDatas()
UserService : -sendEmail()

UserRepository : +findByEmail()
UserRepository : +add()

User : Long id
User : User catSitter
User : User catIndividual
User : Date start
User : Date end
User : Date booking
User : [...]

AddAccountUI .> AddAccountRequest
AddAccountRequest .> AddAccountController
AddAccountController .> UserService
UserService .> UserRepository
UserRepository .> User
@enduml

<div style="page-break-after: always;"></div>

## 4. Regroupement des classes <a name="conception_regroupement_classes"></a>

### 4.1 Groupe domaine

@startuml

title Groupe domaine

entity "<<entity>>\nBookingCatSitter" as BookingCatSitter #HoneyDew
entity "<<entity>>\nUser" as User #HoneyDew
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter #HoneyDew

BookingCatSitter : Long id
BookingCatSitter : User catSitter
BookingCatSitter : User catIndividual
BookingCatSitter : Date start
BookingCatSitter : Date end
BookingCatSitter : Date booking
BookingCatSitter : [...]

AvailabilityCatSitter : Long id
AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : Integer maxCat
AvailabilityCatSitter : [...]

User : Long id
User : String name
User : String lastname
User : Date birthdate
User : [...]

BookingCatSitter -> User : catSitter
BookingCatSitter -> User : catIndividual
User -* AvailabilityCatSitter : catSitter

@enduml

### 4.2 Groupe domaine et cycle de vie

@startuml

title Groupe domaine et cycle de vie

class "<<life cycle>>\nUserRepository" as UserRepository #HoneyDew
class "<<life cycle>>\nBookingCatSitterRepository" as BookingCatSitterRepository #HoneyDew
class "<<life cycle>>\nAvailabilityCatSitterRepository" as AvailabilityCatSitterRepository #HoneyDew
entity "<<entity>>\nBookingCatSitter" as BookingCatSitter #HoneyDew
entity "<<entity>>\nUser" as User #HoneyDew
entity "<<entity>>\nAvailabilityCatSitter" as AvailabilityCatSitter #HoneyDew

UserRepository : +findByEmail()
UserRepository : +add()

AvailabilityCatSitterRepository : +findBookingAvailableThisMonth()
AvailabilityCatSitterRepository : +findBookingAvailable()
AvailabilityCatSitterRepository : +findAvailibilitiesInProgress()
AvailabilityCatSitterRepository : +add()
AvailabilityCatSitterRepository : +update()
AvailabilityCatSitterRepository : +remove()

BookingCatSitterRepository : +add()

BookingCatSitter : Long id
BookingCatSitter : User catSitter
BookingCatSitter : User catIndividual
BookingCatSitter : Date start
BookingCatSitter : Date end
BookingCatSitter : Date booking
BookingCatSitter : [...]

AvailabilityCatSitter : Long id
AvailabilityCatSitter : User catSitter
AvailabilityCatSitter : Date start
AvailabilityCatSitter : Date end
AvailabilityCatSitter : Integer maxCat
AvailabilityCatSitter : [...]

User : Long id
User : String name
User : String lastname
User : Date birthdate
User : [...]

BookingCatSitterRepository ..> BookingCatSitter
AvailabilityCatSitterRepository..> AvailabilityCatSitter
UserRepository ..> User
BookingCatSitter -> User : catSitter
BookingCatSitter -> User : catIndividual
User -* AvailabilityCatSitter : catSitter

@enduml

<div style="page-break-after: always;"></div>

### 4.3 Groupe contrôleur

@startuml

title Groupe contrôleur

class "<<control>>\nUserService" as UserService #HoneyDew
class "<<control>>\nBookingCatSitterService" as BookingCatSitterService #HoneyDew
class "<<control>>\nAvailabilityCatSitterService" as AvailabilityCatSitterService #HoneyDew

UserService : +addAccount()
UserService : -checkDatas()
UserService : -sendEmail()

BookingCatSitterService : +bookingCatSitterSlot()
BookingCatSitterService : +consumeAvailabilitySlot()
BookingCatSitterService : -sendEmailCatIndividual()
BookingCatSitterService : -sendEmailCatSitter()

AvailabilityCatSitterService : +findAvailibilitiesInProgress()
AvailabilityCatSitterService : +giveCatCareAvailabilities()
AvailabilityCatSitterService : +cancelCatCareAvailabilities()
AvailabilityCatSitterService : +findBookingAvailableThisMonth()
AvailabilityCatSitterService : +findBookingAvailable(Date start, Date end)
AvailabilityCatSitterService : +add()
AvailabilityCatSitterService : +update()
AvailabilityCatSitterService : +remove()
AvailabilityCatSitterService : -sendEmailCanceledCatIndividual()

BookingCatSitterService .> AvailabilityCatSitterService

@enduml

### 4.4 Groupe interface utilisateur et système

@startuml
title Groupe interface utilisateur et système
class "<<boundary>>\nGiveCatCareAvailabilitiesRequest" as GiveCatCareAvailabilitiesRequest #AliceBlue
class "<<boundary>>\nBookingCatSitterRequest" as BookingCatSitterRequest #AliceBlue
class "<<boundary>>\nAddAccountRequest" as AddAccountRequest #AliceBlue

class "<<boundary>>\nBookingCatSitterUI" as BookingCatSitterUI #AliceBlue
class "<<boundary>>\nGiveCatCareAvailabilitiesUI" as GiveCatCareAvailabilitiesUI #AliceBlue
class "<<boundary>>\nAddAccountUI" as AddAccountUI #AliceBlue

BookingCatSitterUI : +displaySchedule()
BookingCatSitterUI : +selectDateBooking()
BookingCatSitterUI : +displayCatSitter()
BookingCatSitterUI : +bookingCatSitterSlot()
BookingCatSitterUI : +displaySuccess()
BookingCatSitterUI : +displayError()

BookingCatSitterRequest : +bookingCatSitterSlot()
BookingCatSitterRequest : +consumeAvailabilitySlot()

GiveCatCareAvailabilitiesUI : +displaySchedule()
GiveCatCareAvailabilitiesUI : +selectDateAvailable()
GiveCatCareAvailabilitiesUI : +giveCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +cancelCatCareAvailabilities()
GiveCatCareAvailabilitiesUI : +displayConfirmCanceled()
GiveCatCareAvailabilitiesUI : +confirmCanceled()
GiveCatCareAvailabilitiesUI : +displaySuccesAddAvailabilities()
GiveCatCareAvailabilitiesUI : +displaySuccesRemoveAvailabilities()
GiveCatCareAvailabilitiesUI : -slotIsReserved()

GiveCatCareAvailabilitiesRequest : +findAvailibilitiesInProgress()
GiveCatCareAvailabilitiesRequest : +giveCatCareAvailabilities()
GiveCatCareAvailabilitiesRequest : +cancelCatCareAvailabilities()

AddAccountUI : +displayForm()
AddAccountUI : +inputForm()
AddAccountUI : +validateForm()
AddAccountUI : +displayEmailSend()
AddAccountUI : +displayError()

AddAccountRequest : +addAccount()

@enduml

<div style="page-break-after: always;"></div>

# Bibliographies <a name="bibliographie"></a>

[Advantages and Disadvantages of Gradle and Maven](https://www.interviewbit.com/blog/gradle-vs-maven/#:~:text=Answer%3A%20Gradle%20is%20faster%20than,can%20resolve%20Gradle's%20build%20cache.) : https://www.interviewbit.com/blog/gradle-vs-maven/

[Ant Design](https://ant.design/) : https://ant.design/

[Cypress](https://www.cypress.io/) : https://www.cypress.io/

[Gradle](https://gradle.org/) : https://gradle.org/

[Liquibase](https://www.liquibase.org/) : https://www.liquibase.org/

[MockK](https://mockk.io/) : https://mockk.io/

[MSW](https://mswjs.io/) : https://mswjs.io/

[React JS](https://react.dev/) : https://react.dev/

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) : https://testing-library.com/docs/react-testing-library/intro/

[Spring initializr](https://start.spring.io/;) : https://start.spring.io/;

[Vite](https://vitejs.dev/guide/) : https://vitejs.dev/guide/

[Wiremock](https://wiremock.org/) : https://wiremock.org/
