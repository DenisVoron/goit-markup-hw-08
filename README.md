# goit-markup-hw-01

Выполнение HTML-разметки макета

# goit-markup-hw-02

формула расчета сетки элементов
flex-basis: calc((100% - количество маржинов в строке\*значение маржина) / количество элементов в строке);

Присвоение стилей css

доп шрифт
font-family: 'Quintessential', cursive;

.benefits-item::before {
display: block;
content: '';

width: 270px;
height: 120px;
background-size: contain;
}
.icon-antennа::before {
background-image: url(../images/icon/antenna.svg);
background-repeat: no-repeat;
background-position: center;
}
.icon-clock::before {
background-image: url(../images/icon/clock.svg);
background-repeat: no-repeat;
background-position: center;
}
.icon-diagram::before {
background-image: url(../images/icon/diagram.svg);
background-repeat: no-repeat;
background-position: center;
}
.icon-astronaut::before {
background-image: url(../images/icon/astronaut.svg);
background-repeat: no-repeat;
background-position: center;
}

header logo

&\_\_item {
flex-basis: calc(100% / 4);
margin-right: 30px;
}

    &__item:last-child {
        margin-right: 0px;
    }

&-container {
display: flex;
align-items: baseline;
}

@media screen and (min-width: $tablet){
width: 738px;
}

    @media screen and (min-width: $desktop) {
        width: $desktopSecondary;

        padding-left: 215px;
        padding-right: 215px;
    }

забрал с ворк

@media screen and (max-width: $tabletSecondary) {
&:not(:last-child) {
margin-bottom: 30px;
}
}

        @media screen and (min-width: $desktopSecondary) {
            margin-right: 30px;
            margin-bottom: 30px;
        }
