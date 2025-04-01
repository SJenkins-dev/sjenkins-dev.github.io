function makeRipples(){

  $(function(){
    var ocean = document.getElementById('ocean');
    var disp = ocean.style.display;  // don't worry about previous display style

    if (ocean.length !== 0){
    setTimeout(function(){
        ocean.style.display = disp;
       
        $(".hero-section").ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        })

    },20); // you can play with this timeout to make it as short as possible
}
})
};

const storageKey = 'theme-preference';

function preloadPageContent(){
      $('body').find("img").each(function(){
        this.setAttribute('loading', 'lazy');
      })
    }

    const onClick = () => {
      console.log('clicked');
      // flip current value
      theme.value = theme.value === 'light'
        ? 'dark'
        : 'light'
    
      setPreference()
    }

    const getColorPreference = () => {
      if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
      else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    }

    const setPreference = () => {
      localStorage.setItem(storageKey, theme.value)
      reflectPreference()
    }

    const reflectPreference = () => {
      document.firstElementChild
        .setAttribute('data-theme', theme.value)
    
      document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', theme.value)
    }
    
    const theme = {
      value: getColorPreference(),
    }
    
    // set early so no page flashes / CSS is made aware
    reflectPreference()
    
    window.onload = () => {
    }
    
    // sync with system changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({matches:isDark}) => {
        theme.value = isDark ? 'dark' : 'light'
        setPreference()
      })



document.addEventListener('astro:page-load', () => {
        // set on load so screen readers can see latest value on the button
        reflectPreference()
    
        // now this script can find and listen for clicks on the control
        document
          .querySelector('#theme-toggle')
          .addEventListener('click', onClick)



});

document.addEventListener('astro:after-swap',  () => {preloadPageContent()}, { once: true });

makeRipples();