import './main.scss';
import 'bootstrap';
import jQuery from 'jquery';

jQuery('.carousel').carousel({
    interval: 6000,
    keyboard: true,
    pause: 'hover',
    wrap: true
});

jQuery('#slider4').on('slide.bs.carousel', () => {
    console.log('SLIDE!');
});

jQuery('#slider4').on('slid.bs.carousel', () => {
    console.log('SLID!');
});