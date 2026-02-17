/*:
 * @target MZ
 * @plugindesc Oculta los comandos Atacar y Defender en batalla.
 * @author Luis Villegas
 */

(() => {
    // Borramos el comando Atacar
    Window_ActorCommand.prototype.addAttackCommand = function() {
        // No hace nada, por lo tanto el botón no aparece
    };

    // Borramos el comando Defender (Guardar)
    Window_ActorCommand.prototype.addGuardCommand = function() {
        // No hace nada
    };
})();