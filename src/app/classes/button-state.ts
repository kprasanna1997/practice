export class ButtonState {
    constructor(public disabled?: boolean, public spinner?: boolean) {
        this.disabled = false;
        this.spinner = false;
    }

    disablesSpinner() {
        this.disabled = false;
        this.spinner = false;
    }

    enableSpinner() {
        this.disabled = true;
        this.spinner = true;
    }
}
