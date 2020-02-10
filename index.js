import './main.scss';
import 'bootstrap';
import jQuery from 'jquery';

// CAROUSEL
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

// TOOLTIPS
jQuery('[data-toggle="tooltip"]').tooltip();

const showTooltip = () => {
    jQuery('#hello').tooltip('show');
};
const hideTooltip = () => {
    jQuery('#hello').tooltip('hide');
};
const toggleTooltip = () => {
    jQuery('#hello').tooltip('toggle');
};

if (document.getElementById('show-tooltip')) {
    document.getElementById('show-tooltip').addEventListener('click', () => {
        showTooltip();
    });
    document.getElementById('hide-tooltip').addEventListener('click', () => {
        hideTooltip();
    });
    document.getElementById('toggle-tooltip').addEventListener('click', () => {
        toggleTooltip();
    });
}

jQuery('#hello').on('show.bs.tooltip', () => {
    console.log('Tooltip Show')
});
jQuery('#hello').on('shown.bs.tooltip', () => {
    console.log('Tooltip Shown')
});
jQuery('#hello').on('hide.bs.tooltip', () => {
    console.log('Tooltip Hide')
});
jQuery('#hello').on('hidden.bs.tooltip', () => {
    console.log('Tooltip Hidden')
});

// POPOVER
jQuery('[data-toggle="popover"').popover();

const showPopover = () => {
    jQuery('#hello').popover('show');
};
const hidePopover = () => {
    jQuery('#hello').popover('hide');
};
const togglePopover = () => {
    jQuery('#hello').popover('toggle');
};

if (document.getElementById('show-popover')) {
    document.getElementById('show-popover').addEventListener('click', () => {
        showPopover();
    });
    document.getElementById('hide-popover').addEventListener('click', () => {
        hidePopover();
    });
    document.getElementById('toggle-popover').addEventListener('click', () => {
        togglePopover();
    });
}

jQuery('#hello').on('show.bs.popover', () => {
    console.log('Popover Show')
});
jQuery('#hello').on('shown.bs.popover', () => {
    console.log('Popover Shown')
});
jQuery('#hello').on('hide.bs.popover', () => {
    console.log('Popover Hide')
});
jQuery('#hello').on('hidden.bs.popover', () => {
    console.log('Popover Hidden')
});

// SCROLLSPY
jQuery('body').scrollspy({target: '#main-nav'});

jQuery('#main-nav a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        jQuery('html, body').animate({
            scrollTop: jQuery(hash).offset().top
        }, 900, () => {
            window.location.hash = hash;
        });
    }
});