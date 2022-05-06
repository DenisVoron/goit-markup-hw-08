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

//@mixin mq ($screen) {
   //@else if $screen == retina () 
   // @mixin btn-size($fz, $max-w: 160px, $min-w: false ) {
// max-width: $max-w;
// min-width: $min-w;
// font-size: $fz;
// }

//@mixin btn-size($size) {
//@if $size=="small" {
//max-width: 160px;
//min-width: 120px;
//font-size: 12px;
//}

      //@if $size=="medium" {
         //max-width: 180px;
         //min-width: 140px;
         //font-size: 16px;
      //}

      //@if $size=="large" {
         //max-width: 220px;
         //min-width: 160px;
         //font-size: 24px;
      //}

//}

//@mixin fonts($fz, $lh: 1.67, $ls: 0.02em, $fw: null) {
//font-size: $fz;
//font-weight: $fw;
//line-height: $lh;
//letter-spacing: $ls;
//}

// Media query mixin
@mixin mq($screen) {
$mobile: 480px;
$tablet: 768px;
$desktop: 1200px;

      @if $screen==mobile-only {
         @media screen and (max-width: #{$tablet - 0.02}) {
            @content;
         }
      }

      @else if $screen==mobile {
         @media screen and (min-width: $mobile) {
            @content;
         }
      }

      @else if $screen==tablet-only {
         @media screen and (min-width: $tablet) and (max-width: #{$desktop - 0.02}) {
            @content;
         }
      }

      @else if $screen==tablet {
         @media screen and (min-width: $tablet) {
            @content;
         }
      }

      @else if $screen==desktop {
         @media screen and (min-width: $desktop) {
            @content;
         }
      }

      @else if $screen==notDesktop {
         @media screen and (max-width: #{$desktop - 0.02}) {
            @content;
         }
      }

.benefits {
max-width: $mobile;

    @media screen and (min-width: $tablet) {
        max-width: $tablet;
    }

    @media screen and (min-width: $desktop) {
        max-width: $desktop;
    }

}
