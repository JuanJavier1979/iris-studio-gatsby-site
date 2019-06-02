import React from "react"
import Helmet from "react-helmet"
import { Link } from 'gatsby'

import Header from './layout/header'
import Footer from './layout/footer'

const PrivacidadPage = () => {
    return (
        <div id="page" className="site container">
            <Helmet>
                <html lang="es" />
                <title>Política de Privacidad – Iris Studio</title>
                <meta name="description" content="La política de privacidad de Iris Studio 8-)" />
            </Helmet>
            <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
            <Header />

            <div id="content" className="privacidad site-content">
                <section className="page-title row text-center">
                    <article className="large-8 large-centered columns">
                        <header>
                            <h1 className="entry-title">Política de privacidad</h1>
                        </header>
                    </article>
                </section>
                <div id="primary" className="content-area row">
                    <main id="main" className="site-main large-12 columns">
                        <article id="post-1002" className="post-1002 page type-page status-publish hentry">
                            <div className="entry-content">
                                <h2>Quiénes somos</h2>
                                <p>
                                    La dirección de nuestra web es: http://iris-studio.es.<br />
                                    Mi nombre es Juan Javier Moreno Restituto.<br />
                                    Nombre comercial: Iris Studio.<br />
                                    Mi NIF es 46951715k<br />
                                    Mi actividad es Desarrollador Web<br />
                                    Mi email es info@iris-studio.es
                                </p>
                                <h2>Qué datos personales recogemos y por qué los recogemos</h2>
                                <h3>Comentarios</h3>
                                <p>Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de comentarios, así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.</p>
                                <p>Una cadena anónima creada a partir de tu dirección de correo electrónico (también llamada hash) puede ser proporcionada al servicio de Gravatar para ver si la estás usando. La política de privacidad del servicio Gravatar está disponible aquí: https://automattic.com/privacy/. Después de la aprobación de tu comentario, la imagen de tu perfil es visible para el público en el contexto de su comentario.</p>
                                <h3>Medios</h3>
                                <p>Si subes imágenes a la web deberías evitar subir imágenes con datos de ubicación (GPS EXIF) incluidos. Los visitantes de la web pueden descargar y extraer cualquier dato de localización de las imágenes de la web.</p>
                                <h3>Formularios de contacto</h3>
                                <p>Formulario de contacto: Existe un formulario de contacto cuya finalidad es la respuesta de consultas, sugerencias o contacto profesional. En este caso se utilizará la dirección de correo electrónico para responder a las mismas y enviar la información que el usuario requiera a través de la web, estos datos se almacenarán en los servidores de siteground.es y las plataformas de emails antes reseñadas.</p>
                                <h3>Cookies</h3>
                                <p>Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de correo electrónico y web en cookies. Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una duración de un año.</p>
                                <p>Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.</p>
                                <p>Cuando inicias sesión, también instalaremos varias cookies para guardar tu información de inicio de sesión y tus opciones de visualización de pantalla. Las cookies de inicio de sesión duran dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas «Recordarme», tu inicio de sesión perdurará durante dos semanas. Si sales de tu cuenta, las cookies de inicio de sesión se eliminarán.</p>
                                <p>Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta cookie no incluye datos personales y simplemente indica el ID del artículo que acabas de editar. Caduca después de 1 día.</p>
                                <h3>Contenido incrustado de otros sitios web</h3>
                                <p>Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.</p>
                                <p>Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de su interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.</p>
                                <h3>Analítica</h3>
                                <h2>Con quién compartimos tus datos</h2>
                                <p>No cederemos los datos personales de los Usuarios a ningún tercero sin una base jurídica que legitime este tratamiento.</p>
                                <h2>Cuánto tiempo conservamos tus datos</h2>
                                <p>Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente en lugar de mantenerlos en una cola de moderación.</p>
                                <p>De los usuarios que se registran en nuestra web (si los hay), también almacenamos la información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores de la web también pueden ver y editar esa información.</p>
                                <h2>Qué derechos tienes sobre tus datos</h2>
                                <p>Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.</p>
                                <h2>Dónde enviamos tus datos</h2>
                                <p>Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.</p>
                                <h2>Tu información de contacto</h2>
                                <p>Tus datos personales pueden ser eliminados en cualquier momento rellenando nuestro formulario de contacto y especificando en el asunto del mensaje “Baja cliente/a” o través de email a la dirección info@iris-studio.es</p>
                                <h2>Información adicional</h2>
                                <h3>Cómo protegemos tus datos</h3>
                                <p>Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.&nbsp;Utilizamos, además el sistema&nbsp;reCAPTCHA para la distinción de bots y spam.</p>
                                <h3>Qué procedimientos utilizamos contra las brechas de datos</h3>
                                <p>Tan pronto como el responsable del tratamiento tenga conocimiento de que se ha producido una violación de la seguridad de los datos personales, el responsable debe, sin dilación indebida y, de ser posible, a más tardar 72 horas después de que haya tenido constancia de ella, notificar la violación de la seguridad de los datos personales a la autoridad de control competente. De esto puede derivarse la intervención de la autoridad de control, según sus funciones.</p>
                                <p>En el nuevo Reglamento Europeo de Protección de Datos no basta con informar solo a las autoridades, también se requiere comunicar al interesado sin dilación indebida la violación de la seguridad de los datos personales en caso de que puede entrañar un alto riesgo para sus derechos y libertades, y permitirle tomar las precauciones necesarias.</p>
                                <h3>De qué terceros recibimos datos</h3>
                                <p>No recibimos datos de terceros.</p>
                                <h3>Qué tipo de toma de decisiones automatizada y/o perfilado hacemos con los datos del usuario</h3>
                                <p>No hacemos uso de algoritmos automatizados de toma de decisión.&nbsp;Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam no publicando y borrando los positivos.</p>
                                <h3>Requerimientos regulatorios de revelación de información del sector</h3>
                                <p>Las presentes Condiciones de Uso del Sitio Web se rigen en todos y cada uno de sus extremos por la ley española. El idioma de redacción e interpretación de este aviso legal es el español. Este aviso legal no se archivará individualmente para cada usuario sino que permanecerá accesible por medio de Internet en este mismo <Link to="/politica-de-privacidad/">Sitio Web</Link>.</p>
                                <p>Para resolver cualquier controversia o reclamación derivada de cualquier actividad de Iris Studio en el marco de un servicio que requiera colegiación y que haya sido prestado como abogado por Iris Studio, el Cliente deberá dirigirse al órgano correspondiente del ICAM.</p>
                                <p>Los Usuarios que tengan la condición de consumidores o usuarios conforme los define la normativa española y residan en la Unión Europea, si han tenido un problema con una compra online realizada a Iris Studio, para tratar de llegar a un acuerdo extrajudicial pueden acudir a la <a href="https://webgate.ec.europa.eu/odr" target="_blank" rel="nofollow noopener noreferrer">Plataforma de Resolución de Litigios en Línea</a>, creada por la Unión Europea y desarrollada por la Comisión Europea al amparo del <a href="http://eur-lex.europa.eu/legal-content/ES/TXT/?uri=celex%3A32013R0524" target="_blank" rel="nofollow noopener noreferrer">Reglamento (UE) 524/2013</a>.</p>
                                <p>Siempre que el Usuario no sea consumidor o usuario, y cuando no haya una norma que obligue a otra cosa, las partes acuerdan someterse a los Juzgados y Tribunales de Málaga capital, por ser este el lugar de celebración del contrato, con renuncia expresa a cualquier otra jurisdicción que pudiera corresponderles.</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>El titular del Sitio Web ha elaborado este aviso legal por iniciativa&nbsp;propia tomando como base los textos legales disponibles bajo&nbsp;<a href="http://creativecommons.org/licenses/by/4.0/deed.es_ES" target="_blank" rel="nofollow noopener noreferrer">Licencia CC By</a>&nbsp;en la página web&nbsp;<a href="http://www.abanlex.com/" target="_blank" rel="noopener nofollow noreferrer">www.abanlex.com</a></p>
                            </div>
                            <footer className="entry-footer"></footer>
                        </article>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PrivacidadPage