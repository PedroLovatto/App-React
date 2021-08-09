const Hero = (props) => {
    const titulo = props.titulo;
    const subtitulo = props.subtitulo;

    return (
        <section class="hero is-success mb-6">
            <div class="hero-body">
                <p class="title is-capitalized has-text-centered">
                    {titulo}
                </p>
                <p class="subtitle">
                    {subtitulo}
                </p>
            </div>
        </section>
    );
}
 
export default Hero;