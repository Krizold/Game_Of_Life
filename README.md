# # Game Of Life

Le Jeu de la Vie (Game of Life) est un automate cellulaire inventé par le mathématicien britannique John Horton Conway en 1970. Il s'agit d'un modèle mathématique qui simule l'évolution d'un ensemble de cellules vivantes sur une grille bidimensionnelle, en suivant un ensemble de règles simples.

Ce dépôt contient une implémentation du Jeu de la Vie en JavaScript, en utilisant la balise HTML5 `<canvas>` pour le rendu graphique.

## Règles du jeu

Le Jeu de la Vie évolue sur une grille bidimensionnelle, où chaque cellule peut être dans l'un des deux états : vivante (1) ou morte (0). L'évolution du jeu se déroule en générations successives, où chaque cellule change d'état en fonction de son nombre de voisins vivants (les 8 cellules adjacentes).

Les règles du Jeu de la Vie sont les suivantes :

1. Une cellule vivante avec 2 ou 3 voisins vivants reste vivante pour la génération suivante.
2. Une cellule morte avec exactement 3 voisins vivants devient vivante pour la génération suivante.
3. Dans tous les autres cas, une cellule vivante meurt (par sous-population ou surpopulation) et une cellule morte reste morte.

## Installation

Pour installer et jouer au jeu, suivez les étapes ci-dessous :

1. Clonez ce dépôt GitHub sur votre ordinateur en utilisant la commande suivante :

   ```
   git clone https://github.com/Krizold/Game_Of_Life.git
   ```

2. Accédez au dossier du projet cloné :

   ```
   cd Game_Of_Life
   ```

3. Ouvrez le fichier `index.html` dans votre navigateur web préféré.

4. Observez l'évolution du Jeu de la Vie en action.

## Auteur

- Jérôme BERNIER (https://github.com/Krizold)