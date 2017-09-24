
const Lang = imports.lang;
const St = imports.gi.St;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;

const MyExtension = imports.misc.extensionUtils.getCurrentExtension();
const ExtensionManager = MyExtension.imports.extensionManager;

var applet;

function init() {
    applet = ExtensionManager.main(MyExtension.metadata, St.Side.TOP, Main.panel.actor.height, 1);
}

function enable() {
    Mainloop.idle_add(Lang.bind(this, function () {
        applet.on_applet_added_to_panel(false);
        applet.setOrientation(St.Side.TOP);
        return false;
    }));
}

function disable() {
    applet.on_applet_removed_from_panel();
}
