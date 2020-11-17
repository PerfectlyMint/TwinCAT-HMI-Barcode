declare module TcHmi {
    module Controls {
        module TwinCATHMIBarcode {
            class TwinCATHMIBarcodeControl extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __barcodeElement: HTMLImageElement;
                protected __barcodeType?: string;
                protected __barcodeValue?: string;
                protected __barcodeOptions?: JsBarcode.BaseOptions;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                * Sets the value of Barcode Value
                * @param valueNew The new value for Barcode Value
                */
                protected __setBarcodeValue(valueNew: string | undefined): void;
                /**
                 * Gets the value of Barcode Value
                 * @returns The current value of Barcode Value
                 */
                protected __getBarcodeValue(): string | undefined;
                /**
                 * Processes the Barcode Value.
                 * @function
                 */
                protected __processBarcodeValue(): void;
                /**
                * Sets the value of Barcode Type
                * @param valueNew The new value for Barcode Type
                */
                protected __setBarcodeType(valueNew: string | "CODE128"): void;
                /**
                 * Gets the value of Barcode Type
                 * @returns The current value of Barcode Type
                 */
                protected __getBarcodeType(): string | undefined;
                /**
                 * Processes the Barcode Type.
                 * @function
                 */
                protected __processBarcodeType(): void;
                /**
                 * Handles the drawing process of the barcode.
                 * @function
                 */
                drawBarcode(): void;
            }
        }
    }
}
