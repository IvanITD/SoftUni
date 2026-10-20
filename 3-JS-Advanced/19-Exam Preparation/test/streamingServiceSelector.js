const { streamingServiceSelector } = require('../03-Streaming Service Selector/streamingServiceSelector');
const { expect } = require('chai');

describe('streamingServiceSelector', () => {
    describe('selectingContent', () => {
        it('returns the watch message for a Movie and a TV Show', () => {
            expect(streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Action'))
                .to.equal('You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!');
            expect(streamingServiceSelector.selectingContent('TV Show', 'HBO', 'Sci-Fi'))
                .to.equal('You can watch this Sci-Fi TV Show on HBO. Enjoy your Sci-Fi-filled experience!');
        });

        it('throws the genre error before it checks the type', () => {
            expect(() => streamingServiceSelector.selectingContent('Series', 'Netflix', 'Fantasy'))
                .to.throw(Error, 'We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.');
            expect(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', 'action'))
                .to.throw(Error, 'We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.');
        });

        it('throws when the genre is valid but the type is not', () => {
            expect(() => streamingServiceSelector.selectingContent('Series', 'Netflix', 'Action'))
                .to.throw(Error, "We currently only support 'Movie' or 'TV Show' types.");
            expect(() => streamingServiceSelector.selectingContent('movie', 'Netflix', 'Comedy'))
                .to.throw(Error, "We currently only support 'Movie' or 'TV Show' types.");
        });
    });

    describe('availablePlatforms', () => {
        it('returns every platform except the one at the selected index', () => {
            const platforms = ['Netflix', 'HBO', 'Disney+'];

            expect(streamingServiceSelector.availablePlatforms(platforms, 0))
                .to.equal('Other available platforms are: HBO, Disney+.');
            expect(streamingServiceSelector.availablePlatforms(platforms, 1))
                .to.equal('Other available platforms are: Netflix, Disney+.');
            expect(streamingServiceSelector.availablePlatforms(platforms, 2))
                .to.equal('Other available platforms are: Netflix, HBO.');
            expect(platforms).to.deep.equal(['Netflix', 'HBO', 'Disney+']);
        });

        it('throws for a non-array, a decimal index, or an index outside the array', () => {
            expect(() => streamingServiceSelector.availablePlatforms('Netflix', 0))
                .to.throw(Error, 'Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['Netflix'], 1.5))
                .to.throw(Error, 'Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['Netflix'], -1))
                .to.throw(Error, 'Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['Netflix'], 1))
                .to.throw(Error, 'Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['Netflix'], '0'))
                .to.throw(Error, 'Invalid platform selection.');
        });
    });

    describe('contentRating', () => {
        it('returns the highly rated message for 7 and above, with hours to two decimals', () => {
            expect(streamingServiceSelector.contentRating(90, 8))
                .to.equal('This content is highly rated (8/10) and has a runtime of 1.50 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(90, 7))
                .to.equal('This content is highly rated (7/10) and has a runtime of 1.50 hours. Enjoy your watch!');
            expect(streamingServiceSelector.contentRating(100, 10))
                .to.equal('This content is highly rated (10/10) and has a runtime of 1.67 hours. Enjoy your watch!');
        });

        it('returns the lower rating message below 7, including a rating of 0', () => {
            expect(streamingServiceSelector.contentRating(100, 6))
                .to.equal('This content has a lower rating (6/10) and runs for 1.67 hours. You might want to check reviews first.');
            expect(streamingServiceSelector.contentRating(30, 0))
                .to.equal('This content has a lower rating (0/10) and runs for 0.50 hours. You might want to check reviews first.');
        });

        it('throws when the runtime is not positive or the rating is outside 0 to 10', () => {
            expect(() => streamingServiceSelector.contentRating(0, 8))
                .to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(-10, 8))
                .to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating('90', 8))
                .to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(90, -1))
                .to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(90, 11))
                .to.throw(Error, 'Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(90, '8'))
                .to.throw(Error, 'Invalid runtime or rating.');
        });
    });
});