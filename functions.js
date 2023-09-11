function scrollToDiv(divId) {
    // Get a reference to the target div element by its ID
    var targetDiv = document.getElementById(divId);
    
    // Check if the targetDiv exists
    if (targetDiv) {
        // Use the `scrollTop` property to scroll to the top of the target div
        window.scrollTo({
            top: targetDiv.offsetTop,
            behavior: 'smooth' // This adds a smooth scrolling effect
        });
    }
}