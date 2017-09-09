import debounce from 'debounce';

class ScrollBottom {
    constructor(callback) {
        this.callback = callback;
        this._register();
    }

    _scrollCallback() {
        let body = document.getElementsByTagName('body')[0];
        if (body.clientHeight - window.scrollY + 20 >= window.innerHeight)
        {
            this.callback();
        }
    }

    _register() {
        let debounceScroll = debounce(this._scrollCallback.bind(this), 200);

        window.addEventListener("scroll", (event) => {
            debounceScroll();
        });
    }
}

export default ScrollBottom;