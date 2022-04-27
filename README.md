# goit-markup-hw-01

Выполнение HTML-разметки макета

# goit-markup-hw-02

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

//.nav-list {
display: flex;
}

&\_\_container {
display: flex;
}

.nav-list\_\_item {
position: relative;

    margin-right: 50px;

    &:last-child {
        margin-right: 0;
    }

}

.nav-list\_\_link {
display: block;
padding: 32px 0px;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;

    color: var(--title-txt-cl);

    transition-property: color;
    transition-duration: var(--time-change);
    transition-timing-function: var(--time-steps);
    transition-delay: 100ms;

    &:hover,
    &:focus {
        color: var(--secondary-txt-cl);
    }

    &--current::after {
        content: '';

        position: absolute;
        left: 0px;
        bottom: 0px;

        display: block;
        width: 100%;
        height: 4px;

        background: var(--secondary-txt-cl);
        border-radius: 2px;
    }

}

/\*.work-btn {
border: transparent;
border-radius: 4px;
padding: 6px 22px;

    font-family: var(--main-font);

    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;

    text-align: center;
    letter-spacing: 0.03em;

    color: var(--title-txt-cl);
    background-color: var(--section-bg-cl);

    transition-property: background-color, color, box-shadow;
    transition-duration: var(--time-change);
    transition-timing-function: var(--time-steps);
    transition-delay: 100ms;

    /*фокус-ховер кнопки фильтр
    &:hover,
    &:focus {
        background-color: var(--secondary-txt-cl);
        color: var(--accent-txt-cl);

        box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
            0px 1px 2px rgba(0, 0, 0, 0.08),
            0px 2px 2px rgba(0, 0, 0, 0.12);
    }

}

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
