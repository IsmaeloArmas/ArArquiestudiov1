document.addEventListener('DOMContentLoaded', function () {

     gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time*1000);
    });
    gsap.ticker.lagSmoothing(0);
    
    gsap.fromTo ( ".loading-page", 
    { opacity: 1 },
    {
        opacity: 0,
        duration: 2, 
        delay: 2.5,
        ease: "power2.inOut",
        onComplete: () => {
            document.querySelector('.loading-page').style.display = 'none'; 
        }
    }
    );

    gsap.fromTo (".logo-name", 
        { 
            y: 50,
            opacity: 0
        },
        {
            time: 2,
            y: 0,
            opacity: 1,
        }
    );

    const navbar = document.querySelector('.navbar');
            let lastScrollY = window.scrollY;
            
            window.addEventListener('scroll', () => {
                if (lastScrollY < window.scrollY) {
                    // Bajando - esconder navbar
                    navbar.classList.add('hidden');
                } else {
                    // Subiendo - mostrar navbar
                    navbar.classList.remove('hidden');
                }
                
                lastScrollY = window.scrollY;
            });

    let imagenes = [
        { img: 'Gallery/Img galeryG/1.png' },
        { img: 'Gallery/Img galeryG/2.jpg' },
        { img: 'Gallery/Img galeryG/3.jpg' },
        { img: 'Gallery/Img galeryG/4.png' },
        { img: 'Gallery/Img galeryG/5.png' },
        { img: 'Gallery/Img galeryG/26.jpg'},
        { img: 'Gallery/Img galeryG/27.jpg'},

        { img: 'Gallery/Img galeryG/6.png' },
        { img: 'Gallery/Img galeryG/7.jpg' },
        { img: 'Gallery/Img galeryG/8.jpg' },
        { img: 'Gallery/Img galeryG/9.jpg' },
        { img: 'Gallery/Img galeryG/10.jpg' },
        { img: 'Gallery/Img galeryG/28.jpg'},
        { img: 'Gallery/Img galeryG/29.jpg'},
        { img: 'Gallery/Img galeryG/30.jpg'},

        { img: 'Gallery/Img galeryG/11.png' },
        { img: 'Gallery/Img galeryG/12.png' },
        { img: 'Gallery/Img galeryG/13.jpg' },
        { img: 'Gallery/Img galeryG/14.jpg' },
        { img: 'Gallery/Img galeryG/15.jpg' },
        { img: 'Gallery/Img galeryG/31.jpg'},
        { img: 'Gallery/Img galeryG/37.jpg'},

        { img: 'Gallery/Img galeryG/16.png' },
        { img: 'Gallery/Img galeryG/17.png' },
        { img: 'Gallery/Img galeryG/18.png' },
        { img: 'Gallery/Img galeryG/19.jpg' },
        { img: 'Gallery/Img galeryG/20.png' },
        { img: 'Gallery/Img galeryG/33.jpg'},
        { img: 'Gallery/Img galeryG/34.jpg'},
        { img: 'Gallery/Img galeryG/35.jpg'},

        { img: 'Gallery/Img galeryG/21.png' },
        { img: 'Gallery/Img galeryG/22.jpg' },
        { img: 'Gallery/Img galeryG/23.jpg' },
        { img: 'Gallery/Img galeryG/24.jpg' },
        { img: 'Gallery/Img galeryG/25.jpg' },
        { img: 'Gallery/Img galeryG/36.jpg'},
        { img: 'Gallery/Img galeryG/32.jpg'},
    ]
    let contador = 0
    const contenedor = document.querySelector('.sladeshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.sladeshow img')

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = Number(event.target.dataset.imgMostrar)
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target

        if (tgt == atras || tgt.closest('.atras')) {
            contador = (contador > 0) ? contador - 1 : imagenes.length - 1
            img.src = imagenes[contador].img
        } else if (tgt == adelante || tgt.closest('.adelante')) {
            contador = (contador < imagenes.length - 1) ? contador + 1 : 0
            img.src = imagenes[contador].img
        }
    })

    document.querySelector('.btn-cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })
})