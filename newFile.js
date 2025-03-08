<script>
    window.addEventListener('scroll', function() { }
    const serviceCols = document.querySelectorAll('.service-col');
    const scrollPosition = window.scrollY + window.innerHeight;

        serviceCols.forEach(col => { }
            if (scrollPosition > col.offsetTop + col.offsetHeight / 2) {col.classList.add('visible')};
            }
        });
    });
</script>;
