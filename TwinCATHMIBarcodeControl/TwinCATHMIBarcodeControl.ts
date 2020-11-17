/*
 * Generated 11/16/2020 3:54:05 PM
 * Copyright (C) 2020
 */

///<reference path="../node_modules/jsbarcode/jsbarcode.d.ts" />

module TcHmi {
    export module Controls {
        export module TwinCATHMIBarcode {
            export class TwinCATHMIBarcodeControl extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */

                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;
                protected __barcodeElement!: HTMLImageElement;
                protected __barcodeType?: string;
                protected __barcodeValue?: string;
                protected __barcodeOptions?: JsBarcode.BaseOptions;

				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TwinCATHMIBarcode_TwinCATHMIBarcodeControl-Template');
                    this.__barcodeElement = this.__element.find("img")[0];
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                    this.drawBarcode();
               }

                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();
                    this.drawBarcode();
                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }

                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * @description Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                /**
                * Sets the value of Barcode Value
                * @param valueNew The new value for Barcode Value
                */
                protected __setBarcodeValue(valueNew: string | undefined) {
                    this.__barcodeValue = valueNew;
                    this.__processBarcodeValue();
                }

                /**
                 * Gets the value of Barcode Value
                 * @returns The current value of Barcode Value
                 */
                protected __getBarcodeValue(): string | undefined {
                    return this.__barcodeValue;
                }

                /**
                 * Processes the Barcode Value.
                 * @function
                 */
                protected __processBarcodeValue(): void {
                    this.drawBarcode();
                }

                /**
                * Sets the value of Barcode Type
                * @param valueNew The new value for Barcode Type
                */
                protected __setBarcodeType(valueNew: string | "CODE128") {
                    this.__barcodeType = valueNew;
                    this.__processBarcodeType();
                }

                /**
                 * Gets the value of Barcode Type
                 * @returns The current value of Barcode Type
                 */
                protected __getBarcodeType(): string | undefined {
                    return this.__barcodeType;
                }

                /**
                 * Processes the Barcode Type.
                 * @function
                 */
                protected __processBarcodeType(): void {
                    this.drawBarcode();
                }

                /**
                 * Handles the drawing process of the barcode.
                 * @function
                 */
                public drawBarcode(): void {
                    JsBarcode(this.__barcodeElement, this.__barcodeValue || "1234", { format: this.__barcodeType });
                }

            }
        }

        registerEx('TwinCATHMIBarcodeControl', 'TcHmi.Controls.TwinCAT_HMI_Barcode', TwinCATHMIBarcode.TwinCATHMIBarcodeControl);
    }
}