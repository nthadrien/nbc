// Import just what we need

// import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';




const animatedElements = document.querySelectorAll('[data-iobs]');

if (animatedElements.length > 0) {
    const iobsObserverOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 10% of the element is visible
    };

    const iobsObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            const targetElement = entry.target;
            // Get the custom transition time from data-iobs-transition attribute, or use default
            const customTransitionTime = targetElement.dataset.iobsTransition;
            const transitionDuration = customTransitionTime ? customTransitionTime : null ;

            if (entry.isIntersecting) {
                // Apply custom transition duration before adding the 'show' class
                if (transitionDuration) targetElement.style.transitionDuration = transitionDuration;
                targetElement.classList.add('show');
            } else {
                // Optional: If you want elements to disappear when they scroll out of view (e.g., upwards)
                // targetElement.classList.remove('show');
                // Reset transition duration to default CSS one or empty string
                // targetElement.style.transitionDuration = '';
            }
        });
    };

    const iobsObserver = new IntersectionObserver(iobsObserverCallback, iobsObserverOptions);

    // Observe each element with data-iobs="left"
    animatedElements.forEach(element => {
        iobsObserver.observe(element);
    });
} else {
    console.warn('No elements with data-iobs="left" found to observe.');
}