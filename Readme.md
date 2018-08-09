# ArronaGrid

ArronaGrid es una libreria sass para la maquetacion de sitios web

Autor: Andres Arrona Montoya

## Descargar

[Version Estable](https://github.com/AndresArronaM/ArronaGrid/archive/master.zip)

### Clonar el proyecto desde Github

Clone el repositorio dentro de su proyecto

```git
git clone https://github.com/AndresArronaM/ArronaGrid.git
```

*asegúrese de añadir ArronaGrid al .gitignore de su proyecto*

### Desde NPM

```javascript
npm install --save @andresarronamontoya/arronagrid
```

## Instalar

### Version sass

importe el archivo `ArronaGrid.scss` a su proyecto

#### Descargado o clonado de GitHub

```sass
@import "ArronaGrid/ArronaGrid.scss";
```

#### con NPM y gulp.js

En su `gulpfile.js`

```sass
const arronagrid    = "node_modules/arronagrid"

.pipe(sass({includePaths: [arronagrid]}).on('error', sass.logError))
```

En su archivo scss

```sass
@import "node_modules/arronagrid/ArronaGrid";
```

### Version css

coloque el link en sus archivos html

#### Descargado o clonado de GitHub

```html
<link rel="stylesheet" href="ArronaGrid/css/ArronaGrid.css">
```

#### con NPM

```html
<link rel="stylesheet" href="node_modules/ArronaGrid/css/ArronaGrid.css">
```

*asegúrese de añadir ArronaGrid exepto la carpeta css al .gitignore de su proyecto*
