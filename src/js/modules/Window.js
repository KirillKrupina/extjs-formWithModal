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
                {
                    xtype: 'container',
                    layout: 'hbox',
                    border: false,
                    items: [
                        {
                            xtype: 'label',
                            html: 'textfield:',
                            width: 105,
                            style : 'font-size: 12px;'

                        },
                        {
                            xtype: 'textfield',
                            name: 'textfield',
                        },
                        {
                            xtype: 'button',
                            text: 'get',
                            handler: function () {
                                var textfieldValue = formPanel.getForm().findField('userinfofield1').getValue();
                                formPanel.getForm().findField('textfield').setValue(textfieldValue);
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'set',
                            handler: function () {
                                var textfieldValue = formPanel.getForm().findField('textfield').getValue();
                                formPanel.getForm().findField('userinfofield1').setValue(textfieldValue);
                            }
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'buttonReset',
                    handler: function () {
                        formPanel.getForm().reset();
                    }
                },
                {
                    text: 'buttonSubmit',
                    handler: function () {
                        var formPanelValues = formPanel.getForm().getValues();
                        console.log(formPanelValues);
                    }
                },
                {
                    text: 'buttonClose',
                    scope: this,
                    handler: function () {
                        this.close();
                    }
                }
            ]
        });
        this.formPanel = formPanel;
    }


});
