<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title>Team Faster</title>
    <!--[if mso]>
    <style>
        table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
        div, td {padding:0;}
        div {margin:0 !important;}
    </style>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        table, td, div, h1, p {
            font-family: Arial, sans-serif;
        }
        @media screen and (max-width: 530px) {
            .unsub {
                display: block;
                padding: 8px;
                margin-top: 14px;
                border-radius: 6px;
                background-color: #555555;
                text-decoration: none !important;
                font-weight: bold;
            }
            .col-lge {
                max-width: 100% !important;
            }
        }
        @media screen and (min-width: 531px) {
            .col-sml {
                max-width: 27% !important;
            }
            .col-lge {
                max-width: 73% !important;
            }
        }
    </style>
</head>
<body style="margin:0;padding:0;word-spacing:normal;background-color:#939297;">
<div role="article" aria-roledescription="email" lang="en" style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#939297;">
    <table role="presentation" style="width:100%;border:none;border-spacing:0;">
        <tr>
            <td align="center" style="padding:0;">
                <!--[if mso]>
                <table role="presentation" align="center" style="width:600px;">
                    <tr>
                        <td>
                <![endif]-->
                <table role="presentation" style="width:100%;max-width:600px;border:none;border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636; background-color:#000000;">
                    <tr valign="bottom" style="background-color:#000000;">
                        <td>
                            <a href="http://www.example.com/" style="text-decoration:none;">
                                <img src="http://tiempocreativo.com.mx/assets/img/logoTeamFaster.png" width="50px" alt="Logo" style="width:50px;height:auto;border:none;text-decoration:none;padding:10px;">
                            </a>
                        </td>
                        <td>
                            <table role="presentation" style="float: right; width:100px;border:none;border-spacing:0;text-align:right;font-family:Arial,sans-serif";>
                                    <tr style="text-align:right;">
                                        <td style="vertical-align:bottom">
                                            <a href="https://www.facebook.com/PUMAMexico" style="text-decoration:none; text-align: left; padding-right: 5px; padding-left: 5px;">
                                                <img src="http://tiempocreativo.com.mx/assets/img/socials/SITE_TEAM_PUMA_ICONO_FACE.png" width="25px" alt="Logo" style="width:25px;height:auto;border:none;text-decoration:none;">
                                            </a>
                                        </td>
                                        <td>
                                            <a href="https://twitter.com/pumamexico/"style="text-decoration:none; text-align: left; padding-right: 5px; padding-left: 5px;">
                                                <img src="http://tiempocreativo.com.mx/assets/img/socials/SITE_TEAM_PUMA_ICONO_TWITT.png" width="25px" alt="Logo" style="width:25px;height:auto;border:none;text-decoration:none;">
                                            </a>
                                        </td>
                                        <td>
                                            <a href="https://www.instagram.com/pumamexico/" style="text-decoration:none; text-align: left;vpadding-right: 5px; padding-left: 5px;">
                                                <img src="http://tiempocreativo.com.mx/assets/img/socials/SITE_TEAM_PUMA_ICONO_INST.png" width="25px" alt="Logo" style="width:25px;height:auto;border:none;text-decoration:none;">
                                            </a>
                                        <td>
                                        <td>
                                            <a href="https://www.youtube.com/puma" style="text-decoration:none; text-align: left; padding-right: 5px; padding-left: 5px;">
                                                <img src="http://tiempocreativo.com.mx/assets/img/socials/SITE_TEAM_PUMA_ICONO_YOUT.png" width="25px" alt="Logo" style="width:25px;height:auto;border:none;text-decoration:none;">
                                            </a>
                                        </td>
                                    </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <h1 style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em; text-align: center; color: #ffffff;">
                                ¡Bienvenido {{ $name ?? 'name'}}!
                            </h1>
                            <p style="padding-right: 30px; padding-left: 30px; margin:0; line-height:28px; text-align: justify; color:#ffffff">
                                Aquí comienza la mejor experiencia de entrenamientos en combinación con coaches que te ayudarán a liberar tu potencial
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding-top:30px; padding-right: 10px; padding-left: 10px; padding-bottom: 0px; ";>
                            <h2 style="margin: 0px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em; color: #ffffff;">
                               Reserva {{ $slug ?? "XXXXXXXX-00" }}
                            </h2>
                        </td>
                    </tr>
                    <tr valign="top"  style="background-color:#000000;">
                        <td colspan="2" style="padding:15px";>
                            <table role="presentation" style="width:100%;border:none;border-spacing:5px;text-align:right;font-family:Arial,sans-serif;line-height:28px;font-weight:bold;color:#ffffff">
                                <tr valign="top">
                                    <td style="text-align: left">Edad:</td>
                                    <td style="text-align: left">{{ $age ?? 'age'}}</td>
                                    <td style="text-align: left">Talla:</td>
                                    <td style="text-align: left">{{ $size ?? 'size'}}</td>
                                </tr>
                                <tr valign="top">
                                    <td style="text-align: left">Cuando:</td>
                                    <td style="text-align: left">{{ $date ?? 'date'}}</td>
                                    <td style="text-align: left">Donde:</td>
                                    <td style="text-align: left">{{ $address ?? '$address' }}</td>
                                </tr>
                                <tr valign="top">
                                    <td style="text-align: left">Experiencia:</td>
                                    <td style="text-align: left">{{ $workout ?? '$workout' }}</td>
                                    <td style="text-align: left">Coaches:</td>
                                    <td style="text-align: left">{{ $coathc ?? '$coatch' }}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding-left: 0px; padding-right: 0px; padding-top:20px;">
                           <img src="http://tiempocreativo.com.mx/assets/img/FONDO_HOME.jpg" width="600" alt="" style="width:100%;height:auto;display:block;border:none;text-decoration:none;color:#363636;">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding:30px;line-height:28px;text-align: justify;border-bottom:1px solid #f0f0f5;border-color:rgba(201,201,207,.35); color: #ffffff;">
                            Team Faster eres tú, ella, tu amigo, tu pareja o el vecino que encuentras en el elevador a las 6 am en el elevador para ir a entrenar… somos todos aquellos que nos gusta mostrar la mejor versión de nosotros mismos
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding:30px;text-align:center;font-size:12px;background-color:#404040;color:#cccccc;">
                            <p style="margin:0 0 8px 0;"><a href="http://www.facebook.com/" style="text-decoration:none;"><img src="https://assets.codepen.io/210284/facebook_1.png" width="40" height="40" alt="f" style="display:inline-block;color:#cccccc;"></a> <a href="http://www.twitter.com/" style="text-decoration:none;"><img src="https://assets.codepen.io/210284/twitter_1.png" width="40" height="40" alt="t" style="display:inline-block;color:#cccccc;"></a></p>
                            <p style="margin:0;font-size:14px;line-height:20px;">&reg; @2022 Puma. Todos los derechos reservados<br></p>
                        </td>
                    </tr>
                </table>
                <!--[if mso]>
                </td>
                </tr>
                </table>
                <![endif]-->
            </td>
        </tr>
    </table>
</div>
</body>
</html>
