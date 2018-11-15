# ArronaGrid

## V0.1.2-Beta

* Se agrego el parametro `$Gap` en los mixin `Buttons()` y `ButtonsCss()`.
* Se Corrigio el error en el mixin `wrapCss()` el cual no generaba las clases css.
* Se Corrigio el error en el mixin `direccionCss()` el cual no interpolaba la variable $Direccion para clear las clases css.
* Se mejoro y se incluyo el mixin `gap()` en el `coreCss.scss` olvidado en versiones anteriores.
* Se mejoro los comentarios para explicar que hacen cada mixin.
* Se corrigio el error que compilaba el `coreCss` en vez del `coreSass`

## V0.1.3-Beta

* Se cambio la propiedad `overflow` a `overflow-y`.
* Se corrigio y se mejoro el mixin `gridStrictCss()`.

## V0.1.4-Beta

* Correciones menores
* Se actualizo Autoprefixer

## V0.1.5-Beta
* Renombracion de las clases css y Mixins sass
    * _buttons.scss
    
    |Mixin o Clase Modificado|Nuevo Nombre|
    |---------|----------|
    |button()|ag-Button()|
    |radius()|ag-Radius()|
    |buttonCss()|ag-Button-css()|
    |.ag-button|.ag-Button|
    |.ag-button-radius|.ag-Button-Radius|
    
    * _core.scss
    
    |Mixin o Clase Modificado|Nuevo Nombre|
    |---------|----------|
    |Layout()|ag-Layout()|
    |LayoutCss()|ag-Layout-css()|
    |.#{$nameSpace}-layout-#{$Display}|.#{$nameSpace}-Layout-#{$Display}|
    |container()|ag-Container()|
    |containerCss()|ag-Container-css()|
    |.#{$Container}-#{$Display}|.#{$Container}-#{$Display}{|
    
    Se modifico los valores que acepta los mixins Layout y LayoutCss `flex` y `grid` a `Flex` y `Grid` repespectivamente
    
    * _flexbox.scss
    
    |Mixin o Clase Modificado|Nuevo Nombre|
    |---------|----------|
    |direccion()|ag-Direccion()|
    |direccionCss()|ag-Direccion-css()|
    |.#{$Breackpoint}-flex-#{$Direccion}|.#{$nameSpace}-Flex-#{$Direccion}-#{$Breackpoint}|
    |wrap()|ag-Wrap()|
    |.#{$Breackpoint}-flex-#{$Wrap}|.#{$nameSpace}-Flex-#{$Wrap}-#{$Breackpoint}|
    |Align()|ag-Align()|
    |Align()Css|ag-Align-css()|
    |.#{$Breackpoint}-#{$Axis}-#{$Align}|.#{$nameSpace}-#{$Axis}-#{$Align}-#{$Breackpoint}|
    * _grid.scss
        
    |Mixin o Clase Modificado|Nuevo Nombre|
    |---------|----------|
    |gridStrict()|ag-Grid()|
    |gridStrictCss()|ag-Grid-css()|
    |gap()|ag-Gap()|
    |gapCss()|ag-Gap-Css()|
    |.xs-gap|.ag-Gap-xs|
    |.s-gap|.ag-Gap-s|
    |.m-gap|.ag-Gap-m|
    |.st-gap|.ag-Gap-st|
    |.t-gap|.ag-Gap-t|
    |.l-gap|.ag-Gap-l|
    |.xl-gap|.ag-Gap-xl|
    
    * _helps.scss
        
    |Mixin o Clase Modificado|Nuevo Nombre|
    |---------|----------|
    |fullLayoutCss()|ag-Full-Layout-css()|
    |.Full-Layout|.ag-Full-Layout|
    |fullCss()|ag-Full-css|
    |.Full|.ag-Full|
