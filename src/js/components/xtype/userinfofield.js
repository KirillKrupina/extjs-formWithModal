Ext.ns('App.Components');

App.Components.UserInfoField = Ext.extend(Ext.form.TriggerField, {
    width: 200,
    triggerConfig: {
        tag: 'span', cls: 'x-form-twin-triggers', cn: [
            {tag: "img", src: Ext.BLANK_IMAGE_URL, alt: "", cls: "x-form-trigger myTrigger1", index: 1},
            {tag: "img", src: Ext.BLANK_IMAGE_URL, alt: "", cls: "x-form-trigger myTrigger2", index: 2}
        ]
    },
    initEvents: function () {
        this.on('afterrender', this.onRenderField, this);
        App.Components.UserInfoField.superclass.initEvents.apply(this, arguments);
    },
    onRenderField: function () {
        // console.log(jsonString);
        // var jsonObj = JSON.parse(jsonString);
        // console.log('jsonObj', jsonObj);
        // this.setValue(jsonObj.name + ' ' + jsonObj.surname + ' ' + jsonObj.middlename + ' ' + jsonObj.birthday + ' ' + jsonObj.sex);
        this.setValue(jsonString);
    },
    onTriggerClick: function (event) {
        console.log(event.target.className);
        var className = ' ' + event.target.className + ' ';
        if (className.indexOf(' myTrigger1 ') >= 0) {
            this.createUserWindow();
        } else if (className.indexOf(' myTrigger2 ') >= 0) {
            this.setValue('');
        }
    },

    createUserWindow: function () {
        var fieldValue = this.getValue();
        var fieldValueObj = JSON.parse(fieldValue);
        var userWin = Ext.create({
            xtype: 'window',
            modal: true,
            width: 300,
            items: [
                {
                    xtype: 'form',
                    itemId: 'myForm',
                    layout: 'form',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Name',
                            name: 'name',
                            listeners: {
                                afterrender: function () {
                                    this.setValue(fieldValueObj.name)
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Surname',
                            name: 'surname',
                            listeners: {
                                afterrender: function () {
                                    this.setValue(fieldValueObj.surname)
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Middle name',
                            name: 'middlename',
                            listeners: {
                                afterrender: function () {
                                    this.setValue(fieldValueObj.middlename)
                                }
                            }
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Birthday',
                            name: 'birthday',
                            format: 'd.m.Y',
                            listeners: {
                                afterrender: function () {
                                    this.setValue(fieldValueObj.birthday)
                                }
                            }
                        },
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'Sex',
                            name: 'cb-group',
                            items: [
                                {boxLabel: 'M', name: 'cb-group', inputValue: 'M'},
                                {boxLabel: 'F', name: 'cb-group', inputValue: 'F'}
                            ],
                            listeners: {
                                /**
                                 *
                                 * @type Ext.form.RadioGroup fieldSex
                                 */
                                afterrender: function (fieldSex) {
                                    if (fieldValueObj.sex === 'M') {
                                        fieldSex.setValue('M');
                                    } else if (fieldValueObj.sex === 'F') {
                                        fieldSex.setValue('F');
                                    } else {
                                        return false;
                                    }
                                }
                            }

                        },
                    ],
                    buttons: [
                        {
                            xtype: 'button',
                            text: 'Submit',
                            scope: this,
                            handler: function () {
                                var formPanel = userWin.getComponent('myForm');
                                var values = formPanel.getForm().getValues();
                                console.log(values);
                                userWin.close();

                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Close',
                            scope: this,
                            handler: function () {
                                userWin.close();
                            }
                        }

                    ]
                }
            ]
        }).show();
    },

});

Ext.reg('userinfofield', App.Components.UserInfoField);
