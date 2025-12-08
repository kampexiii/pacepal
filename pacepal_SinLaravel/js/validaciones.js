// Archivo: validaciones.js
// Aquí centralizo todas las funciones de validación del módulo Cliente (DWEC).
// Implementación realizada siguiendo las pautas indicadas.

// ======================================================
// 1. Validación de Nombre y Apellidos (máx. dos palabras)
// ======================================================
//
// Reglas:
// - Mínimo 2 caracteres por palabra.
// - Máximo 2 palabras (nombre + apellido).
// - Solo letras, espacios y acentos.
// - Extensión total entre 2 y 50 caracteres.
//
function esNombreValido(nombre) {
    if (!nombre || typeof nombre !== "string") return false;

    const limpio = nombre.trim();
    if (limpio.length < 2 || limpio.length > 50) return false;

    const palabras = limpio.split(/\s+/);
    if (palabras.length > 2) return false;

    const regexNombre = /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ]{2,}$/;

    return palabras.every((p) => regexNombre.test(p));
}



// ==========================
// 2. Validación de Email
// ==========================
//
// Regex robusta estándar RFC 5322 simplificada.
// Asegura:
// - No espacios
// - Tiene @ y dominio
// - Extensión mínima requerida
//
function esEmailValido(email) {
    if (!email || typeof email !== "string") return false;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email.trim());
}



// ==========================
// 3. Validación de Password
// ==========================
//
// Reglas:
// - Mínimo 8 caracteres
// - Al menos una minúscula
// - Al menos una mayúscula
// - Al menos un número
// - Al menos un símbolo
//
function esPasswordValida(password) {
    if (!password || typeof password !== "string") return false;

    const regexPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    return regexPassword.test(password);
}



// ===========================================
// 4. Confirmación de Contraseñas
// ===========================================
function coincidenPasswords(password, confirmPassword) {
    return password === confirmPassword;
}



// ===========================================
// 5. Validación de Tarjeta
// ===========================================
//
// Implementación sencilla con regex:
// - 16 dígitos
// - Permite espacios entre bloques
// *Si quisieras implementar Luhn, puedo añadirlo.
//
function esTarjetaValida(numeroTarjeta) {
    if (!numeroTarjeta || typeof numeroTarjeta !== "string") return false;

    const limpio = numeroTarjeta.replace(/\s+/g, "");

    const regexTarjeta = /^\d{16}$/;
    return regexTarjeta.test(limpio);
}



// ============================================================
// 6. Control de visualización de tarjeta según Dirección y País
// ============================================================
//
// Criterios orientativos:
// - Se muestra SOLO si ambos campos están presentes.
// - País debe ser España (ES) o México (MX) por ejemplo.
// - Esto se puede ajustar si lo deseas.
//
function debeMostrarTarjeta(direccion, pais) {
    if (!direccion || !direccion.trim()) return false;
    if (!pais || !pais.trim()) return false;

    const paisesPermitidos = ["ES", "MX", "US"];

    return paisesPermitidos.includes(pais);
}