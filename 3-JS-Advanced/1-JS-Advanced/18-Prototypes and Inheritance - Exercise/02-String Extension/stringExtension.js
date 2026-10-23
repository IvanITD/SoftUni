(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        const text = this.toString();

        if (!text.includes(' ')) {
            return text.slice(0, n - 3) + '...';
        }

        const words = text.split(' ');
        let result = words[0];

        if (result.length + 3 > n) {
            return text.slice(0, n - 3) + '...';
        }

        for (let i = 1; i < words.length; i++) {
            const next = `${result} ${words[i]}`;

            if (next.length + 3 > n) {
                break;
            }

            result = next;
        }

        return result + '...';
    };

    String.format = function (string, ...params) {
        return string.replace(/\{(\d+)\}/g, (match, index) => {
            if (params[index] !== undefined) {
                return params[index];
            }

            return match;
        });
    };
})();