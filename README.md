**Proyecto de Juego de Borja Domínguez.**


Go fun =)! => https://fradomati.github.io/jumpUP/


# Zombie Jumps

# What?
Juego de plataformas que busca ser un simil al juego Jump King. 
El juego está dividido en 3 fases a las que debes acceder saltanto de una plataforma a otra.

Los movimientos son 3:
- A: Desplazamiento lateral hacia la Izquierda.
- D: Desplazamiento lateral hacia la Derecha.
- SPACE: Desplazamiento vertical "Salto". Esa tecla, según el tiempo que se mantenga pulsada, hace que el personaje salte más alto o menos.

La dificultad del juego está en calcular correctamente la potencia de salto, ya que una vez sueltas la tecla, no puedes mover el personaje hasta que toca una plataforma,por lo que un salto mal calculado puede llevarte desde la Fase 3 a la Fase 1.

# Why?
He desarrollado esta tipología de juego porque el Jump King me provocó bastantes momentos de frustación, y como hizo Batman, ¡he convertido mi enemigo/miedo en mi símbolo! 

He de reconocer que creo que el desarrollo me ha traído muchos más momentos de frustación que el propio juego original, pero ahí está ;)

# How

Está desarrollado sobre "canvas" y Javascript. Enumerando los principales elementos del juego:
- Gravedad: El personaje está sometido continuamente a una "fuerza" que le empuja hacia abajo y que se contrarresta hasta que salta o se sale de una plataforma.

- Colisiones: Hay dos tipos de colisiones, la del suelo, que reduce la velocidad de caída a 0 y hace que se mantenga sobre la plataforma. Y la de choque por debajo de la plataforma, que lo empuja, es decir, multiplica momentáneamente la velocidad de caída y el ángulo. También está desarrollada en parte la colisión lateral, pero hay que ajustarla, y como las plataformas son "finas" no lo ví necesario (Están comentadas) Para que ambas funciones he calculado una distancia aproximada desde la cual quiero que empiece a detectar si está el pj, y si es true, pues aplique unos efectos u otros.

- Potencia de Salto: El salto se ha desarrollado de manera que según el tiempo que tengas presionada la tecla "space" el personaje salte más o menos. Para ello he generado un array al que se le van agregando un elemento y según el número de elementos generados, se le da un "power" que modifica la potencia de salto.

- Final de las plataformas: El definir el final de las plataformas también tiene su "aquel", en definitiva es preguntar por si el punto X y "X + el ancho" del personaje están dentro del elemento X o "X + el ancho de la plataforma".

- Cambio de Fase: Para conseguir el efecto de cambio de cambio de fase, establecí una plataforma "límite", es decir, a una altura concreta que si el personaje tocaba una variable cambiaba a "true" y por tanto los obstáculos y fondo cambian, y al personaje se le da una nueva posición, a la misma distancia X que estaba pero con una Y al final de la pantalla. Mientras otra variable que lleva la cuenta de phases, va cambiando su valor y así otros elementos, como las plataformas y colisiones "saben" qué pintar en ese momento.

- Pintar plataformas: Para pintar las plataformas he generado 4 arrays, un poco grande, que contienen: posición en X, posición en Y, ancho y altura. Luego para pintarlo he utilizado un bucle que según en la phase en la que se encuentre el personaje, inicia el conteo en un punto u otro (al igual que pasa con las colisiones).

- Animación del Pj: El personaje cambia de "estado" cada vez que se pulsa A o D, quizás no es la mejor forma de hacerle gesticular pero no se me ocurrió otra. 

# License


Please refered to `LICENSE.md`

# Contributing

If you want to contributed to this projects, please. Are yourself to `CONTRIBUTING.md`


