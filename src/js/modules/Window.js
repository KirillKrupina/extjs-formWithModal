Ext.ns('App.Modules.Window');

App.Modules.Window = Ext.extend(Ext.Window, {
    layout: 'fit',
    width: 400,
    height: 400,
    constructor: function (cfg) {

        this.createFormPanel();
        cfg.items = [
            this.formPanel
        ];
        App.Modules.Window.superclass.constructor.call(this, cfg);
    },

    /**
     * @type Ext.form.FormPanel
     */
    formPanel: undefined,

    createFormPanel: function () {
        var formPanel = Ext.create({
            xtype: 'form',
            padding: 10,
            items: [
                {
                    xtype: 'userinfofield',
                    fieldLabel: 'userinfofield1',
                    name: 'userinfofield1',

                },
                {
                    xtype: 'userinfofield',
                    fieldLabel: 'userinfofield2',
                    name: 'userinfofield2',

                },

            ]
        });
        this.formPanel = formPanel;
    }


});
